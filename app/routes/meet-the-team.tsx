import type { Route } from "./+types/meet-the-team";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Meet The Team | Speedy Cash Home Offers" },
    { name: "description", content: "Meet the experienced team at Speedy Cash Home Offers, led by Dr. Janet Duffy. Our dedicated professionals are here to help you sell your house fast for cash in Las Vegas and Southern California." },
    { name: "keywords", content: "meet the team, Dr Janet Duffy, real estate team, cash home buyers team, Las Vegas real estate professionals, Southern California home buyers" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://speedycashhomeoffers.com/meet-the-team" },
    { property: "og:title", content: "Meet The Team | Speedy Cash Home Offers" },
    { property: "og:description", content: "Meet the experienced team at Speedy Cash Home Offers, led by Dr. Janet Duffy. Our dedicated professionals are here to help you sell your house fast for cash." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://speedycashhomeoffers.com/meet-the-team" },
    { property: "og:image", content: "https://speedycashhomeoffers.com/images/team-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Meet The Team | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Meet the experienced team at Speedy Cash Home Offers, led by Dr. Janet Duffy. Our dedicated professionals are here to help you sell your house fast for cash." },
    { name: "twitter:image", content: "https://speedycashhomeoffers.com/images/team-twitter-image.jpg" },
  ];
};

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Speedy Cash Home Offers",
            "description": "Las Vegas and Southern California's most trusted home buyers, led by Dr. Janet Duffy",
            "url": "https://speedycashhomeoffers.com",
            "founder": {
              "@type": "Person",
              "name": "Dr. Janet Duffy",
              "jobTitle": "Founder & CEO",
              "description": "With over 25 years of real estate experience, Dr. Duffy leads our team with expertise and compassion"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Russell Smith",
                "jobTitle": "Operations Manager"
              },
              {
                "@type": "Person",
                "name": "Michelle Chen",
                "jobTitle": "Client Relations Director"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Main Street",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89101",
              "addressCountry": "US"
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
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet The Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Speedy Cash Home Offers, headquartered in Las Vegas, NV, is a family-owned company focused on eliminating 
              the pain points traditionally associated with selling your house. Meet the people helping you sell your house.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Our Company Culture and Values
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Speedy Cash Home Offers, we believe that selling your home should be a straightforward, stress-free experience. 
              Our team of dedicated professionals works tirelessly to ensure every homeowner receives fair treatment, transparent communication, 
              and exceptional service throughout the entire process. With over 25 years of combined experience in Las Vegas and Southern California real estate markets, 
              we understand the unique challenges homeowners face and are committed to providing solutions that work for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold text-2xl">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Dr. Janet Duffy</h3>
              <p className="text-indigo-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 25 years of real estate experience, Dr. Duffy leads our team with expertise and compassion, 
                helping thousands of homeowners sell their properties quickly and stress-free. Her deep understanding of 
                Las Vegas and Southern California markets ensures clients receive fair, competitive offers for their properties.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold text-2xl">RS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Russell Smith</h3>
              <p className="text-indigo-600 font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Russell oversees our day-to-day operations, ensuring every transaction runs smoothly and our clients 
                receive the highest level of service throughout the selling process. His attention to detail and commitment 
                to excellence helps maintain our reputation as Las Vegas's most trusted home buyers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold text-2xl">MC</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michelle Chen</h3>
              <p className="text-indigo-600 font-medium mb-2">Client Relations Director</p>
              <p className="text-gray-600 text-sm">
                Michelle leads our client experience team, ensuring every homeowner feels supported and informed 
                throughout their journey with Speedy Cash Home Offers. Her empathetic approach and extensive knowledge 
                of the home selling process make her an invaluable resource for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Client Experience Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our Client Experience Team is dedicated to providing exceptional service and support throughout your home selling journey. 
            Each team member is trained to handle various situations with professionalism and care, ensuring you feel confident and informed at every step.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">T</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Tyson</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Manager</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">L</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Lebs</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">S</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Scout</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">H</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Holden</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">R</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Rider</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">A</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Ajani</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">L</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Logan</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">C</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Christina</h3>
              <p className="text-indigo-600 text-sm font-medium">Client Experience Coordinator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Acquisition Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Property Acquisition Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our Acquisition Team specializes in evaluating properties and making fair, competitive offers. 
            Each team member has extensive experience in Las Vegas and Southern California real estate markets, 
            ensuring accurate property valuations and smooth transaction processes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">J</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">James</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Team Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">A</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Andre</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">A</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Alvin</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">R</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Russell</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">M</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Matt</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">A</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Andrew</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Manager</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">J</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Jeremiah</h3>
              <p className="text-indigo-600 text-sm font-medium">Acquisition Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disposition Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Transaction and Disposition Team
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our Disposition Team handles all aspects of property transactions, from initial paperwork to final closing. 
            They work closely with title companies, escrow agents, and other professionals to ensure smooth, timely closings 
            for all our clients across Las Vegas and Southern California markets.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">T</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Troy</h3>
              <p className="text-indigo-600 text-sm font-medium">Disposition Manager</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">S</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Sutton</h3>
              <p className="text-indigo-600 text-sm font-medium">Disposition Manager</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">M</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Melissa</h3>
              <p className="text-indigo-600 text-sm font-medium">Transaction Manager</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">M</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Michelle</h3>
              <p className="text-indigo-600 text-sm font-medium">Transaction Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">T</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Tara</h3>
              <p className="text-indigo-600 text-sm font-medium">Transaction Coordinator</p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-indigo-600 font-semibold">M</span>
              </div>
              <h3 className="text-lg font-semibold mb-1">Meggan</h3>
              <p className="text-indigo-600 text-sm font-medium">Transaction Assistant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values and Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Team's Commitment to Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">We believe in open, honest communication throughout every step of the process.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600">We provide competitive, market-based offers that reflect your property's true value.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Efficiency</h3>
              <p className="text-gray-600">Our streamlined process ensures quick closings without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Compassion</h3>
              <p className="text-gray-600">We understand selling a home can be emotional and provide empathetic support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Work With Our Expert Team?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few days. 
            Our experienced team is ready to provide you with exceptional service and a fair cash offer for your property. 
            There is no obligation, so contact us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-600 transition-colors">
              Call (702) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}