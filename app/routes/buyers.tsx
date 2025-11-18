import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/buyers";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Find Your Dream Home | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Discover your perfect Las Vegas home with Dr. Janet Duffy. Expert guidance, personalized service, and access to exclusive listings.",
    },
    {
      name: "keywords",
      content:
        "buy house Las Vegas, Las Vegas homes for sale, real estate buyers, home buying Las Vegas, Dr Janet Duffy buyers",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/buyers" },
    { property: "og:title", content: "Find Your Dream Home | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Discover your perfect Las Vegas home with Dr. Janet Duffy. Expert guidance, personalized service, and access to exclusive listings.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/buyers" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/buyers-og-image.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Find Your Dream Home | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Discover your perfect Las Vegas home with Dr. Janet Duffy. Expert guidance and personalized service.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/buyers-twitter-image.jpg",
    },
  ];
};

export default function Buyers() {
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
            name: "Find Your Dream Home | Speedy Cash Home Offers",
            description:
              "Let Dr. Janet Duffy guide you to your perfect Las Vegas home. Expert market knowledge, personalized service, and exclusive access to the best properties.",
            url: "https://www.speedycashhomeoffers.com/buyers",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "Service",
              name: "Real Estate Buyer Services",
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Home</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Let Dr. Janet Duffy guide you to your perfect Las Vegas home. Expert market knowledge,
              personalized service, and exclusive access to the best properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Start Your Search
              </a>
              <a
                href="tel:(702) 500-1981"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
                aria-label="Call Dr. Janet Duffy at (702) 500-1981"
              >
                Get Pre-Approved
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Find Your Perfect Home
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Search Available Properties
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-6">
              Contact us to search for available properties in your area.
            </p>
            <a
              href="/contact"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Contact Us to Search Properties
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How We Help You Buy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Property Search</h3>
              <p className="text-gray-600">
                Access to exclusive listings and off-market opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
              <p className="text-gray-600">
                Comprehensive market insights and property valuations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Neighborhood Tours</h3>
              <p className="text-gray-600">
                Personalized tours of{" "}
                <a href="/neighborhoods" className="text-green-600 hover:text-green-800 underline">
                  Las Vegas neighborhoods
                </a>{" "}
                and communities.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Negotiation</h3>
              <p className="text-gray-600">Expert negotiation to get you the best deal possible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Featured Properties for Buyers
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Available Homes for Sale
          </h2>
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Browse our available properties or contact us for personalized property search assistance.
            </p>
            <a
              href="/contact"
              className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              View Available Properties
            </a>
          </div>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Work With Dr. Janet Duffy?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                25+ Years of Las Vegas Market Expertise
              </h3>
              <p className="text-gray-600 mb-4">
                <a href="/about" className="text-green-600 hover:text-green-800 underline">
                  Dr. Janet Duffy
                </a>{" "}
                brings over 25 years of real estate experience to every home search. Her deep
                understanding of{" "}
                <a href="/neighborhoods" className="text-green-600 hover:text-green-800 underline">
                  Las Vegas neighborhoods
                </a>
                , market trends, and property values means you'll get expert guidance throughout
                your home buying journey. She knows which neighborhoods are appreciating, which
                areas offer the best value, and what to look for in a property that will serve you
                well long-term.
              </p>
              <p className="text-gray-600">
                With a Ph.D. in Real Estate Economics, Dr. Duffy combines academic knowledge with
                practical experience to help you make informed decisions. She understands market
                dynamics, pricing strategies, and negotiation tactics that can save you money and
                help you find the perfect home. Learn more about{" "}
                <a href="/about" className="text-green-600 hover:text-green-800 underline">
                  her background and expertise
                </a>
                .
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Personalized Service and Attention
              </h3>
              <p className="text-gray-600 mb-4">
                Unlike large real estate agencies where you might be just another client, Dr. Duffy
                provides personalized, one-on-one service to every buyer. She takes time to
                understand your needs, preferences, budget, and lifestyle goals to find homes that
                truly match what you're looking for. You'll work directly with Dr. Duffy throughout
                the process, ensuring consistent communication and personalized attention.
              </p>
              <p className="text-gray-600">
                Her commitment to client satisfaction means she'll go above and beyond to help you
                find your dream home. From initial search through closing and beyond, you'll have a
                trusted advisor who genuinely cares about your success and happiness in your new
                home.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Access to Exclusive Listings
              </h3>
              <p className="text-gray-600 mb-4">
                Through her extensive network and industry connections, Dr. Duffy often has access
                to properties before they hit the public market. This gives you first access to some
                of the best homes in Las Vegas, increasing your chances of finding exactly what you
                want. Off-market listings and pocket listings can offer better deals and less
                competition than publicly listed properties.
              </p>
              <p className="text-gray-600">
                Her relationships with other real estate professionals, investors, and property
                owners throughout Las Vegas mean you'll see opportunities that other buyers might
                miss. This insider access can be the difference between finding a good home and
                finding your perfect home.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Expert Negotiation Skills
              </h3>
              <p className="text-gray-600 mb-4">
                With decades of experience in real estate transactions, Dr. Duffy is an expert
                negotiator who knows how to get you the best deal possible. She understands market
                conditions, property values, and seller motivations, allowing her to craft offers
                and negotiate terms that work in your favor. Her negotiation skills have saved
                clients thousands of dollars while helping them secure their dream homes.
              </p>
              <p className="text-gray-600">
                Whether you're competing in a multiple-offer situation or negotiating repairs after
                inspection, Dr. Duffy's expertise ensures you're represented by someone who knows
                how to navigate complex situations and achieve favorable outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Buying Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Your Home Buying Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Buying a home is one of life's biggest decisions, and Dr. Janet Duffy is here to guide
              you through every step of the process. From initial consultation to closing day and
              beyond, you'll have expert support and personalized service that makes buying a home
              in Las Vegas smooth and stress-free.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Initial Consultation and Needs Assessment
                </h3>
                <p className="text-gray-600">
                  Your journey begins with a comprehensive consultation where Dr. Duffy learns about
                  your lifestyle, preferences, budget, and goals. She'll help you understand the Las
                  Vegas market, different neighborhoods, and what you can expect at various price
                  points. This initial meeting sets the foundation for a successful home search
                  tailored specifically to your needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Pre-Approval and Financing Guidance
                </h3>
                <p className="text-gray-600">
                  Before you start looking at homes, Dr. Duffy will help you get pre-approved for a
                  mortgage. She works with trusted lenders who understand the Las Vegas market and
                  can help you secure the best financing terms. Being pre-approved not only shows
                  sellers you're serious, but it also helps you focus your search on properties
                  within your budget.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Property Search and Viewings
                </h3>
                <p className="text-gray-600">
                  Using her extensive knowledge of Las Vegas neighborhoods and access to exclusive
                  listings, Dr. Duffy will curate a selection of properties that match your
                  criteria. She'll schedule viewings at your convenience and accompany you to each
                  property, pointing out features, potential issues, and opportunities you might not
                  notice on your own. Her expertise helps you see beyond staging and understand each
                  property's true value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Making an Offer and Negotiations
                </h3>
                <p className="text-gray-600">
                  When you find the right home, Dr. Duffy will help you craft a competitive offer
                  based on market analysis, comparable sales, and property condition. She'll handle
                  all negotiations with the seller's agent, working to get you the best price and
                  terms possible. Her negotiation expertise often results in better deals than
                  buyers could achieve on their own.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Inspections and Due Diligence
                </h3>
                <p className="text-gray-600">
                  Once your offer is accepted, Dr. Duffy will coordinate inspections, appraisals,
                  and all necessary due diligence. She works with trusted inspectors and
                  professionals who provide thorough, honest assessments. If issues are discovered,
                  she'll help you negotiate repairs or credits, ensuring you're protected throughout
                  the process.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Closing and Beyond</h3>
                <p className="text-gray-600">
                  Dr. Duffy will be with you every step of the way through closing, ensuring all
                  paperwork is handled correctly and the process goes smoothly. But her service
                  doesn't end at closing - she's available for questions, recommendations for
                  contractors or service providers, and ongoing support as you settle into your new
                  Las Vegas home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Neighborhoods Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Popular Las Vegas Neighborhoods for Buyers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Summerlin</h3>
              <p className="text-gray-600 mb-4">
                Summerlin is one of Las Vegas's most desirable master-planned communities, offering
                beautiful homes, excellent schools, and abundant amenities. With golf courses,
                parks, shopping centers, and a strong sense of community, Summerlin appeals to
                families and professionals seeking a high quality of life.
              </p>
              <p className="text-gray-600">
                Average home prices range from $400,000 to over $1 million, with a mix of
                single-family homes, townhomes, and luxury estates. The area features top-rated
                schools, low crime rates, and easy access to the Las Vegas Strip and downtown.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Henderson</h3>
              <p className="text-gray-600 mb-4">
                Henderson offers a family-friendly atmosphere with excellent schools, parks, and
                recreational facilities. As Nevada's second-largest city, Henderson provides a
                suburban feel while remaining close to Las Vegas employment centers and
                entertainment.
              </p>
              <p className="text-gray-600">
                Home prices are generally more affordable than Summerlin, with options ranging from
                $300,000 to $800,000. The area is known for its safety, community events, and strong
                property values. Henderson is particularly popular with families and retirees.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Green Valley</h3>
              <p className="text-gray-600 mb-4">
                Green Valley is an established Henderson community known for mature neighborhoods,
                tree-lined streets, and convenient location. The area offers a mix of older,
                well-maintained homes and newer developments, providing options for various budgets
                and preferences.
              </p>
              <p className="text-gray-600">
                With home prices typically ranging from $350,000 to $600,000, Green Valley offers
                excellent value. The area features good schools, shopping centers, and easy access
                to major employment centers. It's particularly attractive to first-time buyers and
                those seeking established neighborhoods.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">North Las Vegas</h3>
              <p className="text-gray-600 mb-4">
                North Las Vegas offers some of the most affordable housing options in the Las Vegas
                area, making it attractive to first-time buyers and those seeking value. The area
                has seen significant growth and development in recent years, with new shopping
                centers, schools, and infrastructure improvements.
              </p>
              <p className="text-gray-600">
                Home prices typically range from $250,000 to $450,000, offering excellent
                affordability. While the area is still developing, it provides good opportunities
                for buyers seeking newer homes at lower price points. Dr. Duffy can help you
                identify the best areas within North Las Vegas for your needs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Southwest Las Vegas</h3>
              <p className="text-gray-600 mb-4">
                Southwest Las Vegas offers a mix of established neighborhoods and newer
                developments, with good access to the Las Vegas Strip, McCarran Airport, and major
                employment centers. The area features a variety of housing options from affordable
                starter homes to luxury properties.
              </p>
              <p className="text-gray-600">
                Home prices range from $300,000 to $700,000, with many options for different
                budgets. The area is popular with professionals working on or near the Strip, as
                well as families seeking good schools and convenient amenities. Southwest Las Vegas
                offers good value and strong potential for appreciation.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Downtown Las Vegas</h3>
              <p className="text-gray-600 mb-4">
                Downtown Las Vegas has undergone significant revitalization in recent years,
                attracting buyers seeking urban living, walkability, and proximity to entertainment
                and employment. The area offers condos, lofts, and renovated historic homes
                alongside new developments.
              </p>
              <p className="text-gray-600">
                Home prices range from $200,000 for condos to over $500,000 for luxury lofts and
                renovated homes. Downtown appeals to young professionals, empty nesters, and those
                seeking a vibrant urban lifestyle. The area offers unique character and strong
                potential for appreciation as development continues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8">
            Let Dr. Janet Duffy help you navigate the Las Vegas real estate market with confidence.
            With over 25 years of experience and a commitment to personalized service, she'll help
            you find the perfect home that meets your needs, fits your budget, and exceeds your
            expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Start Your Search
            </a>
            <a
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors text-center"
              aria-label="Call Dr. Janet Duffy at (702) 500-1981"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="buyers" />
    </div>
  );
}
