import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("test", "routes/test.tsx"),
  route("process", "routes/process.tsx"),
  route("testimonials", "routes/testimonials.tsx"),
  route("meet-the-team", "routes/meet-the-team.tsx"),
  route("faqs", "routes/faqs.tsx"),
  route("blog", "routes/blog.tsx"),
  route("market-insights", "routes/market-insights.tsx"),
  route("sell-my-house-fast-las-vegas", "routes/sell-my-house-fast-las-vegas.tsx"),
  route("sell-my-house-fast-southern-california", "routes/sell-my-house-fast-southern-california.tsx"),
  route("sell-my-house-fast-orange-county", "routes/sell-my-house-fast-orange-county.tsx"),
  route("sell-my-house-fast-san-diego", "routes/sell-my-house-fast-san-diego.tsx"),
  route("sell-my-house-fast-riverside", "routes/sell-my-house-fast-riverside.tsx"),
  route("sell-my-house-fast-inland-empire", "routes/sell-my-house-fast-inland-empire.tsx"),
  route("sellers", "routes/sellers.tsx"),
  route("buyers", "routes/buyers.tsx"),
  route("investors", "routes/investors.tsx"),
  route("neighborhoods", "routes/neighborhoods.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("thank-you", "routes/thank-you.tsx"),
  // Catch-all route for 404 errors
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
