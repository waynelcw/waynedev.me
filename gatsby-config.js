require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `Wayne's dev blog`,
    siteTitleAlt: `Wayne's dev blog`,
    siteHeadline: `A learning journey of a backend developer`,
    siteUrl: `https://waynedev.me`,
    siteDescription: `A learning journey of a backend developer`,
    author: `@waynelcw`,
    siteImage: `./static/banner.jpg`,
    siteLanguage: `en`,
    
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `Tech`,
            slug: `/tech`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/waynelcw/`,
          },
          {
            name: `Linkedin`,
            url: `https://www.linkedin.com/in/wayne-lam-aa5a21105/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wayne's dev blog`,
        short_name: `WayneDev`,
        description: `A learning journey of a backend developer.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#F9F9F3`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
