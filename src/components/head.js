import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default function Head({ title, description, url: siteUrl }) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
					}
				}
			}
		`
	);

	// Get property from GraphQL if not passed in props
	title = title || data.site.siteMetadata.title;
	description = description || data.site.siteMetadata.description;
	siteUrl = siteUrl || data.site.siteMetadata.siteUrl;

	return (
		<Helmet>
			<html lang="en" />

			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content="website"/>
			<meta property="og:url" content={siteUrl}/>
			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content={siteUrl + "/img/Open Graph image.png"}/>

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image"/>
			<meta property="twitter:url" content={siteUrl}/>
			<meta property="twitter:title" content={title}/>
			<meta property="twitter:description" content={description}/>
			<meta property="twitter:image" content={siteUrl + "/img/Open Graph image.png"}/>

			{/* Favicons */}

			<link rel="icon" sizes="any" href="/img/favicon.svg" type="image/svg+xml" />
			
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d47a1" />
			<meta name="msapplication-TileColor" content="#2d89ef" />
			<meta name="theme-color" content="#ffffff" />
		</Helmet>
	)
}