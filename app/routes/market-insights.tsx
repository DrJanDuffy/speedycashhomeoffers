import type { Route } from "./+types/market-insights";
import Breadcrumbs from "~/components/Breadcrumbs";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Real Estate Market Insights | Speedy Cash Home Offers" },
    { name: "description", content: "Expert real estate market insights, analysis, and professional guidance for Las Vegas and Southern California markets from Dr. Janet Duffy. Stay informed with current market data and trends." },
    { name: "keywords", content: "real estate market insights, Las Vegas real estate market, Southern California real estate, market analysis, Dr Janet Duffy insights, real estate trends" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://speedycashhomeoffers.com/market-insights" },
    { property: "og:title", content: "Real Estate Market Insights | Speedy Cash Home Offers" },
    { property: "og:description", content: "Expert insights, market analysis, and professional guidance for Las Vegas and California real estate markets from Dr. Janet Duffy." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://speedycashhomeoffers.com/market-insights" },
    { property: "og:image", content: "https://speedycashhomeoffers.com/images/market-insights-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Real Estate Market Insights | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Expert insights, market analysis, and professional guidance for Las Vegas and California real estate markets from Dr. Janet Duffy." },
    { name: "twitter:image", content: "https://speedycashhomeoffers.com/images/market-insights-twitter-image.jpg" },
  ];
};

