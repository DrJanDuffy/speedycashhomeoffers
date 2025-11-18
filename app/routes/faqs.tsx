import Breadcrumbs from "~/components/Breadcrumbs";
import RealScoutErrorBoundary from "~/components/RealScoutErrorBoundary";
import RealScoutSimpleSearch from "~/components/RealScoutSimpleSearch";
import RelatedPages from "~/components/RelatedPages";
import type { Route } from "./+types/faqs";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Frequently Asked Questions | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Get answers to common questions about selling your house fast for cash in Las Vegas and Southern California. Dr. Janet Duffy and her team are here to help you understand our process.",
    },
    {
      name: "keywords",
      content:
        "FAQ, frequently asked questions, sell house fast Las Vegas, cash home buyers questions, Dr Janet Duffy FAQ, real estate questions",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/faqs" },
    { property: "og:title", content: "Frequently Asked Questions | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Get answers to common questions about selling your house fast for cash. Dr. Janet Duffy and her team are here to help you understand our process.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/faqs" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/faq-og-image.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Frequently Asked Questions | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Get answers to common questions about selling your house fast for cash. Dr. Janet Duffy and her team are here to help you understand our process.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/faq-twitter-image.jpg",
    },
  ];
};

export default function FAQs() {
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
            name: "Frequently Asked Questions | Speedy Cash Home Offers",
            description:
              "Get answers to common questions about selling your house fast for cash in Las Vegas and Southern California. Dr. Janet Duffy and her team are here to help you understand our process.",
            url: "https://www.speedycashhomeoffers.com/faqs",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            about: {
              "@type": "Service",
              name: "Cash Home Buying Service",
            },
          }),
        }}
      />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you buy manufactured or mobile homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, but you must own the land as well.",
                },
              },
              {
                "@type": "Question",
                name: "How long does it take to sell my home through Speedy Cash Home Offers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It is up to you. We can typically close within 10-14 days or longer if desired.",
                },
              },
              {
                "@type": "Question",
                name: "Why should I use your service versus using a Realtor?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "When choosing Speedy Cash Home Offers to sell your home, you will have a quick and easy sale. You don't have to worry about finding a Realtor that you can trust and who will price your home appropriately. There is no hassle of strangers walking through your home for a tour or open houses. It is a quiet sell so you do not have to worry about nosey neighbors. No negotiating for repairs, Speedy Cash Home Offers is a company that will buy your home in As-Is condition! You also won't have to worry if the buyer will actually close.",
                },
              },
              {
                "@type": "Question",
                name: "Can I sell my home to you even if I am behind on payments?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! If you are behind on payments Speedy Cash Home Offers can still help!",
                },
              },
              {
                "@type": "Question",
                name: "Do you buy condos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we buy condos.",
                },
              },
              {
                "@type": "Question",
                name: "How do you establish the price?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We establish the price based off of the current market conditions, the neighborhood comps, as well as the current condition of the home.",
                },
              },
              {
                "@type": "Question",
                name: "Do you buy homes in foreclosure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, again if you are behind in payments or in foreclosure Speedy Cash Home Offers can still help!",
                },
              },
              {
                "@type": "Question",
                name: "Do you charge a fee to evaluate my home's condition?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, it is absolutely FREE selling your home to Speedy Cash Home Offers.",
                },
              },
              {
                "@type": "Question",
                name: "Where do you buy homes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are currently purchasing homes in most major metropolitan areas across the country. The company started in Nevada, serving Las Vegas and surrounding areas, and expanded quickly into California markets including Los Angeles, San Diego, Orange County, Riverside, and San Francisco. We are always adding additional cities, so contact us ASAP because we want to buy your house.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're Here To Answer Your Questions
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few
              days. There is no obligation, so contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get My Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-teal-600 transition-colors">
                Call (702) 500-1981
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Common Questions About Selling Your Home Fast
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Selling your home can raise many questions, especially when you need to sell quickly.
              At Speedy Cash Home Offers, we understand that homeowners in Las Vegas and Southern
              California often face unique situations that require immediate solutions. Whether
              you're dealing with foreclosure, inherited property, divorce, relocation, or simply
              want to avoid the traditional selling process, we're here to provide clear, honest
              answers to help you make informed decisions about your property.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Do you buy manufactured or mobile homes?
              </h3>
              <p className="text-gray-600">
                Yes, we do purchase manufactured and mobile homes, but you must own the land as
                well. This is because manufactured homes without land ownership can present unique
                challenges in the buying and selling process. If you own both the home and the land,
                we can provide you with a fair cash offer for your manufactured home property in Las
                Vegas or Southern California.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                I have already listed my home with a Realtor, can I still work with you?
              </h3>
              <p className="text-gray-600">
                Yes, although the seller is responsible for any commission owed to the Realtor. Any
                formal offer will need to be submitted through your current realtor as long as you
                are in contract. We understand that sometimes homeowners change their minds about
                the traditional selling process, and we're happy to work within your existing
                arrangements to provide you with a cash offer option.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                How long does it take to sell my home through Speedy Cash Home Offers?
              </h3>
              <p className="text-gray-600">
                The timeline is completely up to you. We can typically close within 10-14 days if
                you need a quick sale, or we can extend the closing date to 60 days or longer if you
                need more time to prepare for your move. Our flexible approach allows you to choose
                a closing date that works best for your personal situation and timeline.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Why should I use your service versus using a Realtor?
              </h3>
              <p className="text-gray-600">
                When choosing Speedy Cash Home Offers to sell your home, you will have a quick and
                easy sale. You don't have to worry about finding a Realtor that you can trust and
                who will price your home appropriately. There is no hassle of strangers walking
                through your home for tours or open houses. It is a quiet sell so you do not have to
                worry about nosey neighbors. No negotiating for repairs, Speedy Cash Home Offers is
                a company that will buy your home in As-Is condition! You also won't have to worry
                if the buyer will actually close, as we provide guaranteed cash offers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Can I sell my home to you even if I am behind on payments?
              </h3>
              <p className="text-gray-600">
                Yes! If you are behind on payments, Speedy Cash Home Offers can still help! We
                understand that financial difficulties can make it challenging to maintain mortgage
                payments, and we're here to provide a solution that can help you avoid foreclosure
                and move forward with your life. Our cash offers can help you settle your mortgage
                debt and start fresh.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Do you buy condos?</h3>
              <p className="text-gray-600">
                Yes, we buy condos throughout Las Vegas and Southern California. Whether you own a
                condo in downtown Las Vegas, the Las Vegas Strip area, or any of the beautiful condo
                communities in Orange County, San Diego, or other California markets, we can provide
                you with a fair cash offer for your condominium property.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                How do you establish the price?
              </h3>
              <p className="text-gray-600">
                We establish the price based on the current market conditions, the neighborhood
                comps, as well as the current condition of the home. Our experienced team conducts
                thorough market analysis to ensure you receive a fair offer that reflects your
                property's true value in today's Las Vegas and Southern California real estate
                markets. We consider factors such as location, property size, condition, and recent
                comparable sales in your area.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Do you buy homes in foreclosure?
              </h3>
              <p className="text-gray-600">
                Yes, if you are behind in payments or in foreclosure, Speedy Cash Home Offers can
                still help! We understand that foreclosure proceedings can be stressful and
                overwhelming. Our cash offers can help you avoid the foreclosure process entirely,
                allowing you to sell your home quickly and move forward without the negative impact
                on your credit that foreclosure can cause.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                Do you charge a fee to evaluate my home's condition?
              </h3>
              <p className="text-gray-600">
                No, it is absolutely FREE to have Speedy Cash Home Offers evaluate your home's
                condition and provide you with a cash offer. There are no hidden fees, no upfront
                costs, and no obligation to accept our offer. We believe in providing transparent,
                no-pressure evaluations so you can make the best decision for your situation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                How does the process work?
              </h3>
              <p className="text-gray-600 mb-4">
                Our home buying process consists of five simple steps:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>
                  <strong>Contact:</strong> Complete the online form to let us know that you are
                  interested in help to "sell my house fast for cash", or call us directly at (702)
                  500-1981.
                </li>
                <li>
                  <strong>Phone Call:</strong> During the initial phone call we will collect your
                  property details and learn more about your unique situation and closing
                  requirements.
                </li>
                <li>
                  <strong>On Location Meeting/Proposal:</strong> After we collect the details of
                  your property and situation, we will then schedule an on-location inspection of
                  your home and provide you with a firm offer at that time. There is no obligation
                  to accept our offer.
                </li>
                <li>
                  <strong>Review of Offer:</strong> The ball is in your court. You decide what is in
                  your best interest. We encourage you to take as much time as you need to look over
                  our offer. We understand this is a significant decision and will work with you on
                  your timeline.
                </li>
                <li>
                  <strong>Acceptance of Offer:</strong> If you agree to our offer, we'll arrange a
                  cash transaction and open up escrow & title to complete the purchase based on your
                  time requirements. There are no hidden fees or costs involved. We pay all closing
                  costs. What we offer you is what you get, and nothing less. We buy houses fast,
                  for cash. It's that simple!
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">Where do you buy homes?</h3>
              <p className="text-gray-600">
                We are currently purchasing homes in most major metropolitan areas across the
                country. The company started in Nevada, serving Las Vegas and surrounding areas, and
                expanded quickly into California markets including Los Angeles, San Diego, Orange
                County, Riverside, and San Francisco. We are always adding additional cities, so
                contact us ASAP because we want to buy your house. Our extensive market knowledge in
                these areas allows us to provide accurate valuations and competitive offers.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                How do I get a quote on my house?
              </h3>
              <p className="text-gray-600">
                Getting a quote is simple and free. You can fill out the "Get My Free No-Obligation
                Quote" form under the contact tab on our website, or give us a call at (702)
                500-1981. Our team will gather some basic information about your property and
                provide you with a preliminary assessment. We'll then schedule a convenient time to
                visit your property and provide you with a firm cash offer.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-teal-600">
                If you make me an offer, how soon do I have to decide if I want to accept it?
              </h3>
              <p className="text-gray-600">
                The offer to 'sell my house fast Las Vegas' technically does not expire, but we may
                have to rerun our numbers if too much time has passed due to market conditions. We
                understand that selling your home is a significant decision, and we want you to feel
                completely comfortable with your choice. Take as much time as you need to consider
                our offer and ask any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our experienced team is here to help answer any questions you may have about selling
              your home. We understand that selling your house is a big decision, and we want to
              make sure you have all the information you need to make the best choice for your
              situation. Whether you're facing foreclosure, dealing with an inherited property,
              going through a divorce, or simply want to avoid the traditional selling process,
              we're here to provide guidance and support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us Directly</h3>
              <p className="text-gray-600">
                Speak with our team at (702) 500-1981 for immediate assistance
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-600">
                Chat with us online for instant answers to your questions
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">
                Send us your questions via email for detailed responses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Understanding the Cash Home Buying Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Selling your home for cash is different from traditional real estate transactions, and
              we understand you may have questions about how the process works. Below, we've
              provided additional information to help you understand what to expect when working
              with Speedy Cash Home Offers.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  How Cash Offers Differ from Traditional Sales
                </h3>
                <p className="text-gray-600 mb-4">
                  Cash offers provide several advantages over traditional home sales. When you sell
                  to a cash buyer like Speedy Cash Home Offers, you eliminate many of the
                  uncertainties and delays associated with traditional sales. There's no waiting for
                  buyer financing approval, no risk of deals falling through due to loan issues, and
                  no need to make repairs or stage your home for showings.
                </p>
                <p className="text-gray-600">
                  Cash buyers can close quickly because they don't depend on mortgage lenders,
                  appraisals, or inspections that can delay traditional sales. This speed and
                  certainty often makes cash offers attractive to sellers who need to move quickly,
                  whether due to financial pressures, life changes, or simply wanting to avoid the
                  hassle of traditional selling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  What Makes Our Offers Fair and Competitive
                </h3>
                <p className="text-gray-600 mb-4">
                  Our cash offers are based on comprehensive market analysis, considering current
                  property values, comparable sales, property condition, needed repairs, and the
                  convenience of a quick sale. We factor in all costs associated with purchasing,
                  renovating, and reselling properties to provide fair, transparent offers.
                </p>
                <p className="text-gray-600">
                  While our offers may be lower than what you might get in a traditional sale after
                  repairs and commissions, they reflect the true value of your property in its
                  current condition, minus the costs and risks we assume. We're transparent about
                  how we arrive at our offers, and we encourage sellers to compare our offers with
                  other options to make informed decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  The Benefits of Working with an Experienced Team
                </h3>
                <p className="text-gray-600 mb-4">
                  Dr. Duffy and her team have completed thousands of transactions across Las Vegas
                  and Southern California. This extensive experience means we've encountered and
                  successfully resolved virtually every type of situation that can arise in real
                  estate transactions. From probate properties to foreclosure situations, from
                  divorce sales to inherited properties, we have the expertise to handle complex
                  transactions smoothly.
                </p>
                <p className="text-gray-600">
                  Our experience also means we understand the local markets deeply, allowing us to
                  provide accurate valuations and competitive offers. We know which neighborhoods
                  are appreciating, which areas have strong rental demand, and which properties have
                  the best investment potential. This market knowledge benefits our clients by
                  ensuring they receive fair offers based on current market conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few
            days. Our team is ready to answer all your questions and provide you with a fair cash
            offer for your property. There is no obligation, so contact us today!
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

      {/* Property Search */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Find Your Perfect Property
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Search Properties
          </h2>
          <div className="min-h-[200px]">
            <RealScoutErrorBoundary>
              <RealScoutSimpleSearch />
            </RealScoutErrorBoundary>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="faqs" />
    </div>
  );
}
