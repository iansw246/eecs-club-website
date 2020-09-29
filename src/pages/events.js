import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

const Post = styled.div`
	margin: 1rem 1rem;
`;

const PostLink = styled(Link)`
	text-decoration: none;
	color: var(--linkColor);
`

const PostTitle = styled.h3`
	margin-bottom: 0.2rem;
`;

const PostDate = styled.span`
	color: var(--secondaryTextColor);
`;

const PostExcerpt = styled.p`
	margin-top: 0.2rem;
`;

export default function Events({ data }) {
	console.log(data.allMarkdownRemark);
	return (
		<Layout>
			<h1>Events and Workshops</h1>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<Post key={node.id}>
					<PostTitle>
						<PostLink to={node.fields.slug}>
							{node.frontmatter.title} <PostDate>- {node.frontmatter.date}</PostDate>
						</PostLink>
					</PostTitle>
					<PostExcerpt>{node.excerpt}</PostExcerpt>
				</Post>
			))}
			<p>Work in progress</p>
		</Layout>
	);
}

export const query = graphql`
	{
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			edges {
				node {
					frontmatter {
						date(formatString: "YYYY/MM/DD")
						description
						title
					}
					excerpt
					fields {
						slug
					}
				}
			}
			totalCount
		}
	}
`;
