import type { Route } from "./+types/sellers";
import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import RealScoutHomeValue from "~/components/RealScoutHomeValue";
import RealScoutErrorBoundary from "~/components/RealScoutErrorBoundary";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Sell Your Home Fast | Speedy Cash Home Offers" },
    { name: "description", content: "Get a fast, fair cash offer for your Las Vegas home. No repairs, no fees, no waiting. Dr. Janet Duffy helps homeowners sell quickly." },
    { name: "keywords", content: "sell house fast Las Vegas, cash home buyers, sell house as is, no repairs needed, fast cash offer, Dr Janet Duffy" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/sellers" },
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
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cash Home Buying Service for Sellers",
            "description": "Get a fast, fair cash offer for your Las Vegas home. No repairs, no fees, no waiting. Close in as little as 7 days.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
              "telephone": "(702) 500-1981",
              "email": "DrDuffy@SpeedyCashHomeOffers.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2775 Ariel Ocean St",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89156",
                "addressCountry": "US"
              }
            },
            "serviceType": "Cash Home Buying",
            "areaServed": [
              {
                "@type": "City",
                "name": "Las Vegas",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Nevada"
                }
              },
              {
                "@type": "State",
                "name": "California"
              }
            ],
            "offers": {
              "@type": "Offer",
              "description": "Fast cash offers with no repairs needed, no fees, and closing in as little as 7 days",
              "priceRange": "$300000-$450000"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
      {/* WebPage Schema with Content Freshness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Sell Your Home Fast | Speedy Cash Home Offers",
            "description": "Get a fast, fair cash offer for your Las Vegas home. No repairs, no fees, no waiting. Dr. Janet Duffy helps homeowners sell quickly.",
            "url": "https://www.speedycashhomeoffers.com/sellers",
            "datePublished": "2024-01-15",
            "dateModified": "2025-01-17",
            "inLanguage": "en-US",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website"
            },
            "about": {
              "@type": "Service",
              "name": "Cash Home Buying Service"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://www.speedycashhomeoffers.com/images/sellers-og-image.jpg"
            }
          })
        }}
      />
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
          <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">
            Get Your Instant Home Value
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-12 text-gray-700">
            Discover What Your Home is Worth
          </h2>
          <div className="min-h-[200px]">
            <RealScoutErrorBoundary>
              <RealScoutHomeValue />
            </RealScoutErrorBoundary>
          </div>
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

      {/* Why Sell to Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Sell Your Home to Speedy Cash Home Offers?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">No Hidden Fees or Costs</h3>
              <p className="text-gray-600 mb-4">
                When you sell your home to Speedy Cash Home Offers, you won't pay any real estate agent commissions, 
                closing costs, or hidden fees. Traditional home sales typically cost sellers 6-10% of the home's value 
                in commissions and fees. With our <a href="/process" className="text-blue-600 hover:text-blue-800 underline">cash offer process</a>, you keep 100% of what we agree to pay, minus any 
                existing liens or mortgages you choose to pay off.
              </p>
              <p className="text-gray-600">
                We handle all the paperwork, title searches, and closing costs. You simply receive your cash offer, 
                accept it, and close on your timeline. No surprises, no last-minute fees, and no stress about 
                unexpected expenses eating into your proceeds. Learn more about <a href="/faqs" className="text-blue-600 hover:text-blue-800 underline">how our process works</a> and why thousands of homeowners choose us.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Sell in Any Condition</h3>
              <p className="text-gray-600 mb-4">
                Whether your home needs major repairs, has structural issues, or simply needs updating, we buy houses 
                in any condition. You don't need to spend thousands of dollars on renovations, repairs, or staging 
                to make your home market-ready. We purchase properties as-is, which means you can sell immediately 
                without investing time or money into improvements.
              </p>
              <p className="text-gray-600">
                This is especially valuable if you're dealing with <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">inherited properties</a>, foreclosure situations, 
                or homes that have been damaged. We've seen it all and can make fair offers on properties that 
                traditional buyers might walk away from. Read our <a href="/testimonials" className="text-blue-600 hover:text-blue-800 underline">customer reviews</a> to see how we've helped others in similar situations.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Fast Closing Process</h3>
              <p className="text-gray-600 mb-4">
                Traditional home sales can take 60-90 days or longer, especially if buyers need financing approval. 
                When you sell to Speedy Cash Home Offers, you can close in as little as 7 days. We have our own funding 
                ready, so there's no waiting for bank approvals or mortgage processing delays. See our detailed <a href="/process" className="text-blue-600 hover:text-blue-800 underline">5-step process</a> to understand exactly how we make this happen.
              </p>
              <p className="text-gray-600">
                This speed is crucial if you're facing foreclosure, need to relocate quickly for a job, going through 
                a divorce, or dealing with any time-sensitive situation. You choose your closing date, and we'll work 
                around your schedule to make the process as convenient as possible. <a href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact us today</a> to discuss your timeline.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">No Showings or Open Houses</h3>
              <p className="text-gray-600 mb-4">
                Selling your home traditionally means opening your doors to dozens of strangers for showings, open houses, 
                and inspections. This can be invasive, time-consuming, and stressful, especially if you're still living 
                in the property. With Speedy Cash Home Offers, we make our offer based on your property information and 
                a quick walkthrough - no need for multiple showings or staging your home for potential buyers.
              </p>
              <p className="text-gray-600">
                You maintain your privacy and can continue living in your home normally until closing day. No need to 
                keep your home spotless for unexpected showings or worry about strangers walking through your personal space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Situations Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Common Situations We Help With
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Foreclosure Prevention</h3>
              <p className="text-gray-600 mb-4">
                If you're behind on mortgage payments or facing foreclosure, selling your home quickly for cash can 
                help you avoid the devastating impact of foreclosure on your credit. We can close fast enough to help 
                you settle with your lender and move forward with a clean slate.
              </p>
              <p className="text-gray-600">
                Our team understands the urgency of these situations and works quickly to provide solutions that protect 
                your financial future while helping you transition to your next chapter.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Inherited Properties</h3>
              <p className="text-gray-600 mb-4">
                Inheriting a property can be both a blessing and a burden. If you've inherited a home you don't want 
                to keep, we can help you sell it quickly without the hassle of traditional real estate transactions. 
                We understand that dealing with an inherited property while grieving can be overwhelming.
              </p>
              <p className="text-gray-600">
                We handle all the details, from dealing with probate requirements to managing property maintenance issues, 
                so you can focus on what matters most to you during this difficult time.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Relocation or Job Transfer</h3>
              <p className="text-gray-600 mb-4">
                When you need to move quickly for a new job opportunity or family situation, waiting months for a 
                traditional home sale isn't an option. We can close in as little as 7 days, allowing you to relocate 
                without the stress of managing a property from afar or paying for two mortgages.
              </p>
              <p className="text-gray-600">
                Our streamlined process means you can focus on your new opportunity while we handle all the details 
                of selling your Las Vegas home quickly and efficiently.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Divorce or Life Changes</h3>
              <p className="text-gray-600 mb-4">
                Divorce, separation, or other major life changes often require selling a home quickly. Our cash offer 
                process eliminates the need for both parties to agree on repairs, staging, or pricing strategies that 
                can delay traditional sales.
              </p>
              <p className="text-gray-600">
                We provide fair, transparent offers that help both parties move forward quickly and fairly, without 
                the emotional stress of prolonged negotiations or property disputes.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Distressed or Damaged Properties</h3>
              <p className="text-gray-600 mb-4">
                If your property has significant damage from fire, water, natural disasters, or simply years of deferred 
                maintenance, traditional buyers may be hesitant or require extensive repairs before closing. We buy 
                properties in any condition and can make fair offers that reflect the property's current state.
              </p>
              <p className="text-gray-600">
                This saves you from spending money on repairs you may not recoup and allows you to move on from a 
                property that's become a burden rather than an asset.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Landlord or Investment Properties</h3>
              <p className="text-gray-600 mb-4">
                If you're a landlord dealing with difficult tenants, property management challenges, or simply want to 
                exit the rental business, we can help you sell your investment property quickly. We understand the 
                unique challenges of investment properties and can work around tenant situations and property conditions.
              </p>
              <p className="text-gray-600">
                Our cash offer process means you don't have to wait for leases to expire or deal with showing properties 
                to potential buyers while tenants are still in place. We can close quickly and help you exit the 
                investment property business on your terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Determine Your Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            How We Determine Your Cash Offer
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              At Speedy Cash Home Offers, we use a comprehensive evaluation process to determine fair cash offers for 
              your property. Our team, led by Dr. Janet Duffy with over 25 years of Las Vegas real estate experience, 
              considers multiple factors to ensure you receive a competitive offer that reflects your home's true value.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Current Market Value Analysis</h3>
                <p className="text-gray-600">
                  We analyze recent sales of comparable properties in your Las Vegas neighborhood to understand current 
                  market conditions. This includes looking at similar homes that have sold in the past 90 days, 
                  considering factors like square footage, number of bedrooms and bathrooms, lot size, and overall 
                  condition. Our deep knowledge of the Las Vegas real estate market allows us to accurately assess 
                  your property's value in today's market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Property Condition Assessment</h3>
                <p className="text-gray-600">
                  Unlike traditional buyers who may be deterred by needed repairs, we factor in the cost of necessary 
                  renovations, updates, and repairs when making our offer. We consider everything from cosmetic updates 
                  to major structural issues, ensuring our offer accounts for the work needed to bring the property 
                  to market-ready condition. This means you don't have to invest in repairs yourself - we handle that 
                  after purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Location and Neighborhood Factors</h3>
                <p className="text-gray-600">
                  Location is crucial in real estate, and we carefully evaluate your property's location within Las Vegas. 
                  Factors like proximity to schools, shopping, employment centers, and desirable neighborhoods all 
                  influence value. We also consider future development plans, neighborhood trends, and local market 
                  dynamics that could affect your property's value.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Quick Sale Premium</h3>
                <p className="text-gray-600">
                  While we provide competitive offers, it's important to understand that cash buyers typically offer 
                  slightly below full market value because we're providing speed, convenience, and certainty. However, 
                  when you factor in the savings from no commissions, no repairs, no staging, and no waiting for buyer 
                  financing, many sellers find our offers compare favorably to traditional sales after all costs are 
                  considered.
                </p>
              </div>
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
            Join hundreds of Las Vegas homeowners who chose the fast, fair, and simple way to sell. Get your free 
            cash offer today - no obligations, no pressure, just a straightforward process designed to help you 
            move forward with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="http://drjanduffy.realscout.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Your Free Valuation
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
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="sellers" />
    </div>
  );
}
