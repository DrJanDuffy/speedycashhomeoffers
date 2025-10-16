import { useState, useEffect } from "react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
      <div className="px-4 py-3">
        <div className="flex space-x-3">
          <a 
            href="tel:(702) 500-1981"
            className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_click', {
                  'event_category': 'engagement',
                  'event_label': 'mobile_footer_phone',
                  'value': 1
                });
              }
            }}
          >
            📞 Call Now
          </a>
          <a 
            href="/contact"
            className="flex-1 bg-emerald-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  'event_category': 'engagement',
                  'event_label': 'mobile_footer_quote',
                  'page_location': window.location.href
                });
              }
            }}
          >
            💰 Get Quote
          </a>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Free, no-obligation cash offer in 24 hours
        </p>
      </div>
    </div>
  );
}
