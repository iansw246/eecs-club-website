import React, { useState } from "react";
import styled from "styled-components"
import Layout, { CenteredMainContainer } from "../components/layout";
import ProjectsShowcase from "../components/projectsShowcase"
import { Jumbotron, Container, Button } from "react-bootstrap";


const CoverMainContainer = styled(Container).attrs(props => ({
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
		width: 8rem
	}
	filter: invert(1);
`;

const ScrollDownArrow = styled.img.attrs(() => ({
	src: "/img/scroll-down-arrow.svg",
}))`
	width: 5rem;
`;


export default function Home({ data }) {
	return (
		<Layout stickyFooter={false}>
			<CoverMainContainer>
				<Container className="d-flex flex-column" style={{minHeight: "88vh"}}>
					{/* div for spacing, makes top space smaller than bottom */}
					<div style={{flexGrow: 2}} ></div>
					<Container>
						<CoverLogo src="/eecs logo bitmap trace optimized.svg"></CoverLogo>
						<h1>Lowell EECS Club</h1>
						<p>Learn electrical engineering & computer science while making exciting projects</p>
						<p>Meetings every Fridays from 3:30 to 4:30 pm</p>
						<Button className="m-2" href="" variant="primary">Join mailing list</Button>
						<Button className="m-2" href="" variant="primary">Join our Discord</Button>
					</Container>
					{/* div for spacing, makes top space smaller than bottom */}
					<div style={{flexGrow: 6}} ></div>
				</Container>
				<a href="#projects" aria-label="Scroll to projects"><ScrollDownArrow/></a>
				<h1 className="my-5" id="projects">Projects</h1>
				<Container>
					<ProjectsShowcase />
				</Container>
			</CoverMainContainer>
		</Layout>
	);
}