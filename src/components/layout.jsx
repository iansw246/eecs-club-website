import React from "react";
import styled from "styled-components";

import { Container } from "react-bootstrap";

import MyNavbar from "./navbar"
import Footer from "./footer"
import { darkTheme } from "./theme"

import backgroundImage from "../images/cover-background-min.svg"

import "../styles/global.scss";

// background-image: url("https://media1.tenor.com/images/d600bc32b6dc1d9f4642f4794cbe6336/tenor.gif")

// Empty div with some height to prevent main content from being covered by fixed navbar
// Unneeded if using position:sticky on navbar, but support and some browser issues made me choose not to use sticky
const MainContentSpacer = styled.div`
	/*margin-top: 4rem;*/
	/*32 is the height of logo image. <a> has 4.4 top & bottom padding, <nav> has 8 top & bottom padding*/
	min-height: ${32 + 2*4.4 + 2*8}px;
	height: 4rem;
	height: calc(2.8rem + 16px);
`;

// Wraps all of page content
const PageContainer = styled(Container).attrs(() => ({
	className: "d-flex flex-column px-0 min-vh-100",
	fluid: true,
}))`
	${'' /* Unneeded if using fixed background since ::before doesn't need to fill the PageContainer, only the screen dimensions*/}
	position: relative;
	${'' /* To make the 150% height ::before not show */}
	overflow: hidden;
	&::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		${'' /* Make the background image extend below screen, so when
			scrolling on mobile devices, no white bar is shown at the bottom of the screen
		 */}
		height: 150%;
		${'' /* will-change: transform; */}
		z-index: -2;
		background-color: ${darkTheme.bodyBackground};
		background-image: url("${backgroundImage}");
		background-position: center top;
		background-repeat: repeat;
	}
`;

// stickyFooter: boolean: whether the footer will have margin-top to put itself at bottom of page when page content is short. 
// Layout contains Helmet tags, top navbar, and footera
export default function Layout({ children, stickyFooter = true}) {
	return (
		<PageContainer>
			<MyNavbar coloredNavbar={true}/>

			<MainContentSpacer />

			{children}

			<Footer stickyFooter={stickyFooter}/>

		</PageContainer>
	);
}
