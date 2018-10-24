module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/AppLayout.jsx`),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'mtk-space',
        accessToken:
          'MC5XODlLdlJRQUFQUUw1WHRR.77-9Dk_vv73vv71sZ--_vQMQ77-977-977-977-9WW4EJT7vv71hdnIy77-9U--_vXI3C--_vTg',
        lang: '*',
      },
    },
  ],
};
