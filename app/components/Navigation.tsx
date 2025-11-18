import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export default function Navigation() {
  const location = useLocation();
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Main navigation grouped by user intent and journey
  const primaryNavItems = [
    { path: "/", label: "Home" },
    { path: "/sellers", label: "Sell Your House" },
    { path: "/process", label: "How It Works" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Get Quote" },
  ];

  // Secondary navigation for additional services
  const secondaryNavItems = [
    { path: "/buyers", label: "Buyers" },
    { path: "/investors", label: "Investors" },
    { path: "/neighborhoods", label: "Areas" },
    { path: "/testimonials", label: "Reviews" },
    { path: "/faqs", label: "FAQs" },
  ];

  const locationPages = [
    {
      path: "/sell-my-house-fast-las-vegas",
      label: "Las Vegas",
      description: "North/East Vegas (89031, 89032, 89110, 89142)",
    },
    {
      path: "/sell-my-house-fast-southern-california",
      label: "Southern California",
      description: "Los Angeles, Orange County, Riverside",
    },
    {
      path: "/sell-my-house-fast-orange-county",
      label: "Orange County",
      description: "Anaheim, Irvine, Santa Ana",
    },
    {
      path: "/sell-my-house-fast-san-diego",
      label: "San Diego",
      description: "San Diego, Chula Vista, Oceanside",
    },
    {
      path: "/sell-my-house-fast-riverside",
      label: "Riverside",
      description: "Riverside, Moreno Valley, Corona",
    },
    {
      path: "/sell-my-house-fast-inland-empire",
      label: "Inland Empire",
      description: "San Bernardino, Riverside, Fontana",
    },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">Speedy Cash Home Offers</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {/* Primary Navigation - Core User Journey */}
            {primaryNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Secondary Navigation Dropdown */}
            <div className="relative">
              <button
                type="button"
                onMouseEnter={() => setIsLocationDropdownOpen(true)}
                onMouseLeave={() => setIsLocationDropdownOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                More
                <svg
                  className="w-4 h-4 inline-block ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isClient && isLocationDropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  onMouseEnter={() => setIsLocationDropdownOpen(true)}
                  onMouseLeave={() => setIsLocationDropdownOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">
                      Additional Services
                    </h3>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {secondaryNavItems.map((page) => (
                        <Link
                          key={page.path}
                          to={page.path}
                          className="block p-3 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="font-medium text-gray-900">{page.label}</div>
                        </Link>
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Areas We Serve</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {locationPages.slice(0, 3).map((page) => (
                          <Link
                            key={page.path}
                            to={page.path}
                            className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                          >
                            <div className="font-medium text-gray-900 text-sm">{page.label}</div>
                            <div className="text-xs text-gray-600">{page.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
