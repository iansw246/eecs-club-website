import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import { Link } from "gatsby"
import Layout, { CenteredContainer } from "../components/layout"
import BoardMemberShowcase, { MemberRow, HorizontalBlockShowcase } from "../components/boardMemberShowcase"
import DebugOptionsBox from "../components/debugOptionsBox"

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

	const [useImageBanner, setImageBanner] = useState(false);

	const defaultBoardMemberDesign = "blocks";
	const defaultDesignInvalid = pageDesigns[defaultBoardMemberDesign] === null;

	if (defaultDesignInvalid) {
		console.error("Default board member design is invalid.");
	}

	const [pageDesign, setPageDesign] = useState(defaultDesignInvalid ? pageDesignEntries[0][0] : defaultBoardMemberDesign);
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
							<input defaultChecked={pageDesign === design[0] ? true : null} id={`pageDesign${design[0]}`} name="pageDesign" type="radio" onChange={() => setPageDesign(design[0])} />
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
					Make club interesting to students. Keep professional and actually important appeareance
				*/}
					<div>
						<p>
							Lowell Electrical Engineering & Computer Science (EECS) Club is a student-run club at Lowell High School in San Francisco, California.
							The club was created in <strong>[Insert date]</strong> with the goal of exposing students to EECS and inspiring their interest in the field.
							<blockquote />
							Maybe?: goal of providing students an opportunity to explore EECS?
							<blockquote />
						</p>
						<p>
							We teach our members how to solder, code, build circuits, and use Arduinos through hands-on projects
							creating colorful RGB displays, animated LED cubes, four-legged robots, and much more.
							In addition, we have guest speakers talk about the field and their work.
							All students are welcome regardless of experience. Our workshops will prepare you to make super cool projects in no time.
						</p>
						<p>
							We meet every Friday from 3:30 to 4:30 pm. Due to the pandemic, our meetings are hosted on Zoom.
							Sign up <a href={data.site.siteMetadata.links.signUpForm}>here. </a>
							<br />
							We hope to see you there!
						</p>
					</div>

					<h2>Board Members</h2>
					<BoardMembers />
				</CenteredContainer>
			</main>
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