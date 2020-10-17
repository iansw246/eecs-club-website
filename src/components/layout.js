import React, { useState } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";

import { Container, Nav, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"

import DebugOptionsBox from "./debugOptionsBox";
import Navbar from "./navbar"
import Head from "./head"
import { darkTheme } from "./theme"

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

const FAIconStyled = styled(FontAwesomeIcon)`
	&& {
		height: 1.7rem;
		width: 1.7rem;
	}
`;

const FooterStyled = styled(Container).attrs((props) => ({
	as: "footer",
	fluid: true,
	className: `${props.sticky && "mt-auto"} py-1`, //margin-top: auto, padding-top/bottom: 1
}))`
	background-color: ${darkTheme.footerBackground};
	color: ${darkTheme.textColorMuted};
`;

const FooterNavLink = styled(Nav.Link)``;

const FAIconLink = (props) => (
	<Nav.Link
		aria-label={props["aria-label"]}
		title={props.title}
		href={props.href}
		className="text-light"
		target={props.target}
		rel={props.target === "_blank" ? "noopener noreferrer" : null} // Possible phishing vulnerability if target="_blank" and these rel properties aren't set
	>
		<FAIconStyled icon={props.icon}/>
	</Nav.Link>
);

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
		position: ${(props) => props.fixedBackgroundImage ? "fixed" : "absolute"};
		top: 0;
		left: 0;
		width: 100%;
		${'' /* Make the background image extend below screen, so when
			scrolling on mobile devices, no white bar is shown at the bottom of the screen
		 */}
		height: 150%;
		${'' /* will-change: transform; */}
		z-index: -1;
		background-color: ${darkTheme.bodyBackground};
		background-image: url("/img/cover-background-min.svg");
		background-position: center top;
		background-repeat: repeat;
	}
`;

// stickyFooter: boolean: whether the footer will have margin-top to put itself at bottom of page when page content is short. 
// Layout contains Helmet tags, top navbar, and footera
export default function Layout({ children, stickyFooter = true}) {
	const [coloredNavbar, setColoredNavbar] = useState(true);
	const [fixedBackgroundImage, setFixedBackgroundImage] = useState(true);

	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						links {
							discord
							instagram
							email
						}
					}
				}
			}
		`
	);

	return (
		<PageContainer $fixedBackgroundImage={fixedBackgroundImage}>
			<Head />

			{/* Debug Options */}
			<DebugOptionsBox left={"0px"} right={" "}>
				<input onChange={() => setColoredNavbar(!coloredNavbar)} id="coloredNavbar" type="checkbox" defaultChecked />
				<label htmlFor="coloredNavbar">Colored Navbar</label>
				<br />
				<input onChange={() => setFixedBackgroundImage(!fixedBackgroundImage)} id="fixedBackgroundImage" type="checkbox" defaultChecked={fixedBackgroundImage ? true : null}/>
				<label htmlFor="fixedBackgroundImage">Fixed background image</label>
				<br />
				<button onClick={(e) => {
					//let debugBoxClassList = e.currentTarget.parentElement.classList[0];
					let debugBoxClass = DebugOptionsBox.styledComponentId;
					for (let debugBox of document.getElementsByClassName(debugBoxClass)) {
						debugBox.style.display = "none";
					}
				}}>
					Hide debug (refresh to restore)
				</button>
			</DebugOptionsBox>

			{/* Ideally, would use sticky, but my Android has some glitches while scrolling. Assumming others have this minor yet annoying issue*/}
			<Navbar coloredNavbar={coloredNavbar} />

			<MainContentSpacer />

			{children}
			<FooterStyled sticky={stickyFooter}>
				<Container fluid="lg">
					<Row className="mx-0">
						<Nav>
							<Nav.Item><FooterNavLink as={Link} to="/">Home</FooterNavLink></Nav.Item>
						</Nav>
						<Nav className="ml-auto">
							<Nav.Item>
								<FAIconLink title="EECS Club Discord Server" aria-label="EECS Club Discord Server" href={data.site.siteMetadata.links.discord} icon={faDiscord} target="_blank"/>
							</Nav.Item>
							<Nav.Item>
								<FAIconLink title="EECS Club Instagram Account" aria-label="EECS Club Instagram Account" href={data.site.siteMetadata.links.instagram} icon={faInstagram} target="_blank"/>
							</Nav.Item>
						</Nav>
					</Row>
					<div className="d-flex justify-content-between">
						<small className="mr-2">© {(new Date().getFullYear())} Lowell EECS Club</small>
						<small>Last updated {(new Date()).toLocaleDateString("en-US")}</small>
					</div>
				</Container>
			</FooterStyled>
		</PageContainer>
	);
}
