export interface RSSArticle {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  categories: string[];
}

export interface ParsedRSSFeed {
  articles: RSSArticle[];
  error?: string;
}

/**
 * Fetches and parses RSS feed from Simplifying the Market
 * Adds agent ID (956758) to all article URLs for attribution
 */
export async function fetchRSSFeed(): Promise<ParsedRSSFeed> {
  const RSS_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
  
  try {
    // Fetch the RSS feed
    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();
    
    // Parse XML using DOMParser
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
    
    // Check for parsing errors
    const parseError = xmlDoc.querySelector('parsererror');
    if (parseError) {
      throw new Error('Failed to parse RSS XML');
    }

    // Extract articles from RSS feed
    const items = xmlDoc.querySelectorAll('item');
    const articles: RSSArticle[] = [];

    items.forEach((item) => {
      const title = item.querySelector('title')?.textContent?.trim() || '';
      const link = item.querySelector('link')?.textContent?.trim() || '';
      const description = item.querySelector('description')?.textContent?.trim() || '';
      const pubDate = item.querySelector('pubDate')?.textContent?.trim() || '';
      
      // Extract categories
      const categoryElements = item.querySelectorAll('category');
      const categories: string[] = [];
      categoryElements.forEach((cat) => {
        const category = cat.textContent?.trim();
        if (category) {
          categories.push(category);
        }
      });

      // Ensure link has agent ID parameter
      let finalLink = link;
      if (link && !link.includes('a=956758')) {
        const separator = link.includes('?') ? '&' : '?';
        finalLink = `${link}${separator}a=956758-ef2edda2f940e018328655620ea05f18`;
      }

      if (title && finalLink) {
        articles.push({
          title,
          link: finalLink,
          description: cleanDescription(description),
          pubDate: formatDate(pubDate),
          categories,
        });
      }
    });

    return { articles };
  } catch (error) {
    console.error('RSS Feed Error:', error);
    return {
      articles: [],
      error: error instanceof Error ? error.message : 'Failed to fetch RSS feed',
    };
  }
}

/**
 * Clean HTML tags and excessive whitespace from description
 */
function cleanDescription(description: string): string {
  if (!description) return '';
  
  // Remove HTML tags
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = description;
  const textContent = tempDiv.textContent || tempDiv.innerText || '';
  
  // Clean up whitespace and limit length
  return textContent
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 200)
    .replace(/\s+\S*$/, '') + '...';
}

/**
 * Format date string to readable format
 */
function formatDate(dateString: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}
