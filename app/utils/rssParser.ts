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
      // Handle 401 Unauthorized specifically
      if (response.status === 401) {
        // Only log in development to avoid console errors in production
        if (process.env.NODE_ENV === 'development') {
          console.error('RSS Feed: 401 Unauthorized - Feed may require authentication');
        }
        // Return empty articles array instead of throwing
        return {
          articles: [],
          error: 'RSS feed authentication failed',
        };
      }
      
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`);
    }

    // Check Content-Type header and get response text
    const contentType = response.headers.get('content-type') || '';
    const xmlText = await response.text();
    
    // If content type suggests it's not XML, check the actual content
    if (!contentType.includes('xml') && !contentType.includes('rss') && !contentType.includes('text/plain')) {
      if (xmlText.trim().startsWith('<!DOCTYPE') || xmlText.trim().startsWith('<html')) {
        throw new Error('Received HTML instead of XML - likely an error page');
      }
    }
    
    // Check if we got HTML instead of XML (common when getting error pages)
    if (xmlText.trim().startsWith('<!DOCTYPE') || xmlText.trim().startsWith('<html') || xmlText.trim().startsWith('<!doctype')) {
      throw new Error('Received HTML instead of XML - likely an error page');
    }
    
    // Validate XML structure before parsing
    if (!xmlText.trim().startsWith('<?xml') && !xmlText.trim().startsWith('<rss') && !xmlText.trim().startsWith('<feed')) {
      throw new Error('Invalid XML format - expected RSS or Atom feed');
    }
    
    // Parse XML using fast-xml-parser (works in both browser and Node.js)
    let jsonObj: any;
    try {
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
        textNodeName: "#text",
        parseAttributeValue: true,
        parseTagValue: true,
        arrayMode: false,
        stopNodes: ["*.pre", "*.script"],
        processEntities: true,
        htmlEntities: true
      });
      
      jsonObj = parser.parse(xmlText);
      
      // Validate parsed structure is an object (not HTML that got parsed)
      if (!jsonObj || typeof jsonObj !== 'object' || Array.isArray(jsonObj)) {
        throw new Error('Invalid RSS feed structure after parsing');
      }
      
      // Additional check: if parsed object has HTML-like properties, it's likely HTML
      if (jsonObj.html || jsonObj.body || jsonObj.head || jsonObj.doctype) {
        throw new Error('Parsed content appears to be HTML, not RSS feed');
      }
    } catch (parseError) {
      // If parsing fails, check if it's because we got HTML
      if (parseError instanceof Error && parseError.message.includes('JSON')) {
        throw new Error('RSS feed parsing failed - received invalid format (possibly HTML)');
      }
      throw parseError;
    }
    
    // Extract RSS feed data - handle both RSS and Atom formats
    let channel: any = null;
    let items: any[] = [];
    
    // Check for RSS format
    if (jsonObj?.rss?.channel) {
      channel = jsonObj.rss.channel;
      items = Array.isArray(channel.item) ? channel.item : (channel.item ? [channel.item] : []);
    }
    // Check for Atom format
    else if (jsonObj?.feed) {
      channel = jsonObj.feed;
      items = Array.isArray(channel.entry) ? channel.entry : (channel.entry ? [channel.entry] : []);
    }
    
    if (!channel || items.length === 0) {
      throw new Error('Invalid RSS feed structure - no items found');
    }
    
    const articles: RSSArticle[] = [];

    items.forEach((item: any) => {
      // Handle both RSS and Atom formats
      const title = item.title?.['#text'] || item.title || '';
      const link = item.link?.['@_href'] || item.link?.['#text'] || item.link || '';
      const description = item.description?.['#text'] || item.description || item.summary?.['#text'] || item.summary || '';
      const pubDate = item.pubDate || item.published || item.updated || '';
      
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
    // Only log in development to avoid console errors in production
    if (process.env.NODE_ENV === 'development') {
      console.error('RSS Feed Error:', error);
    }
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
