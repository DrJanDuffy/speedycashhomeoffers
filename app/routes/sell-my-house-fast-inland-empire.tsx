import { useLoaderData } from "react-router";
import Breadcrumbs from "~/components/Breadcrumbs";
import RealScoutErrorBoundary from "~/components/RealScoutErrorBoundary";
import RealScoutListings from "~/components/RealScoutListings";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/sell-my-house-fast-inland-empire";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sell My House Fast Inland Empire | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Sell house fast Inland Empire! Dr. Janet Duffy pays cash for homes in San Bernardino, Riverside, Fontana. No fees, no repairs, fast closing. Get offer today!",
    },
    {
      name: "keywords",
      content:
        "sell house fast Inland Empire, cash home buyers Inland Empire, Dr. Janet Duffy Inland Empire, sell house as is Inland Empire, cash offer Inland Empire California, we buy houses Inland Empire",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.speedycashhomeoffers.com/sell-my-house-fast-inland-empire",
    },
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    {
      property: "og:url",
      content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-inland-empire",
    },
    { property: "og:title", content: "Sell My House Fast Inland Empire | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Dr. Janet Duffy has purchased thousands of homes in Inland Empire California and we pay cash fast. Find out how much money you can get today!",
    },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/inland-empire-og.jpg",
    }, // Placeholder image
    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    {
      property: "twitter:url",
      content: "https://www.speedycashhomeoffers.com/sell-my-house-fast-inland-empire",
    },
    {
      property: "twitter:title",
      content: "Sell My House Fast Inland Empire | Speedy Cash Home Offers",
    },
    {
      property: "twitter:description",
      content:
        "Dr. Janet Duffy has purchased thousands of homes in Inland Empire California and we pay cash fast. Find out how much money you can get today!",
    },
    {
      property: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/inland-empire-twitter.jpg",
    }, // Placeholder image
  ];
};

