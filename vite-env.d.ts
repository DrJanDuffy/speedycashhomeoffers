/// <reference types="vite/client" />

// Vite-specific type declarations
declare module "*.css?url" {
  const src: string;
  export default src;
}

declare module "*.svg?url" {
  const src: string;
  export default src;
}

// ImportMeta.env type extensions
// Note: Vite provides DEV, PROD, SSR, MODE by default
// Only add custom env variables here
// Vite already defines ImportMetaEnv, so we don't need to redeclare it
// If you need custom env variables, uncomment and add them:
// interface ImportMetaEnv {
//   readonly VITE_API_URL?: string;
// }
