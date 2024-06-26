/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: process.env.SITE_URL || "https://salvatorericcardi.github.io",
    changefreq: "yearly",
    priority: 1.0,
    lastmod: new Date().toISOString(),
    generateIndexSitemap: false,
    additionalPaths: async () => [
        {
            loc: "https://salvatorericcardi.github.io/it",
            changefreq: "yearly",
            priority: 1.0,
            lastmod: new Date().toISOString(),
        },
        {
            loc: "https://salvatorericcardi.github.io/en",
            changefreq: "yearly",
            priority: 1.0,
            lastmod: new Date().toISOString(),
        },
        {
            loc: "https://salvatorericcardi.github.io/alpaca-generator",
            changefreq: "yearly",
            priority: 0.7,
            lastmod: new Date().toISOString(),
        },
        {
            loc: "https://salvatorericcardi.github.io/contact-form",
            changefreq: "yearly",
            priority: 0.7,
            lastmod: new Date().toISOString(),
        }
    ],
}