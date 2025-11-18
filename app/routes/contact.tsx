import { Link, redirect } from "react-router";
import Breadcrumbs from "~/components/Breadcrumbs";
import RelatedPages from "~/components/RelatedPages";
import TrustBadges from "~/components/TrustBadges";
import { Label } from "~/components/ui/label";
import { submitContactForm } from "~/lib/actions";
import type { Route } from "./+types/contact";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const result = await submitContactForm(formData);

  if (result.success) {
    return redirect("/thank-you");
  }

  return { error: result.message };
};

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Contact Us Today | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Contact Dr. Janet Duffy for FREE cash offer! We buy houses fast in Las Vegas & Southern California. Call (702) 500-1981 or get quote in 24hrs!",
    },
    {
      name: "keywords",
      content:
        "contact Speedy Cash Home Offers, sell house fast Las Vegas, cash offer Las Vegas, Dr Janet Duffy contact, real estate inquiry Las Vegas, sell house Southern California",
    },
    { name: "author", content: "Dr. Janet Duffy" },
    { name: "robots", content: "index, follow" },
    { tagName: "link", rel: "canonical", href: "https://www.speedycashhomeoffers.com/contact" },
    { property: "og:title", content: "Contact Us Today | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Contact Dr. Janet Duffy at Speedy Cash Home Offers for a free cash offer. We buy houses fast in Las Vegas and Southern California.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/contact" },
    {
      property: "og:image",
      content: "https://www.speedycashhomeoffers.com/images/contact-og-image.jpg",
    },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Contact Us Today | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Contact Dr. Janet Duffy at Speedy Cash Home Offers for a free cash offer. We buy houses fast in Las Vegas and Southern California.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/contact-twitter-image.jpg",
    },
  ];
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us Today",
            description:
              "Contact Dr. Janet Duffy at Speedy Cash Home Offers for a free cash offer. We buy houses fast in Las Vegas and Southern California.",
            url: "https://www.speedycashhomeoffers.com/contact",
            datePublished: "2024-01-15",
            dateModified: "2025-01-17",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.speedycashhomeoffers.com/#website",
            },
            potentialAction: {
              "@type": "CommunicateAction",
              target: {
                "@type": "EntryPoint",
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform",
                  "http://schema.org/IOSPlatform",
                  "http://schema.org/AndroidPlatform",
                ],
              },
              handler: {
                "@type": "HttpActionHandler",
                url: "https://www.speedycashhomeoffers.com/contact",
              },
            },
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Speedy Cash Home Offers | Homes by Dr. Jan Duffy",
              telephone: "(702) 500-1981",
              email: "DrDuffy@SpeedyCashHomeOffers.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2775 Ariel Ocean St",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89156",
                addressCountry: "US",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
              founder: {
                "@type": "Person",
                name: "Dr. Janet Duffy",
                jobTitle: "Founder & CEO",
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us Today</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few
              days. There is no obligation, so contact us today and we will share some house selling
              tips too!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span>2775 Ariel Ocean St, Las Vegas, NV 89156</span>
              </div>
              <a
                href="tel:(702) 500-1981"
                className="flex items-center hover:underline"
                aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>(702) 500-1981</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Ready to Get Your Free Cash Offer?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Speedy Cash Home Offers, we understand that selling your home can be one of the
              most important decisions you'll make. Whether you're facing foreclosure, dealing with
              an inherited property, going through a divorce, relocating for work, or simply want to
              avoid the traditional selling process, we're here to help. Our experienced team, led
              by Dr. Janet Duffy, has helped thousands of homeowners across Las Vegas and Southern
              California sell their properties quickly and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />


      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Get My Free, No-Obligation Quote
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Call us today at (702) 500-1981. Get a cash offer to sell your house fast in as little
              as 24 hours. It's Quick and Easy!
            </p>
            <p className="text-sm text-gray-500">"*" indicates required fields</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Get My Free, No-Obligation Quote</h2>
              <p className="text-gray-600">
                Call us today at (702) 500-1981. Get a cash offer to sell your house fast in as
                little as 24 hours. It's Quick and Easy!
              </p>
            </div>
            <form
              className="space-y-6"
              method="POST"
              onSubmit={() => {
                if (typeof window !== "undefined" && window.trackFormSubmit)
                  window.trackFormSubmit("contact_form", window.location.href);
              }}
            >
              {/* Form data will be sent to Follow Up Boss via server action */}

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="First Last"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(702) 500-1981"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-sm text-gray-500">
                  Please check your email address. Email addresses cannot end in a period.
                </p>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where is your home? *
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="street"
                    placeholder="Street"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <select
                    name="state"
                    required
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-label="Select your state"
                  >
                    <option value="">State</option>
                    <option value="NV">Nevada</option>
                    <option value="CA">California</option>
                    <option value="AZ">Arizona</option>
                    <option value="UT">Utah</option>
                    <option value="CO">Colorado</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="89156"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="hear-about"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Where did you hear about us?
                </label>
                <select
                  id="hear-about"
                  name="hear-about"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select an option</option>
                  <option value="web">Web</option>
                  <option value="tv">TV Commercial</option>
                  <option value="radio">Radio</option>
                  <option value="social">Social Media</option>
                  <option value="bbb">BBB</option>
                  <option value="word-of-mouth">Word of Mouth</option>
                  <option value="email">Email</option>
                  <option value="mail">Letter or Postcard</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="home-details">Tell us about your home (optional)</Label>
                <textarea
                  id="home-details"
                  name="home-details"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us about your property, its condition, and any specific needs you have..."
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agree_to_texts"
                    className="mt-1 mr-3"
                    required
                    aria-label="Agree to receive text messages"
                  />
                  <span className="text-sm text-gray-600">
                    By submitting your phone number, you agree to receive text messages from Speedy
                    Cash Home Offers regarding the sell of your home. You can opt-out anytime.
                    Message and data rates may apply.
                    <Link to="/privacy-policy" className="text-emerald-600 hover:text-emerald-700">
                      View Privacy Policy
                    </Link>
                    .
                  </span>
                </Label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-4 rounded-lg font-semibold w-full"
                >
                  Get My Free Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Speedy Cash Home Offers
          </h2>

          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Are you wanting to sell a home and have been searching for a house buying website?
              Have you been wondering "Can I get cash for my home quick" or "can I sell my house
              fast Las Vegas"? Do you have your house for sale by owner or are thinking to list your
              home for sale by owner? Speedy Cash Home Offers can help you and buy your house!
            </p>

            <p className="text-lg text-gray-600 mb-6">
              There are many home buying websites and companies that say "we buy houses as is, in
              any condition" or they can give you a fast house sale. It's important to know that
              these companies may or may not have successful track records of making the process
              easy for you and closing in a timely manner. We have purchased thousands of houses and
              have a system that minimizes the work for the home seller. We will only make a cash
              offer for your home if we can complete the transaction in a timely manner and simplify
              it for you!
            </p>

            <p className="text-lg text-gray-600 mb-8">
              When considering working with a company to sell your home to, make sure to review
              their history and their online testimonials. We have an A+ rating with the Better
              Business Bureau because of our process and our experience. We buy houses in Las Vegas
              and Southern California so don't take a chance when selling what is likely your
              largest asset, your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
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
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600">
                We have purchased thousands of houses with a system that minimizes work for home
                sellers.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
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
              <h3 className="text-xl font-semibold mb-2">A+ BBB Rating</h3>
              <p className="text-gray-600">
                We maintain an A+ rating with the Better Business Bureau because of our process and
                experience.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-emerald-600"
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
              <h3 className="text-xl font-semibold mb-2">Fast & Simple</h3>
              <p className="text-gray-600">
                We only make cash offers if we can complete the transaction quickly and simplify it
                for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Multiple Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-emerald-600 mr-4 mt-1"
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
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      2775 Ariel Ocean St
                      <br />
                      Las Vegas, NV 89156
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-emerald-600 mr-4 mt-1"
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
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:(702) 500-1981"
                      className="text-gray-600 hover:text-emerald-600"
                      aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
                    >
                      (702) 500-1981
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 text-emerald-600 mr-4 mt-1"
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
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:DrDuffy@SpeedyCashHomeOffers.com"
                      className="text-gray-600 hover:text-emerald-600"
                      aria-label="Email Dr. Janet Duffy at DrDuffy@SpeedyCashHomeOffers.com"
                    >
                      DrDuffy@SpeedyCashHomeOffers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">4.9 stars</h4>
                <p className="text-gray-600">Based on 500+ reviews and 200+ Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Contact Speedy Cash Home Offers?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              When you contact Speedy Cash Home Offers, you're taking the first step toward a
              stress-free home sale. Our team, led by Dr. Janet Duffy, has helped thousands of
              homeowners across Las Vegas and Southern California sell their properties quickly and
              hassle-free. Here's what makes us different and why you should reach out today.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  No-Obligation Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  When you contact us, there's absolutely no obligation to proceed with a sale. We
                  provide free consultations to help you understand your options, whether you're
                  facing foreclosure, dealing with an inherited property, going through a divorce,
                  or simply want to sell quickly. Our goal is to provide you with information and
                  options so you can make the best decision for your situation.
                </p>
                <p className="text-gray-600">
                  During your consultation, we'll discuss your property, your situation, and your
                  timeline. We'll explain our process, answer your questions, and provide you with a
                  preliminary assessment. You're under no pressure to accept any offer, and we
                  encourage you to explore all your options before making a decision.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Expert Market Knowledge
                </h3>
                <p className="text-gray-600 mb-4">
                  Dr. Duffy's 25+ years of experience in Las Vegas and Southern California real
                  estate markets means we have deep knowledge of local property values, market
                  trends, and neighborhood characteristics. This expertise allows us to provide
                  accurate valuations and competitive cash offers based on current market
                  conditions.
                </p>
                <p className="text-gray-600">
                  Our market knowledge extends beyond simple property values. We understand which
                  neighborhoods are appreciating, which areas have strong rental demand, and which
                  properties have the best investment potential. This knowledge helps us provide
                  fair offers that reflect true market value while accounting for property condition
                  and needed repairs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Fast Response Times</h3>
                <p className="text-gray-600 mb-4">
                  We understand that when you need to sell your home, time is often of the essence.
                  That's why we respond quickly to all inquiries, typically within hours of your
                  initial contact. Our team is available seven days a week to answer your questions
                  and provide immediate assistance.
                </p>
                <p className="text-gray-600">
                  Whether you contact us through our online form, by phone, or by email, you can
                  expect a prompt response. We know that selling your home can be stressful, and
                  we're committed to making the process as smooth and efficient as possible from the
                  very first contact.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Transparent and Honest Communication
                </h3>
                <p className="text-gray-600 mb-4">
                  From your first contact with us, you'll experience transparent, honest
                  communication. We believe in providing clear information about our process, our
                  offers, and what you can expect throughout the transaction. There are no hidden
                  fees, no surprise costs, and no pressure tactics - just honest, straightforward
                  communication.
                </p>
                <p className="text-gray-600">
                  Our commitment to transparency means you'll always know where you stand. We'll
                  explain how we arrive at our offers, what costs are involved (there are none for
                  you), and what the timeline looks like. This open communication builds trust and
                  ensures you can make informed decisions with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            We Serve Homeowners Across Multiple Markets
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
            Speedy Cash Home Offers proudly serves homeowners throughout Las Vegas and Southern
            California. Our extensive market knowledge allows us to provide accurate valuations and
            competitive cash offers for properties in various communities and neighborhoods.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">Las Vegas</h3>
              <p className="text-gray-600">
                Serving all Las Vegas neighborhoods and surrounding areas
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">Los Angeles</h3>
              <p className="text-gray-600">Covering Los Angeles County and metropolitan areas</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">Orange County</h3>
              <p className="text-gray-600">Serving coastal and inland Orange County communities</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">Riverside</h3>
              <p className="text-gray-600">Covering Riverside County and Inland Empire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Sell Your House Fast?</h2>
          <p className="text-xl mb-8">
            Dr. Janet Duffy has purchased thousands of houses and we can buy yours in just a few
            days. There is no obligation, so contact us today! Get your free cash offer and discover
            how easy it can be to sell your home without the traditional hassles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get My Free Quote
            </a>
            <a
              href="tel:(702) 500-1981"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors text-center"
              aria-label="Call Speedy Cash Home Offers at (702) 500-1981"
            >
              Call (702) 500-1981
            </a>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <RelatedPages currentPage="contact" />
    </div>
  );
}
