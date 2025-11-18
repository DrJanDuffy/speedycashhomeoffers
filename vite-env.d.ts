/// <reference types="vite/client" />

// Vite-specific type declarations
declare module '*.css?url' {
  const src: string;
  export default src;
}

declare module '*.svg?url' {
  const src: string;
  export default src;
}

// ImportMeta.env type extensions
// Note: Vite provides DEV, PROD, SSR, MODE by default
// Only add custom env variables here
interface ImportMetaEnv {
  // Add your custom env variables here
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

