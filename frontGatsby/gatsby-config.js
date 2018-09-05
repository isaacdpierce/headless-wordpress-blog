module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'isaacdpierce.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true 
      }
    }
  ],
}
