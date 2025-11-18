interface TrustBadgesProps {
  className?: string;
}

export default function TrustBadges({ className = "" }: TrustBadgesProps) {
  return (
    <div className={`bg-gray-50 py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Trusted by Las Vegas Homeowners
          </h3>
          <p className="text-sm text-gray-600">
            Licensed, insured, and committed to fair, transparent transactions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {/* BBB Rating */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">A+</span>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900">BBB Rating</div>
              <div className="text-xs text-gray-600">A+ Accredited</div>
            </div>
          </div>

          {/* Google Verified */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900">Google Verified</div>
              <div className="text-xs text-gray-600">4.9★ Rating</div>
            </div>
          </div>

          {/* Licensed */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-purple-600"
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
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900">Licensed</div>
              <div className="text-xs text-gray-600">Nevada Real Estate</div>
            </div>
          </div>

          {/* Secure */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900">Secure</div>
              <div className="text-xs text-gray-600">SSL Protected</div>
            </div>
          </div>
        </div>

        {/* Additional trust indicators */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>24-Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Free Property Evaluation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>No Obligation Quote</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
