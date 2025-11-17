import { useEffect, useState } from "react";

interface RealScoutSimpleSearchProps {
  agentId?: string;
  className?: string;
}

export default function RealScoutSimpleSearch({ 
  agentId = "QWdlbnQtMjI1MDUw",
  className = "" 
}: RealScoutSimpleSearchProps) {
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Search</h3>
          <p className="text-gray-600 mb-4">Search functionality is temporarily unavailable.</p>
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
