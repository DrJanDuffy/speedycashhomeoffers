import { XMLParser } from 'fast-xml-parser';

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
    // Fetch the RSS feed with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(RSS_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/rss+xml, application/xml, text/xml',
        'User-Agent': 'SpeedyCashHomeOffers/1.0',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }

    const xmlText = await response.text();
    
    // Parse XML using fast-xml-parser (works in both browser and Node.js)
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      textNodeName: "#text",
      parseAttributeValue: true,
      parseTagValue: true,
      parseTrueNumberOnly: false,
      arrayMode: false,
      stopNodes: ["*.pre", "*.script"],
      processEntities: true,
      htmlEntities: true
    });
    
    const jsonObj = parser.parse(xmlText);
    
    // Extract RSS feed data
    const channel = jsonObj?.rss?.channel;
    if (!channel || !channel.item) {
      throw new Error('Invalid RSS feed structure');
    }
    
    const items = Array.isArray(channel.item) ? channel.item : [channel.item];
    const articles: RSSArticle[] = [];

    items.forEach((item: any) => {
      const title = item.title || '';
      const link = item.link || '';
      const description = item.description || '';
      const pubDate = item.pubDate || '';
      
      // Extract categories
      const categories: string[] = [];
      if (item.category) {
        const categoryArray = Array.isArray(item.category) ? item.category : [item.category];
        categoryArray.forEach((cat: any) => {
          if (typeof cat === 'string') {
            categories.push(cat);
          } else if (cat['#text']) {
            categories.push(cat['#text']);
          }
        });
      }

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
  
  // Remove HTML tags using regex (server-safe)
  const textContent = description
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&[a-zA-Z0-9#]+;/g, ' ') // Remove HTML entities
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  // Clean up whitespace and limit length
  return textContent
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
