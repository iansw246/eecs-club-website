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
			discord: `https://discord.gg/swUzYMt`,
			instagram: `https://www.instagram.com/lowelleecs/`,
			instagramUsername: `@lowelleecs`,
			email: `mailto:lowelleecs@gmail.com`,
			signUpForm: `http://forms.gle/P8FQZdq8b5aLnoRQ9`,
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
				path: `${__dirname}/src/images`,
				name: `images`,
			}
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
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-netlify`,
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
				htmlFavicon: `${__dirname}/static/img/favicon.svg`,
			},
		},
	],
};
