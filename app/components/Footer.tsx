import { Link } from "react-router";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { path: "/sellers", label: "Sell Your House" },
    { path: "/process", label: "How It Works" },
    { path: "/contact", label: "Get Free Quote" },
    { path: "/about", label: "About Dr. Duffy" },
  ];

  const areaLinks = [
    { path: "/sell-my-house-fast-las-vegas", label: "Las Vegas" },
    { path: "/sell-my-house-fast-southern-california", label: "Southern California" },
    { path: "/sell-my-house-fast-orange-county", label: "Orange County" },
    { path: "/sell-my-house-fast-riverside", label: "Riverside" },
  ];

  const resourceLinks = [
    { path: "/testimonials", label: "Customer Reviews" },
    { path: "/faqs", label: "Frequently Asked Questions" },
    { path: "/meet-the-team", label: "Meet Our Team" },
    { path: "/market-insights", label: "Market Insights" },
  ];

  const additionalLinks = [
    { path: "/buyers", label: "For Buyers" },
    { path: "/investors", label: "For Investors" },
    { path: "/neighborhoods", label: "Neighborhoods" },
    { path: "/blog", label: "Blog" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-blue-400 mb-4 block">
              Speedy Cash Home Offers
            </Link>
            <p className="text-gray-300 mb-4">
              Las Vegas's most trusted cash home buyers. We specialize in distressed properties 
              and help homeowners sell quickly without the traditional hassles.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> 
                <a href="tel:(702) 500-1981" className="text-blue-400 hover:text-blue-300 ml-1" aria-label="Call Speedy Cash Home Offers at (702) 500-1981">
                  (702) 500-1981
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> 
                <a href="mailto:DrDuffy@SpeedyCashHomeOffers.com" className="text-blue-400 hover:text-blue-300 ml-1" aria-label="Email Dr. Janet Duffy at DrDuffy@SpeedyCashHomeOffers.com">
                  DrDuffy@SpeedyCashHomeOffers.com
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Address:</span> 2775 Ariel Ocean St, Las Vegas, NV 89156
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Areas We Serve</h3>
            <ul className="space-y-2">
              {areaLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Additional */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 mb-6">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mb-3">Additional Services</h4>
            <ul className="space-y-2">
              {additionalLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Speedy Cash Home Offers | Homes by Dr. Jan Duffy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <a href="tel:(702) 500-1981" className="text-gray-400 hover:text-blue-400 transition-colors" aria-label="Contact Speedy Cash Home Offers by phone at (702) 500-1981">
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start items-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center">
              <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-xs font-bold mr-2">A+</span>
              <span>Better Business Bureau</span>
            </div>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★★★★★</span>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold mr-2">25+</span>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
