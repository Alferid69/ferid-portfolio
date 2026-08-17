// Central site configuration.
// Keep all hardcoded site constants here so they can't drift out of sync
// across components.

export const BASE_URL = "https://ferid.me";

export const GITHUB_URL = "https://github.com/alferid69";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/alferid-hassen-b44623317/";

export const EMAIL_ADDRESS = "mrferidhassen@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL_ADDRESS}`;

export const PHONE_NUMBER = "+251912903167";
export const PHONE_URL = `tel:${PHONE_NUMBER}`;

export const RESUME_URL = "/Alferid_Hassen_Resume.pdf";

// Public Web3Forms access key — safe to expose in the browser (Web3Forms is
// designed for client-side submissions). Override via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
export const WEB3FORMS_ACCESS_KEY: string =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "b20f0b25-3a7e-49cf-951a-4a55709568a5";
