import type { Route } from "./+types/thank-you";
import Breadcrumbs from "~/components/Breadcrumbs";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Thank You - Speedy Cash Home Offers" },
    { name: "description", content: "Thank you for contacting Speedy Cash Home Offers. We'll get back to you within 24 hours with your free cash offer!" },
    { name: "robots", content: "noindex, nofollow" },
  ];
};

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your message has been received successfully.
          </p>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What Happens Next?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for reaching out to Speedy Cash Home Offers! Dr. Janet Duffy and our team 
              are excited to help you with your home selling needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">We'll Review Your Information</h3>
              <p className="text-gray-600">Our team will carefully review your property details and requirements.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Your Free Cash Offer</h3>
              <p className="text-gray-600">We'll contact you within 24 hours with your personalized cash offer.</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Close in Days, Not Months</h3>
              <p className="text-gray-600">If you accept our offer, we can close in as little as 7 days!</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Need Immediate Assistance?</h3>
            <p className="text-lg text-gray-600 mb-6">
              If you have urgent questions or need to speak with someone right away, 
              don't hesitate to call us directly.
            </p>
            <a 
              href="tel:(702) 500-1981" 
              className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Why Choose Speedy Cash Home Offers?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">No Fees, No Commissions</h3>
                <p className="text-gray-600">
                  We don't charge any fees, commissions, or closing costs. What we offer is what you receive.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">Fast Closing</h3>
                <p className="text-gray-600">
                  We can close in as little as 7 days, helping you move on your timeline.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">Buy As-Is</h3>
                <p className="text-gray-600">
                  We buy houses in any condition - no repairs, inspections, or staging required.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-emerald-600">Local Expertise</h3>
                <p className="text-gray-600">
                  Dr. Janet Duffy has 25+ years of experience in Las Vegas and Southern California real estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return Home CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Explore More About Our Services
          </h2>
          <p className="text-xl mb-8">
            While you wait for our response, learn more about how we can help you sell your house fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/" 
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Back to Homepage
            </a>
            <a 
              href="/process" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Learn Our Process
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
