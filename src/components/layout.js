import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, Link, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
			borderBottom: `2px solid ${props.borderColor || "var(--gray)"}`,
		}} />
);

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
		<>
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
			
			<Navbar bg="dark" variant="dark" fluid expand="xl">
					<Container expand="lg">
						<Navbar.Brand as={Link} to="/" style={{display: "flex"}}>
							<img src="/eecs logo bitmap trace.svg" width="32px" height="32px" style={{marginRight: "0.5rem", filter: "invert(100%)"}}/>EECS Club
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav>
								<Nav.Item><NavRouterLink to="/">Home</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/about">About</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/events">Workshops</NavRouterLink></Nav.Item>
								<Nav.Item><NavRouterLink to="/contact">Contact</NavRouterLink></Nav.Item>
							</Nav>
						</Navbar.Collapse>
					</Container>
			</Navbar>
			<Container className="text-light" expand="lg">
				{children}
			</Container>

		</>
	);
}
