import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/process";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Our 5-Step Home Buying Process | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "5-step process to sell house fast for cash! Dr. Janet Duffy's proven method: no repairs, no fees, no hassle. Get cash offer in 24hrs. Learn more!",
    },
    {
      name: "keywords",
      content:
        "home buying process, sell house fast Las Vegas, cash home buying process, sell house as is, Dr Janet Duffy, Speedy Cash Home Offers",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/process" },
    { property: "og:title", content: "Our 5-Step Home Buying Process | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Learn about our simple 5-step process to sell your Las Vegas and Southern California home fast for cash. No repairs, no fees, no hassle.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/process" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/process-og-image.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Our 5-Step Home Buying Process | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Learn about our simple 5-step process to sell your Las Vegas and Southern California home fast for cash. No repairs, no fees, no hassle.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/process-twitter-image.jpg",
    },
  ];
};

export default function Process() {
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
            name: "How It Works | Speedy Cash Home Offers",
            description:
              "Learn our simple 5-step process to sell your house fast for cash. No repairs, no fees, no waiting. Close in as little as 7 days.",
            url: "https://www.speedycashhomeoffers.com/process",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "Service",
              name: "Cash Home Buying Process",
            },
          }),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How long does the entire process take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "From initial contact to closing, our process typically takes 7-21 days. We can expedite to 7 days for urgent situations like foreclosure prevention, but most sellers prefer 2-3 weeks to handle their affairs.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to clean or repair my home before inspection?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No preparation needed! We buy houses as-is in any condition. You don't need to clean, repair, stage, or even remove personal belongings. We'll evaluate the property in its current state.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I don't accept your offer?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No obligation! If you don't accept our offer, there are no fees or penalties. We encourage you to explore all your options and make the best decision for your situation.",
                },
              },
              {
                "@type": "Question",
                name: "How do you determine the cash offer amount?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our offers are based on current market values, comparable sales, property condition, repair costs, and the convenience of a quick sale. We factor in all costs to provide a fair, transparent offer.",
                },
              },
              {
                "@type": "Question",
                name: "What if I'm behind on mortgage payments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We can help prevent foreclosure! Our quick closing process can resolve mortgage issues before foreclosure proceedings begin. We'll work with your lender and provide immediate financial relief.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to Sell Your House Fast for Cash",
            description:
              "Learn the 5-step process to sell your house fast for cash with Speedy Cash Home Offers",
            image: "https://www.speedycashhomeoffers.com/images/process-image.jpg",
            totalTime: "P7D",
            estimatedCost: {
              "@type": "MonetaryAmount",
              currency: "USD",
              value: "0",
            },
            supply: [
              {
                "@type": "HowToSupply",
                name: "Property Information",
              },
              {
                "@type": "HowToSupply",
                name: "Contact Information",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                position: 1,
                name: "Contact",
                text: "Complete the online form or call us directly at (702) 500-1981",
              },
              {
                "@type": "HowToStep",
                position: 2,
                name: "Phone Call",
                text: "We collect your property details and learn about your unique situation",
              },
              {
                "@type": "HowToStep",
                position: 3,
                name: "On Location Meeting",
                text: "We schedule an inspection and provide you with a firm cash offer",
              },
              {
                "@type": "HowToStep",
                position: 4,
                name: "Review Offer",
                text: "Take your time to review our offer with no pressure",
              },
              {
                "@type": "HowToStep",
                position: 5,
                name: "Acceptance",
                text: "We handle all paperwork and complete the cash transaction",
              },
            ],
            provider: {
              "@type": "Organization",
              name: "Speedy Cash Home Offers",
              url: "https://www.speedycashhomeoffers.com",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Home Buying Process</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              At Speedy Cash Home Offers, we buy houses fast for cash—no matter the condition.
              Whether your house is older, needs repairs, or is in less-than-perfect shape, we make
              the process quick and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
              >
                Get My Free Quote
              </a>
              <a
                href="tel:(702) 500-1981"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors text-center"
                aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
              >
                Call (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Home Buying Process Consists of Five Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Speedy Cash Home Offers, we buy houses for cash throughout{" "}
              <a
                href="/sell-my-house-fast-las-vegas"
                className="text-teal-600 hover:text-teal-800 underline"
              >
                Las Vegas
              </a>{" "}
              and{" "}
              <a
                href="/sell-my-house-fast-southern-california"
                className="text-teal-600 hover:text-teal-800 underline"
              >
                Southern California
              </a>
              . We buy old houses, we buy houses fast in bad shape, we buy houses in need of repair.
              We have purchased thousands of houses and we can buy yours in just a few days. There
              is no obligation, so{" "}
              <a href="/contact" className="text-teal-600 hover:text-teal-800 underline">
                contact us today
              </a>
              ! Our streamlined process eliminates the traditional hassles of selling real estate,
              providing homeowners with a stress-free alternative to conventional market sales.
              Learn more about{" "}
              <a href="/sellers" className="text-teal-600 hover:text-teal-800 underline">
                why homeowners choose us
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Step-by-Step Guide to Selling Your House Fast
          </h2>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    01
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Initial Contact</h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Complete the online form to let us know that you are interested in selling your
                    home fast for cash, or call us directly at <strong>(702) 500-1981</strong>. Our
                    team is available seven days a week to answer your questions and provide
                    immediate assistance. Whether you're facing foreclosure, dealing with an
                    inherited property, or simply need to relocate quickly, we're here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center"
                    >
                      Fill Out Form
                    </a>
                    <a
                      href="tel:(702) 500-1981"
                      className="border-2 border-teal-600 text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors text-center"
                      aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    02
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Property Assessment Call
                  </h3>
                  <p className="text-lg text-gray-600">
                    During the initial phone call, our experienced team will collect your property
                    details and learn more about your unique situation and closing requirements.
                    We'll ask about your property's condition, location, and any specific
                    circumstances that might affect the sale. This conversation helps us understand
                    your needs and provides you with an accurate timeline for the entire process.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    03
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    On-Site Property Inspection
                  </h3>
                  <p className="text-lg text-gray-600">
                    After we collect the details of your property and situation, we will schedule an
                    on-location inspection of your home and provide you with a firm cash offer at
                    that time. There is no obligation to accept our offer. Our team will evaluate
                    your property's current market value, considering factors like location,
                    condition, and recent comparable sales in your{" "}
                    <a
                      href="/neighborhoods"
                      className="text-teal-600 hover:text-teal-800 underline"
                    >
                      Las Vegas or Southern California neighborhood
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Offer Review and Decision
                  </h3>
                  <p className="text-lg text-gray-600">
                    The ball is in your court. You decide what is in your best interest to sell your
                    house fast in Las Vegas or Southern California. We encourage you to take as much
                    time as you need to look over our offer. We understand this is a significant
                    decision and will work with you on your timeline. Our offers are transparent
                    with no hidden fees or surprise costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold">
                    05
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    Cash Closing and Transaction
                  </h3>
                  <p className="text-lg text-gray-600">
                    If you accept our offer, we'll handle all the paperwork and arrange a cash
                    transaction. Escrow and title will be opened to complete the purchase on your
                    preferred timeline. There are no hidden fees or costs—we pay all closing costs.
                    What we offer is what you get, and nothing less. We can buy your house in as
                    little as 7 days. We buy houses fast, for cash. It's that simple!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Our Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Our Process is Different from Traditional Real Estate Sales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
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
              <h3 className="text-lg font-semibold mb-2">Fast Timeline</h3>
              <p className="text-gray-600">
                Complete the entire process in as little as 7 days, compared to 60-90 days with
                traditional sales.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
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
              <h3 className="text-lg font-semibold mb-2">No Repairs Required</h3>
              <p className="text-gray-600">
                Sell your house as-is without spending thousands on repairs and renovations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
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
              <h3 className="text-lg font-semibold mb-2">No Fees or Commissions</h3>
              <p className="text-gray-600">
                Keep 100% of our offer with no agent commissions, closing costs, or hidden fees.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
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
              <h3 className="text-lg font-semibold mb-2">Flexible Moving Timeline</h3>
              <p className="text-gray-600">
                Choose your closing date to fit your schedule, whether you need to move quickly or
                take your time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
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
              <h3 className="text-lg font-semibold mb-2">Guaranteed Closing</h3>
              <p className="text-gray-600">
                No risk of deals falling through - when we make an offer, we follow through.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-teal-600"
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
              <h3 className="text-lg font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of{" "}
                <a href="/neighborhoods" className="text-teal-600 hover:text-teal-800 underline">
                  Las Vegas and Southern California real estate markets
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Common Questions About Our Home Buying Process
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What should I look for from companies that buy houses in any condition or companies
                that buy houses for cash?
              </h3>
              <p className="text-gray-600">
                Many businesses claim they'll buy your home in any condition or pay cash, but their
                efficiency and reliability can vary widely. At Speedy Cash Home Offers, we've
                purchased thousands of homes throughout Las Vegas and Southern California. Our
                process is designed to make things easy for you, the homeowner, so you can get cash
                quickly and with minimal hassle.
              </p>
              <p className="text-gray-600 mt-4">
                We only make a cash offer if we're confident we can complete the transaction quickly
                and smoothly. When considering any company, always check their track record and read
                online reviews. We're proud to have an A+ rating with the Better Business Bureau
                because of our experience and customer satisfaction. When it comes to selling your
                biggest asset, trust a company with proven results.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Where do you purchase homes for cash?
              </h3>
              <p className="text-gray-600">
                We are currently purchasing homes throughout Las Vegas and Southern California. Our
                company specializes in the Las Vegas metropolitan area—serving Las Vegas, Henderson,
                North Las Vegas, and surrounding communities—as well as major Southern California
                markets including Los Angeles, Orange County, Riverside, San Bernardino, and San
                Diego counties. We're continually expanding our service area, so contact us today if
                you need to sell your home, commercial property or land quickly.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Do all people who buy houses have the same process as Speedy Cash Home Offers?
              </h3>
              <p className="text-gray-600">
                No, not all buyers follow the same process, and experience levels and procedures can
                vary widely. Our process is straightforward: After an initial phone call, we'll send
                one of our qualified team members to visit your property and assess its cash value.
                We determine that value with you on the spot, so you can make an informed
                decision—without any pressure. While our program isn't right for everyone, most
                people find that the simplicity and reduced stress compared to traditional home
                sales make it an excellent option.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                How long does the entire process take from start to finish?
              </h3>
              <p className="text-gray-600">
                Our streamlined process typically takes 7-14 days from initial contact to closing,
                depending on your specific needs and timeline. This is significantly faster than
                traditional real estate sales, which can take 60-90 days or longer. We can
                accommodate urgent situations and work with your schedule to ensure a smooth
                transition.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                What types of properties do you buy?
              </h3>
              <p className="text-gray-600">
                We buy all types of residential properties including single-family homes, condos,
                townhouses, multi-family properties, and even mobile homes (if you own the land). We
                also purchase commercial properties and land. Our team has experience with
                properties in various conditions, from move-in ready homes to properties requiring
                extensive repairs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions About Our Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  How long does the entire process take?
                </h3>
                <p className="text-gray-600">
                  From initial contact to closing, our process typically takes 7-21 days. We can
                  expedite to 7 days for urgent situations like foreclosure prevention, but most
                  sellers prefer 2-3 weeks to handle their affairs.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What information do you need for the initial consultation?
                </h3>
                <p className="text-gray-600">
                  We need basic property details: address, square footage, number of
                  bedrooms/bathrooms, property condition, and your reason for selling. We'll gather
                  more detailed information during the on-site inspection.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Do I need to clean or repair my home before inspection?
                </h3>
                <p className="text-gray-600">
                  No preparation needed! We buy houses as-is in any condition. You don't need to
                  clean, repair, stage, or even remove personal belongings. We'll evaluate the
                  property in its current state.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What happens if I don't accept your offer?
                </h3>
                <p className="text-gray-600">
                  No obligation! If you don't accept our offer, there are no fees or penalties. We
                  encourage you to explore all your options and make the best decision for your
                  situation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Can I change my mind after accepting the offer?
                </h3>
                <p className="text-gray-600">
                  Yes, you can withdraw from the transaction before closing. However, once we've
                  invested in inspections, appraisals, and legal work, there may be costs to cover.
                  We'll discuss this upfront.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What documents do I need to provide?
                </h3>
                <p className="text-gray-600">
                  We'll need property ownership documents, mortgage statements (if applicable),
                  property tax information, and any relevant legal documents. We'll guide you
                  through exactly what's needed.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  How do you determine the cash offer amount?
                </h3>
                <p className="text-gray-600">
                  Our offers are based on current market values, comparable sales, property
                  condition, repair costs, and the convenience of a quick sale. We factor in all
                  costs to provide a fair, transparent offer.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What if I have tenants in the property?
                </h3>
                <p className="text-gray-600">
                  We can work with occupied properties. We'll coordinate with tenants for
                  inspections and handle the transition. We may adjust our timeline to accommodate
                  tenant notice periods.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Do you handle probate or inherited properties?
                </h3>
                <p className="text-gray-600">
                  Yes! We specialize in inherited properties and probate situations. We understand
                  the complexities and can work with executors, beneficiaries, and probate courts to
                  facilitate smooth transactions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  What if I'm behind on mortgage payments?
                </h3>
                <p className="text-gray-600">
                  We can help prevent foreclosure! Our quick closing process can resolve mortgage
                  issues before foreclosure proceedings begin. We'll work with your lender and
                  provide immediate financial relief.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Our Simple 5-Step Process?</h2>
          <p className="text-xl mb-8">
            Call us today at (702) 500-1981 for an offer in as little as 24 hours. It's Quick and
            Easy! Dr. Janet Duffy and her experienced team are ready to help you sell your house
            fast for cash, regardless of its condition or your circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get My Free Quote
            </a>
            <a
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors text-center"
              aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
            >
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What to Expect During Each Step
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Initial Contact: Your First Step to a Quick Sale
              </h3>
              <p className="text-gray-600 mb-4">
                When you first reach out to Speedy Cash Home Offers, you're taking the first step
                toward a stress-free home sale. Our initial contact process is designed to be as
                simple and convenient as possible. You can reach us through our online form, which
                takes just a few minutes to complete, or call us directly at (702) 500-1981. Our
                team is available seven days a week, including evenings and weekends, because we
                understand that selling your home isn't always convenient during regular business
                hours.
              </p>
              <p className="text-gray-600">
                During this initial contact, we'll gather basic information about your property and
                your situation. We understand that every homeowner's circumstances are unique -
                whether you're facing foreclosure, dealing with an inherited property, going through
                a divorce, relocating for work, or simply want to sell quickly without the hassle of
                traditional real estate. Our team is trained to listen with empathy and provide
                solutions tailored to your specific needs. There's absolutely no pressure, and
                you're under no obligation to proceed if our process isn't right for you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Property Assessment: Understanding Your Unique Situation
              </h3>
              <p className="text-gray-600 mb-4">
                The property assessment call is where we dive deeper into your specific situation.
                Our experienced team members have handled thousands of home purchases across Las
                Vegas and Southern California, so we're well-equipped to understand even the most
                complex circumstances. During this conversation, we'll ask about your property's
                condition, location, size, and any unique features or challenges it might have.
              </p>
              <p className="text-gray-600">
                We'll also discuss your timeline and any specific requirements you have for the
                sale. Perhaps you need to close quickly to prevent foreclosure, or maybe you need
                extra time to handle probate or other legal matters. We'll work with your schedule,
                not against it. This conversation helps us prepare for the on-site inspection and
                ensures we can provide you with the most accurate timeline and offer possible. Our
                goal is to make this process as transparent and stress-free as possible from the
                very beginning.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                On-Site Inspection: Transparent Evaluation
              </h3>
              <p className="text-gray-600 mb-4">
                The on-site inspection is where we get to see your property in person and provide
                you with a firm cash offer. Unlike traditional home sales where you might wait weeks
                for an offer after multiple showings, we provide our offer during this visit. Our
                team member will conduct a thorough but respectful evaluation of your property,
                considering factors like location, condition, needed repairs, and current market
                values in your neighborhood.
              </p>
              <p className="text-gray-600">
                We understand that having someone evaluate your home can feel invasive, especially
                if you're still living there. That's why our team is trained to be respectful,
                professional, and efficient. We'll explain what we're looking at and why, so you
                understand how we're determining the offer. There's no need to clean, repair, or
                stage your home - we evaluate properties in their current condition. After the
                inspection, we'll sit down with you and present our cash offer, explaining how we
                arrived at that number. You'll have all the information you need to make an informed
                decision.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Offer Review: Take Your Time, No Pressure
              </h3>
              <p className="text-gray-600 mb-4">
                Once you receive our cash offer, the decision is entirely yours. We believe in
                transparency and honesty, which means we'll never pressure you to accept an offer or
                rush your decision. We understand that selling your home is a significant financial
                decision, and you deserve time to consider all your options. Our offers are
                presented clearly with no hidden fees, surprise costs, or confusing terms.
              </p>
              <p className="text-gray-600">
                During the review period, you're welcome to ask any questions you have about the
                offer, our process, or what happens next. We encourage you to compare our offer to
                other options you might be considering, whether that's a traditional real estate
                sale, another cash buyer, or any other alternative. Our goal isn't to pressure you
                into accepting - it's to provide you with a fair, transparent option that works for
                your situation. If our offer isn't right for you, there are no hard feelings and no
                obligations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Closing: Fast, Simple, and Stress-Free
              </h3>
              <p className="text-gray-600 mb-4">
                If you accept our offer, we handle all the complex paperwork and legal requirements.
                We work with trusted escrow and title companies to ensure everything is handled
                correctly and legally. You won't need to worry about coordinating with multiple
                parties or understanding complex real estate contracts - we take care of all of that
                for you. We pay all closing costs, so the amount we offer is the amount you receive,
                with no surprise deductions.
              </p>
              <p className="text-gray-600">
                We can close in as little as 7 days, but we'll work with your preferred timeline.
                Whether you need to close quickly to resolve an urgent situation or need extra time
                to handle your move, we'll accommodate your schedule. On closing day, you'll receive
                your cash payment, and the property will be officially transferred to us. It's that
                simple - no waiting for buyer financing to be approved, no last-minute
                deal-breakers, no stress. We've completed thousands of transactions, and our
                streamlined process ensures yours goes smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Process vs. Traditional Home Sales
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Understanding the differences between our cash home buying process and traditional
              real estate sales can help you make the best decision for your situation. While
              traditional sales work well for some homeowners, our process offers significant
              advantages for those who need speed, convenience, and certainty.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Traditional Home Sales
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      <span>60-90 days average closing time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      <span>6-10% in commissions and fees</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      <span>Requires repairs and staging</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      <span>Multiple showings and open houses</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      <span>Buyer financing can fall through</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">×</span>
                      <span>Uncertain closing dates</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    Speedy Cash Home Offers
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>7-21 days average closing time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>No commissions or fees - keep 100%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Sell as-is, no repairs needed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>One quick inspection, no showings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Guaranteed cash closing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>You choose the closing date</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Related Pages */}
      <RelatedPages currentPage="process" />
    </div>
  );
}
