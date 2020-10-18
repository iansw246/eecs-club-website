import React from "react";
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import { Container, Card } from "react-bootstrap";
import Img from "gatsby-image"
// import { Button } from "react-bootstrap"
import { darkTheme } from "../components/theme"

const UlStyled = styled.ul`
	font-size: 1.5rem;
`;

// const LinkButton = styled(Button)`
// 	margin: 0.5rem;
// `;

const LinksContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	align-items: end;
`;

const LinkCard = styled(Card)`
	width: 18rem;
	margin: 1rem;
	background-color: ${darkTheme.backgroundColor};
`;

export default function Links({ data }) {
	console.log(data.markdownRemark.frontmatter.links);
	return (
		<Layout>
			<CenteredContainer>
				<h1>Links</h1>

				<LinksContainer>
					{data.markdownRemark.frontmatter.links.map((linkPost, index) => {
						return (
							<LinkCard>
								<img src={linkPost.thumbnail} />
								<Card.Body>
									<Card.Title>
										<a href={linkPost.url} target="_blank" rel="noopener noreferrer" className="stretched-link">{linkPost.text}</a>
									</Card.Title>
								</Card.Body>
							</LinkCard>
						)
					})
					}
				</LinksContainer>

				{/* <UlStyled>
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
				</UlStyled> */}
			</CenteredContainer>
		</Layout>
	);
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				links {
					text
					url
					thumbnail
				}
			}
		}
	}
`;