import React, { useState } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import BoardMemberShowcase, { MemberRow, HorizontalBlockShowcase } from "../components/boardMemberShowcase"
import DebugOptionsBox from "../components/debugOptionsBox"
import { H1Line } from "../components/textComponents"

const pageDesigns = {
	blocks: () => (
		<BoardMemberShowcase />
	),
	leftAlignedBlocks: () => (
		<BoardMemberShowcase justifyContent="flex-start" marginLeft="-1.5rem"/>
	),
	rows: () => (
		<>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberRow
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
		</>
	),
	horizontalBlocks: () => (
		<HorizontalBlockShowcase />
	)
}

export default function About({ data }) {
	const pageDesignEntries = Object.entries(pageDesigns);

	const defaultBoardMemberDesign = "blocks";
	const defaultDesignInvalid = pageDesigns[defaultBoardMemberDesign] === null;

	if (defaultDesignInvalid) {
		console.error("Default board member design is invalid.");
	}

	const [pageDesign, setPageDesign] = useState(defaultDesignInvalid ? pageDesignEntries[0][0] : defaultBoardMemberDesign);
	const BoardMembers = pageDesigns[pageDesign];

	return (
		<Layout>
			<DebugOptionsBox>{
					pageDesignEntries.map((design, index) => (
						<div key={`pageDesign${design[0]}`}>
							<input key={`pageDesign${design[0]}input`} defaultChecked={pageDesign === design[0] ? true : null} id={`pageDesign${design[0]}`} name="pageDesign" type="radio" onChange={() => setPageDesign(design[0])} />
							<label key={`pageDesign${design[0]}label`} htmlFor={`pageDesign${design[0]}`}>{design[0]}</label>
							<br key={`pageDesign${design[0]}br`}></br>
						</div>
					))
				}
			</DebugOptionsBox>
			<CenteredContainer>
				{
					<h1>About</h1>
				}
				{/*
					Audience: Primarily Lowell students. Secondarily: Parents and the general public
					Make club interesting to students. Keep professional and actually important appeareance
				*/}
				<p>
					Lowell Electrical Engineering & Computer Science (EECS) Club is a student-run club at Lowell High School in San Francisco, California.
					Our goal is to inspire students' interest in EECS by providng them exposure to the field.
				</p>
				<p>
					We teach our members how to solder, code, build circuits, and use Arduino microcontrollers through hands-on projects
					creating colorful RGB displays, animated LED cubes, four-legged robots, and much more.
					In addition, we have guest speakers from the industry talk about the field and their work.
					All students are welcome to join regardless of experience. Our workshops will enable our members to make super cool projects in no time.
				</p>
				<p>
					We meet every Friday from 3:30 to 4:30 pm. Due to the pandemic, our meetings are hosted on Zoom.
					Sign up <a href={data.site.siteMetadata.links.signUpForm}>here. </a>
				</p>
				<p>
					We hope to see you there!
				</p>

				<H1Line as="h2" className="text-center" css={`margin-top: 7rem;`}>Officers</H1Line>
				<BoardMembers />
			</CenteredContainer>
		</Layout>
	)
}

export const query = graphql`
	{
		site {
			siteMetadata {
				links {
					signUpForm
				}
			}
		}
	}
`;