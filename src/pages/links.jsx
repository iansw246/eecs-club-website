import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import LinksTemplate from "../templates/linksTemplate"

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
							gatsbyImageData(
								backgroundColor: "#0000"
								width: 200
								height: 150
								layout: FIXED
							)
						}
						publicURL
					}
				}
			}
		}
	}
`;