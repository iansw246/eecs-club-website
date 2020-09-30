import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";

const Post = styled.div`
	margin: 1rem 1rem;
	transition: background-color 0.1s ease-in;

	&:hover {
		background: var(--altBackground);
	}
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

const PostDescription = styled.p`
	margin-top: 0.2rem;
`;

export default function Events({ data }) {
	return (
		<Layout>
			<h1>Events and Workshops</h1>
			{data.allMarkdownRemark.edges.map(({ node }) => (
					<Post key={node.id}>
						<PostLink key={node.id} to={node.fields.slug}>
							<PostTitle key={node.id}>
									{node.frontmatter.title} <PostDate key={node.id}>- {node.frontmatter.date}</PostDate>
							</PostTitle>
							<PostDescription>{node.frontmatter.description}</PostDescription>
						</PostLink>
					</Post>
				))}
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
					fields {
						slug
					}
					id
				}
			}
			totalCount
		}
	}
`;
