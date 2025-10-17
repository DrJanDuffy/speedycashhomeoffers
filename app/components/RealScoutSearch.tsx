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
    // Load RealScout script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
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

