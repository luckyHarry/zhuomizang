module.exports = {
  siteMetadata: {
    title: `捉迷藏`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `article`,
        path: `${__dirname}/article`,
      }
    },
    'gatsby-plugin-mdx',
  ],
}
