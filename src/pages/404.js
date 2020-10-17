import React from "react"
import Layout, { CenteredContainer } from "../components/layout"

export default function NotFound() {
	return (
		<Layout>
			<CenteredContainer>
				<h1>Error 404: Page not found</h1>
			</CenteredContainer>
		</Layout>
	)
}