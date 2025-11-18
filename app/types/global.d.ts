/// <reference types="react" />

// Window interface extensions for analytics
declare global {
  interface Window {
    trackCTAClick?: (label: string, url: string) => void;
    trackPhoneClick?: (phoneNumber: string, url: string) => void;
    trackFormSubmit?: (formName: string, url: string) => void;
    gtag?: (...args: unknown[]) => void;
  }

}

export {};
