/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Lowell EECS Club`,
		description: `Lowell EECS Club`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {},
		},
		`gatsby-plugin-react-helmet`,
	],
};
