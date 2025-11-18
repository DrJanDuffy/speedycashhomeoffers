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

  useEffect(() => {
    // Check if script is already loaded globally (from root.tsx)
    const existingScript = document.querySelector('script[src*="realscout-web-components"]');
    
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
          const interval = setInterval(() => {
            attempts++;
            if (customElements.get('realscout-home-value')) {
              clearInterval(interval);
              setScriptError(false);
            } else if (attempts >= maxAttempts) {
              clearInterval(interval);
              // Component didn't load, but don't show error - let it render anyway
              setScriptError(false);
            }
          }, 100);
        } catch (error) {
          // Non-critical error, continue rendering
          if (process.env.NODE_ENV === 'development') {
            console.warn('RealScout component check error:', error);
          }
          setScriptError(false);
        }
      };
      
      // Wait for page to be fully loaded before checking
      if (document.readyState === 'complete') {
        setTimeout(checkComponent, 500);
      } else {
        window.addEventListener('load', () => {
          setTimeout(checkComponent, 500);
        });
      }
      return;
    }
    
    // If script doesn't exist, load it (fallback for pages without global script)
    const loadRealScout = () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        script.defer = true;
        
        script.onerror = () => {
          if (process.env.NODE_ENV === 'development') {
            console.warn('RealScout script failed to load - widget may not display');
          }
          setScriptError(true);
        };

        script.onload = () => {
          setScriptError(false);
        };
        
        document.head.appendChild(script);
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.warn('RealScout script loading error:', error);
        }
        setScriptError(true);
      }
    };
    
    // Defer loading until after page load
    try {
      if (document.readyState === 'complete') {
        setTimeout(loadRealScout, 1000);
      } else {
        window.addEventListener('load', () => {
          setTimeout(loadRealScout, 1000);
        });
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('RealScout initialization error:', error);
      }
      setScriptError(false); // Don't block page render on error
    }
  }, []);

  // If script failed to load, show fallback instead of breaking the page
  if (scriptError) {
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
