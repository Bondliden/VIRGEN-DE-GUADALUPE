/* ─────────────────────────────────────────────
   Site server.

   Serves the built site AND the /api/chat route on one port. Railway does not
   execute serverless api/ functions the way Vercel does, so this process is
   what stands in for that adapter. It doubles as the local demo server.

   Usage:  npm run build   (once)
           npm run demo     ->  http://localhost:5002
   ───────────────────────────────────────────── */

import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.PORT || process.env.DEMO_PORT || 5002);
const DIST = fileURLToPath(new URL("../dist/", import.meta.url));

/* Minimal .env loader so the key does not have to be exported by hand. */
function loadEnv() {
  const path = fileURLToPath(new URL("../.env", import.meta.url));
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    const key = trimmed.slice(0, eq).trim();
    if (!(key in process.env)) process.env[key] = trimmed.slice(eq + 1).trim();
  }
}

/* The core reads process.env at module-load time, so the .env must be loaded
   FIRST. That is why this is a dynamic import and not a top-of-file import. */
loadEnv();
const { runChat, sanitise } = await import("../api/_chat-core.mjs");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function sendJson(res, code, body) {
  res.writeHead(code, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === "/api/chat") {
    if (req.method !== "POST") return sendJson(res, 405, { error: "method_not_allowed" });

    const key = process.env.GLM_API_KEY;
    if (!key) {
      return sendJson(res, 503, {
        error: "chat_not_configured",
        message: "El asistente no está configurado todavía.",
      });
    }

    let raw = "";
    for await (const chunk of req) {
      raw += chunk;
      if (raw.length > 100_000) {
        req.destroy();
        return;
      }
    }

    let body;
    try {
      body = JSON.parse(raw || "{}");
    } catch {
      return sendJson(res, 400, { error: "bad_json" });
    }

    const messages = sanitise(body.messages ?? []);
    if (messages.length === 0) return sendJson(res, 400, { error: "empty_conversation" });

    const started = Date.now();
    const outcome = await runChat(messages, key);
    const ms = Date.now() - started;

    if (outcome.ok) {
      console.log(`  chat ok    ${ms} ms  ${outcome.usage?.total_tokens ?? "?"} tok`);
      return sendJson(res, 200, { reply: outcome.reply });
    }

    console.error(`  chat falla ${ms} ms  ${outcome.kind}`, outcome.detail ?? "");
    return sendJson(res, 502, { error: outcome.kind });
  }

  const path = url.pathname === "/" ? "/index.html" : url.pathname;
  const file = normalize(join(DIST, path));
  if (!file.startsWith(DIST)) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  try {
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": MIME[extname(file).toLowerCase()] || "application/octet-stream",
    });
    res.end(data);
  } catch {
    try {
      const index = await readFile(join(DIST, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(index);
    } catch {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Ejecuta primero: npm run build");
    }
  }
});

server.listen(PORT, () => {
  console.log("");
  console.log(`  Sitio      http://localhost:${PORT}/`);
  console.log(
    `  Modelo     ${process.env.GLM_MODEL || "glm-5.3-flash"} (razonamiento: ${
      process.env.GLM_REASONING_EFFORT || "low"
    })`
  );
  console.log(
    `  Clave GLM  ${process.env.GLM_API_KEY ? "presente" : "AUSENTE — el chat devolvera 503"}`
  );
  console.log("");
});
