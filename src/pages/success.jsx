import React from "react"
import { navigate } from "gatsby"

import ButtonAsLink from "../components/buttonAsLink"
import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import Head from "../components/head"

export default function Success() {
	return (
		<Layout>
			<Head title="Success" />
				<CenteredContainer>
					<h1>Your message has been successfully sent</h1>
					<p>We will get back to you as soon as possible.</p>
					<ButtonAsLink onClick={() => { navigate(-1)} }>Return to previous page</ButtonAsLink>
				</CenteredContainer>
		</Layout>
	);
}