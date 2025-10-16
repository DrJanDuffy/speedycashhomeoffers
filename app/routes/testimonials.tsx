import type { Route } from "./+types/testimonials";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Customer Reviews and Testimonials | Speedy Cash Home Offers" },
    { name: "description", content: "Read real customer reviews and testimonials from homeowners who sold their houses fast with Dr. Janet Duffy. 4.9 star rating from 500+ happy customers in Las Vegas and Southern California." },
    { name: "keywords", content: "customer reviews, testimonials, sell house fast Las Vegas, cash home buyers reviews, Dr Janet Duffy reviews, Speedy Cash Home Offers testimonials" },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://speedycashhomeoffers.com/testimonials" },
    { property: "og:title", content: "Customer Reviews and Testimonials | Speedy Cash Home Offers" },
    { property: "og:description", content: "Read real customer reviews and testimonials from homeowners who sold their houses fast with Dr. Janet Duffy. 4.9 star rating from 500+ happy customers." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://speedycashhomeoffers.com/testimonials" },
    { property: "og:image", content: "https://speedycashhomeoffers.com/images/testimonials-og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Customer Reviews and Testimonials | Speedy Cash Home Offers" },
    { name: "twitter:description", content: "Read real customer reviews and testimonials from homeowners who sold their houses fast with Dr. Janet Duffy. 4.9 star rating from 500+ happy customers." },
    { name: "twitter:image", content: "https://speedycashhomeoffers.com/images/testimonials-twitter-image.jpg" },
  ];
};

