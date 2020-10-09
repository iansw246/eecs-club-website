/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Lowell EECS Club`,
		description: `EECS Club at Lowell High School`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/workshops/`,
				name: `workshops`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: `pages`,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify-cms`,
	],
};
