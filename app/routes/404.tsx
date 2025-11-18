import { Link } from "react-router";
import type { Route } from "./+types/404";

export function meta({ params, data }: Route.MetaArgs) {
  // Don't add canonical tags for 404 pages - they should not be indexed
  return [
    { title: "Page Not Found - Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "The page you're looking for doesn't exist. Find your way back to our home page or explore our services for selling your house fast in Las Vegas and Southern California.",
    },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();

  // Check for old WordPress paths - return 410 Gone for permanently removed content
  const oldWordPressPaths = [
    "/buyer-investor",
    "/map",
    "/home",
    "/for-buyers",
    "/writer",
    "/author",
    "/tag",
    "/category",
    "/__manifest",
  ];
  const isOldPath = oldWordPressPaths.some((path) => pathname.startsWith(path));

  if (isOldPath) {
    // Throw 410 Gone for permanently removed content
    throw new Response(null, {
      status: 410,
      statusText: "Gone",
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }

  // Return data for regular 404 - component will render
  return {
    status: 404,
  };
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Oops! Page Not Found</h1>

        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved. Don't worry - we can help you
          find what you need!
        </p>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Popular Pages</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Link
              to="/"
              className="block p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="font-semibold text-blue-900 mb-2">🏠 Home</h3>
              <p className="text-sm text-blue-700">Back to our main page</p>
            </Link>

            <Link
              to="/contact"
              className="block p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
            >
              <h3 className="font-semibold text-emerald-900 mb-2">📞 Get Free Quote</h3>
              <p className="text-sm text-emerald-700">Sell your house fast</p>
            </Link>

            <Link
              to="/process"
              className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
            >
              <h3 className="font-semibold text-purple-900 mb-2">⚡ Our Process</h3>
              <p className="text-sm text-purple-700">How we buy houses</p>
            </Link>

            <Link
              to="/sell-my-house-fast-las-vegas"
              className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <h3 className="font-semibold text-orange-900 mb-2">🎰 Las Vegas</h3>
              <p className="text-sm text-orange-700">Sell in Las Vegas</p>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help Finding Something?</h3>
          <p className="text-gray-600 mb-4">
            Call us at{" "}
            <a
              href="tel:(702) 500-1981"
              className="text-blue-600 hover:text-blue-800 font-semibold"
              aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
            >
              (702) 500-1981
            </a>{" "}
            or email us at{" "}
            <a
              href="mailto:DrDuffy@SpeedyCashHomeOffers.com"
              className="text-blue-600 hover:text-blue-800 font-semibold"
              aria-label="Email Dr. Janet Duffy at DrDuffy@SpeedyCashHomeOffers.com"
            >
              DrDuffy@SpeedyCashHomeOffers.com
            </a>
          </p>
          <p className="text-sm text-gray-500">
            We're here to help you sell your house fast in Las Vegas and Southern California!
          </p>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8">
          <p className="text-gray-600 mb-4">
            Looking for something specific? Try these common searches:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link
              to="/sell-my-house-fast-las-vegas"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              Sell House Las Vegas
            </Link>
            <Link
              to="/sell-my-house-fast-southern-california"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              Sell House California
            </Link>
            <Link
              to="/process"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              Cash Home Buyers
            </Link>
            <Link
              to="/testimonials"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
            >
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
