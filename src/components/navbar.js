import React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"

const NavbarStyled = styled(Navbar).attrs((props) => ({
	id: "primary-navbar",
	variant: "dark",
	expand: "sm",
	className: "shadow-sm position-fixed w-100 font-weight-bold",
}))`
	z-index: 1;
	background-color: ${(props) => (props.coloredNavbar ? "var(--primary)" : "var(--body-bg)")};

`

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

{/* Ideally, would use sticky, but my Android has some glitches while scrolling. Assumming others have this minor yet annoying issue*/}
export default ({coloredNavbar}) => (
	<NavbarStyled coloredNavbar={coloredNavbar}>
		<Container fluid="lg">
			<Navbar.Brand as={Link} to="/" style={{display: "flex"}}>
				<Logo src="/img/eecs-logo.svg" alt="EECS Club logo"/>EECS Club
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="text-primary">
					<Nav.Item><NavRouterLink to="/">Home</NavRouterLink></Nav.Item>
					<Nav.Item><NavRouterLink to="/about/">About</NavRouterLink></Nav.Item>
					<Nav.Item><NavRouterLink to="/links/">Links</NavRouterLink></Nav.Item>
					{/* <Nav.Item><NavRouterLink to="/events">Workshops</NavRouterLink></Nav.Item> */}
					<Nav.Item><NavRouterLink to="/contact/">Contact</NavRouterLink></Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</NavbarStyled>
);