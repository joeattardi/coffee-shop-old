module.exports = {
  siteMetadata: {
    title: 'The Coffee Blog'
  },

  plugins: [
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: 'src/blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pageData',
        path: 'src/pageData'
      }
    },
    'gatsby-transformer-remark'
  ]
};
