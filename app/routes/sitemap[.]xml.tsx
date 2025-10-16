import type { Route } from "./+types/sitemap[.]xml";

export const loader: Route.LoaderFunction = async ({ request }) => {
  const baseUrl = "https://www.speedycashhomeoffers.com";
  const currentDate = new Date().toISOString().split('T')[0];

  // Define all your routes with their priorities and change frequencies
  const routes = [
    {
      url: "",
      priority: "1.0",
      changefreq: "weekly",
    },
    {
      url: "/process",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      url: "/testimonials",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      url: "/meet-the-team",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      url: "/faqs",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      url: "/blog",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      url: "/market-insights",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      url: "/contact",
      priority: "0.9",
      changefreq: "monthly",
    },
    // Location-specific pages (high priority for local SEO)
    {
      url: "/sell-my-house-fast-las-vegas",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/sell-my-house-fast-southern-california",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/sell-my-house-fast-orange-county",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/sell-my-house-fast-san-diego",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/sell-my-house-fast-riverside",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      url: "/sell-my-house-fast-inland-empire",
      priority: "0.9",
      changefreq: "monthly",
    },
    // Additional pages
    {
      url: "/sellers",
      priority: "0.6",
      changefreq: "monthly",
    },
    {
      url: "/buyers",
      priority: "0.6",
      changefreq: "monthly",
    },
    {
      url: "/investors",
      priority: "0.6",
      changefreq: "monthly",
    },
    {
      url: "/neighborhoods",
      priority: "0.6",
      changefreq: "monthly",
    },
    {
      url: "/about",
      priority: "0.7",
      changefreq: "monthly",
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
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
