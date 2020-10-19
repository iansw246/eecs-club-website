import React from "react";
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import { Container, Card } from "react-bootstrap";
import Img from "gatsby-image"
import * as path from "path"
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
	align-items: stretch;

`;

const LinkCard = styled(Card)`
	width: 200px;
	margin: 1rem;
	background-color: ${darkTheme.backgroundColor};
`;

const CardBody = styled(Card.Body)`
	${'' /* min-height: 6rem; */}
`;

const CardImage = styled(Img)`
	border-top-left-radius: calc(0.25rem - 1px);
	border-top-right-radius: calc(0.25rem - 1px);
`;

export default function Links({ data }) {
	return (
		<Layout>
			<CenteredContainer>
				<h1>Links</h1>

				<LinksContainer>
					{data.markdownRemark.frontmatter.links.map((linkPost, index) => {

						return (
							<LinkCard>
								<CardImage fixed={linkPost.thumbnail.childImageSharp.fixed} alt={`${linkPost.text} thumbnail`}/>
								<CardBody>
									<Card.Title>
										<a href={linkPost.url} target="_blank" rel="noopener noreferrer" className="stretched-link">{linkPost.text}</a>
									</Card.Title>
								</CardBody>
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
	{
		markdownRemark(fileAbsolutePath: {regex: "/.+/content/links/link.md$/"}) {
			frontmatter {
				links {
					text
					url
					thumbnail {
						childImageSharp {
							fixed (width: 200, height: 100) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
				}
			}
		}
		
	}
`;