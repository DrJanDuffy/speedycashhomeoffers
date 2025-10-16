import type { Route } from "./+types/blog";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Real Estate Blog | Speedy Cash Home Offers" },
    { name: "description", content: "Read our real estate blog for home selling tips and market insights. Learn how to sell your house fast for cash in Las Vegas and Southern California with Dr. Janet Duffy's expert advice." },
    { name: "keywords", content: "real estate blog, home selling tips, sell house fast Las Vegas, cash home buyers blog, Dr Janet Duffy blog, real estate advice" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://speedycashhomeoffers.com/blog" },
    { property: "og:title", content: "Real Estate Blog | Speedy Cash Home Offers" },
    { property: "og:description", content: "Read our blog for home selling tips and real estate insights. Learn how to sell your house fast for cash with Dr. Janet Duffy's expert advice." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://speedycashhomeoffers.com/blog" },
    { property: "og:image", content: "https://speedycashhomeoffers.com/images/blog-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Real Estate Blog | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Read our blog for home selling tips and real estate insights. Learn how to sell your house fast for cash with Dr. Janet Duffy's expert advice." },
    { name: "twitter:image", content: "https://speedycashhomeoffers.com/images/blog-twitter-image.jpg" },
  ];
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Speedy Cash Home Offers Blog",
            "description": "Real estate blog featuring home selling tips and market insights from Dr. Janet Duffy",
            "url": "https://speedycashhomeoffers.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Speedy Cash Home Offers",
              "logo": {
                "@type": "ImageObject",
                "url": "https://speedycashhomeoffers.com/images/logo.png"
              }
            },
            "author": {
              "@type": "Person",
              "name": "Dr. Janet Duffy",
              "jobTitle": "Founder & CEO"
            },
            "blogPost": [
              {
                "@type": "BlogPosting",
                "headline": "Selling an Unsellable Home or Property",
                "description": "Learn how Dr. Janet Duffy helps homeowners sell properties that traditional real estate agents won't touch.",
                "datePublished": "2025-09-10",
                "author": {
                  "@type": "Person",
                  "name": "Dr. Janet Duffy"
                }
              },
              {
                "@type": "BlogPosting",
                "headline": "How Much Does It Cost To Sell a House in Las Vegas, Nevada?",
                "description": "Discover the hidden costs of selling a house traditionally versus selling to a cash buyer.",
                "datePublished": "2025-07-28",
                "author": {
                  "@type": "Person",
                  "name": "Dr. Janet Duffy"
                }
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Real Estate Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few days. 
              We buy houses for cash and there is no obligation, so contact us today or read our online reviews!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get My Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-colors">
                Call (702) 555-0123
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Expert Real Estate Insights and Home Selling Tips
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Welcome to the Speedy Cash Home Offers blog, your trusted source for real estate insights, home selling strategies, 
              and market analysis. Led by Dr. Janet Duffy with over 25 years of experience in Las Vegas and Southern California real estate markets, 
              our blog provides valuable information to help homeowners make informed decisions about selling their properties. 
              Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, or simply want to avoid 
              the traditional selling process, our expert advice can guide you toward the best solution for your unique situation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Browse Our Home Selling Tips and Real Estate Articles
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">All</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Escrow Articles</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Flipping</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Hoarder Articles</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Hoarder Home Selling</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Home Repairs</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Home Sales Gone Wrong</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Landlord Topics</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Mold in The Home</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Real Estate</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Sell My House Fast</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Selling Your Home AS IS</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Selling Your Home Fast</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Termites</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Water Damage</span>
            <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">We Buy Houses</span>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Latest Real Estate Articles and Home Selling Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-pink-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">Selling Your Home AS IS</span>
                  <span className="text-gray-500 text-sm ml-auto">September 10, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Selling an Unsellable Home or Property
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn how Dr. Janet Duffy helps homeowners sell properties that traditional real estate agents won't touch. From hoarder homes to properties with major damage, we buy houses in any condition throughout Las Vegas and Southern California.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Real Estate</span>
                  <span className="text-gray-500 text-sm ml-auto">July 28, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  How Much Does It Cost To Sell a House in Las Vegas, Nevada?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the hidden costs of selling a house traditionally versus selling to a cash buyer. Dr. Duffy breaks down all the fees and expenses you can avoid when working with Speedy Cash Home Offers.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">We Buy Houses</span>
                  <span className="text-gray-500 text-sm ml-auto">June 17, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Military Deployment and Real Estate Sales
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Deployment? Sell Your Las Vegas House for Cash Before Relocating For Military Active Duty. Learn how we help military families sell quickly and stress-free, understanding the unique challenges of military relocations.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Selling Your Home Fast</span>
                  <span className="text-gray-500 text-sm ml-auto">May 13, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Sell Your House Today to Trusted Las Vegas Real Estate Cash Buyers
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Why choose Dr. Janet Duffy and Speedy Cash Home Offers? Learn about our proven track record and commitment to fair, fast transactions in Las Vegas and Southern California markets.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">Sell My House Fast</span>
                  <span className="text-gray-500 text-sm ml-auto">April 1, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Sell My House Without Listing It
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Skip the traditional MLS listing process. Learn how to sell your house directly to cash buyers without the hassle of showings, open houses, or waiting for the right buyer in Las Vegas or Southern California.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-teal-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-medium">We Buy Houses</span>
                  <span className="text-gray-500 text-sm ml-auto">February 20, 2025</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Selling Your Parents' Home - We Make It Easy to Sell Mom or Dad's House
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Inheriting a home can be overwhelming. Dr. Duffy shares how we help families navigate the emotional and practical aspects of selling inherited properties, providing compassionate support during difficult times.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-400 to-red-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Selling Your Home Fast</span>
                  <span className="text-gray-500 text-sm ml-auto">December 3, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Avoid Making These Common Mistakes When Selling a Home in Las Vegas
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn from Dr. Duffy's 25+ years of experience. Discover the most common mistakes homeowners make when selling and how to avoid them, ensuring a smooth transaction process.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-400 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">We Buy Houses</span>
                  <span className="text-gray-500 text-sm ml-auto">November 5, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Top Cash Home Buyers and Home Buying Companies
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  What to look for when choosing a cash home buyer. Learn how to identify legitimate companies and avoid scams in the real estate industry, ensuring you work with trusted professionals.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>

            <article className="bg-gray-50 rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">Selling Your Home Fast</span>
                  <span className="text-gray-500 text-sm ml-auto">September 19, 2024</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Sell Dirty or Filthy Homes for Cash Right Now
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Don't let the condition of your home stop you from selling. We buy houses in any condition, including those that need extensive cleaning or repairs, throughout Las Vegas and Southern California.
                </p>
                <a href="#" className="text-pink-600 font-medium hover:text-pink-700">Read More →</a>
              </div>
            </article>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-2 text-sm font-medium text-white bg-pink-600 border border-pink-600 rounded-md">
                1
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                2
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Blog Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Read Our Real Estate Blog?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Insights</h3>
              <p className="text-gray-600">25+ years of real estate experience from Dr. Janet Duffy</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Market Knowledge</h3>
              <p className="text-gray-600">Specialized insights for Las Vegas and Southern California markets</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Practical Tips</h3>
              <p className="text-gray-600">Actionable advice for real-world home selling situations</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Updates</h3>
              <p className="text-gray-600">Regular posts with current market trends and insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Stay Updated with Real Estate Tips
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get the latest home selling tips and market insights from Dr. Janet Duffy delivered to your inbox. 
            Stay informed about Las Vegas and Southern California real estate trends, cash home buying opportunities, 
            and expert advice for selling your property quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Sell Your House Fast?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few days. 
            We buy houses for cash and there is no obligation, so contact us today! Let our blog insights 
            guide you toward making the best decision for your property sale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-pink-600 transition-colors">
              Call (702) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}