export default function MarketInsights() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Real Estate Market Insights",
            "description": "Expert real estate market insights and analysis for Las Vegas and Southern California markets",
            "url": "https://speedycashhomeoffers.com/market-insights",
            "mainEntity": {
              "@type": "Dataset",
              "name": "Real Estate Market Data",
              "description": "Current market data for Las Vegas and Southern California real estate markets",
              "creator": {
                "@type": "Person",
                "name": "Dr. Janet Duffy",
                "jobTitle": "Founder & CEO"
              },
              "temporalCoverage": "2025",
              "spatialCoverage": [
                {
                  "@type": "Place",
                  "name": "Las Vegas, Nevada"
                },
                {
                  "@type": "Place", 
                  "name": "Los Angeles County, California"
                },
                {
                  "@type": "Place",
                  "name": "Orange County, California"
                },
                {
                  "@type": "Place",
                  "name": "Riverside County, California"
                },
                {
                  "@type": "Place",
                  "name": "San Bernardino County, California"
                }
              ]
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Real Estate Advantage
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Expert insights, market analysis, and professional guidance for Las Vegas and California real estate markets.
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Current Real Estate Market Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Stay ahead of the market with Dr. Janet Duffy's expert analysis of Las Vegas and Southern California real estate trends. 
              Our comprehensive market insights provide you with the data and analysis needed to make informed decisions about your property. 
              Whether you're considering selling your home, investing in real estate, or simply want to understand current market conditions, 
              our detailed market reports offer valuable insights into inventory levels, demand patterns, pricing trends, and expected market times 
              across multiple metropolitan areas.
            </p>
          </div>
        </div>
      </section>

      {/* Market Selector */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Select Your Market for Detailed Analysis
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Las Vegas
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Los Angeles
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Orange County
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Riverside
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              San Bernardino
            </button>
            <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              San Diego
            </button>
          </div>
        </div>
      </section>

      {/* Las Vegas Market Data */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Current Las Vegas Market Data
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Real-time insights into the Las Vegas Real Estate market, providing comprehensive data on inventory, demand, and market trends.
          </p>
          <p className="text-center text-sm text-gray-500 mb-12">
            Last updated: 9/12/2025
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">New Listing Inventory YOY</h3>
              <div className="text-3xl font-bold text-cyan-600 mb-2">8,244</div>
              <p className="text-sm text-gray-600 mb-2">homes vs. last year</p>
              <div className="text-green-600 font-semibold">+18%</div>
              <p className="text-sm text-gray-500">Increasing inventory</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Demand Year Over Year</h3>
              <div className="text-3xl font-bold text-cyan-600 mb-2">2,156</div>
              <p className="text-sm text-gray-600 mb-2">pending sales vs. last year</p>
              <div className="text-green-600 font-semibold">+8%</div>
              <p className="text-sm text-gray-500">Demand increase</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Pending Sales YOY</h3>
              <div className="text-3xl font-bold text-cyan-600 mb-2">Las Vegas</div>
              <p className="text-sm text-gray-600 mb-2">vs. last year</p>
              <div className="text-green-600 font-semibold">+2.1%</div>
              <p className="text-sm text-gray-500">Increasing sales</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Expected Market Time</h3>
              <div className="text-3xl font-bold text-cyan-600 mb-2">89</div>
              <p className="text-sm text-gray-600 mb-2">Days</p>
              <div className="text-red-600 font-semibold">+15 days</div>
              <p className="text-sm text-gray-500">vs. last year</p>
            </div>
          </div>
        </div>
      </section>

      {/* California Markets */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Southern California Market Analysis
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Our comprehensive analysis of Southern California real estate markets provides detailed insights into inventory trends, 
            demand patterns, and market timing across Los Angeles, Orange County, Riverside, and San Bernardino counties. 
            These insights help homeowners understand current market conditions and make informed decisions about selling their properties.
          </p>
          
          {/* Los Angeles County */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Current Los Angeles County Market Data</h3>
            <p className="text-gray-600 mb-4">Real-time insights into the Los Angeles County Real Estate market, including detailed analysis of inventory and demand trends.</p>
            <p className="text-sm text-gray-500 mb-6">Last updated: 9/12/2025</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">New Listing Inventory YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">14,944</div>
                <p className="text-sm text-gray-600 mb-1">homes vs. last year</p>
                <div className="text-green-600 font-semibold">+24%</div>
                <p className="text-sm text-gray-500">Increasing inventory</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Demand Year Over Year</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">3,943</div>
                <p className="text-sm text-gray-600 mb-1">pending sales vs. last year</p>
                <div className="text-green-600 font-semibold">+4%</div>
                <p className="text-sm text-gray-500">Demand increase</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Pending Sales YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">Los Angeles County</div>
                <p className="text-sm text-gray-600 mb-1">vs. last year</p>
                <div className="text-green-600 font-semibold">+0.1%</div>
                <p className="text-sm text-gray-500">Increasing sales</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Expected Market Time</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">114</div>
                <p className="text-sm text-gray-600 mb-1">Days</p>
                <div className="text-red-600 font-semibold">+23 days</div>
                <p className="text-sm text-gray-500">vs. last year</p>
              </div>
            </div>
          </div>

          {/* Orange County */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Current Orange County Market Data</h3>
            <p className="text-gray-600 mb-4">Real-time insights into the Orange County Real Estate market, featuring analysis of coastal and inland market trends.</p>
            <p className="text-sm text-gray-500 mb-6">Last updated: 8/12/2025</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">New Listing Inventory YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">4,869</div>
                <p className="text-sm text-gray-600 mb-1">homes vs. last year</p>
                <div className="text-green-600 font-semibold">+26%</div>
                <p className="text-sm text-gray-500">Increasing inventory</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Demand Year Over Year</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">1,559</div>
                <p className="text-sm text-gray-600 mb-1">pending sales vs. last year</p>
                <div className="text-green-600 font-semibold">+6%</div>
                <p className="text-sm text-gray-500">Demand increase</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Pending Sales YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">Orange County</div>
                <p className="text-sm text-gray-600 mb-1">vs. last year</p>
                <div className="text-red-600 font-semibold">-5%</div>
                <p className="text-sm text-gray-500">Stable growth</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Expected Market Time</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">94</div>
                <p className="text-sm text-gray-600 mb-1">Days</p>
                <div className="text-red-600 font-semibold">+21 days</div>
                <p className="text-sm text-gray-500">vs. last year</p>
              </div>
            </div>
          </div>

          {/* Riverside County */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Current Riverside County Market Data</h3>
            <p className="text-gray-600 mb-4">Real-time insights into the Riverside County Real Estate market, covering both urban and suburban areas.</p>
            <p className="text-sm text-gray-500 mb-6">Last updated: 8/12/2025</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">New Listing Inventory YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">7,801</div>
                <p className="text-sm text-gray-600 mb-1">homes vs. last year</p>
                <div className="text-green-600 font-semibold">+20%</div>
                <p className="text-sm text-gray-500">Increasing inventory</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Demand Year Over Year</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">2,063</div>
                <p className="text-sm text-gray-600 mb-1">pending sales vs. last year</p>
                <div className="text-green-600 font-semibold">+5%</div>
                <p className="text-sm text-gray-500">Demand increase</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Pending Sales YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">Riverside County</div>
                <p className="text-sm text-gray-600 mb-1">vs. last year</p>
                <div className="text-red-600 font-semibold">-4%</div>
                <p className="text-sm text-gray-500">Stable growth</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Expected Market Time</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">113</div>
                <p className="text-sm text-gray-600 mb-1">Days</p>
                <div className="text-red-600 font-semibold">+18 days</div>
                <p className="text-sm text-gray-500">vs. last year</p>
              </div>
            </div>
          </div>

          {/* San Bernardino County */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Current San Bernardino County Market Data</h3>
            <p className="text-gray-600 mb-4">Real-time insights into the San Bernardino County Real Estate market, including analysis of desert and mountain communities.</p>
            <p className="text-sm text-gray-500 mb-6">Last updated: 8/19/2025</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">New Listing Inventory YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">6,321</div>
                <p className="text-sm text-gray-600 mb-1">homes vs. last year</p>
                <div className="text-green-600 font-semibold">+18%</div>
                <p className="text-sm text-gray-500">Increasing inventory</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Demand Year Over Year</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">1,888</div>
                <p className="text-sm text-gray-600 mb-1">pending sales vs. last year</p>
                <div className="text-green-600 font-semibold">+19%</div>
                <p className="text-sm text-gray-500">Demand increase</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Pending Sales YOY</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">San Bernardino County</div>
                <p className="text-sm text-gray-600 mb-1">vs. last year</p>
                <div className="text-green-600 font-semibold">+0.2%</div>
                <p className="text-sm text-gray-500">Stable growth</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Expected Market Time</h4>
                <div className="text-2xl font-bold text-cyan-600 mb-1">119</div>
                <p className="text-sm text-gray-600 mb-1">Days</p>
                <div className="text-red-600 font-semibold">+21 days</div>
                <p className="text-sm text-gray-500">vs. last year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Appearances */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            TV Market Segments and Expert Analysis
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Stay up to date with Dr. Janet Duffy's latest television appearances and featured expert market analysis. 
            Our media segments provide valuable insights into current real estate trends, market conditions, and 
            practical advice for homeowners looking to sell their properties in Las Vegas and Southern California.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">KTLA 5: LA Unscripted</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Selling Without Stress</h3>
              <p className="text-sm text-gray-500 mb-4">July 22, 2025</p>
              <p className="text-gray-600 text-sm">
                Dr. Janet Duffy discusses how to sell your home without the traditional stress and complications, 
                providing practical strategies for homeowners in Los Angeles and surrounding areas.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">CBS KCAL News</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Navigating Home Sales</h3>
              <p className="text-sm text-gray-500 mb-4">July 9, 2025</p>
              <p className="text-gray-600 text-sm">
                Expert insights on navigating the current real estate market and making informed decisions 
                about selling your property in today's competitive environment.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gradient-to-r from-red-400 to-red-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">FOX 11 Good Day LA</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">LA Housing Inventory</h3>
              <p className="text-sm text-gray-500 mb-4">July 1, 2025</p>
              <p className="text-gray-600 text-sm">
                Analysis of current housing inventory trends and what it means for buyers and sellers 
                in the Los Angeles metropolitan area.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gradient-to-r from-green-400 to-green-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">NBC: CA LIVE</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">LA Housing Affordability</h3>
              <p className="text-sm text-gray-500 mb-4">July 1, 2025</p>
              <p className="text-gray-600 text-sm">
                Discussion on housing affordability challenges and solutions for California residents, 
                including alternative selling strategies for homeowners.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">ABC 7: Local Spotlight</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Shift to Buyer's Market</h3>
              <p className="text-sm text-gray-500 mb-4">May 31, 2025</p>
              <p className="text-gray-600 text-sm">
                How the market shift affects both buyers and sellers in the current environment, 
                with practical advice for navigating changing conditions.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-32 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">CBS KCAL News</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Speeding Up Home Sales</h3>
              <p className="text-sm text-gray-500 mb-4">May 15, 2025</p>
              <p className="text-gray-600 text-sm">
                Tips and strategies for accelerating the home selling process in today's market, 
                helping homeowners achieve faster closings and better outcomes.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Radio Segments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Radio Show Segments and Expert Commentary
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Stay up to date with our latest radio segments featuring real estate insights and current market information. 
            Dr. Janet Duffy regularly appears on various radio programs to discuss market trends, selling strategies, 
            and provide expert commentary on real estate conditions affecting homeowners across Las Vegas and Southern California.
          </p>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">KOST: Damon Lines on Climate Change</h3>
              <p className="text-gray-600 mb-4">Dr. Janet Duffy discusses how climate change can affect the real estate market, including impacts on property values and selling strategies in affected areas.</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">July 10, 2025</p>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors">
                  Listen Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">ESPN: Sell your house quickly to Speedy Cash Home Offers</h3>
              <p className="text-gray-600 mb-4">Listen to Dr. Janet Duffy explain how to sell your house fast to us, including the benefits of working with cash home buyers versus traditional real estate agents.</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">June 20, 2025</p>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors">
                  Listen Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">ESPN: Easy vs complicated ways to sell your house</h3>
              <p className="text-gray-600 mb-4">Dr. Duffy talks about how Speedy Cash Home Offers makes the entire process easy and simple, contrasting our approach with traditional selling methods.</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">June 20, 2025</p>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors">
                  Listen Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">ESPN: $20,000 advance for moving costs</h3>
              <p className="text-gray-600 mb-4">Dr. Duffy talks why Speedy Cash Home Offers offers the $20,000 advance to help homeowners move, explaining how this unique benefit helps families transition smoothly.</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">June 20, 2025</p>
                <button className="bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-700 transition-colors">
                  Listen Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Advantage of Current Market Conditions?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few days. 
            Get expert market insights and a fair cash offer today! Our comprehensive market analysis 
            helps us provide competitive offers that reflect current market conditions in Las Vegas and Southern California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-cyan-600 transition-colors">
              Call (702) 500-1981
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}