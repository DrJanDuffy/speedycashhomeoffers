import { useState, useEffect } from 'react';
import { fetchRSSFeed, type RSSArticle } from '~/utils/rssParser';
import ArticleCard from './ArticleCard';

interface MarketInsightsSectionProps {
  maxArticles?: number;
  title?: string;
  className?: string;
}

export default function MarketInsightsSection({ 
  maxArticles = 3, 
  title = "Latest Real Estate Market Insights",
  className = ""
}: MarketInsightsSectionProps) {
  const [articles, setArticles] = useState<RSSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure this only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only fetch RSS feed on client side
    if (!isClient) return;

    const loadArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const result = await fetchRSSFeed();
        
        if (result.error) {
          setError(result.error);
        } else {
          // Limit articles to specified number
          const limitedArticles = result.articles.slice(0, maxArticles);
          setArticles(limitedArticles);
        }
      } catch (err) {
        // Only log in development to avoid console errors in production
        if (import.meta.env.DEV) {
          console.error('Failed to load RSS articles:', err);
        }
        setError('Failed to load market insights');
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [maxArticles, isClient]);

  // Show loading state during SSR and initial client render
  if (!isClient || loading) {
    return (
      <section className={`py-16 bg-gray-50 ${className}`} aria-label="Market Insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
          <div className={`grid gap-8 ${
            maxArticles === 1 ? 'grid-cols-1 max-w-2xl mx-auto' :
            maxArticles === 2 ? 'md:grid-cols-2' :
            maxArticles === 3 ? 'md:grid-cols-2 lg:grid-cols-3' :
            maxArticles <= 6 ? 'md:grid-cols-2 lg:grid-cols-3' :
            'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}>
            {Array.from({ length: maxArticles }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-16 bg-gray-50 ${className}`} aria-label="Market Insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Market Insights Coming Soon
              </h3>
              <p className="text-gray-600 mb-4">
                We're updating our market insights. Check back soon for the latest real estate trends and analysis from Dr. Janet Duffy.
              </p>
              <div className="text-sm text-gray-500">
                <p>In the meantime, contact us for personalized market analysis:</p>
                <a href="tel:(702) 500-1981" className="font-semibold text-blue-600 mt-2 hover:text-blue-800 transition-colors">
                  (702) 500-1981
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section className={`py-16 bg-gray-50 ${className}`} aria-label="Market Insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            {title}
          </h2>
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Articles Available
              </h3>
              <p className="text-gray-600">
                Check back soon for the latest market insights and updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Generate Blog structured data for SEO
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Real Estate Market Insights",
    "description": "Latest real estate market insights and analysis from Dr. Janet Duffy",
    "url": "https://www.speedycashhomeoffers.com/market-insights",
    "author": {
      "@type": "Person",
      "name": "Dr. Janet Duffy",
      "jobTitle": "Founder & CEO",
      "worksFor": {
        "@type": "Organization",
        "name": "Speedy Cash Home Offers"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Speedy Cash Home Offers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.speedycashhomeoffers.com/images/logo.png"
      }
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "url": article.link,
      "datePublished": article.pubDate
    }))
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`} aria-label="Market Insights">
      {/* Blog Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema)
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert real estate insights, market trends, and analysis from Dr. Janet Duffy. 
            Get the latest updates on Las Vegas and Southern California real estate markets.
          </p>
        </header>
        
        <div className={`grid gap-8 ${
          maxArticles === 1 ? 'grid-cols-1 max-w-2xl mx-auto' :
          maxArticles === 2 ? 'md:grid-cols-2' :
          maxArticles === 3 ? 'md:grid-cols-2 lg:grid-cols-3' :
          maxArticles <= 6 ? 'md:grid-cols-2 lg:grid-cols-3' :
          'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }`}>
          {articles.map((article, index) => (
            <ArticleCard key={`${article.link}-${index}`} article={article} />
          ))}
        </div>
        
        <footer className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 mb-4">
              Stay informed with the latest real estate market insights from Dr. Janet Duffy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/market-insights"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                View All Market Insights
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <span className="text-gray-400 hidden sm:inline">•</span>
              <a
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                Get Personalized Market Analysis
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
