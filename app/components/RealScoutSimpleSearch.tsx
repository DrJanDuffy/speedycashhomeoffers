import { useEffect, useState } from "react";

interface RealScoutSimpleSearchProps {
  agentId?: string;
  className?: string;
}

export default function RealScoutSimpleSearch({
  agentId = "QWdlbnQtMjI1MDUw",
  className = ""
}: RealScoutSimpleSearchProps) {
  const [isClient, setIsClient] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [scriptError, setScriptError] = useState(false);

  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);

    // Check if script is already loaded globally (from root.tsx)
    const existingScript = document.querySelector('script[src*="realscout-web-components"]');

    // Wait for web component to be fully defined before rendering
    const checkComponent = () => {
      try {
        // Check if custom element is defined
        if (customElements.get('realscout-simple-search')) {
          setIsReady(true);
          setScriptError(false);
          return;
        }

        // If not defined yet, wait a bit longer (up to 10 seconds)
        let attempts = 0;
        const maxAttempts = 100; // 10 seconds max wait
        const interval = setInterval(() => {
          attempts++;
          if (customElements.get('realscout-simple-search')) {
            clearInterval(interval);
            setIsReady(true);
            setScriptError(false);
          } else if (attempts >= maxAttempts) {
            clearInterval(interval);
            // Component didn't load within timeout
            setScriptError(true);
          }
        }, 100);
      } catch (error) {
        // Non-critical error
        if (import.meta.env.DEV) {
          console.warn('RealScout component check error:', error);
        }
        setScriptError(true);
      }
    };

    // If script exists, check for component readiness
    if (existingScript) {
      // Wait for page to be fully loaded before checking
      if (document.readyState === 'complete') {
        setTimeout(checkComponent, 1000);
      } else {
        window.addEventListener('load', () => {
          setTimeout(checkComponent, 1000);
        });
      }
    } else {
      // Script doesn't exist (should not happen if loaded in root.tsx)
      setScriptError(true);
    }
  }, []);

  // Don't render anything on server side
  if (!isClient) {
    return null;
  }

  // Show loading state while waiting for component to be ready
  if (!isReady && !scriptError) {
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

  // If script failed to load, show fallback instead of breaking the page
  if (scriptError) {
    return (
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Search</h3>
          <p className="text-gray-600 mb-4">Property search is temporarily unavailable. Please contact us to find your perfect property.</p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Contact Us for Property Search
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <style>{`
        realscout-simple-search {
          --rs-ss-font-primary-color: #6a6d72;
          --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
          --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
          --rs-ss-widget-width: 100% !important;
        }
      `}</style>
      <realscout-simple-search agent-encoded-id={agentId}></realscout-simple-search>
    </div>
  );
}
