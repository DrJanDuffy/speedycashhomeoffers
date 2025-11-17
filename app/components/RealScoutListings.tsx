import { useEffect, useState } from "react";

interface RealScoutListingsProps {
  agentId?: string;
  sortOrder?: "NEWEST" | "OLDEST" | "PRICE_HIGH_TO_LOW" | "PRICE_LOW_TO_HIGH";
  listingStatus?: "For Sale" | "Sold" | "Pending";
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
}

export default function RealScoutListings({ 
  agentId = "QWdlbnQtMjI1MDUw",
  sortOrder = "NEWEST",
  listingStatus = "For Sale",
  propertyTypes = ",SFR",
  priceMin = "300000",
  priceMax = "450000",
  className = "" 
}: RealScoutListingsProps) {
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Listings</h3>
          <p className="text-gray-600 mb-4">Listings are temporarily unavailable. Please contact us directly.</p>
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
