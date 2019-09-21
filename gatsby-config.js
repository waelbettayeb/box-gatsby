module.exports = {
  siteMetadata: {
    title: `ClassBox Agency`,
    description: `Une boite de communication multidisciplinaire et cabinet de conseil et de formation`,
    author: `Wael Mohamed KHELIL`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    'gatsby-plugin-layout',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ClassBox Agency`,
        short_name: `ClassBox`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ff662b`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#ff662b',
          '@border-radius-base': '40px',
          '@menu-item-active-border-width': '0px',
        }
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
