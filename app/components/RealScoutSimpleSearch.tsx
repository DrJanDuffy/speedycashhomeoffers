import { useEffect } from "react";

interface RealScoutSimpleSearchProps {
  agentId?: string;
  className?: string;
}

export default function RealScoutSimpleSearch({ 
  agentId = "QWdlbnQtMjI1MDUw",
  className = "" 
}: RealScoutSimpleSearchProps) {
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
