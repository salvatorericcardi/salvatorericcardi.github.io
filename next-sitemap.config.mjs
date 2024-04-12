/** @type {import('next-sitemap').IConfig} */
export default {
    siteUrl: process.env.SITE_URL || "https://salvatorericcardi.github.io",
    additionalPaths: async () => [
        {
            loc: "https://salvatorericcardi.github.io/alpaca-generator",
            changefreq: 'yearly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        }
    ]
}