import React from "react"
import Container from "react-bootstrap/Container"
import Layout, { CenteredMainContainer } from "../components/layout"

export default function About() {
	return (
		<Layout>
			<CenteredMainContainer>
				<h1>
					About
				</h1>
				<p>
					The Lowell Electrical Engineering & Computer Science (EECS) Club is a student-run club at Lowell High School in San Francisco.
					We explore various topics in EECS, creating you how to solder, make colorful animated RGB displays, animated LED cubes, robots, and many other things.
				</p>
			</CenteredMainContainer>
		</Layout>
	)
}