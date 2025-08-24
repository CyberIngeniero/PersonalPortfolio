/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BREVO_API_URL: string
  readonly VITE_BREVO_API_KEY: string
  readonly VITE_GITHUB_USERNAME: string
  readonly VITE_GITHUB_TOKEN: string
  readonly VITE_SITE_URL: string
  readonly VITE_RESUME_URL: string
  readonly VITE_CALENDAR_URL: string
  readonly VITE_GA_TRACKING_ID: string
  readonly VITE_HOTJAR_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
