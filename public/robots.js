export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    sitemap: `https://karmolog4u.vercel.app/sitemap.xml`,
  };
}
