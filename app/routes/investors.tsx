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
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/investors" },
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
      {/* WebPage Schema with Content Freshness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Real Estate Investment Opportunities | Speedy Cash Home Offers",
            "description": "Maximize your ROI with Las Vegas real estate investments. Dr. Janet Duffy provides expert guidance on cap rates, cash flow, and market analysis.",
            "url": "https://www.speedycashhomeoffers.com/investors",
            "datePublished": "2024-01-15",
            "dateModified": "2025-01-17",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website"
            },
            "about": {
              "@type": "Service",
              "name": "Real Estate Investment Services"
            }
          })
        }}
      />
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
              <a 
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Investment Analysis
              </a>
              <a 
                href="tel:(702) 500-1981"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
                aria-label="Call Dr. Janet Duffy at (702) 500-1981"
              >
                Portfolio Review
              </a>
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
              <p className="text-gray-600 mb-4">Generate consistent monthly cash flow with single-family and multi-family rental properties. Explore <a href="/neighborhoods" className="text-purple-600 hover:text-purple-800 underline">Las Vegas neighborhoods</a> with strong rental demand.</p>
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
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Find Investment Properties
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Search for Investment Opportunities
          </h2>
          <div className="max-w-4xl mx-auto">
            <RealScoutSearch />
          </div>
        </div>
      </section>

      {/* Investment Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Current Investment Opportunities
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Featured Investment Properties
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

      {/* Investment Market Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Las Vegas Real Estate Investment Market Analysis
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Las Vegas has emerged as one of the most attractive real estate investment markets in the United States. 
              With a growing population, strong job market, and relatively affordable property prices compared to other 
              major metropolitan areas, Las Vegas offers exceptional opportunities for real estate investors seeking 
              strong returns and portfolio diversification.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Market Fundamentals and Growth Drivers</h3>
                <p className="text-gray-600 mb-4">
                  Las Vegas's real estate market is supported by strong fundamentals including population growth, job creation, 
                  and tourism industry strength. The city has consistently attracted new residents from high-cost states like 
                  California, drawn by Nevada's lack of state income tax, lower cost of living, and growing employment 
                  opportunities. This population influx creates steady demand for rental properties and supports property 
                  appreciation over time.
                </p>
                <p className="text-gray-600">
                  The Las Vegas economy is diverse, with major employers in technology, healthcare, manufacturing, and of 
                  course, tourism and hospitality. This economic diversity helps protect the real estate market from 
                  downturns in any single industry. Additionally, Las Vegas's status as a major convention and entertainment 
                  destination ensures consistent demand for both short-term and long-term rental properties.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Rental Market Strength and Cash Flow Potential</h3>
                <p className="text-gray-600 mb-4">
                  Las Vegas offers strong rental yields compared to many other major markets. Average cap rates typically range 
                  from 7-9%, providing investors with solid cash flow potential. The rental market is supported by a large 
                  population of renters, including young professionals, families, and retirees attracted to the area's lifestyle 
                  and affordability.
                </p>
                <p className="text-gray-600">
                  With average monthly rents around $1,800-$2,200 for single-family homes in desirable areas, investors can 
                  achieve positive cash flow even after accounting for mortgage payments, property management, maintenance, and 
                  reserves. The strong rental demand means properties typically have low vacancy rates, further supporting 
                  consistent income generation for investors.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Property Appreciation and Long-Term Value</h3>
                <p className="text-gray-600 mb-4">
                  While Las Vegas experienced significant price volatility during the 2008 financial crisis, the market has 
                  stabilized and shown consistent appreciation over the past decade. Property values have grown steadily, 
                  supported by population growth, economic development, and limited new construction in many desirable areas.
                </p>
                <p className="text-gray-600">
                  Investors who purchase properties in well-located areas with good schools, amenities, and employment access 
                  can expect both strong cash flow and long-term appreciation. Dr. Duffy's deep market knowledge helps investors 
                  identify neighborhoods with the best appreciation potential, ensuring their investments grow in value over time 
                  while generating immediate income.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Tax Advantages and Investment Benefits</h3>
                <p className="text-gray-600 mb-4">
                  Nevada offers significant tax advantages for real estate investors. The state has no personal income tax, 
                  no corporate income tax, and relatively low property taxes compared to many other states. This means investors 
                  keep more of their rental income and capital gains, improving overall returns.
                </p>
                <p className="text-gray-600">
                  Real estate investments also provide tax benefits including depreciation deductions, mortgage interest deductions, 
                  and the ability to defer capital gains through 1031 exchanges. These tax advantages, combined with strong cash 
                  flow and appreciation potential, make Las Vegas real estate an attractive component of a diversified investment 
                  portfolio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Advanced Investment Strategies for Las Vegas Real Estate
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Buy and Hold for Long-Term Wealth Building</h3>
              <p className="text-gray-600 mb-4">
                The buy-and-hold strategy is ideal for investors seeking long-term wealth accumulation through rental income 
                and property appreciation. This strategy involves purchasing properties, typically with financing, and holding 
                them for extended periods while collecting rental income. Over time, rental income increases, mortgage balances 
                decrease, and property values appreciate, creating multiple wealth-building mechanisms.
              </p>
              <p className="text-gray-600">
                Las Vegas is particularly well-suited for buy-and-hold investing due to strong rental demand, population growth, 
                and favorable tax environment. Investors can build substantial portfolios over time, with each property generating 
                passive income and building equity. Dr. Duffy helps investors identify properties with the best long-term potential, 
                considering factors like location, property condition, rental demand, and growth potential.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Fix and Flip for Quick Profit Generation</h3>
              <p className="text-gray-600 mb-4">
                Fix-and-flip investing involves purchasing distressed or outdated properties, renovating them, and selling them 
                quickly for a profit. This strategy requires capital for both purchase and renovation, as well as expertise in 
                property evaluation, renovation management, and market timing. Successful flips can generate significant profits 
                in relatively short timeframes, typically 3-6 months.
              </p>
              <p className="text-gray-600">
                Las Vegas offers excellent opportunities for fix-and-flip investors due to the availability of distressed properties, 
                strong buyer demand, and relatively affordable renovation costs. Dr. Duffy's team includes experienced renovation 
                professionals who can help identify profitable flip opportunities and manage the renovation process efficiently. 
                The key to successful flipping is buying at the right price, managing renovation costs, and selling in a timely 
                manner to maximize returns.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">BRRRR Strategy: Buy, Rehab, Rent, Refinance, Repeat</h3>
              <p className="text-gray-600 mb-4">
                The BRRRR strategy combines the benefits of flipping and buy-and-hold investing. Investors purchase distressed 
                properties, renovate them, rent them out, then refinance to pull out capital for the next purchase. This strategy 
                allows investors to recycle their capital and build portfolios more quickly than traditional buy-and-hold investing.
              </p>
              <p className="text-gray-600">
                This strategy is particularly powerful in Las Vegas where property values support refinancing after renovation, 
                and rental income can cover the new mortgage payments. Dr. Duffy helps investors identify properties suitable for 
                the BRRRR strategy, ensuring renovation costs and rental potential align to support successful refinancing and 
                portfolio expansion.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Multi-Family Properties for Scale and Efficiency</h3>
              <p className="text-gray-600 mb-4">
                Multi-family properties, including duplexes, triplexes, and small apartment buildings, offer investors the 
                opportunity to scale their portfolios more efficiently. These properties provide multiple rental income streams 
                from a single property, reducing per-unit management costs and providing diversification within a single investment.
              </p>
              <p className="text-gray-600">
                Las Vegas has a strong market for multi-family properties, with consistent demand from renters seeking affordable 
                housing options. Multi-family properties can offer higher cash-on-cash returns than single-family properties 
                while providing economies of scale in property management and maintenance. Dr. Duffy helps investors evaluate 
                multi-family opportunities, considering factors like unit mix, location, rental potential, and management requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
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
            <a 
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Free Investment Analysis
            </a>
            <a 
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors text-center"
              aria-label="Call Dr. Janet Duffy at (702) 500-1981"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="investors" />
    </div>
  );
}
