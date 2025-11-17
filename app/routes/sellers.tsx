import type { Route } from "./+types/sellers";
import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import RealScoutHomeValue from "~/components/RealScoutHomeValue";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sell Your Home Fast | Speedy Cash Home Offers" },
    { name: "description", content: "Get a fast, fair cash offer for your Las Vegas home. No repairs, no fees, no waiting. Dr. Janet Duffy helps homeowners sell quickly." },
    { name: "keywords", content: "sell house fast Las Vegas, cash home buyers, sell house as is, no repairs needed, fast cash offer, Dr Janet Duffy" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://www.speedycashhomeoffers.com/sellers" },
    { property: "og:title", content: "Sell Your Home Fast | Speedy Cash Home Offers" },
    { property: "og:description", content: "Get a fast, fair cash offer for your Las Vegas home. No repairs, no fees, no waiting. Dr. Janet Duffy helps homeowners sell quickly." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/sellers" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/sellers-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Sell Your Home Fast | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Get a fast, fair cash offer for your Las Vegas home. No repairs, no fees, no waiting." },
    { name: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/sellers-twitter-image.jpg" },
  ];
};

export default function Sellers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell Your Home Fast
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Get a fair cash offer in 24 hours. No repairs, no fees, no waiting. 
              Dr. Janet Duffy makes selling your Las Vegas home simple and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="http://drjanduffy.realscout.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get Free Valuation
              </a>
              <a 
                href="http://drjanduffy.realscout.com/onboarding" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors text-center"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Home Value Widget */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Get Your Instant Home Value
          </h2>
          <RealScoutHomeValue />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Speedy Cash Home Offers?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Closing</h3>
              <p className="text-gray-600">Close in as little as 7 days. No waiting for bank approvals or buyer financing.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Repairs Needed</h3>
              <p className="text-gray-600">We buy homes as-is. No need to fix, clean, or stage your property.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Cash Offer</h3>
              <p className="text-gray-600">Get a competitive offer based on current market value and your home's condition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Simple 3-Step Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Info</h3>
              <p className="text-gray-600">Tell us about your property and situation. Takes just 2 minutes.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Offer</h3>
              <p className="text-gray-600">Receive a fair cash offer within 24 hours. No obligations.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Close & Get Paid</h3>
              <p className="text-gray-600">Choose your closing date and get your cash. It's that simple!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your Home?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of Las Vegas homeowners who chose the fast, fair, and simple way to sell.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Your Free Valuation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="sellers" />
    </div>
  );
}
