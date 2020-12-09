import React from "react";
import { graphql } from "gatsby";

import { IndexTemplate } from "../templates/index-page"
import Layout from "../components/layout";
import Head from "../components/head"


export default function Home({ data }) {
	let markdown = data.markdownRemark.frontmatter;
	return (
		<Layout stickyFooter={false}>
			<Head title="Home" />
			<IndexTemplate
				title={markdown.title}
				description={markdown.description}
				projects={markdown.projects}
			>
			</IndexTemplate>
		</Layout>
	);
}

export const query = graphql`
	{
		markdownRemark(fileAbsolutePath: {regex: "/.*eecs-club-website/content/pages/index.md$/"}) {
			frontmatter {
				title
				description
				projects {
					description
					title
					image {
						childImageSharp {
							fluid(maxWidth: 500, maxHeight: 300) {
								...GatsbyImageSharpFluid_withWebp
							}
						}
					}
				}
			}
		}
	}
`;
