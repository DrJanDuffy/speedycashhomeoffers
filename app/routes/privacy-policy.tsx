import Breadcrumbs from "~/components/Breadcrumbs";
import type { Route } from "./+types/privacy-policy";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Privacy Policy | Speedy Cash Home Offers" },
    {
      name: "description",
      content:
        "Privacy Policy for Speedy Cash Home Offers. Learn how we collect, use, and protect your personal information when you use our cash home buying services.",
    },
    { name: "robots", content: "index, follow" },
    {
      tagName: "link",
      rel: "canonical",
      href: "https://www.speedycashhomeoffers.com/privacy-policy",
    },
    { property: "og:title", content: "Privacy Policy | Speedy Cash Home Offers" },
    {
      property: "og:description",
      content:
        "Privacy Policy for Speedy Cash Home Offers. Learn how we collect, use, and protect your personal information.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/privacy-policy" },
    { property: "og:image", content: "https://www.speedycashhomeoffers.com/images/og-image.jpg" },
    { property: "og:site_name", content: "Speedy Cash Home Offers" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Privacy Policy | Speedy Cash Home Offers" },
    {
      name: "twitter:description",
      content:
        "Privacy Policy for Speedy Cash Home Offers. Learn how we protect your personal information.",
    },
    {
      name: "twitter:image",
      content: "https://www.speedycashhomeoffers.com/images/twitter-image.jpg",
    },
  ];
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumbs />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description: "Privacy Policy for Speedy Cash Home Offers",
            url: "https://www.speedycashhomeoffers.com/privacy-policy",
            publisher: {
              "@id": "https://www.speedycashhomeoffers.com/#organization",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Privacy Policy</h1>
          <p className="text-xl text-center text-blue-100">Your privacy is important to us</p>
          <p className="text-sm text-center text-blue-200 mt-2">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Speedy Cash Home Offers ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website, use our services, or contact us about
              selling your property.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              2. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.1 Information You Provide
            </h3>
            <p className="text-gray-700 mb-4">
              We collect information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Property address and details about your property</li>
              <li>Information about your situation (e.g., foreclosure, inheritance, relocation)</li>
              <li>Any other information you choose to provide in forms or communications</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2.2 Automatically Collected Information
            </h3>
            <p className="text-gray-700 mb-4">
              When you visit our website, we may automatically collect certain information,
              including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information and operating system</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide, operate, and maintain our cash home buying services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Evaluate your property and provide cash offers</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or illegal activity</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              4. Information Sharing and Disclosure
            </h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your information only in the
              following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>
                <strong>Service Providers:</strong> We may share information with third-party
                service providers who perform services on our behalf, such as customer relationship
                management (CRM) systems, email services, and analytics providers.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required by law
                or in response to valid legal requests.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                of assets, your information may be transferred.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may share information with your explicit
                consent.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security measures to protect
              your personal information. However, no method of transmission over the Internet or
              electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              6. Your Rights and Choices
            </h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:DrDuffy@SpeedyCashHomeOffers.com"
                className="text-blue-600 hover:text-blue-800"
              >
                DrDuffy@SpeedyCashHomeOffers.com
              </a>{" "}
              or call us at{" "}
              <a href="tel:(702) 500-1981" className="text-blue-600 hover:text-blue-800">
                (702) 500-1981
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 mb-6">
              We use cookies and similar tracking technologies to track activity on our website and
              store certain information. You can instruct your browser to refuse all cookies or to
              indicate when a cookie is being sent. However, if you do not accept cookies, you may
              not be able to use some portions of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Third-Party Links</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the
              privacy practices of these external sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected
              information from a child, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Speedy Cash Home Offers</strong>
              </p>
              <p className="text-gray-700 mb-2">
                2775 Ariel Ocean St
                <br />
                Las Vegas, NV 89156
              </p>
              <p className="text-gray-700 mb-2">
                Phone:{" "}
                <a href="tel:(702) 500-1981" className="text-blue-600 hover:text-blue-800">
                  (702) 500-1981
                </a>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:DrDuffy@SpeedyCashHomeOffers.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  DrDuffy@SpeedyCashHomeOffers.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
