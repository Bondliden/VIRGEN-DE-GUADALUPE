/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_LEADS_ENDPOINT?: string;
  readonly VITE_WEB3FORMS_KEY?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_CALENDLY_URL?: string;
  readonly VITE_INSTAGRAM_HANDLE?: string;
  readonly VITE_YOUTUBE_HANDLE?: string;
  readonly VITE_NONPROFIT_NAME?: string;
  readonly VITE_NONPROFIT_URL?: string;
  readonly VITE_DONATE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
