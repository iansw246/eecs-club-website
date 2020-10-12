import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";
import { Container, Navbar, Nav, Row, Col} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components";


import "../styles/global.scss";



// background-image: url("https://media1.tenor.com/images/d600bc32b6dc1d9f4642f4794cbe6336/tenor.gif")

// TODO:
// Get proper backgroudn image with proper transparency (I just used magic want in Paint.NET)
// Maybe SVG Backgrounds?
// Maybe different background for mobile?

const NavRouterLink = (props) => (
	<Nav.Link
		{...props}
		as={Link}
		activeStyle={{
			textDecoration: "underline",
			// borderBottom: `2px solid ${props.borderColor || "var(--gray)"}`,
		}} />
);

const Logo = styled.img`
	width: 32px;
	height: 32px;
	margin-right: 0.5rem;
	margin-top: auto;
	margin-bottom: auto;
	filter: invert(100%);
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
	background-color: #191919;
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

export const CenteredContainer = (props) => (
	<Container className="text-light" fluid="lg" {...props}>
		{props.children}
	</Container>
);

// stickyFooter: boolean: whether the footer will have margin-top to put itself at bottom of page when page content is short. 
// Layout contains Helmet tags, top navbar, and footera
export default function Layout({ children, stickyFooter = true}) {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
					}
				}
			}
		`
	);

	return (
		<Container className="d-flex flex-column px-0 min-vh-100" style={{backgroundImage: `url("/img/cover-background-edit-UNOPTIMIZED.svg")`, backgroundPosition: "center top"}} fluid>
			<Helmet>
				{/*Primary tags */}
				<title>Lowell EECS Club</title>
				<meta name="title" content={data.site.siteMetadata.title} />
				<meta name="description" content={data.site.siteMetadata.description} />
				{/*Bootstrap*/}
				{/* <link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
					integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
					crossorigin="anonymous"
				/> */}
			</Helmet>
			{/* Ideally, would use sticky, but my Android has some glitches while scrolling. Assumming others have this minor yet annoying issue*/}
			<Navbar id="primary-navbar" variant="dark" expand="sm" className="shadow-sm bg-secondary position-fixed w-100" style={{zIndex: 1}}>
					<Container fluid="lg">
						<Navbar.Brand as={Link} to="/" style={{display: "flex"}}>
							<Logo src="/eecs-logo-UNOPTMIZED.svg" />EECS Club
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="text-primary">
								<Nav.Item><NavRouterLink to="/">Home</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/about">About</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/links">Links</NavRouterLink></Nav.Item>
								{/* <Nav.Item><NavRouterLink to="/events">Workshops</NavRouterLink></Nav.Item> */}
								<Nav.Item><NavRouterLink to="/contact">Contact</NavRouterLink></Nav.Item>
							</Nav>
						</Navbar.Collapse>
					</Container>
			</Navbar>
			{/* Space so children not underneath navbar */}
			<div style={{marginTop: "4rem"}}></div>
			{children}
			<FooterStyled sticky={stickyFooter}>
				<Container fluid="lg" className="text-muted">
					<Row className="mx-0">
						<Nav>
							<Nav.Item><FooterNavLink as={Link} to="/">Home</FooterNavLink></Nav.Item>
						</Nav>
						<Nav className="ml-auto">
							<Nav.Item>
								<FAIconLink title="EECS Club Discord Server" aria-label="EECS Club Discord Server" href="https://discord.com" icon={faDiscord} target="_blank"/>
							</Nav.Item>
							<Nav.Item>
								<FAIconLink title="EECS Club Instagram Account" aria-label="EECS Club Instagram Account" href="https://instagram.com" icon={faInstagram} target="_blank"/>
							</Nav.Item>
						</Nav>
					</Row>
					<small>Lowell EECS Club {" - "}</small>
					<small>Last updated {(new Date()).toLocaleDateString("en-US")}</small>
				</Container>
			</FooterStyled>
		</Container>
	);
}
