import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"
import useDarkMode from "./useDarkMode";



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

const FAIconLink = (props) => (
	<Nav.Link href={props.href} className="text-light">
		<FontAwesomeIcon icon={props.icon} style={{height: "2rem", width: "2rem"}}/>
	</Nav.Link>
)

export default function Layout({ children }) {
	const [theme, toggleTheme] = useDarkMode();
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
		<Container className="d-flex flex-column px-0" fluid>
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
			
			<Navbar bg="dark" variant="dark" fluid expand="sm" className="shadow-sm fixed-navbar">
					<Container fluid="lg">
						<Navbar.Brand as={Link} to="/" style={{display: "flex"}}>
							<img src="/eecs logo bitmap trace optmized.svg" width="32px" height="32px" style={{marginRight: "0.5rem", filter: "invert(100%)"}}/>EECS Club
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="text-primary">
								<Nav.Item><NavRouterLink to="/">Home</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/links">Links</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/events">Workshops</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/contact">Contact</NavRouterLink></Nav.Item>
							</Nav>
						</Navbar.Collapse>
					</Container>
			</Navbar>
			<Container as="main" className="text-light" fluid="lg">
				{children}
			</Container>
			<Container as="footer" fluid className="mt-auto py-1" style={{backgroundColor: "#191919"}}>
				<Container fluid="lg" className="text-muted">
					<Row>
						<Nav style={{alignContent: "center"}}>
							<Nav.Item><Nav.Link as={Link} to="/">Home</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link as={Link} to="/links">Links</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link as={Link} to="/events">Workshops</Nav.Link></Nav.Item>
							<Nav.Item><Nav.Link as={Link} to="/contact">Contact</Nav.Link></Nav.Item>
						</Nav>
						<Nav className="ml-auto">
							<Nav.Item>
								<FAIconLink href="https://discord.com" icon={faDiscord} />
							</Nav.Item>
							<Nav.Item>
								<FAIconLink href="https://instagram.com" icon={faInstagram} />
							</Nav.Item>
						</Nav>
					</Row>
					<small>Lowell EECS Club</small>
				</Container>
			</Container>
		</Container>
	);
}
