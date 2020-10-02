import React from "react"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"

export default function About() {
	return (
		<Layout>
			<Container>
				<h1>
					About
				</h1>
				<h6>(copied from LSA page)</h6>
				<p>
					Electrical Engineering & Computer Science (EECS) Club specializes in combining the physical world with code, which integrates the fields of both computer science and computer engineering. We'll teach you how to solder, make colorful animated RGB displays, animated LED cubes, robots, and many other things. Attendance of EECS Club will not only allow you to make cool projects but also gain fundamental knowledge in computer science and engineering, which will be very helpful if you aspire to study computer science or electrical engineering in the future. 
				</p>
			</Container>
		</Layout>
	)
}