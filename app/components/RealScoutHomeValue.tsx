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
    // Load RealScout script asynchronously after page load to improve initial render
    const loadRealScout = () => {
      try {
        // Check if script already exists
        if (document.querySelector('script[src*="realscout-web-components"]')) {
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        script.defer = true;
        
        // Add error handling for script loading
        script.onerror = () => {
          // Only log in development to avoid console errors in production
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
        // Only log in development to avoid console errors in production
        if (process.env.NODE_ENV === 'development') {
          console.warn('RealScout script loading error:', error);
        }
        setScriptError(true);
      }
    };
    
    // Defer loading until after initial render
    try {
      if (document.readyState === 'complete') {
        setTimeout(loadRealScout, 100);
      } else {
        window.addEventListener('load', () => {
          setTimeout(loadRealScout, 100);
        });
      }
    } catch (error) {
      // Only log in development to avoid console errors in production
      if (process.env.NODE_ENV === 'development') {
        console.warn('RealScout initialization error:', error);
      }
      setScriptError(true);
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
      <realscout-home-value agent-encoded-id={agentId}></realscout-home-value>
    </div>
  );
}
