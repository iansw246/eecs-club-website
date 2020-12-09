import React from "react";
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import LinksTemplate from "../templates/links-page"

export default function Links({ data }) {
	return (
		<Layout>
			<Head title="Links" description="Useful links and resources for Lowell EECS Club." />
			<LinksTemplate
				links={data.markdownRemark.frontmatter.links}
			/>
		</Layout>
	);
}

export const query = graphql`
	{
		markdownRemark(fileAbsolutePath: {regex: "/.*/content/pages/links.md$/"}) {
			frontmatter {
				links {
					linkText
					url
					thumbnail {
						childImageSharp {
							# Background #000000 and last two hex digits 00 is alpha of 0 for completely transparent
							fixed (width: 200, height: 150, fit: CONTAIN, background: "#0000") {
								...GatsbyImageSharpFixed_withWebp
							}
						}
						publicURL
					}
				}
			}
		}
	}
`;