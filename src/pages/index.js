import React, { useState } from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import Layout from "../components/layout";
import ProjectsShowcase from "../components/projectsShowcase";
import { Container, Button } from "react-bootstrap";
import { darkTheme } from "../components/theme"
import DebugOptionsBox from "../components/debugOptionsBox";
import { H1Line } from "../components/textComponents"

const CoverMainContainer = styled(Container).attrs((props) => ({
	className: "text-light text-center my-auto py-2",
	fluid: true,
	as: "main",
}))`
	flex: 1; /*Expand to take up space */

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
`;

const CoverLogo = styled.img`
	position: relative;
	height: 5rem;
	width: 5rem;
	margin: 1rem;
	@media only screen and (min-width: 480px) {
		height: 8rem;
		width: 8rem;
	}
`;

const ScrollDownArrow = styled.img.attrs(() => ({
	src: "/img/scroll-down-arrow-UNOPTIMIZED.svg",
	alt: "scroll down arrow",
}))`
	width: 5rem;
`;



export default function Home({ data }) {
	const links = data.site.siteMetadata.links;

	return (
		<Layout stickyFooter={false}>
			<CoverMainContainer>
				<Container
					className="d-flex flex-column"
					css={`
						margin-top: 2rem;
						margin-bottom: 8rem;
					`}
				>
					<Container>
						<CoverLogo src="/img/eecs-logo.svg" alt="EECS Club logo"></CoverLogo>
						<h1 style={{fontSize: "2.6rem"}}>Lowell EECS Club</h1>
						<p>
							Learn electrical engineering & computer science while making exciting
							projects
						</p>
						<p>Meetings every Friday from 3:30 to 4:30 pm</p>
						<Button className="m-2" href={links.signUpForm} variant="primary" target="_blank" rel="noopener noreferrer">
							Sign up
						</Button>
						<Button className="m-2" href={links.discord} variant="primary" target="_blank" rel="noopener noreferrer">
							Join our Discord
						</Button>
					</Container>
				</Container>
				<Container>
					<H1Line className="mb-4 mt-2" id="projects" as="h2" lineColor="#ff2f2f">
						Projects
					</H1Line>
					<ProjectsShowcase />
				</Container>
			</CoverMainContainer>
		</Layout>
	);
}

export const query = graphql`
	{
		site {
			siteMetadata {
				links {
					discord
					instagram
					email
					signUpForm
				}
			}
		}
	}
`;
