import Breadcrumbs from "~/components/Breadcrumbs";
import type { Route } from "./+types/neighborhoods";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Las Vegas Neighborhoods | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Discover Las Vegas neighborhoods with Dr. Janet Duffy. Explore lifestyle amenities, schools, and community features in Henderson, Summerlin, and more.",
    },
    {
      name: "keywords",
      content:
        "Las Vegas neighborhoods, Henderson, Summerlin, Las Vegas real estate, neighborhood guide, Las Vegas communities",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.speedycashhomeoffers.com/neighborhoods",
    },
    { property: "og:title", content: "Las Vegas Neighborhoods | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Discover Las Vegas neighborhoods with Dr. Janet Duffy. Explore lifestyle amenities, schools, and community features in Henderson, Summerlin, and more.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/neighborhoods" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/neighborhoods-og-image.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Las Vegas Neighborhoods | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Discover Las Vegas neighborhoods with Dr. Janet Duffy. Explore lifestyle amenities, schools, and community features.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/neighborhoods-twitter-image.jpg",
    },
  ];
};

export default function Neighborhoods() {
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
            name: "Las Vegas Neighborhoods | Speedy Cash Home Offers",
            description:
              "Discover Las Vegas neighborhoods with Dr. Janet Duffy. Explore lifestyle amenities, schools, and community features in Henderson, Summerlin, and more.",
            url: "https://www.speedycashhomeoffers.com/neighborhoods",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "Place",
              name: "Las Vegas, Nevada",
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Las Vegas Neighborhoods
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Explore the best neighborhoods in Las Vegas with{" "}
              <a href="/about" className="text-orange-200 hover:text-white underline">
                Dr. Janet Duffy
              </a>
              . Find the perfect community that matches your lifestyle and budget. Whether you're{" "}
              <a href="/buyers" className="text-orange-200 hover:text-white underline">
                buying a home
              </a>{" "}
              or{" "}
              <a href="/sellers" className="text-orange-200 hover:text-white underline">
                selling your property
              </a>
              , we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Explore Neighborhoods
              </a>
              <a
                href="tel:(702) 500-1981"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
                aria-label="Call Dr. Janet Duffy at (702) 500-1981"
              >
                Schedule Tour
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Neighborhoods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Las Vegas Neighborhoods
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Summerlin</h3>
                <p className="text-gray-600 mb-4">
                  Master-planned community with golf courses, shopping, and top-rated schools.
                  Perfect for{" "}
                  <a href="/buyers" className="text-orange-600 hover:text-orange-800 underline">
                    home buyers
                  </a>{" "}
                  seeking quality living.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Avg Home Price:</span>
                    <span className="font-semibold">$650K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Walk Score:</span>
                    <span className="font-semibold">78</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schools:</span>
                    <span className="font-semibold">A+</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Henderson</h3>
                <p className="text-gray-600 mb-4">
                  Family-friendly city with parks, recreation, and excellent amenities. Great for{" "}
                  <a href="/investors" className="text-orange-600 hover:text-orange-800 underline">
                    real estate investors
                  </a>{" "}
                  and families.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Avg Home Price:</span>
                    <span className="font-semibold">$480K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Walk Score:</span>
                    <span className="font-semibold">45</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schools:</span>
                    <span className="font-semibold">A</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Green Valley</h3>
                <p className="text-gray-600 mb-4">
                  Established community with mature trees and convenient location.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Avg Home Price:</span>
                    <span className="font-semibold">$420K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Walk Score:</span>
                    <span className="font-semibold">52</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Schools:</span>
                    <span className="font-semibold">A-</span>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="block w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Lifestyle & Amenities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Top Schools</h3>
              <p className="text-gray-600">
                Excellent public and private schools with high ratings and test scores.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h3 className="text-xl font-semibold mb-2">Shopping & Dining</h3>
              <p className="text-gray-600">
                World-class shopping centers, restaurants, and entertainment venues.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Parks & Recreation</h3>
              <p className="text-gray-600">
                Beautiful parks, hiking trails, and recreational facilities for all ages.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
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
              <h3 className="text-xl font-semibold mb-2">Safety & Security</h3>
              <p className="text-gray-600">
                Low crime rates and gated communities with 24/7 security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Neighborhood Market Insights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Price Trends by Area</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Summerlin</span>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold mr-2">+8.2%</span>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Henderson</span>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold mr-2">+6.8%</span>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Green Valley</span>
                  <div className="flex items-center">
                    <span className="text-green-600 font-semibold mr-2">+5.4%</span>
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Community Features</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Golf Courses</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Community Centers</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Walking Trails</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">Swimming Pools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Neighborhood Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            In-Depth Neighborhood Profiles
          </h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Summerlin: Master-Planned Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Summerlin stands as one of the most prestigious and well-planned communities in Las
                Vegas. Developed by The Howard Hughes Corporation, this 22,500-acre master-planned
                community has been carefully designed to offer residents an exceptional quality of
                life. Summerlin is divided into villages, each with its own character and amenities,
                creating a sense of community while offering variety.
              </p>
              <p className="text-gray-600 mb-4">
                The community features over 150 parks, more than 150 miles of trails, and numerous
                golf courses including TPC Summerlin, home of the PGA Tour's Shriners Hospitals for
                Children Open. Shopping options are abundant, with Downtown Summerlin offering a
                vibrant retail and dining experience, plus the Red Rock Casino Resort and Spa for
                entertainment and gaming.
              </p>
              <p className="text-gray-600">
                Education is a priority in Summerlin, with access to some of the highest-rated
                schools in Nevada. The area is served by the Clark County School District, with many
                schools earning top ratings. Private school options are also available. For
                families, Summerlin offers numerous youth sports programs, community centers, and
                family-friendly events throughout the year.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Henderson: Family-Friendly Living
              </h3>
              <p className="text-gray-600 mb-4">
                Henderson, Nevada's second-largest city, offers a perfect blend of suburban comfort
                and urban convenience. Located just southeast of Las Vegas, Henderson has
                consistently been ranked among the safest cities in America, making it an ideal
                choice for families. The city has invested heavily in parks, recreation facilities,
                and community programs, creating an environment where families can thrive.
              </p>
              <p className="text-gray-600 mb-4">
                The city features over 60 parks, including the beautiful Lake Las Vegas area, which
                offers resort-style living with a man-made lake, golf courses, and luxury amenities.
                Henderson's Green Valley area is particularly popular, offering established
                neighborhoods with mature landscaping, excellent schools, and convenient access to
                shopping and dining.
              </p>
              <p className="text-gray-600">
                Henderson's economy is diverse, with strong employment opportunities in healthcare,
                technology, and manufacturing. The city is home to several major employers and has a
                lower unemployment rate than the national average. For recreation, residents enjoy
                easy access to Lake Mead, the Hoover Dam, and numerous hiking trails in the
                surrounding desert landscape.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Green Valley: Established Excellence
              </h3>
              <p className="text-gray-600 mb-4">
                Green Valley, located within Henderson, represents one of the most established and
                desirable communities in the Las Vegas area. Developed primarily in the 1980s and
                1990s, Green Valley features mature neighborhoods with tree-lined streets,
                well-maintained homes, and a strong sense of community. The area has aged
                gracefully, with property values that have consistently appreciated over the
                decades.
              </p>
              <p className="text-gray-600 mb-4">
                The Green Valley Ranch area, developed more recently, offers newer homes and modern
                amenities while maintaining the established character of the broader Green Valley
                community. The area features the Green Valley Ranch Resort Spa and Casino, providing
                entertainment and dining options, plus the District at Green Valley Ranch, a popular
                shopping and dining destination.
              </p>
              <p className="text-gray-600">
                Green Valley's schools are highly rated, with many earning A and A+ ratings. The
                area is particularly attractive to families seeking established neighborhoods with
                proven track records for property values and quality of life. The mature landscaping
                and community amenities create an environment that feels settled and permanent,
                rather than newly developed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing the Right Neighborhood */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How to Choose the Right Las Vegas Neighborhood
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Choosing the right neighborhood is just as important as choosing the right home. Dr.
              Janet Duffy's 25+ years of Las Vegas real estate experience means she understands the
              nuances of each area and can help you find the neighborhood that best matches your
              lifestyle, budget, and long-term goals.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Consider Your Lifestyle and Priorities
                </h3>
                <p className="text-gray-600">
                  Different neighborhoods cater to different lifestyles. If you're a family with
                  children, you'll prioritize schools, parks, and safety. If you're a young
                  professional, you might value proximity to employment centers, nightlife, and
                  urban amenities. Retirees often seek quiet, low-maintenance communities with
                  access to healthcare and recreational facilities. Dr. Duffy will help you identify
                  neighborhoods that align with your specific lifestyle needs and priorities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Evaluate School Quality and Options
                </h3>
                <p className="text-gray-600">
                  For families, school quality is often the most important factor in neighborhood
                  selection. Las Vegas area schools vary significantly in ratings and performance.
                  Dr. Duffy can help you understand school ratings, test scores, and educational
                  options in different neighborhoods. She'll also help you understand school
                  boundaries and how they might affect your home purchase decision.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Assess Commute Times and Transportation
                </h3>
                <p className="text-gray-600">
                  Las Vegas traffic can be challenging, especially during rush hours. Consider your
                  commute to work, proximity to major employment centers, and access to
                  transportation options. Some neighborhoods offer better access to freeways, while
                  others might require longer commutes. Dr. Duffy understands traffic patterns and
                  can help you evaluate commute times from different neighborhoods to your workplace
                  or other important destinations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Research Property Values and Appreciation Potential
                </h3>
                <p className="text-gray-600">
                  Different neighborhoods have different appreciation rates and property value
                  trends. Some areas have consistently appreciated over time, while others might be
                  more volatile. Dr. Duffy's market expertise allows her to help you understand
                  historical trends and future potential in different neighborhoods, ensuring you
                  make an informed investment decision.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Explore Amenities and Services
                </h3>
                <p className="text-gray-600">
                  Consider what amenities are important to you: shopping centers, restaurants,
                  parks, recreational facilities, healthcare providers, and entertainment options.
                  Different neighborhoods offer different levels of amenities and convenience. Dr.
                  Duffy can help you identify neighborhoods that offer the amenities you value most,
                  whether that's walkability, access to nature, or proximity to entertainment and
                  dining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Neighborhood?</h2>
          <p className="text-xl mb-8">
            Let Dr. Janet Duffy help you discover the Las Vegas neighborhood that's right for you.
            With her extensive knowledge of local communities, market trends, and neighborhood
            characteristics, she'll guide you to the area that best matches your lifestyle, budget,
            and long-term goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Schedule Neighborhood Tour
            </a>
            <a
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-orange-600 transition-colors text-center"
              aria-label="Call Dr. Janet Duffy at (702) 500-1981"
            >
              Get Market Report
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
