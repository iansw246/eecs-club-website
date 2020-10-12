import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Layout, { CenteredContainer } from "../components/layout"
import BoardMemberShowcase, { MemberRow } from "../components/boardMemberShowcase"
import DebugOptionsBox from "../components/debugOptionsBox"

const pageDesigns = {
	blocks: () => (
		<BoardMemberShowcase />
	),
	rows: () => (
		<>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/uploads/pg4.jpg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/uploads/pg4.jpg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/uploads/pg4.jpg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/uploads/pg4.jpg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
		</>
	),
}

export default function About() {
	const pageDesignEntries = Object.entries(pageDesigns);

	const [useImageBanner, setImageBanner] = useState(false);
	const [pageDesign, setPageDesign] = useState(pageDesignEntries[0][0]);

	const BoardMembers = pageDesigns[pageDesign];

	return (
		<Layout>
			<DebugOptionsBox>
				<input id="imageBanner" name="imageBanner" type="checkbox" onChange={() => setImageBanner(!useImageBanner)} />
				<label htmlFor="imageBanner">Image Banner</label>
				<hr></hr>
				{
					pageDesignEntries.map((design, index) => (
						<>
							<input defaultChecked={index === 0} id={`pageDesign${design[0]}`} name="pageDesign" type="radio" onChange={() => setPageDesign(design[0])} />
							<label htmlFor={`pageDesign${design[0]}`}>{design[0]}</label>
							<br></br>
						</>
					))
				}
			</DebugOptionsBox>
			<main>
				{
					useImageBanner ? (
						<Container fluid style={{backgroundImage: `url("/img/eecsphoto2-maxwell-xu.jpg")`, backgroundSize: "cover"}}>
							<Container fluid="lg">
								<h1>About</h1>
							</Container>
						</Container>		
					) : (
						<Container className="text-light" fluid="lg">
							<h1>About</h1>
						</Container>
					)
				}
				<CenteredContainer>
				{/*
					Audience: Primarily Lowell students. Secondarily: Parents and the general public
					Make club interesting to students
				*/}
					<p>
						Lowell Electrical Engineering & Computer Science (EECS) Club is a student-run club at Lowell High School in San Francisco, California.
						Learn and teach EECS

						Our mission is provide Lowell students exposure to EECS and teach them core concepts in the field.
						
						From soldering to coding, 

						Everyone is welcome, regardless of experience. 
						Through 

						We meet every Friday from 3:30 to 4:30 pm. Due to the pandemic, 

						We explore various topics in EECS, creating you how to solder, make colorful animated RGB displays, animated LED cubes, robots, and many other things.
						We hope to see you there
					</p>
					<h2>Board Members</h2>
					<BoardMembers />
				</CenteredContainer>
			</main>
		</Layout>
	)
}