export default function Testimonials() {
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
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Melanie Nolan"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "One of the best companies to get the job done. Dr. Duffy made selling our inherited home so easy and stress-free."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Sherman Simon"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "I found the company is true to their words regarding helping you with your property. The process was smooth and transparent."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Debra Franco"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Dr. Duffy's team was absolutely amazing throughout, always professional, friendly, and helpful. I highly recommend them."
              }
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Reviews and Testimonials
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few days. 
              There is no obligation, so contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Get My Free Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Call (702) 555-0123
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Our Customer Satisfaction Metrics
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
              <p className="text-gray-600">Star Rating</p>
              <p className="text-sm text-gray-500">From 500+ happy reviews on BBB, Google, and Yelp</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <p className="text-gray-600">Years of Experience</p>
              <p className="text-sm text-gray-500">We have helped 1,000s of home sellers like yourself</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
              <p className="text-sm text-gray-500">High likelihood of being recommended to others</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Recent Customer Reviews
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">MN</span>
                </div>
                <div>
                  <h3 className="font-semibold">Melanie Nolan</h3>
                  <p className="text-sm text-gray-500">October 10, 2025</p>
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
                "One of the best companies to get the job done. Dr. Duffy made selling our inherited home so easy and stress-free."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">SS</span>
                </div>
                <div>
                  <h3 className="font-semibold">Sherman Simon</h3>
                  <p className="text-sm text-gray-500">October 8, 2025</p>
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
                "I found the company is true to their words regarding helping you with your property if you don't want the hassle with selling your home. Speedy Cash Home Offers is the way to go if you want the process to become smooth and transparent."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">DF</span>
                </div>
                <div>
                  <h3 className="font-semibold">Debra Franco</h3>
                  <p className="text-sm text-gray-500">October 7, 2025</p>
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
                "Speedy Cash Home Offers is awesome! They make the whole process of selling a house so easy, and the team (Dr. Duffy, Russ, Michelle) were absolutely amazing throughout, always professional, friendly, and helpful. If you need to sell your home for a fair price, quickly, and without any trouble, I highly recommend you contact Speedy Cash Home Offers."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">CC</span>
                </div>
                <div>
                  <h3 className="font-semibold">1967cartwright Cartwright</h3>
                  <p className="text-sm text-gray-500">October 1, 2025</p>
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
                "I loved my experience with Speedy Cash Home Offers. Dr. Duffy & Meggan were a dream to work with. If you're thinking about selling your home, look no further."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">DP</span>
                </div>
                <div>
                  <h3 className="font-semibold">Don Piccolo</h3>
                  <p className="text-sm text-gray-500">September 26, 2025</p>
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
                "Everyone at Speedy Cash Home Offers was great. Received a good offer, closed within 30 days and did not have to pay any fees. Dr. Duffy was great and communicated with me through the entire process. I would highly recommend to anyone interested in selling."
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-semibold">H</span>
                </div>
                <div>
                  <h3 className="font-semibold">Heather</h3>
                  <p className="text-sm text-gray-500">September 8, 2025</p>
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
                "Professional, Fair, knowledgeable, supportive and really care about their clients. What more can you ask for during such a turning point in a person's life? I would recommend them 100% to anyone in need of selling their home fast."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Detailed Customer Success Stories
          </h2>
          <div className="space-y-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">L</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Lori, Las Vegas Home Seller</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    "I can't speak highly enough about Speedy Cash Home Offers and my experience selling my home to them. 
                    They delivered 100% on every verbal promise they made to me and on every point in our contract. 
                    They were just as pleasant and accessible after I signed the contract as before. My home was in Las Vegas and, 
                    of course, I have no personal knowledge of the offices and personnel in other areas but wholeheartedly recommend 
                    them to anyone motivated to sell quickly. I was happy to accept their offer and hope they make a good profit on my home. 
                    In return for a fast, no hassle sale, I was happy to give them some of my equity in my home. 
                    Money should be used to make your life easier and Speedy Cash Home Offers was a blessing for me and made the sale and my move as stress free as possible."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Robert, Inherited Property Seller</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    "My wife and I sold her mother's house with Speedy Cash Home Offers, and the ENTIRE process was delightful, 
                    from the time Dr. Duffy and Courtney arrived at the house to provide a quote, until I recently visited the sold house yesterday. 
                    The entire team was extremely professional, Dr. Duffy was very easy to deal with and provided me a satisfactory quote to buy the house. 
                    We were pleased with the offer and the entire construction team did a fantastic job of renovating the house that our entire family was extremely pleased with. 
                    Even better was the escrow closed in about 3 weeks. I HIGHLY Recommend Speedy Cash Home Offers and to anyone who is wants to sell their home fast and wants to work with real professionals like Dr. Duffy."
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-purple-600 font-semibold text-lg">M</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Maria, Divorce Property Sale</h3>
                  <p className="text-gray-600 italic text-lg leading-relaxed">
                    "Going through a divorce was already stressful enough, and selling our shared home seemed like an impossible task. 
                    Dr. Duffy and her team at Speedy Cash Home Offers made what could have been a nightmare situation into something manageable. 
                    They handled everything professionally and helped us close quickly so we could both move forward with our lives. 
                    The fair offer they provided allowed both of us to walk away with our dignity intact. I can't thank them enough for their compassion and expertise during such a difficult time."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust and Credibility */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Trusted by Homeowners Across Las Vegas and Southern California
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              With a 96% positive customer experience and high likelihood of being recommended, we must be doing something right 
              to homeowners who need to sell their house fast. Our reviews are published on an ongoing basis across BBB, Google, and Yelp. 
              We can't control what is being said about us, but we try hard to live up to your expectations. Our commitment to transparency 
              and customer satisfaction has earned us recognition as one of the most trusted cash home buying companies in Las Vegas and Southern California.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Business Bureau</h3>
              <p className="text-gray-600">A+ Rating with hundreds of verified reviews from satisfied customers</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Google Reviews</h3>
              <p className="text-gray-600">4.9 stars from verified Google customers across multiple markets</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Yelp Reviews</h3>
              <p className="text-gray-600">Consistently high ratings from satisfied customers in Las Vegas and California</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Customers Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Our Customers Consistently Rate Us 5 Stars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Closing Process</h3>
              <p className="text-gray-600">Most customers close within 7-14 days, much faster than traditional sales.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No Hidden Fees</h3>
              <p className="text-gray-600">Transparent pricing with no surprise costs or commission fees.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
              <p className="text-gray-600">Direct communication with Dr. Duffy and her experienced team.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fair Market Value</h3>
              <p className="text-gray-600">Competitive offers based on current market conditions and property analysis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Satisfied Customers?
          </h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few days. 
            There is no obligation, so contact us today! Experience the same exceptional service that has earned us 
            hundreds of 5-star reviews from homeowners across Las Vegas and Southern California.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get My Free Quote
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors">
              Call (702) 555-0123
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}