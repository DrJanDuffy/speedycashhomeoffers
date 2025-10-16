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
import MobileCTA from "./components/MobileCTA";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
    as: "style",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Google tag (gtag.js) - Client-side only */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                ga('create', 'G-G0GB8N5PZR', 'auto');
                ga('send', 'pageview');
                
                // Enhanced event tracking functions
                window.trackPhoneClick = function(label) {
                  ga('event', 'phone_click', {
                    'event_category': 'engagement',
                    'event_label': label || 'phone_link',
                    'value': 1
                  });
                };
                
                window.trackFormSubmit = function(formType) {
                  ga('event', 'form_submit', {
                    'event_category': 'conversion',
                    'event_label': formType || 'contact_form',
                    'value': 1
                  });
                };
                
                window.trackCTAClick = function(buttonText, pageLocation) {
                  ga('event', 'cta_click', {
                    'event_category': 'engagement',
                    'event_label': buttonText || 'cta_button',
                    'page_location': pageLocation || window.location.href
                  });
                };
                
                window.trackPageView = function(page) {
                  ga('send', 'pageview', page);
                };
              }
            `,
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <MobileCTA />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

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
