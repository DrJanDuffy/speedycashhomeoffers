import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import stylesheet from "./app.css?url";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export const links: Route.LinksFunction = () => [
  // Preconnect to font domains early (DNS lookup optimization)
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  // Preconnect to third-party services for faster resource loading
  { rel: "preconnect", href: "https://res.cloudinary.com" },
  { rel: "dns-prefetch", href: "https://em.realscout.com" },
  { rel: "dns-prefetch", href: "https://api.followupboss.com" },
  { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
  { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
  // Preload CSS as style to allow parallel fetching (non-blocking)
  {
    rel: "preload",
    href: stylesheet,
    as: "style",
  },
  // Load Google Fonts asynchronously to prevent render blocking
  // Using media="print" trick: browser loads it with low priority, then switches to "all"
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    media: "print",
  } as any,
  // Note: Main stylesheet will be loaded asynchronously via script below
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Search Console Verification - Add your verification code here */}
        {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}
        <Meta />
        <Links />
        {/* Critical CSS: Minimal above-the-fold styles to prevent FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical above-the-fold styles */
              html,body{background-color:#fff;margin:0;padding:0}
              nav{background-color:#fff;box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);position:sticky;top:0;z-index:50}
              .max-w-7xl{max-width:80rem;margin-left:auto;margin-right:auto}
              .px-4{padding-left:1rem;padding-right:1rem}
              .flex{display:flex}
              .items-center{align-items:center}
              .justify-between{justify-content:space-between}
              .h-16{height:4rem}
              .text-2xl{font-size:1.5rem;line-height:2rem}
              .font-bold{font-weight:700}
              .text-blue-600{color:#2563eb}
            `,
          }}
        />
        {/* Load CSS asynchronously to prevent render blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Load main CSS asynchronously
                var cssLink = document.createElement('link');
                cssLink.rel = 'stylesheet';
                cssLink.href = '${stylesheet}';
                cssLink.media = 'all';
                document.head.appendChild(cssLink);
                
                // Make Google Fonts non-blocking: switch from print to all after load
                var fontLink = document.querySelector('link[href*="fonts.googleapis.com"][media="print"]');
                if (fontLink) {
                  fontLink.onload = function() {
                    this.media = 'all';
                  };
                  // Fallback: switch after a short delay if onload doesn't fire
                  setTimeout(function() {
                    if (fontLink.media === 'print') {
                      fontLink.media = 'all';
                    }
                  }, 100);
                }
              })();
            `,
          }}
        />
        {/* Global Organization Schema for Grokipedia and AI Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.speedycashhomeoffers.com/#organization",
              "name": "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
              "alternateName": "Speedy Cash Home Offers",
              "url": "https://www.speedycashhomeoffers.com",
              "logo": "https://www.speedycashhomeoffers.com/images/logo.png",
              "description": "Las Vegas and Southern California's most trusted cash home buyers. We buy houses for cash with no fees, no repairs needed, and fast closing in 7 days. Specializing in distressed properties, foreclosures, and inherited homes.",
              "foundingDate": "2015",
              "founder": {
                "@type": "Person",
                "@id": "https://www.speedycashhomeoffers.com/#founder",
                "name": "Dr. Janet Duffy",
                "jobTitle": "Founder & CEO",
                "description": "With over 25 years of real estate experience, Dr. Duffy leads our team with expertise and compassion",
                "url": "https://www.speedycashhomeoffers.com/meet-the-team"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2775 Ariel Ocean St",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89156",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-702-500-1981",
                  "contactType": "Customer Service",
                  "areaServed": ["US"],
                  "availableLanguage": ["English"]
                },
                {
                  "@type": "ContactPoint",
                  "email": "DrDuffy@SpeedyCashHomeOffers.com",
                  "contactType": "Customer Service",
                  "areaServed": ["US"],
                  "availableLanguage": ["English"]
                }
              ],
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Las Vegas",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "Nevada"
                  }
                },
                {
                  "@type": "City",
                  "name": "Los Angeles",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "San Diego",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Orange County",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Riverside",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                },
                {
                  "@type": "City",
                  "name": "Inland Empire",
                  "containedInPlace": {
                    "@type": "State",
                    "name": "California"
                  }
                }
              ],
              "sameAs": [
                "https://www.facebook.com/speedycashhomeoffers",
                "https://www.linkedin.com/company/speedycashhomeoffers"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cash Home Buying Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cash Home Buying Service",
                      "description": "We buy houses for cash in Las Vegas and Southern California",
                      "serviceType": "Cash Home Buying",
                      "provider": {
                        "@id": "https://www.speedycashhomeoffers.com/#organization"
                      }
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "award": "A+ Better Business Bureau Rating",
              "knowsAbout": [
                "Cash Home Buying",
                "Real Estate Investment",
                "Distressed Property Sales",
                "Las Vegas Real Estate",
                "Southern California Real Estate",
                "Fast Home Sales",
                "As-Is Property Purchases"
              ]
            })
          }}
        />
        {/* Knowledge Graph - Person Schema for Dr. Janet Duffy (Enhanced for E-E-A-T) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.speedycashhomeoffers.com/#founder",
              "name": "Dr. Janet Duffy",
              "jobTitle": "Founder & CEO",
              "worksFor": {
                "@id": "https://www.speedycashhomeoffers.com/#organization"
              },
              "url": "https://www.speedycashhomeoffers.com/meet-the-team",
              "description": "With over 25 years of real estate experience, Dr. Janet Duffy is the founder and CEO of Speedy Cash Home Offers, specializing in helping homeowners sell their properties quickly for cash.",
              "email": "DrDuffy@SpeedyCashHomeOffers.com",
              "telephone": "+1-702-500-1981",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2775 Ariel Ocean St",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89156",
                "addressCountry": "US"
              },
              "knowsAbout": [
                "Real Estate",
                "Cash Home Buying",
                "Property Investment",
                "Las Vegas Real Estate Market",
                "Southern California Real Estate Market",
                "Distressed Property Sales",
                "Real Estate Transactions"
              ],
              "award": "A+ Better Business Bureau Rating",
              "memberOf": [
                "Las Vegas Chamber of Commerce",
                "Better Business Bureau"
              ],
              "sameAs": [
                "https://www.speedycashhomeoffers.com/about",
                "https://www.speedycashhomeoffers.com/meet-the-team"
              ]
            })
          }}
        />
        {/* Knowledge Graph - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
              "url": "https://www.speedycashhomeoffers.com",
              "name": "Speedy Cash Home Offers",
              "description": "Las Vegas and Southern California's most trusted cash home buyers. We buy houses for cash with no fees, no repairs needed, and fast closing in 7 days.",
              "publisher": {
                "@id": "https://www.speedycashhomeoffers.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.speedycashhomeoffers.com/contact?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "en-US"
            })
          }}
        />
        {/* Google Analytics 4 (GA4) - Optimized for performance, deferred to prevent forced reflows */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                // Initialize dataLayer immediately to prevent errors
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                
                // Defer GA4 loading to prevent forced reflows during initial render
                function loadGA4() {
                  // Load gtag.js script asynchronously
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-G0GB8N5PZR';
                  script.onload = function() {
                    gtag('js', new Date());
                    gtag('config', 'G-G0GB8N5PZR', {
                      'page_path': window.location.pathname,
                      'send_page_view': true
                    });
                  };
                  document.head.appendChild(script);
                }
                
                // Use requestIdleCallback if available, otherwise defer to next tick
                if (window.requestIdleCallback) {
                  window.requestIdleCallback(loadGA4, { timeout: 2000 });
                } else if (document.readyState === 'complete') {
                  setTimeout(loadGA4, 1);
                } else {
                  window.addEventListener('load', function() {
                    setTimeout(loadGA4, 100);
                  });
                }
                
                // Enhanced event tracking functions for GA4 (queue events if gtag not loaded)
                window.trackPhoneClick = function(label) {
                  if (window.gtag) {
                    gtag('event', 'phone_click', {
                      'event_category': 'engagement',
                      'event_label': label || 'phone_link',
                      'value': 1
                    });
                  } else {
                    window.dataLayer.push({
                      'event': 'phone_click',
                      'event_category': 'engagement',
                      'event_label': label || 'phone_link',
                      'value': 1
                    });
                  }
                };
                
                window.trackFormSubmit = function(formType) {
                  if (window.gtag) {
                    gtag('event', 'form_submit', {
                      'event_category': 'conversion',
                      'event_label': formType || 'contact_form',
                      'value': 1
                    });
                  } else {
                    window.dataLayer.push({
                      'event': 'form_submit',
                      'event_category': 'conversion',
                      'event_label': formType || 'contact_form',
                      'value': 1
                    });
                  }
                };
                
                window.trackCTAClick = function(buttonText, pageLocation) {
                  if (window.gtag) {
                    gtag('event', 'cta_click', {
                      'event_category': 'engagement',
                      'event_label': buttonText || 'cta_button',
                      'page_location': pageLocation || window.location.href
                    });
                  } else {
                    window.dataLayer.push({
                      'event': 'cta_click',
                      'event_category': 'engagement',
                      'event_label': buttonText || 'cta_button',
                      'page_location': pageLocation || window.location.href
                    });
                  }
                };
                
                window.trackPageView = function(page) {
                  if (window.gtag) {
                    gtag('config', 'G-G0GB8N5PZR', {
                      'page_path': page || window.location.pathname
                    });
                  }
                };
                
                // Expose gtag globally for compatibility
                window.gtag = gtag;
              }
            `,
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export const loader: Route.LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  
  // Get pathname early for all checks
  const pathname = url.pathname.toLowerCase();
  
  // Define valid routes once for reuse
  const validRoutes = [
    '/',
    '/test',
    '/process',
    '/testimonials',
    '/meet-the-team',
    '/faqs',
    '/blog',
    '/market-insights',
    '/sell-my-house-fast-las-vegas',
    '/sell-my-house-fast-southern-california',
    '/sell-my-house-fast-orange-county',
    '/sell-my-house-fast-san-diego',
    '/sell-my-house-fast-riverside',
    '/sell-my-house-fast-inland-empire',
    '/sellers',
    '/buyers',
    '/investors',
    '/neighborhoods',
    '/about',
    '/contact',
    '/thank-you',
    '/privacy-policy',
    '/terms-of-service',
    '/company-history',
    '/fast-home-cash-offers-usa',
    '/fast-home-cash-offers-reviews',
    '/fast-home-cash-offers-near-me',
    '/fast-home-cash-offers-las-vegas',
    '/opendoor-cash-offer',
    '/fast-home-offer',
    '/fast-home-cash-offers-nevada',
    '/zillow-cash-offer',
    '/robots.txt',
    '/sitemap.xml',
  ];
  
  // Normalize pathname for comparison (remove trailing slash)
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  
  // Check if path is invalid (old WordPress blog post) BEFORE redirects
  const isInvalidPath = !validRoutes.some(route => {
    if (route === '/') {
      return normalizedPath === '/' || normalizedPath === '';
    }
    return normalizedPath === route || normalizedPath.startsWith(route + '/');
  });
  
  // Handle WordPress cron URLs globally - return 410 Gone
  // Check this FIRST before any other processing
  if (searchParams.has('doing_wp_cron') || searchParams.has('amp') || searchParams.has('noamp')) {
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "X-WordPress-Content": "removed",
      },
    });
  }
  
  // If path is invalid (old WordPress blog post), return 410 Gone BEFORE redirects
  // This ensures old blog posts return 410 even if they come in as HTTP or non-www
  if (isInvalidPath) {
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "X-WordPress-Content": "removed",
      },
    });
  }
  
  // Redirect HTTP to HTTPS (only for valid routes)
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    throw new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }
  
  // Redirect non-www to www (only for valid routes)
  if (url.hostname === 'speedycashhomeoffers.com') {
    url.hostname = 'www.speedycashhomeoffers.com';
    throw new Response(null, {
      status: 301,
      headers: {
        Location: url.toString(),
      },
    });
  }
  
  // Handle old WordPress paths - return 410 Gone
  const oldWordPressPaths = [
    '/buyer-investor',
    '/writer/',
    '/author/',
    '/tag/',
    '/category/',
    '/__manifest',
  ];
  
  if (oldWordPressPaths.some(path => pathname.startsWith(path))) {
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "X-WordPress-Content": "removed",
      },
    });
  }
  
  // Handle trailing slashes - redirect to non-trailing slash for all routes except root
  // BUT: If trailing slash URL has WordPress query params, return 410 Gone instead of redirecting
  if (pathname.endsWith('/') && pathname !== '/') {
    // If it has WordPress query params, return 410 Gone (already checked above, but double-check for trailing slash URLs)
    if (searchParams.has('doing_wp_cron') || searchParams.has('amp') || searchParams.has('noamp')) {
      throw new Response(null, {
        status: 410,
        statusText: "Gone",
        headers: {
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }
    
    // Normal trailing slash redirect - strip all query params to prevent duplicates
    const newPath = pathname.slice(0, -1);
    const newUrl = new URL(newPath, url.origin);
    throw new Response(null, {
      status: 301,
      headers: {
        Location: newUrl.toString(),
      },
    });
  }
  
  return {};
};

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404 - Page Not Found" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found. Please check the URL or return to our home page."
        : error.statusText || details;
  } else if (error && error instanceof Error) {
    details = error.message;
    if (import.meta.env.DEV) {
      stack = error.stack;
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-6xl font-bold text-blue-600 mb-4">
          {isRouteErrorResponse(error) && error.status === 404 ? "404" : "⚠️"}
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{message}</h1>
        <p className="text-lg text-gray-600 mb-8">{details}</p>
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
          <a 
            href="/contact" 
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors ml-4"
          >
            Contact Us
          </a>
        </div>
        
        {stack && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
              Technical Details (Development Only)
            </summary>
            <pre className="w-full p-4 overflow-x-auto bg-gray-100 rounded-lg mt-2 text-xs">
              <code>{stack}</code>
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
