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