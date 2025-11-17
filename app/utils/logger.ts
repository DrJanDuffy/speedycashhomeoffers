/**
 * Logger utility to conditionally log errors in development only
 * Prevents console errors from appearing in production Lighthouse audits
 */

const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
  error: (message: string, ...args: unknown[]) => {
    if (isDevelopment) {
      console.error(message, ...args);
    }
  },
  warn: (message: string, ...args: unknown[]) => {
    if (isDevelopment) {
      console.warn(message, ...args);
    }
  },
  log: (message: string, ...args: unknown[]) => {
    if (isDevelopment) {
      console.log(message, ...args);
    }
  },
};

