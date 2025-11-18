/**
 * Logger utility to conditionally log errors in development only
 * Prevents console errors from appearing in production Lighthouse audits
 * Uses import.meta.env.DEV for Vite/React Router v7 compatibility
 */

export const logger = {
  error: (message: string, ...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.error(message, ...args);
    }
  },
  warn: (message: string, ...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.warn(message, ...args);
    }
  },
  log: (message: string, ...args: unknown[]) => {
    if (import.meta.env.DEV) {
      console.log(message, ...args);
    }
  },
};

