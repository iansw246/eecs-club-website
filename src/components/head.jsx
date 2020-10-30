import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"

import defaultOpenGraphImage from "../images/Open-Graph-image.png"

// SEO and favicons
const Head = ({ title, description, siteUrl, setUrl, type, openGraphImage }) => {
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

	// To make camelCase 
	const { pathname: pathName } = useLocation();

	// Get property from GraphQL if not passed in props
	title = title || data.site.siteMetadata.title;
	description = description || data.site.siteMetadata.description;
	siteUrl = siteUrl || data.site.siteMetadata.siteUrl;

	return (
		<Helmet
			titleTemplate="%s | Lowell EECS Club"
			defaultTitle="Lowell EECS Club"
		>
			<html lang="en" />

			<title>{title}</title>
			<meta name="description" content={description} />

			{/* Open Graph / Facebook */}
			<meta property="og:type" content={type} />
			{
				setUrl ? <meta property="og:url" content={ `${siteUrl}${pathName}` } />
				: null
			}
			
			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description} />
			<meta property="og:image" content={siteUrl + openGraphImage} />

			{/* Twitter */}
			<meta property="twitter:card" content="summary_large_image" />
			{
				setUrl ? <meta property="twitter:url" content={ `${siteUrl}${pathName}` } />
				: null
			}
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={siteUrl + openGraphImage} />

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

Head.defaultProps = {
	setUrl: true,
	type: `website`,
	openGraphImage: defaultOpenGraphImage
}

Head.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	siteUrl: PropTypes.string,
	setUrl: PropTypes.bool,
	type: PropTypes.string,
	openGraphImage: PropTypes.string,
}

export default Head;