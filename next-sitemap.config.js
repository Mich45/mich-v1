/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mich-v1.vercel.app/',
  generateRobotsTxt: true, // (optional)
  // ...other options
}