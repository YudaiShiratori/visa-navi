/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://visa-navi.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://visa-navi.vercel.app/sitemap.xml"],
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  exclude: ["/api/*"],
  changefreq: "weekly",
  priority: 0.7,
};
