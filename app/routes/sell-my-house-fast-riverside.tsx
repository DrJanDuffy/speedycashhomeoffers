import type { Route } from "./+types/sell-my-house-fast-riverside";
import { useLoaderData } from "react-router";
import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import RealScoutListings from "~/components/RealScoutListings";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sell My House Fast Riverside | Speedy Cash Home Offers" },
    { name: "description", content: "Sell house fast Riverside! Dr. Janet Duffy pays cash for homes in Riverside, Moreno Valley, Corona. No fees, no repairs, fast closing. Get offer today!" },
    { name: "keywords", content: "sell house fast Riverside, cash home buyers Riverside, Dr. Janet Duffy Riverside, sell house as is Riverside, cash offer Riverside California, we buy houses Riverside" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/sell-my-house-fast-riverside" },
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-riverside" },
    { property: "og:title", content: "Sell My House Fast Riverside | Speedy Cash Home Offers" },
    { property: "og:description", content: "Dr. Janet Duffy has purchased thousands of homes in Riverside California and we pay cash fast. Find out how much money you can get today!" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/riverside-og.jpg" }, // Placeholder image
    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-riverside" },
    { property: "twitter:title", content: "Sell My House Fast Riverside | Speedy Cash Home Offers" },
    { property: "twitter:description", content: "Dr. Janet Duffy has purchased thousands of homes in Riverside California and we pay cash fast. Find out how much money you can get today!" },
    { property: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/riverside-twitter.jpg" }, // Placeholder image
  ];
};

export const loader: Route.LoaderFunction = async () => {
  return {
    businessName: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
    phoneNumber: "(702) 500-1981",
    email: "DrDuffy@SpeedyCashHomeOffers.com",
    address: {
      streetAddress: "2775 Ariel Ocean St",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89156",
      addressCountry: "US",
    },
    rating: {
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };
};

export default function SellMyHouseFastRiverside() {
  const { businessName, phoneNumber, email, address, rating } = useLoaderData<typeof loader>();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": "Dr. Janet Duffy has purchased thousands of homes in Riverside California and we pay cash fast. Find out how much money you can get today!",
    "url": "https://www.speedycashhomeoffers.com/sell-my-house-fast-riverside",
    "telephone": phoneNumber,
    "email": email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry,
    },
    "areaServed": {
      "@type": "City",
      "name": "Riverside",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    "serviceType": "Cash Home Buying",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.ratingValue,
      "reviewCount": rating.reviewCount,
    },
    "sameAs": [
      "https://www.facebook.com/speedycashhomeoffers", // Placeholder social links
      "https://twitter.com/speedycashhome",
      "https://www.linkedin.com/company/speedycashhomeoffers",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My House Fast Riverside
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of homes in Riverside California and we pay cash fast. 
              Find out how much money you can get today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get My Free Quote
              </button>
              <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Call {phoneNumber}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <p className="text-gray-600">Star Rating</p>
              <p className="text-sm text-gray-500">From 500+ happy reviews on BBB, Google, and Yelp</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <p className="text-gray-600">Years of Experience</p>
              <p className="text-sm text-gray-500">We have helped 1,000s of home sellers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$20K</div>
              <p className="text-gray-600">Cash Advance</p>
              <p className="text-sm text-gray-500">Receive your cash upfront and close confidently</p>
            </div>
          </div>
        </div>
      </section>

      {/* Riverside Market Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Riverside Real Estate Stats and Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Riverside Market Overview</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Riverside County has a population of approximately 2.4 million people.</li>
                <li>• The current median house price in Riverside County is approximately $650,000.</li>
                <li>• Major cities include Riverside, Moreno Valley, Corona, Murrieta, and Temecula.</li>
                <li>• Riverside is home to UC Riverside, a major research university.</li>
                <li>• The county has a strong logistics and distribution sector.</li>
                <li>• The median household income is around $70,000.</li>
                <li>• Riverside County offers diverse landscapes from mountains to desert.</li>
                <li>• The county has excellent schools and universities.</li>
                <li>• Major employers include Amazon, FedEx, and various logistics companies.</li>
                <li>• Riverside County has a diverse economy including agriculture, logistics, and healthcare.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Why Riverside is Great for Real Estate</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Affordable Housing:</strong> Lower cost of living compared to coastal areas.</li>
                <li>• <strong>Growing Economy:</strong> Strong logistics, healthcare, and education sectors.</li>
                <li>• <strong>Outdoor Recreation:</strong> Mountains, deserts, and recreational areas.</li>
                <li>• <strong>Educational Opportunities:</strong> UC Riverside and excellent public schools.</li>
                <li>• <strong>Strategic Location:</strong> Central location between LA and San Diego.</li>
                <li>• <strong>Job Market:</strong> Growing employment opportunities in multiple industries.</li>
                <li>• <strong>Cultural Attractions:</strong> Museums, theaters, and cultural centers.</li>
                <li>• <strong>Master-Planned Communities:</strong> Well-designed neighborhoods and communities.</li>
                <li>• <strong>Transportation:</strong> Access to major highways and transportation hubs.</li>
                <li>• <strong>Investment Potential:</strong> Strong rental market and appreciation potential.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Riverside Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Serve All Riverside County Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Central Riverside</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Riverside</li>
                <li>• Moreno Valley</li>
                <li>• Corona</li>
                <li>• Norco</li>
                <li>• Eastvale</li>
                <li>• Jurupa Valley</li>
                <li>• Rubidoux</li>
                <li>• Arlington</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Southwest Riverside</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Murrieta</li>
                <li>• Temecula</li>
                <li>• Lake Elsinore</li>
                <li>• Wildomar</li>
                <li>• Menifee</li>
                <li>• Canyon Lake</li>
                <li>• Perris</li>
                <li>• Mead Valley</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Desert Areas</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Palm Springs</li>
                <li>• Indio</li>
                <li>• Cathedral City</li>
                <li>• Desert Hot Springs</li>
                <li>• Coachella</li>
                <li>• La Quinta</li>
                <li>• Rancho Mirage</li>
                <li>• Palm Desert</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy As-Is Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Buy Houses As-Is in Riverside
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We buy houses in Riverside in Any Condition As-Is and fast for cash! Some of the ways we help you are:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
              <p className="text-gray-600">We leverage our local Riverside real estate expertise that understands the market.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Cash Offers</h3>
              <p className="text-gray-600">Receive an almost instant cash home buyer offer that's better than any other company.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Showings</h3>
              <p className="text-gray-600">Forget having strange people moving through your home at inconvenient times.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Repairs Needed</h3>
              <p className="text-gray-600">Forget about expensive repairs, unrealistic buyers, or bothersome inspections.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Contractor Issues</h3>
              <p className="text-gray-600">Skip fixing up any repairs or dealing with predatory contractors.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Timeline</h3>
              <p className="text-gray-600">Choose a closing date that fits your timeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Riverside Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">MN</span>
                </div>
                <div>
                  <h4 className="font-semibold">Melanie Nolan</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited home in Temecula so easy and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">SS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Sherman Simon</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "I found the company is true to their words regarding helping you with your property. The process was smooth and transparent."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">DF</span>
                </div>
                <div>
                  <h4 className="font-semibold">Debra Franco</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Dr. Duffy's team was absolutely amazing throughout, always professional, friendly, and helpful. I highly recommend them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your Riverside Home Fast?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of homes in Riverside California and we pay cash fast. 
            Find out how much money you can get today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Properties in Riverside
          </h2>
          <RealScoutListings />
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="sellers" />
    </div>
  );
}
