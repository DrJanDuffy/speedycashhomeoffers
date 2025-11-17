import type { Route } from "./+types/terms-of-service";
import Breadcrumbs from "~/components/Breadcrumbs";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Terms of Service | Speedy Cash Home Offers" },
    { name: "description", content: "Terms of Service for Speedy Cash Home Offers. Read our terms and conditions for using our cash home buying services." },
    { name: "robots", content: "index, follow" },
    { name: "canonical", content: "https://www.speedycashhomeoffers.com/terms-of-service" },
    { property: "og:title", content: "Terms of Service | Speedy Cash Home Offers" },
    { property: "og:description", content: "Terms of Service for Speedy Cash Home Offers. Read our terms and conditions." },
    { property: "og:url", content: "https://www.speedycashhomeoffers.com/terms-of-service" },
    { property: "og:type", content: "website" },
  ];
};

export default function TermsOfService() {
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
            "name": "Terms of Service",
            "description": "Terms of Service for Speedy Cash Home Offers",
            "url": "https://www.speedycashhomeoffers.com/terms-of-service",
            "publisher": {
              "@id": "https://www.speedycashhomeoffers.com/#organization"
            }
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Terms of Service
          </h1>
          <p className="text-xl text-center text-indigo-100">
            Please read these terms carefully
          </p>
          <p className="text-sm text-center text-indigo-200 mt-2">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              By accessing or using the services of Speedy Cash Home Offers ("we," "our," or "us"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Services Description</h2>
            <p className="text-gray-700 mb-6">
              Speedy Cash Home Offers provides cash home buying services in Las Vegas, Nevada, and Southern California. We offer to purchase residential properties for cash, typically closing within 7-21 days. Our services include property evaluation, cash offer generation, and expedited closing services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. No Obligation</h2>
            <p className="text-gray-700 mb-6">
              Submitting information to us or receiving a cash offer does not create any obligation on your part to sell your property to us. You are free to accept or reject any offer we make. There are no fees or penalties for declining our offer or choosing not to proceed with a sale.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Property Information</h2>
            <p className="text-gray-700 mb-4">
              You agree to provide accurate and complete information about your property, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Property address and legal description</li>
              <li>Property condition and any known defects</li>
              <li>Outstanding liens, mortgages, or encumbrances</li>
              <li>Any other material information that may affect the property's value</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Providing false or misleading information may result in the termination of any agreement and may constitute fraud.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Property Inspection</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to inspect the property before finalizing any purchase agreement. Our cash offer may be subject to adjustment based on the actual condition of the property as determined during inspection. We will provide you with a final offer after inspection, and you may accept or reject this offer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Closing Process</h2>
            <p className="text-gray-700 mb-4">
              If you accept our cash offer, we will work with you to complete the closing process. This typically includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Title search and verification</li>
              <li>Property inspection (if not already completed)</li>
              <li>Preparation of closing documents</li>
              <li>Settlement and transfer of funds</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Closing timelines are estimates and may vary based on various factors including title issues, property condition, and other circumstances beyond our control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. As-Is Purchase</h2>
            <p className="text-gray-700 mb-6">
              We purchase properties in "as-is" condition. This means we buy the property in its current state without requiring repairs, cleaning, or improvements. However, you remain responsible for disclosing known material defects as required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Fees and Costs</h2>
            <p className="text-gray-700 mb-6">
              We do not charge fees, commissions, or closing costs to sellers. The cash offer we provide is the amount you will receive at closing, subject to any adjustments agreed upon in writing. However, you may be responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Outstanding mortgages or liens on the property</li>
              <li>Property taxes and HOA fees (prorated to closing date)</li>
              <li>Any other obligations that must be satisfied at closing</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Website Use</h2>
            <p className="text-gray-700 mb-4">
              When using our website, you agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Transmit any viruses, malware, or harmful code</li>
              <li>Interfere with or disrupt the website's operation</li>
              <li>Copy, modify, or distribute any content without permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Intellectual Property</h2>
            <p className="text-gray-700 mb-6">
              All content on our website, including text, graphics, logos, and images, is the property of Speedy Cash Home Offers or its content suppliers and is protected by copyright and other intellectual property laws. You may not use our content without our express written permission.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              To the maximum extent permitted by law, Speedy Cash Home Offers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">12. Indemnification</h2>
            <p className="text-gray-700 mb-6">
              You agree to indemnify and hold harmless Speedy Cash Home Offers, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these Terms of Service.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">13. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from these Terms of Service or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, conducted in Las Vegas, Nevada. You waive your right to a jury trial and to participate in class action lawsuits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">14. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Nevada, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">15. Changes to Terms</h2>
            <p className="text-gray-700 mb-6">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any material changes by posting the new Terms of Service on this page and updating the "Last Updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">16. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Speedy Cash Home Offers</strong>
              </p>
              <p className="text-gray-700 mb-2">
                2775 Ariel Ocean St<br />
                Las Vegas, NV 89156
              </p>
              <p className="text-gray-700 mb-2">
                Phone: <a href="tel:(702) 500-1981" className="text-blue-600 hover:text-blue-800">(702) 500-1981</a>
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:DrDuffy@SpeedyCashHomeOffers.com" className="text-blue-600 hover:text-blue-800">DrDuffy@SpeedyCashHomeOffers.com</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

