import React from "react";
import { graphql } from "gatsby";
import IndexTemplate from "../templates/indexTemplate"
import Layout from "../components/layout";
import Head from "../components/head"


export default function Home({ data }) {
	let frontmatter = data.markdownRemark.frontmatter;
	return (
		<Layout stickyFooter={false}>
			<Head title="Home" />
			<IndexTemplate
				title={frontmatter.title}
				description={frontmatter.description}
				projects={frontmatter.projects}
			>
			</IndexTemplate>
		</Layout>
	);
}

export const query = graphql`
	{
		markdownRemark(fileAbsolutePath: {regex: "/.*/content/pages/index.md$/"}) {
			frontmatter {
				title
				description
				projects {
					description
					title
					image {
						childImageSharp {
							gatsbyImageData(width: 500, height: 300)
						}
					}
				}
			}
		}
	}
`;
