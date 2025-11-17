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
interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'production' | 'test';
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
  readonly MODE: string;
  // Add your custom env variables here
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

