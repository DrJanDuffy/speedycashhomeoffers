import type { Route } from "./+types/robots[.]txt";

export const loader: Route.LoaderFunction = async () => {
  const baseUrl = "https://www.speedycashhomeoffers.com";
  
  const robotsTxt = `User-agent: *
Allow: /

# Disallow old WordPress paths and non-existent routes
Disallow: /buyer-investor/
Disallow: /map/
Disallow: /home/
Disallow: /for-buyers/
Disallow: /wp-*
Disallow: /*/feed/
Disallow: /*/feed

# Disallow admin or sensitive areas (if any exist in the future)
# Disallow: /admin/
# Disallow: /private/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /`;

  return new Response(robotsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400", // Cache for 24 hours
    },
  });
};
