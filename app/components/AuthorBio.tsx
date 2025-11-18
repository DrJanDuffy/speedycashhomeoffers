interface AuthorBioProps {
  showFullBio?: boolean;
  className?: string;
}

export default function AuthorBio({ showFullBio = false, className = "" }: AuthorBioProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            src="/images/dr-janet-duffy.webp"
            alt="Dr. Janet Duffy, Founder & CEO of Speedy Cash Home Offers"
            className="w-20 h-20 rounded-full object-cover border-2 border-blue-200"
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Dr. Janet Duffy</h3>
          <p className="text-blue-600 font-medium mb-3">Founder & CEO, Speedy Cash Home Offers</p>

          <div className="space-y-3 text-gray-600">
            <p className="text-sm">
              <strong>25+ Years Experience:</strong> Dr. Janet Duffy has been helping Las Vegas
              homeowners sell their properties quickly and efficiently for over two decades.
            </p>

            <p className="text-sm">
              <strong>Local Market Expert:</strong> As a Las Vegas native, Dr. Duffy understands the
              unique challenges of the Nevada real estate market, especially in North Las Vegas
              (89031, 89032) and East Las Vegas (89110, 89142) neighborhoods.
            </p>

            <p className="text-sm">
              <strong>Distressed Property Specialist:</strong> With extensive experience in
              foreclosure prevention, inherited properties, and distressed real estate, Dr. Duffy
              has helped over 500 families avoid foreclosure and get fair cash offers.
            </p>

            {showFullBio && (
              <>
                <p className="text-sm">
                  <strong>Education & Credentials:</strong> Dr. Duffy holds advanced degrees in real
                  estate and business administration, with specialized training in distressed
                  property transactions and foreclosure prevention.
                </p>

                <p className="text-sm">
                  <strong>Community Involvement:</strong> Active member of the Las Vegas Chamber of
                  Commerce, Nevada Association of Realtors, and local foreclosure prevention task
                  force.
                </p>

                <p className="text-sm">
                  <strong>Recognition:</strong> Featured in Las Vegas Review-Journal for innovative
                  approaches to helping distressed homeowners, recipient of the Nevada Real Estate
                  Excellence Award (2023).
                </p>

                <p className="text-sm">
                  <strong>Personal Touch:</strong> Dr. Duffy personally reviews every transaction
                  and maintains direct communication with clients throughout the entire process,
                  ensuring transparency and peace of mind.
                </p>
              </>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>📞 (702) 500-1981</span>
              <span>✉️ DrDuffy@SpeedyCashHomeOffers.com</span>
              <span>📍 Las Vegas, NV</span>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org Person markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Dr. Janet Duffy",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "Speedy Cash Home Offers",
            },
            description:
              "Las Vegas real estate expert with 25+ years experience specializing in distressed properties and foreclosure prevention",
            url: "https://www.speedycashhomeoffers.com/meet-the-team",
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
            knowsAbout: [
              "Las Vegas Real Estate",
              "Distressed Properties",
              "Foreclosure Prevention",
              "Cash Home Buying",
              "North Las Vegas Real Estate",
              "East Las Vegas Real Estate",
            ],
            award: "Nevada Real Estate Excellence Award (2023)",
            memberOf: ["Las Vegas Chamber of Commerce", "Nevada Association of Realtors"],
            image: "https://www.speedycashhomeoffers.com/images/dr-janet-duffy.jpg",
          }),
        }}
      />
    </div>
  );
}
