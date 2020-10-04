import React from "react";
import { graphql } from "gatsby";
import Layout, { CenteredMainContent } from "../components/layout";

export default function BlogPost({ data }) {
	const post = data.markdownRemark;
	return (
		<Layout>
			<CenteredMainContent>
				<h1>{post.frontmatter.title}</h1>
				<h3>{post.frontmatter.date}</h3>
				<div dangerouslySetInnerHTML={{__html: post.html}} />
			</CenteredMainContent>
		</Layout>
	);
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "YYYY/MM/DD")
				description
				title
			}
		}
	}
`;
