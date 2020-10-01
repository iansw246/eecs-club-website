import React from "react";
import Layout from "../components/layout";

export default function Home({ data }) {
	return (
		<Layout>
			<h1>Lowell EECS Club</h1>
			<small>(copied from LSA page. Should make the opening more brief)</small>
			<p>Meeting days: Fridays</p>
			<p>
				Electrical Engineering & Computer Science (EECS) Club specializes in combining the physical world with code, which integrates the fields of both computer science and computer engineering. We'll teach you how to solder, make colorful animated RGB displays, animated LED cubes, robots, and many other things. Attendance of EECS Club will not only allow you to make cool projects but also gain fundamental knowledge in computer science and engineering, which will be very helpful if you aspire to study computer science or electrical engineering in the future. 
			</p>
		</Layout>
	);
}