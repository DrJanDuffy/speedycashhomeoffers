import type { Route } from "./+types/sell-my-house-fast-san-diego";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sell My House Fast San Diego | Speedy Cash Home Offers" },
    { name: "description", content: "Sell house fast San Diego! Dr. Janet Duffy pays cash for homes in San Diego, Chula Vista, Oceanside. No fees, no repairs, fast closing. Get offer today!" },
    { name: "keywords", content: "sell house fast San Diego, cash home buyers San Diego, Dr. Janet Duffy San Diego, sell house as is San Diego, cash offer San Diego California, we buy houses San Diego" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/sell-my-house-fast-san-diego" },
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-san-diego" },
    { property: "og:title", content: "Sell My House Fast San Diego | Speedy Cash Home Offers" },
    { property: "og:description", content: "Dr. Janet Duffy has purchased thousands of homes in San Diego California and we pay cash fast. Find out how much money you can get today!" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/san-diego-og.jpg" }, // Placeholder image
    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-san-diego" },
    { property: "twitter:title", content: "Sell My House Fast San Diego | Speedy Cash Home Offers" },
    { property: "twitter:description", content: "Dr. Janet Duffy has purchased thousands of homes in San Diego California and we pay cash fast. Find out how much money you can get today!" },
    { property: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/san-diego-twitter.jpg" }, // Placeholder image
  ];
};

export const loader: Route.LoaderFunction = async () => {
  return {
    businessName: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
    phoneNumber: "(702) 555-0123",
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

export default function SellMyHouseFastSanDiego() {
  const { businessName, phoneNumber, email, address, rating } = Route.useLoaderData<typeof loader>();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": "Dr. Janet Duffy has purchased thousands of homes in San Diego California and we pay cash fast. Find out how much money you can get today!",
    "url": "https://www.speedycashhomeoffers.com/sell-my-house-fast-san-diego",
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
      "name": "San Diego",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My House Fast San Diego
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of homes in San Diego California and we pay cash fast. 
              Find out how much money you can get today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get My Free Quote
              </button>
              <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
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
              <div className="text-4xl font-bold text-green-600 mb-2">4.9</div>
              <p className="text-gray-600">Star Rating</p>
              <p className="text-sm text-gray-500">From 500+ happy reviews on BBB, Google, and Yelp</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <p className="text-gray-600">Years of Experience</p>
              <p className="text-sm text-gray-500">We have helped 1,000s of home sellers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$20K</div>
              <p className="text-gray-600">Cash Advance</p>
              <p className="text-sm text-gray-500">Receive your cash upfront and close confidently</p>
            </div>
          </div>
        </div>
      </section>

      {/* San Diego Market Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key San Diego Real Estate Stats and Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">San Diego Market Overview</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• San Diego County has a population of approximately 3.3 million people.</li>
                <li>• The current median house price in San Diego County is approximately $850,000.</li>
                <li>• Major cities include San Diego, Chula Vista, Oceanside, Escondido, and Carlsbad.</li>
                <li>• San Diego is home to major military installations including Naval Base San Diego.</li>
                <li>• The county has a strong biotechnology and healthcare sector.</li>
                <li>• The median household income is around $78,000.</li>
                <li>• San Diego offers 70 miles of coastline with beautiful beaches.</li>
                <li>• The county has excellent universities including UC San Diego.</li>
                <li>• Major employers include Qualcomm, Illumina, and various biotech companies.</li>
                <li>• San Diego has a diverse economy including tourism, military, and technology.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Why San Diego is Great for Real Estate</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>Perfect Weather:</strong> Year-round mild climate with 70+ miles of coastline.</li>
                <li>• <strong>Biotech Hub:</strong> Major biotechnology and life sciences industry.</li>
                <li>• <strong>Military Presence:</strong> Strong military economy with multiple bases.</li>
                <li>• <strong>Tourism:</strong> World-class attractions including San Diego Zoo and SeaWorld.</li>
                <li>• <strong>Outdoor Recreation:</strong> Beaches, mountains, deserts, and parks.</li>
                <li>• <strong>Excellent Schools:</strong> Top-rated public and private schools.</li>
                <li>• <strong>Cultural Attractions:</strong> Museums, theaters, and cultural centers.</li>
                <li>• <strong>Job Market:</strong> Strong employment opportunities across multiple industries.</li>
                <li>• <strong>Master-Planned Communities:</strong> Well-designed neighborhoods and communities.</li>
                <li>• <strong>Investment Potential:</strong> Strong rental market and appreciation potential.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* San Diego Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Serve All San Diego County Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">North County</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Oceanside</li>
                <li>• Carlsbad</li>
                <li>• Vista</li>
                <li>• San Marcos</li>
                <li>• Escondido</li>
                <li>• Poway</li>
                <li>• Rancho Bernardo</li>
                <li>• Encinitas</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">Central San Diego</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• San Diego</li>
                <li>• La Jolla</li>
                <li>• Pacific Beach</li>
                <li>• Mission Beach</li>
                <li>• Hillcrest</li>
                <li>• North Park</li>
                <li>• South Park</li>
                <li>• Downtown</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">South County</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Chula Vista</li>
                <li>• National City</li>
                <li>• Imperial Beach</li>
                <li>• Coronado</li>
                <li>• Bonita</li>
                <li>• Spring Valley</li>
                <li>• Lemon Grove</li>
                <li>• El Cajon</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy As-Is Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Buy Houses As-Is in San Diego
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We buy houses in San Diego in Any Condition As-Is and fast for cash! Some of the ways we help you are:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
              <p className="text-gray-600">We leverage our local San Diego real estate expertise that understands the market.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Cash Offers</h3>
              <p className="text-gray-600">Receive an almost instant cash home buyer offer that's better than any other company.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Showings</h3>
              <p className="text-gray-600">Forget having strange people moving through your home at inconvenient times.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Repairs Needed</h3>
              <p className="text-gray-600">Forget about expensive repairs, unrealistic buyers, or bothersome inspections.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Contractor Issues</h3>
              <p className="text-gray-600">Skip fixing up any repairs or dealing with predatory contractors.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            What Our San Diego Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">MN</span>
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
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited home in La Jolla so easy and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">SS</span>
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
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">DF</span>
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
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your San Diego Home Fast?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of homes in San Diego California and we pay cash fast. 
            Find out how much money you can get today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
