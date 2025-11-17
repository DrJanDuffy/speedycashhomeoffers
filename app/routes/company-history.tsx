import type { Route } from "./+types/company-history";
import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Company History | Speedy Cash Home Offers" },
    { name: "description", content: "Learn about the history of Speedy Cash Home Offers, founded by Dr. Janet Duffy in 2015. Discover our journey from startup to Las Vegas's most trusted cash home buyers." },
    { name: "keywords", content: "Speedy Cash Home Offers history, company story, Dr Janet Duffy founded, Las Vegas cash home buyers history" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://www.speedycashhomeoffers.com/company-history" },
    { property: "og:title", content: "Company History | Speedy Cash Home Offers" },
    { property: "og:description", content: "Learn about the history of Speedy Cash Home Offers, founded by Dr. Janet Duffy in 2015. Discover our journey from startup to Las Vegas's most trusted cash home buyers." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/company-history" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/company-history-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Company History | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Learn about the history of Speedy Cash Home Offers, founded by Dr. Janet Duffy in 2015." },
    { name: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/company-history-twitter-image.jpg" },
  ];
};

export default function CompanyHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Company History",
            "description": "History of Speedy Cash Home Offers, founded by Dr. Janet Duffy in 2015",
            "url": "https://www.speedycashhomeoffers.com/company-history",
            "mainEntity": {
              "@id": "https://www.speedycashhomeoffers.com/#organization"
            },
            "publisher": {
              "@id": "https://www.speedycashhomeoffers.com/#organization"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Building Trust, One Home at a Time
            </p>
            <p className="text-lg text-teal-100 max-w-2xl mx-auto">
              From a vision in 2015 to Las Vegas's most trusted cash home buyers, discover the journey of Speedy Cash Home Offers.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A timeline of milestones that have shaped Speedy Cash Home Offers into the trusted company we are today.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              
              {/* 2015 - Founding */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2015
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">The Beginning</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Dr. Janet Duffy founded Speedy Cash Home Offers with a simple mission: to help Las Vegas homeowners sell their properties quickly and fairly, without the stress and delays of traditional real estate transactions.
                    </p>
                    <p className="text-gray-700">
                      Starting with a focus on North Las Vegas and East Las Vegas neighborhoods, Dr. Duffy leveraged her 25+ years of real estate experience to create a streamlined cash home buying service.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2016-2017 - Growth */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2016-2017
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Rapid Expansion</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      The company quickly gained recognition for its transparent process and fair cash offers. We expanded our service area to cover all of Las Vegas and began building a reputation for helping homeowners in difficult situations.
                    </p>
                    <p className="text-gray-700">
                      During this period, we helped hundreds of families avoid foreclosure, settle estates, and relocate quickly for job opportunities.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2018-2019 - Southern California */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2018-2019
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">California Expansion</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Recognizing the need for cash home buying services in Southern California, we expanded our operations to serve Los Angeles, Orange County, San Diego, Riverside, and the Inland Empire.
                    </p>
                    <p className="text-gray-700">
                      This expansion allowed us to help even more homeowners across multiple markets, establishing Speedy Cash Home Offers as a regional leader in cash home buying.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2020-2021 - Pandemic Response */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2020-2021
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Adapting to Change</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      During the COVID-19 pandemic, we adapted our processes to provide contactless property evaluations and virtual consultations, ensuring homeowners could still access our services safely.
                    </p>
                    <p className="text-gray-700">
                      We helped many families facing financial hardship due to the pandemic, providing quick cash solutions when they needed them most.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2022-2023 - Recognition */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
                    <div className="flex items-center mb-3">
                      <div className="bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        2022-2023
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Industry Recognition</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Speedy Cash Home Offers earned an A+ rating from the Better Business Bureau and maintained a 4.9/5 star rating across review platforms, reflecting our commitment to customer satisfaction.
                    </p>
                    <p className="text-gray-700">
                      We reached a milestone of helping over 1,000 families sell their homes quickly and fairly, building a reputation as Las Vegas's most trusted cash home buyers.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* 2024-Present - Today */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg shadow-lg p-6 border-l-4 border-teal-800">
                    <div className="flex items-center mb-3">
                      <div className="bg-white text-teal-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                        Now
                      </div>
                      <h3 className="text-2xl font-bold">Today & Beyond</h3>
                    </div>
                    <p className="mb-4">
                      Today, Speedy Cash Home Offers continues to serve homeowners throughout Las Vegas and Southern California, maintaining our core values of transparency, fairness, and exceptional service.
                    </p>
                    <p>
                      We're committed to helping even more families in the years ahead, always staying true to Dr. Duffy's original vision of making home selling simple, fast, and stress-free.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles have guided us since day one and continue to drive everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest, upfront communication. No hidden fees, no surprises—just clear, straightforward cash offers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Speed</h3>
              <p className="text-gray-600">
                We understand that time matters. Our streamlined process helps you close in as little as 7 days when needed.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compassion</h3>
              <p className="text-gray-600">
                We treat every homeowner with respect and understanding, recognizing that selling a home is often an emotional decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl mb-8">
            Join the thousands of homeowners who have trusted Speedy Cash Home Offers to help them sell their properties quickly and fairly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Your Free Quote
            </a>
            <a href="tel:(702) 500-1981" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors" aria-label="Call Speedy Cash Home Offers at (702) 500-1981">
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="company-history" />
    </div>
  );
}

