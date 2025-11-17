import { useEffect } from "react";

interface RealScoutSearchProps {
  agentId?: string;
  className?: string;
}

export default function RealScoutSearch({ 
  agentId = "QWdlbnQtMjI1MDUw",
  className = "" 
}: RealScoutSearchProps) {
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
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 100% !important;
        }
      `}</style>
      <realscout-advanced-search agent-encoded-id={agentId}></realscout-advanced-search>
    </div>
  );
}

