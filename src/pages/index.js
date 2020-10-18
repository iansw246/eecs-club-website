import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import ProjectsShowcase from "../components/projectsShowcase";
import { Container, Button } from "react-bootstrap";
import { darkTheme } from "../components/theme"
import DebugOptionsBox from "../components/debugOptionsBox";

const CoverMainContainer = styled(Container).attrs((props) => ({
	className: "text-light text-center my-auto py-2",
	fluid: true,
	as: "main",
}))`
	/*background-image: url("/eecs logo bitmap trace.svg");*/
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
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
	filter: invert(1);
`;

const ScrollDownArrow = styled.img.attrs(() => ({
	src: "/img/scroll-down-arrow-UNOPTIMIZED.svg",
	alt: "scroll down arrow",
}))`
	width: 5rem;
`;

export default function Home({ data }) {
	const [fullScreenCover, toggleFullScreenCover] = useState(false);

	const links = data.site.siteMetadata.links;

	return (
		<Layout stickyFooter={false}>
			<DebugOptionsBox>
				<h4>Ask for permission for photos?</h4>
				<input
					type="checkbox"
					id="fullScreenCover"
					name="fullScreenCover"
					onChange={() => toggleFullScreenCover(!fullScreenCover)}
				/>
				<label htmlFor="fullScreenCover">Full screen cover</label>
			</DebugOptionsBox>
			<CoverMainContainer>
				<Container
					className="d-flex flex-column"
					style={
						fullScreenCover
							? { minHeight: "88vh" }
							: { marginTop: "2rem", marginBottom: "8rem" }
					}
				>
					{/* div for spacing, makes top space smaller than bottom */}
					{fullScreenCover ? <div style={{ flexGrow: 2 }}></div> : null}
					<Container>
						<CoverLogo src="/img/eecs-logo.svg" alt="EECS Club logo"></CoverLogo>
						<h1>Lowell EECS Club</h1>
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
					{/* div for spacing, makes top space smaller than bottom */}
					{fullScreenCover ? <div style={{ flexGrow: 6 }}></div> : null}
				</Container>
				{fullScreenCover ? (
					<a href="#projects" aria-label="Scroll to projects">
						<ScrollDownArrow />
					</a>
				) : null}
				<Container>
					<h2 className="mb-4 mt-2 d-inline-block" id="projects" style={{border: "2px solid #ba68c8", borderLeft: "none", borderRight: "none"}}>
						Projects
					</h2>
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
