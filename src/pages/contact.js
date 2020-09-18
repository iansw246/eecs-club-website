import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default function Contact() {
	return (
		<Layout>
			<div style={{ color: "teal" }}>
				<Link to="/">Home</Link>
				<p>Contact here</p>
			</div>
		</Layout>
	);
}