export const loader = async () => {
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

export default function SellMyHouseFastInlandEmpire() {
  const { businessName, phoneNumber, email, address, rating } = useLoaderData<typeof loader>();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    description:
      "Dr. Janet Duffy has purchased thousands of homes in Inland Empire California and we pay cash fast. Find out how much money you can get today!",
    url: "https://www.speedycashhomeoffers.com/sell-my-house-fast-inland-empire",
    telephone: phoneNumber,
    email: email,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Inland Empire",
      containedInPlace: {
        "@type": "State",
        name: "California",
      },
    },
    serviceType: "Cash Home Buying",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
    },
    sameAs: [
      "https://www.facebook.com/speedycashhomeoffers", // Placeholder social links
      "https://twitter.com/speedycashhome",
      "https://www.linkedin.com/company/speedycashhomeoffers",
    ],
  };

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
            name: "Sell My House Fast Inland Empire | Speedy Cash Home Offers",
            description:
              "Sell house fast Inland Empire! Dr. Janet Duffy pays cash for homes in San Bernardino, Riverside, Fontana. No fees, no repairs, fast closing. Get offer today!",
            url: "https://www.speedycashhomeoffers.com/sell-my-house-fast-inland-empire",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "LocalBusiness",
              name: businessName,
            },
            spatialCoverage: {
              "@type": "AdministrativeArea",
              name: "Inland Empire",
              containedInPlace: {
                "@type": "State",
                name: "California",
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sell My House Fast Inland Empire
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of homes in Inland Empire California and we
              pay cash fast. Find out how much money you can get today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get My Free Quote
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors text-center"
                aria-label={`Call ${businessName} at ${phoneNumber}`}
              >
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
              <div className="text-4xl font-bold text-red-600 mb-2">4.9</div>
              <p className="text-gray-600">Star Rating</p>
              <p className="text-sm text-gray-500">
                From 500+ happy reviews on BBB, Google, and Yelp
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <p className="text-gray-600">Years of Experience</p>
              <p className="text-sm text-gray-500">We have helped 1,000s of home sellers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">$20K</div>
              <p className="text-gray-600">Cash Advance</p>
              <p className="text-sm text-gray-500">
                Receive your cash upfront and close confidently
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inland Empire Market Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Key Inland Empire Real Estate Stats and Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Inland Empire Market Overview
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • The Inland Empire includes Riverside and San Bernardino counties with 4.6
                  million people.
                </li>
                <li>
                  • The current median house price in San Bernardino County is approximately
                  $550,000.
                </li>
                <li>
                  • Major cities include San Bernardino, Fontana, Rancho Cucamonga, Ontario, and
                  Victorville.
                </li>
                <li>
                  • The region is a major logistics and distribution hub for Southern California.
                </li>
                <li>• The area has strong healthcare, education, and manufacturing sectors.</li>
                <li>• The median household income is around $65,000.</li>
                <li>• The Inland Empire offers diverse landscapes from mountains to desert.</li>
                <li>• The region has excellent universities including Cal State San Bernardino.</li>
                <li>• Major employers include Amazon, FedEx, and various logistics companies.</li>
                <li>
                  • The Inland Empire has a diverse economy including logistics, healthcare, and
                  agriculture.
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">
                Why Inland Empire is Great for Real Estate
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  • <strong>Affordable Housing:</strong> Lower cost of living compared to coastal
                  areas.
                </li>
                <li>
                  • <strong>Growing Economy:</strong> Strong logistics, healthcare, and education
                  sectors.
                </li>
                <li>
                  • <strong>Strategic Location:</strong> Central location between LA and Las Vegas.
                </li>
                <li>
                  • <strong>Outdoor Recreation:</strong> Mountains, deserts, and recreational areas.
                </li>
                <li>
                  • <strong>Educational Opportunities:</strong> Cal State San Bernardino and
                  excellent public schools.
                </li>
                <li>
                  • <strong>Job Market:</strong> Growing employment opportunities in multiple
                  industries.
                </li>
                <li>
                  • <strong>Cultural Attractions:</strong> Museums, theaters, and cultural centers.
                </li>
                <li>
                  • <strong>Master-Planned Communities:</strong> Well-designed neighborhoods and
                  communities.
                </li>
                <li>
                  • <strong>Transportation:</strong> Access to major highways and transportation
                  hubs.
                </li>
                <li>
                  • <strong>Investment Potential:</strong> Strong rental market and appreciation
                  potential.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inland Empire Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Serve All Inland Empire Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Central Inland Empire</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• San Bernardino</li>
                <li>• Fontana</li>
                <li>• Rancho Cucamonga</li>
                <li>• Ontario</li>
                <li>• Chino</li>
                <li>• Chino Hills</li>
                <li>• Montclair</li>
                <li>• Upland</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">High Desert</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Victorville</li>
                <li>• Hesperia</li>
                <li>• Apple Valley</li>
                <li>• Adelanto</li>
                <li>• Barstow</li>
                <li>• Twentynine Palms</li>
                <li>• Yucca Valley</li>
                <li>• Joshua Tree</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">East Valley</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Redlands</li>
                <li>• Loma Linda</li>
                <li>• Highland</li>
                <li>• Yucaipa</li>
                <li>• Calimesa</li>
                <li>• Beaumont</li>
                <li>• Banning</li>
                <li>• Colton</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* We Buy As-Is Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Buy Houses As-Is in Inland Empire
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
            We buy houses in Inland Empire in Any Condition As-Is and fast for cash! Some of the
            ways we help you are:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-xl font-semibold mb-2">Local Market Expertise</h3>
              <p className="text-gray-600">
                We leverage our local Inland Empire real estate expertise that understands the
                market.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Cash Offers</h3>
              <p className="text-gray-600">
                Receive an almost instant cash home buyer offer that's better than any other
                company.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Showings</h3>
              <p className="text-gray-600">
                Forget having strange people moving through your home at inconvenient times.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-xl font-semibold mb-2">No Repairs Needed</h3>
              <p className="text-gray-600">
                Forget about expensive repairs, unrealistic buyers, or bothersome inspections.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">No Contractor Issues</h3>
              <p className="text-gray-600">
                Skip fixing up any repairs or dealing with predatory contractors.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
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
            What Our Inland Empire Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-semibold">MN</span>
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
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited
                home in Rancho Cucamonga so easy and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-semibold">SS</span>
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
                "I found the company is true to their words regarding helping you with your
                property. The process was smooth and transparent."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-semibold">DF</span>
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
                "Dr. Duffy's team was absolutely amazing throughout, always professional, friendly,
                and helpful. I highly recommend them."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your Inland Empire Home Fast?</h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of homes in Inland Empire California and we pay
            cash fast. Find out how much money you can get today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <a
              href={`tel:${phoneNumber}`}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors"
            >
              Call {phoneNumber}
            </a>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Find Your Perfect Property in Inland Empire
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Featured Properties in Inland Empire
          </h2>
          <RealScoutErrorBoundary>
            <RealScoutListings />
          </RealScoutErrorBoundary>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="sellers" />
    </div>
  );
}
