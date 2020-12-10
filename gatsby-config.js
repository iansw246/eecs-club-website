// To disable crawlers on deploy previews
// Taken from https://www.gatsbyjs.com/plugins/gatsby-plugin-robots-txt/
const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = `https://www.lowelleecs.ml`,
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
	siteMetadata: {
		title: `Lowell EECS Club`,
		description: `Official website of EECS Club at Lowell High School. Learn electrical engineering & computer science while creating exciting projects.`,
		siteUrl: `https://www.lowelleecs.ml`,
		links: {
			discord: `https://discord.gg/fPjfnjU`,
			instagram: `https://www.instagram.com/lowelleecs/`,
			instagramUsername: `@lowelleecs`,
			email: `lowelleecs@gmail.com`,
			signUpForm: `https://forms.gle/P8FQZdq8b5aLnoRQ9`,
			github: `https://github.com/ianjazz246/eecs-club-website`,
		},
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `content`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `srcImages`,
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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1180,
							linkImagesToOriginal: false,
							backgroundColor: "transparent",
							withWebp: true,
						},
					},
				],
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-netlify`,
		},
		{
			resolve: `gatsby-plugin-netlify-cms`,
			options: {
				modulePath: `${__dirname}/src/cms/cms.jsx`,
				htmlFavicon: `${__dirname}/static/img/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/success`, `/workshops/dummy`]
			}
		},
		{
			resolve: `gatsby-plugin-robots-txt`,
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: `*` }]
					},
					"branch-deploy": {
						policy: [{ userAgent: `*`, disallow: [`/`] }],
						sitemap: null,
						host: null
					},
					"deploy-preview": {
						policy: [{ userAgent: `*`, disallow: [`/`] }],
						sitemap: null,
						host: null
					}
				}
			},
		},
		{
			resolve: `gatsby-plugin-goatcounter`,
			options: {
				code: `lowelleecs`,
				referrer: true,
				urlCleanup: true,
			}
		},
	],
};
