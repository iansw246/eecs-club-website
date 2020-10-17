import React from "react"
import { navigate } from "gatsby"
import ButtonAsLink from "../components/buttonAsLink"
import Layout from "../components/layout"
import CenteredContainer from "../components/layout"

function goBack() {
	navigate(-1);
}

export default function Success() {
	return (
		<Layout>
				<CenteredContainer>
					<h1>Your message has been successfully sent</h1>
					<p>We will get back to you as soon as possible.</p>
					<ButtonAsLink onClick={goBack}>Return to previous page</ButtonAsLink>
				</CenteredContainer>
		</Layout>
	);
}