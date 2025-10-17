import { useEffect } from "react";

interface RealScoutHomeValueProps {
  agentId?: string;
  className?: string;
}

export default function RealScoutHomeValue({ 
  agentId = "QWdlbnQtMjI1MDUw",
  className = "" 
}: RealScoutHomeValueProps) {
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
