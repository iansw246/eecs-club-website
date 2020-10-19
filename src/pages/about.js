import React, { useState } from "react"
import { graphql } from "gatsby"
import Container from "react-bootstrap/Container"

import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import BoardMemberShowcase from "../components/boardMemberShowcase"
import DebugOptionsBox from "../components/debugOptionsBox"
import { H1Line } from "../components/textComponents"

export default function About({ data }) {
	return (
		<Layout>
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
				<BoardMemberShowcase />
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