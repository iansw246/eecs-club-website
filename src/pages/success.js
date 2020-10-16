import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { darkTheme } from "../components/theme"
import Layout, { CenteredContainer } from "../components/layout"

function goBack() {
	navigate(-1);
}

const ButtonAsLink = styled.a`
	border: none;
	background: none;
	color: ${darkTheme.linkColor};
`;

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