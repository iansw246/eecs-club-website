import React from "react"
import Layout from "../components/layout"

import CenteredContainer from "../components/centeredContainer"


export default function NotFound() {
	return (
		<Layout>
			<CenteredContainer>
				<h1>Error 404: Page not found</h1>
			</CenteredContainer>
		</Layout>
	)
}