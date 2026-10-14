import { site } from "@/data/links";

/* ─────────────────────────────────────────────
   Altas — dónde acaban los datos que deja el visitante.

   Hasta ahora los formularios solo los mandaban a VITE_LEADS_ENDPOINT, que
   nunca se configuró: el nombre y el correo no llegaban a nadie. Ahora hay
   dos destinos posibles, en este orden:

     1. VITE_WEB3FORMS_KEY — cada alta llega como un correo al buzón con el
        que se pidió la clave en web3forms.com (gratis, sin contraseña). La
        clave es pública por diseño: está pensada para ir en el navegador.
     2. VITE_LEADS_ENDPOINT — un servicio propio que acepte el JSON.

   Sin ninguno de los dos, los formularios lo dicen y ofrecen el correo de
   contacto: nadie cree que se ha apuntado cuando no es así.
   ───────────────────────────────────────────── */

export type LeadSource = "peregrinaciones" | "capitan" | "documental" | "tienda-aviso";

/** Cómo se titula cada alta en el correo que recibe el equipo. */
const subjects: Record<LeadSource, string> = {
  peregrinaciones: "Quiere peregrinar",
  capitan: "Quiere ser capitán de peregrinación",
  documental: "Quiere apoyar el documental",
  "tienda-aviso": "Quiere que le avisen cuando abra la tienda",
};

export const leadsConfigured = Boolean(site.web3formsKey || site.leadsEndpoint);

export async function submitLead(lead: {
  name?: string;
  email: string;
  source: LeadSource;
}): Promise<void> {
  if (site.web3formsKey) {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: site.web3formsKey,
        subject: `Guadalupe 500 Años · ${subjects[lead.source]}`,
        from_name: "Guadalupe 500 Años",
        Origen: subjects[lead.source],
        Nombre: lead.name ?? "",
        email: lead.email,
      }),
    });
    return;
  }

  if (site.leadsEndpoint) {
    await fetch(site.leadsEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    });
  }
}
