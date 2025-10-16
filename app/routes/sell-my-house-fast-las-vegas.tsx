import type { Route } from "./+types/sell-my-house-fast-las-vegas";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sell My House Fast Las Vegas | Speedy Cash Home Offers" },
    { name: "description", content: "Dr. Janet Duffy specializes in North/East Las Vegas distressed properties (89031, 89032, 89110, 89142). We pay cash fast for $300-450K homes. Find out how much money you can get today!" },
    { name: "keywords", content: "sell house fast Las Vegas, North Las Vegas cash buyers, East Vegas distressed properties, 89031 89032 89110 89142, cash home buyers Las Vegas, Dr. Janet Duffy Las Vegas, sell house as is Las Vegas, cash offer Las Vegas Nevada, we buy houses Las Vegas, $300-450K homes Las Vegas" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/sell-my-house-fast-las-vegas" },
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-las-vegas" },
    { property: "og:title", content: "Sell My House Fast Las Vegas | Speedy Cash Home Offers" },
    { property: "og:description", content: "Dr. Janet Duffy specializes in North/East Las Vegas distressed properties (89031, 89032, 89110, 89142). We pay cash fast for $300-450K homes. Find out how much money you can get today!" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/las-vegas-og.jpg" }, // Placeholder image
    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-las-vegas" },
    { property: "twitter:title", content: "Sell My House Fast Las Vegas | Speedy Cash Home Offers" },
    { property: "twitter:description", content: "Dr. Janet Duffy specializes in North/East Las Vegas distressed properties (89031, 89032, 89110, 89142). We pay cash fast for $300-450K homes. Find out how much money you can get today!" },
    { property: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/las-vegas-twitter.jpg" }, // Placeholder image
  ];
};

export const loader: Route.LoaderFunction = async () => {
  return {
    businessName: "Speedy Cash Home Offers",
    phoneNumber: "(702) 555-0123",
    email: "info@speedycashhomeoffers.com",
    address: {
      streetAddress: "1234 Las Vegas Blvd",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89101",
      addressCountry: "US",
    },
    rating: {
      ratingValue: "4.9",
      reviewCount: "500",
    },
  };
};

export default function SellMyHouseFastLasVegas() {
  const { businessName, phoneNumber, email, address, rating } = Route.useLoaderData<typeof loader>();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessName,
    "description": "Dr. Janet Duffy has purchased thousands of homes in Las Vegas Nevada and we pay cash fast. Find out how much money you can get today!",
    "url": "https://www.speedycashhomeoffers.com/sell-my-house-fast-las-vegas",
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
      "name": "Las Vegas",
      "containedInPlace": {
        "@type": "State",
        "name": "Nevada"
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
      <section className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My House Fast Las Vegas
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy specializes in North/East Las Vegas distressed properties (89031, 89032, 89110, 89142). 
              We pay cash fast for $300-450K homes. Find out how much money you can get today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get My Free Quote
              </button>
              <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors">
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
              <div className="text-4xl font-bold text-yellow-600 mb-2">4.9</div>
              <p className="text-gray-600">Star Rating</p>
              <p className="text-sm text-gray-500">From 500+ happy reviews on BBB, Google, and Yelp</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">25+</div>
              <p className="text-gray-600">Years of Experience</p>
              <p className="text-sm text-gray-500">We have helped 1,000s of home sellers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">$20K</div>
              <p className="text-gray-600">Cash Advance</p>
              <p className="text-sm text-gray-500">Receive your cash upfront and close confidently</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy Houses As-Is Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              We Buy Houses As-Is in North/East Las Vegas NV
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We specialize in North/East Las Vegas distressed properties in ZIP codes 89031, 89032, 89110, and 89142. We buy houses in these areas in Any Condition As-Is and fast for cash! Our target price range is $300-450K where we find the best opportunities:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
              <p className="text-gray-600">We leverage our local Las Vegas real estate expertise that understands the market.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Cash Offers</h3>
              <p className="text-gray-600">Receive an almost instant cash home buyer offer that's better than any other company.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Showings</h3>
              <p className="text-gray-600">Forget having strange people moving through your home at inconvenient times.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Repairs Needed</h3>
              <p className="text-gray-600">Forget about expensive repairs, unrealistic buyers, or bothersome inspections.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Contractor Issues</h3>
              <p className="text-gray-600">Skip fixing up any repairs or dealing with predatory contractors.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Timeline</h3>
              <p className="text-gray-600">Choose a closing date that fits your timeline.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus ZIP Codes Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Focus ZIP Codes: North/East Las Vegas
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We specialize in these specific Las Vegas ZIP codes where we find the highest concentration of distressed properties and best investment opportunities in the $300-450K price range.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">North Las Vegas (89031, 89032)</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>89031:</strong> North Las Vegas - High distressed inventory, excellent margins</li>
                <li>• <strong>89032:</strong> North Las Vegas - Growing area with investment potential</li>
                <li>• Both areas offer the most distressed inventory in Las Vegas</li>
                <li>• Best margins for cash buyers in this price range</li>
                <li>• Existing presence and local expertise in these neighborhoods</li>
                <li>• Target 200+ properties available monthly in default</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">East Las Vegas (89110, 89142)</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>89110:</strong> East Las Vegas - Prime distressed property area</li>
                <li>• <strong>89142:</strong> East Las Vegas - Strong investment opportunities</li>
                <li>• High concentration of distressed properties</li>
                <li>• Manageable competition for cash buyers</li>
                <li>• Excellent location for Las Vegas market entry</li>
                <li>• Consistent inventory of $300-450K properties</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-yellow-100 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Why These ZIP Codes?</h3>
              <p className="text-gray-700">
                After extensive market analysis, these four ZIP codes represent Las Vegas's best opportunities for cash home buyers. 
                They offer the highest concentration of distressed properties, manageable competition, and excellent margins in our target $300-450K price range. 
                Dr. Janet Duffy has established a strong presence in these areas, making us the trusted choice for homeowners looking to sell fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Market Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Las Vegas Real Estate Stats and Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Las Vegas Market Overview</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Las Vegas is the largest city in Nevada with a population of approximately 2.2 million in the metro area.</li>
                <li>• The current median house price in Las Vegas is approximately $425,000.</li>
                <li>• Las Vegas has experienced rapid growth, making it one of the fastest-growing metropolitan areas in the U.S.</li>
                <li>• The median income in Las Vegas is $58,377, providing good affordability compared to other major cities.</li>
                <li>• Home prices in Las Vegas have seen steady appreciation over the past decade.</li>
                <li>• The Las Vegas housing market offers excellent opportunities for both buyers and sellers.</li>
                <li>• Rental prices in Las Vegas average around $1,400 per month for apartments.</li>
                <li>• Las Vegas has a diverse economy beyond gaming, including technology, healthcare, and tourism.</li>
                <li>• The city offers no state income tax, making it attractive to residents and businesses.</li>
                <li>• Las Vegas has a strong job market with opportunities in entertainment, hospitality, and emerging tech sectors.</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Why Las Vegas is Great for Real Estate</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• <strong>No State Income Tax:</strong> Nevada residents pay no state income tax, saving thousands annually.</li>
                <li>• <strong>Affordable Living:</strong> Lower cost of living compared to California and other major metros.</li>
                <li>• <strong>Growing Economy:</strong> Diversified economy beyond gaming with tech and healthcare sectors.</li>
                <li>• <strong>Tourism Industry:</strong> Strong hospitality sector provides stable employment opportunities.</li>
                <li>• <strong>Business Friendly:</strong> Nevada offers business-friendly regulations and tax incentives.</li>
                <li>• <strong>Entertainment Capital:</strong> World-class entertainment and dining options.</li>
                <li>• <strong>Outdoor Recreation:</strong> Access to Red Rock Canyon, Lake Mead, and mountain activities.</li>
                <li>• <strong>Airport Hub:</strong> McCarran International Airport provides easy access to destinations worldwide.</li>
                <li>• <strong>New Construction:</strong> Many new developments and master-planned communities.</li>
                <li>• <strong>Investment Opportunities:</strong> Strong rental market and potential for appreciation.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Cash Buyer Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Select a Cash Home Buyer Like Speedy Cash Home Offers?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Quickly Get Needed Cash in Your Hands</h3>
              <p className="text-gray-600 mb-4">
                A traditional real estate sale takes a long time. In fact, the average time is over 1 month before an offer is accepted. 
                When you need money in an emergency that is just too long.
              </p>
              <p className="text-gray-600">
                The best way to sell your property fast is to work with cash buyers like Speedy Cash Home Offers because they can 
                finish the purchase in just 7-14 days.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">We Will Buy Your House As-Is</h3>
              <p className="text-gray-600 mb-4">
                There are any number of problems that can lead to a huge problem when you list real estate for sale. We buy houses 
                as is and in any condition and do not require you to make any updates or repairs. We don't even require you to clean up.
              </p>
              <p className="text-gray-600">
                Below are examples of the types of homes we pay cash for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy As-Is Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Buy As-Is
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            Properties can bring an abundance of issues that become a seller's worst nightmare at listing time. 
            We buy houses in any condition and do not require sellers to make repairs or updates. Here are some examples 
            of the kinds of homes we sell for cash:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Outdated or old homes",
              "Storm damaged homes", 
              "Homes with Pest infestations",
              "Homes with lots of junk or full of trash",
              "Houses that need to be repaired",
              "Rentals with tenant issues",
              "Incomplete construction or renovations",
              "Foreclosure properties",
              "Divorce situations"
            ].map((item, index) => (
              <div key={index} className="flex items-center bg-gray-50 rounded-lg p-4">
                <svg className="w-6 h-6 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Most buyers or sellers prefer not to deal with these kinds of issues when it comes time to sell. 
              Speedy Cash Home Offers will pay you cash fast and will complete the process without any work or fees to your family.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Your Privacy is Safe and Secure</h3>
              <p className="text-gray-600">
                If you wish to be discreet a large for sale sign and MLS listings on Zillow will announce to everyone your property 
                is potentially vacant. Criminals may then make it a target. Likewise showing your neighbors you could be in foreclosure 
                is not really a pleasant feeling.
              </p>
              <p className="text-gray-600 mt-4">
                When you allow Speedy Cash Home Offers to buy your home for cash the entire process is discreet and quick.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-yellow-600">Get Top Dollar Paid with Zero Commissions or Fees</h3>
              <p className="text-gray-600">
                We will give you our highest price in an off-market cash offer so you can get as most money possible no matter the condition. 
                Our offers consider the condition, location, repairs needed and more. This is so you can have a fair sale without any closing costs.
              </p>
              <p className="text-gray-600 mt-4">
                Just accept our offer and move on your time frame and begin your fresh start.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Las Vegas Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-semibold">MN</span>
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
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited home in Las Vegas so easy and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-semibold">SS</span>
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
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-semibold">DF</span>
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Home Selling FAQs
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What are the benefits of working with cash home buyers in Las Vegas?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Get your cash payout in as quick as 7 days.</li>
                <li>• Skip making any repairs.</li>
                <li>• Avoid foreclosure in Las Vegas.</li>
                <li>• Zero costs for closing.</li>
                <li>• No one will know that you're selling.</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                How do you figure out the value of my Las Vegas property?
              </h3>
              <p className="text-gray-600">
                We assess many factors of your property and calculate how much your house is worth to us in its current condition. 
                Request a hassle free no obligation cash offer today to see how much we would pay you for your home.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                How long do cash deals take?
              </h3>
              <p className="text-gray-600">
                Most transactions take 1-2 weeks but can be done in as quickly as seven days. However, you can choose for a 
                longer time period if that works better for you.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Do I have to pay any fees to sell my house fast for cash?
              </h3>
              <p className="text-gray-600">
                When you use Speedy Cash Home Offers there are no closing costs or fees at all. Zero. Zilch.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Do you offer cash offers for houses in all conditions?
              </h3>
              <p className="text-gray-600">
                Yes, we buy any home in any condition in Las Vegas Nevada and the surrounding cities. We do not require any 
                cleaning, repairing, or upgrading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your Las Vegas Home Fast?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of homes in Las Vegas Nevada and we pay cash fast. 
            Find out how much money you can get today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <a href={`tel:${phoneNumber}`} className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-yellow-600 transition-colors">
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
