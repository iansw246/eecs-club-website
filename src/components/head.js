import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default function Head({ title, description }) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	);

	title = title || data.site.siteMetadata.title;
	description = description || data.site.siteMetadata.description;

	return (
		<Helmet>
			<html lang="en" />

			<title>Lowell EECS Club</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			<link rel="icon" type="image/svg+xml" href="/img/favicon.svg" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			{/* <link rel="icon" href="/favicon.ico" /> */}
			<link rel="manifest" href="/site.webmanifest" />
		</Helmet>
	)
}