import type { RSSArticle } from '~/utils/rssParser';

interface ArticleCardProps {
  article: RSSArticle;
}

// Calculate reading time (average reading speed: 200 words per minute)
function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Format date to be more readable and SEO-friendly
function formatDateForDisplay(dateString: string): string {
  try {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    // Show relative time for recent articles (better for engagement)
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    
    // For older articles, show full date for SEO
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const readingTime = calculateReadingTime(article.description || article.title);
  const formattedDate = formatDateForDisplay(article.pubDate);
  const shareUrl = encodeURIComponent(article.link);
  const shareTitle = encodeURIComponent(article.title);
  const shareText = encodeURIComponent(`${article.title} - ${article.description.substring(0, 100)}...`);

  return (
    <>
      {/* Article Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.description,
            "url": article.link,
            "datePublished": article.pubDate,
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
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": article.link
            },
            ...(article.categories && article.categories.length > 0 && {
              "keywords": article.categories.join(", ")
            })
          })
        }}
      />
      
      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-3 flex items-center gap-2 flex-wrap">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Market Update
            </span>
            {article.categories && article.categories.length > 0 && (
              <span className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {article.categories[0]}
              </span>
            )}
          </div>
          
          {/* Title with SEO-optimized heading */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 flex-grow">
            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
              aria-label={`Read article: ${article.title}`}
            >
              {article.title}
            </a>
          </h3>
          
          {/* Description/Excerpt */}
          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
            {article.description}
          </p>
          
          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <time dateTime={article.pubDate} className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {formattedDate}
              </time>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {readingTime} min read
              </span>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors group"
              aria-label={`Read full article: ${article.title}`}
            >
              Read Full Article
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            {/* Social Sharing Buttons */}
            <div className="flex items-center gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Share on Facebook"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'share', {
                      'method': 'Facebook',
                      'content_type': 'article',
                      'item_id': article.link
                    });
                  }
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Share on Twitter"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'share', {
                      'method': 'Twitter',
                      'content_type': 'article',
                      'item_id': article.link
                    });
                  }
                }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href={`mailto:?subject=${shareTitle}&body=${shareText}%20${shareUrl}`}
                className="text-gray-400 hover:text-red-600 transition-colors"
                aria-label="Share via Email"
                onClick={(e) => {
                  e.stopPropagation();
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'share', {
                      'method': 'Email',
                      'content_type': 'article',
                      'item_id': article.link
                    });
                  }
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Author Attribution */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center text-xs text-gray-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By <strong className="text-gray-700">Dr. Janet Duffy</strong> - Speedy Cash Home Offers</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
