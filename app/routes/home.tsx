import type { Route } from "./+types/home";
import Breadcrumbs from "~/components/Breadcrumbs";
import AuthorBio from "~/components/AuthorBio";
import MarketInsightsSection from "~/components/MarketInsightsSection";
import TrustBadges from "~/components/TrustBadges";
import RelatedPages from "~/components/RelatedPages";
import RealScoutListings from "~/components/RealScoutListings";
import { CloudinarySample } from "~/components/CloudinaryImage";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "We Buy Houses For Cash, As-Is & Now | Speedy Cash Home Offers" },
    { name: "description", content: "Las Vegas's #1 cash home buyers! We specialize in North/East Vegas distressed properties ($300-450K). No fees, no repairs, no agents. Get cash offer in 24hrs!" },
    { name: "keywords", content: "we buy houses cash Las Vegas, North Las Vegas cash buyers, East Vegas distressed properties, 89031 89032 89110 89142, sell house fast Las Vegas, cash home buyers Nevada, Dr Janet Duffy, Speedy Cash Home Offers" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://www.speedycashhomeoffers.com/" },
    { property: "og:title", content: "We Buy Houses For Cash, As-Is & Now | Speedy Cash Home Offers" },
    { property: "og:description", content: "Las Vegas's most trusted cash home buyers. We specialize in North/East Vegas distressed properties ($300-450K). No showings. No agents. No repairs. No fees. Get a cash offer within 24 hours." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "We Buy Houses For Cash, As-Is & Now | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Las Vegas's most trusted cash home buyers. We specialize in North/East Vegas distressed properties ($300-450K). No showings. No agents. No repairs. No fees. Get a cash offer within 24 hours." },
    { name: "twitter:image", content: "https://www.speedycashhomeoffers.com/images/twitter-image.jpg" },
  ];
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      {/* Offer Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Offer",
            "name": "Cash Home Buying Offer",
            "description": "We buy houses for cash with no fees, no repairs needed, and fast closing in 7 days",
            "offeredBy": {
              "@type": "LocalBusiness",
              "name": "Speedy Cash Home Offers | Homes by Dr. Jan Duffy"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "price": "300000-450000",
              "priceCurrency": "USD",
              "description": "Cash offers for distressed properties in Las Vegas North/East neighborhoods"
            },
            "availability": "https://schema.org/InStock",
            "validFrom": "2024-10-15",
            "validThrough": "2025-12-31",
            "itemOffered": {
              "@type": "Service",
              "name": "Cash Home Buying Service",
              "description": "We buy houses for cash in Las Vegas and Southern California"
            },
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Closing Time",
                "value": "7 days"
              },
              {
                "@type": "PropertyValue", 
                "name": "Cash Advance",
                "value": "$20,000"
              },
              {
                "@type": "PropertyValue",
                "name": "Commission Fee",
                "value": "0%"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cash Home Buying Service",
            "description": "We buy houses for cash in Las Vegas and Southern California. Specializing in distressed properties, foreclosures, and inherited homes.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
              "telephone": "(702) 500-1981",
              "email": "DrDuffy@SpeedyCashHomeOffers.com"
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
                "@type": "City", 
                "name": "Los Angeles",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              },
              {
                "@type": "City",
                "name": "San Diego", 
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              }
            ],
            "offers": {
              "@type": "Offer",
              "priceRange": "$300000-$450000",
              "description": "Cash offers for distressed properties in Las Vegas North/East neighborhoods"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How quickly can you close on my Las Vegas home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We can close in as little as 7 days! Our streamlined process eliminates the delays of traditional real estate transactions. Most closings happen within 2-3 weeks, but we can expedite when needed for urgent situations like foreclosure prevention or job relocations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you buy houses in any condition?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We specialize in buying houses as-is, including distressed properties, foreclosures, inherited homes, and properties needing major repairs. Whether your home needs a new roof, has foundation issues, or requires complete renovation, we'll make a fair cash offer."
                }
              },
              {
                "@type": "Question",
                "name": "What areas of Las Vegas do you focus on?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We specialize in North Las Vegas (89031, 89032) and East Las Vegas (89110, 89142) where distressed inventory is highest. These areas offer the best opportunities for both sellers needing quick cash and investors seeking value. We also serve all Las Vegas neighborhoods."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any hidden fees or commissions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No! We don't charge any fees, commissions, or closing costs. What we offer is what you receive. Unlike traditional real estate sales that involve 6% agent commissions, inspection fees, repair costs, and marketing expenses, our process is completely transparent."
                }
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
            "description": "Las Vegas's most trusted cash home buyers. We specialize in North/East Vegas distressed properties ($300-450K). We buy houses for cash, as-is, with no repairs needed.",
            "url": "https://speedycashhomeoffers.com",
            "telephone": "(702) 500-1981",
            "email": "DrDuffy@SpeedyCashHomeOffers.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2775 Ariel Ocean St",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89156",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "36.1699",
              "longitude": "-115.1398"
            },
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
                "@type": "City", 
                "name": "Los Angeles",
                "containedInPlace": {
                  "@type": "State",
                  "name": "California"
                }
              }
            ],
            "serviceType": "Real Estate Investment",
            "founder": {
              "@type": "Person",
              "name": "Dr. Janet Duffy"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            },
            "sameAs": [
              "https://www.facebook.com/speedycashhomeoffers",
              "https://www.linkedin.com/company/speedycashhomeoffers"
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We Buy Houses For Cash, As-Is & Now
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Las Vegas's Most Trusted Cash Home Buyers! We specialize in North/East Vegas distressed properties ($300-450K). No showings. No agents. No repairs. No fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold text-center" onClick={() => { if (typeof window !== 'undefined' && window.trackCTAClick) window.trackCTAClick('Get My Free Quote', window.location.href); }}>
                Get My Free Quote
              </a>
              <a href="tel:(702) 500-1981" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-lg font-semibold text-center" onClick={() => { if (typeof window !== 'undefined' && window.trackPhoneClick) window.trackPhoneClick('hero_phone'); }}>
                Call (702) 500-1981
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600 text-lg mb-2">Star Rating</div>
              <p className="text-sm text-gray-500">From 500+ happy reviews on BBB, Google, and Yelp</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 text-lg mb-2">Years of Experience</div>
              <p className="text-sm text-gray-500">We have helped 1,000s of home sellers</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$20K</div>
              <div className="text-gray-600 text-lg mb-2">Cash Advance</div>
              <p className="text-sm text-gray-500">Receive your cash upfront and close confidently</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Choose Speedy Cash Home Offers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you need to sell your house fast in Las Vegas, Dr. Janet Duffy and her team at Speedy Cash Home Offers provide the most reliable and efficient solution. We specialize in North/East Vegas distressed properties ($300-450K) and offer California sellers a bridge to relocate to Vegas. Our cash home buying service eliminates the traditional hassles of selling real estate, offering homeowners a stress-free alternative to the conventional market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Warning icon for distressed property challenges">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No Agent Commissions</h3>
              <p className="text-gray-600">Avoid the hassle of finding a trusted real estate agent and paying expensive commission fees.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Chart icon showing market analysis challenges">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fair Market Pricing</h3>
              <p className="text-gray-600">No need to worry about whether your home is priced correctly for the Las Vegas or California market.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Chat bubble icon representing communication challenges">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No Negotiations</h3>
              <p className="text-gray-600">Say goodbye to back-and-forth haggling and lowball offers from traditional buyers.</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Briefcase icon representing business transaction delays">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Privacy Protection</h3>
              <p className="text-gray-600">Keep your privacy—no strangers touring your home during open houses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              How Our Cash Home Buying Process Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined home-selling solution eliminates common challenges that homeowners face when selling through traditional methods. At Speedy Cash Home Offers, we've perfected a process that saves you time, money, and stress. We focus on Las Vegas distressed properties and help California sellers relocate to Vegas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Checkmark circle icon showing guaranteed benefits">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Skip Inspections</h3>
              <p className="text-gray-600">Skip bothersome property inspections that can delay or derail traditional sales.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Dollar sign icon representing cash offers">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No Repair Costs</h3>
              <p className="text-gray-600">Sell your home as-is, without hiring expensive contractors or making costly repairs.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Clock icon representing fast closing times">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Guaranteed Closing</h3>
              <p className="text-gray-600">Avoid the risk of deals falling through at the last minute with unreliable buyers.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Arrow icon representing quick transaction process">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible Timeline</h3>
              <p className="text-gray-600">Move on your timeline, without pressure from buyers or market conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Las Vegas Distressed Property Sellers Choose Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Las Vegas Distressed Property Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>No fees for selling your Las Vegas home</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Fair cash offers for North/East Vegas distressed properties</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>We buy houses as-is in ZIP codes 89031, 89032, 89110, 89142</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>No out-of-pocket expenses or fees</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>7-day closings, or move within 60 days on your schedule</div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-600">Traditional Real Estate Challenges for Distressed Properties</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for traditional selling challenges">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Up to 6% commission plus repairs for distressed Las Vegas homes</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for traditional selling challenges">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Low offers and extended negotiations for distressed properties</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for traditional selling challenges">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Expensive repairs required before listing in Las Vegas market</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for traditional selling challenges">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Multiple showings and inspections for distressed properties</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for traditional selling challenges">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>2-3 month sales process with uncertain closing dates</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Market Focus */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Las Vegas Market Focus: North/East Neighborhoods
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We specialize in Las Vegas distressed properties, particularly in North Las Vegas (89031, 89032) and East Vegas (89110, 89142) where we find the best opportunities for both sellers and investors. Our target price range of $300-450K provides excellent margins while helping homeowners get fair cash offers quickly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Primary Market: Las Vegas</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Focus ZIP codes: 89031, 89032, 89110, 89142</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Target price: $300-450K distressed properties</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Most distressed inventory, best margins</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Existing presence and local expertise</div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Secondary Market: California Bridge</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Riverside/San Bernardino focus</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Help California sellers relocate to Vegas</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Quick cash for relocation needs</div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-label="Checkmark icon for no fees benefit">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-gray-700 text-base leading-relaxed" style={{color: '#374151'}}>Double-end deals when possible</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions About Selling Your House Fast
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              <details className="border rounded-lg px-6 py-4">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none">
                  <h3 className="inline">How quickly can you close on my Las Vegas home?</h3>
                </summary>
                <p className="text-gray-600 mt-3">We can close in as little as 7 days! Our streamlined process eliminates the delays of traditional real estate transactions. Most closings happen within 2-3 weeks, but we can expedite when needed for urgent situations like foreclosure prevention or job relocations.</p>
              </details>
              <details className="border rounded-lg px-6 py-4">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none">
                  <h3 className="inline">Do you buy houses in any condition?</h3>
                </summary>
                <p className="text-gray-600 mt-3">Yes! We specialize in buying houses as-is, including distressed properties, foreclosures, inherited homes, and properties needing major repairs. Whether your home needs a new roof, has foundation issues, or requires complete renovation, we'll make a fair cash offer.</p>
              </details>
              <details className="border rounded-lg px-6 py-4">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none">
                  <h3 className="inline">What areas of Las Vegas do you focus on?</h3>
                </summary>
                <p className="text-gray-600 mt-3">We specialize in North Las Vegas (89031, 89032) and East Las Vegas (89110, 89142) where distressed inventory is highest. These areas offer the best opportunities for both sellers needing quick cash and investors seeking value. We also serve all Las Vegas neighborhoods.</p>
              </details>
              <details className="border rounded-lg px-6 py-4">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none">
                  <h3 className="inline">Are there any hidden fees or commissions?</h3>
                </summary>
                <p className="text-gray-600 mt-3">No! We don't charge any fees, commissions, or closing costs. What we offer is what you receive. Unlike traditional real estate sales that involve 6% agent commissions, inspection fees, repair costs, and marketing expenses, our process is completely transparent.</p>
              </details>
              <details className="border rounded-lg px-6 py-4">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none">
                  <h3 className="inline">What if I'm behind on mortgage payments?</h3>
                </summary>
                <p className="text-gray-600 mt-3">We can help! Many homeowners facing foreclosure choose our cash offer to avoid the lengthy foreclosure process and protect their credit. We can close quickly to prevent foreclosure and provide immediate financial relief.</p>
              </details>
              <details className="border rounded-lg px-6 py-4">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer list-none">
                  <h3 className="inline">What makes Dr. Janet Duffy different?</h3>
                </summary>
                <p className="text-gray-600 mt-3">Dr. Janet Duffy brings 25+ years of real estate experience and a personal touch to every transaction. As a local Las Vegas expert, she understands market nuances and provides honest, transparent communication throughout the entire process.</p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our Satisfied Customers Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">MN</span>
                </div>
                <div>
                  <h3 className="font-semibold">Melanie Nolan</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-label="Five star rating">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited home so easy and stress-free."
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">SS</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sherman Simon</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-label="Five star rating">
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
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">DF</span>
                </div>
                <div>
                  <h3 className="font-semibold">Debra Franco</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-label="Five star rating">
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

      {/* Latest Market Insights */}
      <MarketInsightsSection 
        maxArticles={3} 
        title="Latest Real Estate Market Insights"
        className="bg-gray-50"
      />

      {/* Featured Properties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Featured Properties
          </h2>
          <RealScoutListings />
        </div>
      </section>

      {/* Cloudinary Integration Demo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CloudinarySample />
        </div>
      </section>

      {/* Why Trust Us - E-E-A-T Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Trust Dr. Janet Duffy?
          </h2>
          <div className="max-w-4xl mx-auto">
            <AuthorBio showFullBio={true} />
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="home" />

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your House Fast for Cash?
          </h2>
          <p className="text-xl mb-8">
            Our streamlined home-selling solution could be exactly what you need. At Speedy Cash Home Offers, we've helped thousands of Las Vegas and Southern California homeowners sell their properties quickly and hassle-free. Dr. Janet Duffy and her experienced team are ready to provide you with a fair cash offer for your home, regardless of its condition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Call (702) 500-1981
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}