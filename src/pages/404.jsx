import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import Head from "../components/head"


export default function NotFound({ location }) {
	return (
		<Layout>
			<Head title="404" description="Error 404: Page not found" />
			<CenteredContainer>
				<h1>Error 404: Page not found</h1>
				<Link to="/">Return to home page?</Link>
			</CenteredContainer>
		</Layout>
	)
}