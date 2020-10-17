import React from "react";
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
// import { Button } from "react-bootstrap"
// import { darkTheme } from "../components/theme"

const UlStyled = styled.ul`
	font-size: 1.5rem;
`;

// const LinkButton = styled(Button)`
// 	margin: 0.5rem;
// `;

export default function Links({ data }) {
	return (
		<Layout>
			<CenteredContainer>
				<h1>Links</h1>
				<UlStyled>
				{
					data.markdownRemark.frontmatter.links.map((link, index) => {
						return (<li key={index}>
							<a
								key={index}
								href={link.url}
								target="_blank"
								rel="noopener noreferrer" // Possible phishing vulnerability if target="_blank" and these rel properties aren't set
							>
								{link.text}
							</a>
						</li>)
					})
				}
				</UlStyled>
			</CenteredContainer>
		</Layout>
	);
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				links {
					text
					url
				}
			}
		}
	}
`;