require('dotenv').config({path: `.env`})

module.exports = {
  siteMetadata: {
    title: "dvelzyportfolio",
  },
  plugins: [
    "gatsby-plugin-preact",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'dvelzyportfolio',
        accessToken: process.env.API_KEY,
        schemas: {
          home: require('./src/schemas/home.json'),
          about: require('./src/schemas/about.json'),
          projects: require('./src/schemas/projects.json')
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato\:Bold 700`,
          `source sans pro\:300,400,400i,700`,
          `work sans\:Semi-bold 600,Regular 400,Light 300`,
          `lobster\:Regular 400`,
          `montserrat\:Regular 400,Light 300,Semi-bold 600`
        ],
        display: 'swap'
      }
    }
  ],
};
