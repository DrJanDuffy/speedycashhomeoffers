import { useEffect } from "react";

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
  useEffect(() => {
    // Load RealScout script asynchronously after page load to improve initial render
    const loadRealScout = () => {
      if (!document.querySelector('script[src*="realscout-web-components"]')) {
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    };
    
    // Defer loading until after initial render
    if (document.readyState === 'complete') {
      setTimeout(loadRealScout, 100);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadRealScout, 100);
      });
    }
  }, []);

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
