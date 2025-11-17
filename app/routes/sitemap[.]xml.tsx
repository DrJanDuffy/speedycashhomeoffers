export const loader = async ({ request }: { request: Request }) => {
  const baseUrl = "https://www.speedycashhomeoffers.com";
  const currentDate = new Date().toISOString().split('T')[0];
  // Use recent date for recently updated pages, older dates for stable pages
  const recentUpdate = currentDate; // Pages updated in this audit
  const stableDate = "2025-01-15"; // For pages that haven't changed recently

  // Define all your routes with their priorities, change frequencies, and lastmod dates
  const routes = [
    {
      url: "",
      priority: "1.0",
      changefreq: "weekly",
      lastmod: recentUpdate,
    },
    {
      url: "/process",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/testimonials",
      priority: "0.7",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/meet-the-team",
      priority: "0.7",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/faqs",
      priority: "0.7",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/blog",
      priority: "0.8",
      changefreq: "weekly",
      lastmod: recentUpdate,
    },
    {
      url: "/market-insights",
      priority: "0.8",
      changefreq: "weekly",
      lastmod: recentUpdate,
    },
    {
      url: "/contact",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    // Location-specific pages (high priority for local SEO)
    {
      url: "/sell-my-house-fast-las-vegas",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/sell-my-house-fast-southern-california",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/sell-my-house-fast-orange-county",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/sell-my-house-fast-san-diego",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/sell-my-house-fast-riverside",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/sell-my-house-fast-inland-empire",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    // Additional pages
    {
      url: "/sellers",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/buyers",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/investors",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/neighborhoods",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/about",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/privacy-policy",
      priority: "0.5",
      changefreq: "yearly",
      lastmod: stableDate,
    },
    {
      url: "/terms-of-service",
      priority: "0.5",
      changefreq: "yearly",
      lastmod: stableDate,
    },
    {
      url: "/company-history",
      priority: "0.6",
      changefreq: "monthly",
      lastmod: stableDate,
    },
    // Keyword-targeted pages
    {
      url: "/fast-home-cash-offers-usa",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/fast-home-cash-offers-reviews",
      priority: "0.7",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/fast-home-cash-offers-near-me",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/fast-home-cash-offers-las-vegas",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/opendoor-cash-offer",
      priority: "0.7",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/fast-home-offer",
      priority: "0.8",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/fast-home-cash-offers-nevada",
      priority: "0.9",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
    {
      url: "/zillow-cash-offer",
      priority: "0.7",
      changefreq: "monthly",
      lastmod: recentUpdate,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod || currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
};
