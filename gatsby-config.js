/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: `Lowell EECS Club`,
		description: `Website of EECS Club at Lowell High School`,
		links: {
			discord: `https://example.com`,
			instagram: `https://www.instagram.com/lowelleecs/`,
			instagramUsername: `@lowelleecs`,
			email: `mailto:lowelleecs@gmail.com`,
			maillingList: ``,
		},
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
				path: `${__dirname}/content/links`,
				name: `links`,
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
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			}
		}
		
	],
};
