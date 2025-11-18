import { useEffect, useState } from "react";

interface RealScoutOfficeListingsProps {
  agentId?: string;
  sortOrder?: "NEWEST" | "OLDEST" | "PRICE_HIGH_TO_LOW" | "PRICE_LOW_TO_HIGH";
  listingStatus?: "For Sale" | "Sold" | "Pending";
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
}

export default function RealScoutOfficeListings({
  agentId = "QWdlbnQtMjI1MDUw",
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR,OTHER,MOBILE",
  priceMin = "200000",
  priceMax = "400000",
  className = "",
}: RealScoutOfficeListingsProps) {
  const [isClient, setIsClient] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);
  const [componentError, setComponentError] = useState(false);

  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);

    // Set up global error handler to catch RealScout web component errors
    const handleError = (event: ErrorEvent) => {
      // Check if error is related to RealScout
      const errorMessage = event.message || "";
      const errorSource = event.filename || "";

      if (
        errorMessage.toLowerCase().includes("realscout") ||
        errorSource.includes("realscout") ||
        (errorMessage.includes("JSON") && errorMessage.includes("parse"))
      ) {
        // Prevent error from bubbling up to main error boundary
        event.preventDefault();
        setComponentError(true);
        setScriptError(true);
        return false;
      }
    };

    // Set up unhandled promise rejection handler
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString() || "";
      if (
        reason.toLowerCase().includes("realscout") ||
        (reason.includes("JSON") && reason.includes("parse"))
      ) {
        event.preventDefault();
        setComponentError(true);
        setScriptError(true);
      }
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    // Cleanup
    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  useEffect(() => {
    // Skip if we already have an error
    if (componentError || scriptError) {
      return;
    }

    // Check if script is already loaded globally (from root.tsx)
    const existingScript = document.querySelector('script[src*="realscout-web-components"]');

    let intervalId: ReturnType<typeof setInterval> | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let loadHandler: (() => void) | null = null;

    // Wait for web component to be fully defined before rendering
    const checkComponent = () => {
      try {
        // Check if custom element is defined
        if (customElements.get("realscout-office-listings")) {
          setIsReady(true);
          setScriptError(false);
          return;
        }

        // If not defined yet, wait a bit longer (up to 10 seconds)
        let attempts = 0;
        const maxAttempts = 100; // 10 seconds max wait
        intervalId = setInterval(() => {
          attempts++;
          if (customElements.get("realscout-office-listings")) {
            if (intervalId) clearInterval(intervalId);
            setIsReady(true);
            setScriptError(false);
          } else if (attempts >= maxAttempts) {
            if (intervalId) clearInterval(intervalId);
            // Component didn't load within timeout
            setScriptError(true);
          }
        }, 100);
      } catch (error) {
        // Non-critical error
        if (import.meta.env.DEV) {
          console.warn("RealScout component check error:", error);
        }
        setScriptError(true);
      }
    };

    // If script exists, check for component readiness
    if (existingScript) {
      // Wait for page to be fully loaded before checking
      if (document.readyState === "complete") {
        timeoutId = setTimeout(checkComponent, 1000);
      } else {
        loadHandler = () => {
          timeoutId = setTimeout(checkComponent, 1000);
        };
        window.addEventListener("load", loadHandler);
      }
    } else {
      // Script doesn't exist (should not happen if loaded in root.tsx)
      setScriptError(true);
    }

    // Cleanup function
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
      if (loadHandler) {
        window.removeEventListener("load", loadHandler);
      }
    };
  }, [componentError, scriptError]);

  // Don't render anything on server side
  if (!isClient) {
    return null;
  }

  // Show loading state while waiting for component to be ready
  if (!isReady && !scriptError && !componentError) {
    return (
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  // If script failed to load or component errored, show fallback instead of breaking the page
  if (scriptError || componentError) {
    return (
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Listings</h3>
          <p className="text-gray-600 mb-4">
            Featured listings are temporarily unavailable. Please contact us to view available
            properties.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us for Listings
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <style>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>
      <realscout-office-listings
        agent-encoded-id={agentId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin}
        price-max={priceMax}
      ></realscout-office-listings>
    </div>
  );
}
