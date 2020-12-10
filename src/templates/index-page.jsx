import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types"
import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

import ProjectsShowcase from "../components/projectsShowcase";
import { darkTheme } from "../components/theme"

import logo from "../images/eecs-logo.svg"

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

export const IndexTemplate = ({
	title,
	description,
	projects
}) => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					links {
						discord
						email
						signUpForm
					}
				}
			}
		}
	`);
	const links = data.site.siteMetadata.links;

	return (
		<CoverMainContainer>
			<Container
				className="d-flex flex-column"
				css={`
					margin-top: 2rem;
					margin-bottom: 8rem;
				`}
			>
				<Container>
					<CoverLogo src={logo} alt="EECS Club logo"></CoverLogo>
					<h1 style={{fontSize: "2.6rem"}}>{title}</h1>
					{
						description.split("\n").map((line, index) => (
							line ? 
								<p key={index}>{line}</p>
								:
								null
						))
					}
					<Button className="m-2" href={links.signUpForm} variant="primary" target="_blank" rel="noopener noreferrer">
						Sign up
					</Button>
					<Button className="m-2" href={links.discord} variant="primary" target="_blank" rel="noopener noreferrer">
						Join our Discord
					</Button>
				</Container>
			</Container>
			<Container>
				{/* <H1Line className="mb-4 mt-2" id="projects" as="h2" lineColor="#ff2f2f">
					Projects
				</H1Line> */}
				<h2 className="mb-4 mt-2">Projects</h2>
				<hr
					css={`
						border-top: 2px solid ${darkTheme.accentColor};
						width: 80%;
						margin-bottom: 2rem;
					`}
				/>
				<ProjectsShowcase projects={projects}/>
			</Container>
		</CoverMainContainer>
	);
};

IndexTemplate.propType = {
	title: PropTypes.string,
	description: PropTypes.title,
	projects: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.description,
			image: PropTypes.object,
		}),
	),
};

export default IndexTemplate;