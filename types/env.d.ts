/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly MODE: string
  readonly SSR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
