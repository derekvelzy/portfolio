require('dotenv').config({path: `.env`})

module.exports = {
  siteMetadata: {
    title: "dvelzyportfolio",
  },
  plugins: [
    "gatsby-plugin-styled-components",
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
          `work sans\:Semi-bold 600,Regular 400,Light 300`
        ],
        display: 'swap'
      }
    }
  ],
};
