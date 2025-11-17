import type { Route } from "./+types/investors";
import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import RealScoutSearch from "~/components/RealScoutSearch";
import RealScoutListings from "~/components/RealScoutListings";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Real Estate Investment Opportunities | Speedy Cash Home Offers" },
    { name: "description", content: "Maximize your ROI with Las Vegas real estate investments. Dr. Janet Duffy provides expert guidance on cap rates, cash flow, and market analysis." },
    { name: "keywords", content: "real estate investment Las Vegas, investment properties, rental properties, real estate ROI, Las Vegas investment opportunities" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://www.speedycashhomeoffers.com/investors" },
    { property: "og:title", content: "Real Estate Investment Opportunities | Speedy Cash Home Offers" },
    { property: "og:description", content: "Maximize your ROI with Las Vegas real estate investments. Dr. Janet Duffy provides expert guidance on cap rates, cash flow, and market analysis." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/investors" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/investors-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Real Estate Investment Opportunities | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Maximize your ROI with Las Vegas real estate investments. Expert guidance on cap rates and cash flow." },
    { name: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/investors-twitter-image.jpg" },
  ];
};

export default function Investors() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maximize Your ROI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Build wealth through strategic Las Vegas real estate investments. 
              Dr. Janet Duffy provides expert market analysis, cap rate optimization, and cash flow strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Investment Analysis
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Portfolio Review
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Las Vegas Investment Market
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">8.2%</div>
              <p className="text-gray-600">Average Cap Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$1,850</div>
              <p className="text-gray-600">Avg Monthly Rent</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">12.5%</div>
              <p className="text-gray-600">Year-over-Year Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-gray-600">Occupancy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Investment Strategies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rental Properties</h3>
              <p className="text-gray-600 mb-4">Generate consistent monthly cash flow with single-family and multi-family rental properties.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 8-12% annual returns</li>
                <li>• Strong rental demand</li>
                <li>• Property management included</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fix & Flip</h3>
              <p className="text-gray-600 mb-4">Maximize profits through strategic property renovations and quick sales.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 15-25% profit margins</li>
                <li>• 3-6 month turnaround</li>
                <li>• Renovation team included</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Portfolio Building</h3>
              <p className="text-gray-600 mb-4">Diversify your investments across multiple properties and strategies.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Risk diversification</li>
                <li>• Scalable growth</li>
                <li>• Tax advantages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Property Search */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Find Investment Properties
          </h2>
          <div className="max-w-4xl mx-auto">
            <RealScoutSearch />
          </div>
        </div>
      </section>

      {/* Investment Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Current Investment Opportunities
          </h2>
          <RealScoutListings />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Investment ROI Calculator
          </h2>
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Price</label>
                <input 
                  type="number" 
                  placeholder="$300,000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Rent</label>
                <input 
                  type="number" 
                  placeholder="$1,800"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Down Payment (%)</label>
                <input 
                  type="number" 
                  placeholder="20"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate (%)</label>
                <input 
                  type="number" 
                  placeholder="6.5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expenses (%)</label>
                <input 
                  type="number" 
                  placeholder="25"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <button className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors mb-6">
              Calculate ROI
            </button>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Projected Returns</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">8.2%</div>
                  <p className="text-gray-600">Cap Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">$450</div>
                  <p className="text-gray-600">Monthly Cash Flow</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">12.8%</div>
                  <p className="text-gray-600">Cash-on-Cash Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Investor Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">JD</span>
                </div>
                <div>
                  <h4 className="font-semibold">John Davis</h4>
                  <p className="text-gray-600">Portfolio: 12 Properties</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Duffy helped me build a portfolio generating $8,500/month in passive income. 
                Her market analysis and property selection expertise is unmatched."
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                ROI: 11.2% | Portfolio Value: $2.1M
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">SM</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Martinez</h4>
                  <p className="text-gray-600">Fix & Flip Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "With Dr. Duffy's guidance, I've completed 8 successful flips with an average 
                profit margin of 22%. Her renovation team is incredible."
              </p>
              <div className="text-sm text-purple-600 font-semibold">
                Total Profit: $340K | Avg Flip Time: 4 months
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Building Wealth?
          </h2>
          <p className="text-xl mb-8">
            Join successful investors who trust Dr. Janet Duffy for their Las Vegas real estate investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Free Investment Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="investors" />
    </div>
  );
}
