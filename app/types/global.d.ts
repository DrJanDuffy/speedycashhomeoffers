/// <reference types="react" />

// Window interface extensions for analytics
declare global {
  interface Window {
    trackCTAClick?: (label: string, url: string) => void;
    trackPhoneClick?: (phoneNumber: string, url: string) => void;
    trackFormSubmit?: (formName: string, url: string) => void;
    gtag?: (...args: unknown[]) => void;
  }

  // RealScout custom web components
  // Using Record<string, string | undefined> to allow any attribute
  namespace JSX {
    interface IntrinsicElements {
      'realscout-home-value': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, string | undefined>;
      'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, string | undefined>;
      'realscout-advanced-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, string | undefined>;
      'realscout-simple-search': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Record<string, string | undefined>;
    }
  }
}

export {};
