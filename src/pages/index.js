import React, { useState } from "react";
import styled from "styled-components"
import Layout, { CenteredMainContent } from "../components/layout";
import { Jumbotron, Container, Button } from "react-bootstrap";


const CoverMainContainer = styled(Container).attrs(props => ({
	className: "text-light text-center my-auto",
	fluid: true,
}))`
	background-image: url("");
	/*background-image: url("/eecs logo bitmap trace.svg");*/
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	flex: 1; /*Expand to take up space */

	display: flex;
	align-items: center;
`;

const pageDesigns = {
	simple: () => (
		<Layout>
			<CenteredMainContent>
				<h1>Lowell EECS Club</h1>
				<small>(copied from LSA page. Should make the opening more brief)</small>
				<p>Meeting days: Fridays</p>
				<p>
					Electrical Engineering & Computer Science (EECS) Club specializes in combining the physical world with code,
					which integrates the fields of both computer science and computer engineering.
					We'll teach you how to solder, make colorful animated RGB displays, animated LED cubes, robots, and many other things.
					Attendance of EECS Club will not only allow you to make cool projects but also gain fundamental knowledge in computer science and engineering,
					which will be very helpful if you aspire to study computer science or electrical engineering in the future. 
				</p>
				<h2>Projects</h2>
				{
					(new Array(50)).fill("text").map((val) => (
						<p>{val}</p>
					))
				}
			</CenteredMainContent>
		</Layout>
	),
	jumbotrons: () => (
		<Layout>
			<CenteredMainContent>
				<h1>Lowell EECS Club</h1>
				<p>Learn electrical engineering & computer science while making exciting projects</p>
				<p>Meetings on Fridays at 3:30 pm</p>
			</CenteredMainContent>
			<Jumbotron fluid>
				<p>Yeet</p>
			</Jumbotron>
		</Layout>
	),
	cover: () => (
		<Layout stickyFooter={false}>
			<CoverMainContainer>
				<Container>
					<h1>Lowell EECS Club</h1>
					<p>Learn electrical engineering & computer science while making exciting projects</p>
					<p>Meetings on Fridays from 3:30 to 4:30 pm</p>
					<Button className="m-1" href="" variant="primary">Join mailing list</Button>
					<Button className="m-1" href="" variant="primary">Join our Discord</Button>
				</Container>
			</CoverMainContainer>
		</Layout>
	),
};

export default function Home({ data }) {
	const allDesignKeys = Object.entries(pageDesigns);
	// Get key [index 0] of the first property in pageDesigns
	const [pageDesignKey, setPageDesign] = useState(allDesignKeys[0][0]);
	const Page = pageDesigns[pageDesignKey];

	return (
		<>
			<div className="bg-light" style={{
				position: "fixed",
				right: 0,
				top: 75,
			}}>
			{
				// Design selection radio buttons
				allDesignKeys.map((design) => (

					<div key={design[0]}>
						<input id={design[0]} name="page-design" type="radio" onChange={() => setPageDesign(design[0])} checked={pageDesignKey === design[0]}/>
						<label htmlFor={design[0]}>{design[0]}</label>
					</div>
				))
			}
			</div>
			<Page />
		</>
	);
}