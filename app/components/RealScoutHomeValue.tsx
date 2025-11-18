import { useEffect, useState } from "react";

interface RealScoutHomeValueProps {
  agentId?: string;
  className?: string;
}

export default function RealScoutHomeValue({ 
  agentId = "QWdlbnQtMjI1MDUw",
  className = "" 
}: RealScoutHomeValueProps) {
  const [scriptError, setScriptError] = useState(false);
  const [componentError, setComponentError] = useState(false);

  useEffect(() => {
    // Set up global error handler to catch RealScout web component errors
    const handleError = (event: ErrorEvent) => {
      // Check if error is related to RealScout
      const errorMessage = event.message || '';
      const errorSource = event.filename || '';
      
      if (errorMessage.toLowerCase().includes('realscout') || 
          errorSource.includes('realscout') ||
          errorMessage.includes('JSON') && errorMessage.includes('parse')) {
        // Prevent error from bubbling up to main error boundary
        event.preventDefault();
        setComponentError(true);
        setScriptError(true);
        return false;
      }
    };

    // Set up unhandled promise rejection handler
    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason?.toString() || '';
      if (reason.toLowerCase().includes('realscout') || 
          (reason.includes('JSON') && reason.includes('parse'))) {
        event.preventDefault();
        setComponentError(true);
        setScriptError(true);
      }
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);

    // Cleanup
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
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
    let timeoutId1: ReturnType<typeof setTimeout> | null = null;
    let timeoutId2: ReturnType<typeof setTimeout> | null = null;
    let loadHandler1: (() => void) | null = null;
    let loadHandler2: (() => void) | null = null;
    
    // If script already exists, wait a bit for it to initialize, then check if component is ready
    if (existingScript) {
      // Wait for web component to be defined
      const checkComponent = () => {
        try {
          // Check if custom element is defined
          if (customElements.get('realscout-home-value')) {
            setScriptError(false);
            return;
          }
          // If not defined yet, wait a bit longer (up to 5 seconds)
          let attempts = 0;
          const maxAttempts = 50; // 5 seconds max wait
          intervalId = setInterval(() => {
            attempts++;
            if (customElements.get('realscout-home-value')) {
              if (intervalId) clearInterval(intervalId);
              setScriptError(false);
            } else if (attempts >= maxAttempts) {
              if (intervalId) clearInterval(intervalId);
              // Component didn't load, but don't show error - let it render anyway
              setScriptError(false);
            }
          }, 100);
        } catch (error) {
          // Non-critical error, continue rendering
          if (import.meta.env.DEV) {
            console.warn('RealScout component check error:', error);
          }
          setScriptError(false);
        }
      };
      
      // Wait for page to be fully loaded before checking
      if (document.readyState === 'complete') {
        timeoutId1 = setTimeout(checkComponent, 500);
      } else {
        loadHandler1 = () => {
          timeoutId1 = setTimeout(checkComponent, 500);
        };
        window.addEventListener('load', loadHandler1);
      }
    } else {
      // If script doesn't exist, load it (fallback for pages without global script)
      const loadRealScout = () => {
        try {
          const script = document.createElement('script');
          script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
          script.type = 'module';
          script.async = true;
          script.defer = true;
          
          script.onerror = () => {
            if (import.meta.env.DEV) {
              console.warn('RealScout script failed to load - widget may not display');
            }
            setScriptError(true);
          };

          script.onload = () => {
            setScriptError(false);
          };
          
          document.head.appendChild(script);
        } catch (error) {
          if (import.meta.env.DEV) {
            console.warn('RealScout script loading error:', error);
          }
          setScriptError(true);
        }
      };
      
      // Defer loading until after page load
      try {
        if (document.readyState === 'complete') {
          timeoutId2 = setTimeout(loadRealScout, 1000);
        } else {
          loadHandler2 = () => {
            timeoutId2 = setTimeout(loadRealScout, 1000);
          };
          window.addEventListener('load', loadHandler2);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.warn('RealScout initialization error:', error);
        }
        setScriptError(false); // Don't block page render on error
      }
    }

    // Cleanup function
    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId1) clearTimeout(timeoutId1);
      if (timeoutId2) clearTimeout(timeoutId2);
      if (loadHandler1) {
        window.removeEventListener('load', loadHandler1);
      }
      if (loadHandler2) {
        window.removeEventListener('load', loadHandler2);
      }
    };
  }, [componentError, scriptError]);

  // If script failed to load or component errored, show fallback instead of breaking the page
  if (scriptError || componentError) {
    return (
      <div className={className}>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Home Value Estimate</h3>
          <p className="text-gray-600 mb-4">Value estimate tool is temporarily unavailable. Contact us for a free property evaluation.</p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Property Evaluation
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <style>{`
        realscout-home-value {
          --rs-hvw-background-color: #ffffff;
          --rs-hvw-title-color: #000000;
          --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
          --rs-hvw-primary-button-text-color: #ffffff;
          --rs-hvw-primary-button-color: rgb(35, 93, 137);
          --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
          --rs-hvw-secondary-button-color: #ffffff;
          --rs-hvw-widget-width: auto;
        }
      `}</style>
      {/* Render component - if it fails to load, it won't break the page */}
      <realscout-home-value agent-encoded-id={agentId}></realscout-home-value>
    </div>
  );
}
