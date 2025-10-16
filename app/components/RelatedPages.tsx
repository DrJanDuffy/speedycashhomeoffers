import { Link } from "react-router";

interface RelatedPage {
  path: string;
  title: string;
  description: string;
  category: string;
}

interface RelatedPagesProps {
  currentPage: string;
  maxItems?: number;
  className?: string;
}

export default function RelatedPages({ currentPage, maxItems = 4, className = "" }: RelatedPagesProps) {
  // Define related pages based on current page
  const getRelatedPages = (page: string): RelatedPage[] => {
    const allPages: Record<string, RelatedPage[]> = {
      home: [
        { path: "/sellers", title: "Sell Your House Fast", description: "Get a fair cash offer in 24 hours", category: "Services" },
        { path: "/process", title: "How It Works", description: "Our simple 5-step process", category: "Process" },
        { path: "/contact", title: "Get Free Quote", description: "No obligation cash offer", category: "Contact" },
        { path: "/testimonials", title: "Customer Reviews", description: "See what our clients say", category: "Trust" },
        { path: "/about", title: "About Dr. Duffy", description: "Meet our experienced team", category: "About" },
        { path: "/faqs", title: "Frequently Asked Questions", description: "Get answers to common questions", category: "Help" },
      ],
      sellers: [
        { path: "/process", title: "How It Works", description: "Our simple 5-step process", category: "Process" },
        { path: "/contact", title: "Get Free Quote", description: "Start with a cash offer", category: "Contact" },
        { path: "/sell-my-house-fast-las-vegas", title: "Las Vegas Service", description: "North/East Vegas focus areas", category: "Areas" },
        { path: "/testimonials", title: "Success Stories", description: "Real customer experiences", category: "Trust" },
        { path: "/about", title: "Why Choose Us", description: "Dr. Duffy's expertise", category: "About" },
      ],
      process: [
        { path: "/sellers", title: "Sell Your House", description: "Ready to get started?", category: "Services" },
        { path: "/contact", title: "Get Free Quote", description: "Begin the process today", category: "Contact" },
        { path: "/about", title: "About Dr. Duffy", description: "Meet the expert", category: "About" },
        { path: "/faqs", title: "Common Questions", description: "Process-related FAQs", category: "Help" },
      ],
      contact: [
        { path: "/process", title: "How It Works", description: "What happens next", category: "Process" },
        { path: "/sellers", title: "Sell Your House", description: "Learn about our service", category: "Services" },
        { path: "/testimonials", title: "Customer Reviews", description: "See our success stories", category: "Trust" },
        { path: "/about", title: "About Dr. Duffy", description: "Meet our team", category: "About" },
      ],
      about: [
        { path: "/sellers", title: "Our Services", description: "How we help homeowners", category: "Services" },
        { path: "/process", title: "How It Works", description: "Our proven process", category: "Process" },
        { path: "/contact", title: "Get In Touch", description: "Start your journey", category: "Contact" },
        { path: "/testimonials", title: "Customer Reviews", description: "See what clients say", category: "Trust" },
        { path: "/meet-the-team", title: "Meet Our Team", description: "Get to know our experts", category: "Team" },
      ],
      testimonials: [
        { path: "/sellers", title: "Sell Your House", description: "Join our success stories", category: "Services" },
        { path: "/contact", title: "Get Free Quote", description: "Start your journey", category: "Contact" },
        { path: "/about", title: "About Dr. Duffy", description: "Meet our expert team", category: "About" },
        { path: "/process", title: "How It Works", description: "Our simple process", category: "Process" },
      ],
      faqs: [
        { path: "/contact", title: "Get Free Quote", description: "Still have questions?", category: "Contact" },
        { path: "/sellers", title: "Sell Your House", description: "Learn about our service", category: "Services" },
        { path: "/process", title: "How It Works", description: "Understand our process", category: "Process" },
        { path: "/about", title: "About Dr. Duffy", description: "Meet our expert team", category: "About" },
      ],
    };

    return allPages[page] || allPages.home;
  };

  const relatedPages = getRelatedPages(currentPage).slice(0, maxItems);

  if (relatedPages.length === 0) return null;

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Explore More
          </h2>
          <p className="text-lg text-gray-600">
            Continue learning about our services and how we can help you sell your house fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedPages.map((page, index) => (
            <Link
              key={page.path}
              to={page.path}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
            >
              <div className="flex items-center mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-1 rounded-full">
                  {page.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {page.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {page.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
