import React from "react"
import { Link } from "gatsby"
import { Container, Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"
import { darkTheme } from "./theme"

import logo from "../images/eecs-logo.svg"

const NavbarStyled = styled(Navbar).attrs((props) => ({
	id: "primary-navbar",
	variant: "dark",
	expand: "sm",
	className: "shadow-sm position-fixed w-100 font-weight-bold",
}))`
	z-index: 2;
	background-color: ${(props) => (props.$coloredNavbar ? "var(--primary)" : darkTheme.bodyBackground)};
`;

const NavRouterLink = (props) => (
	<Nav.Link
		{...props}
		as={Link}
		activeStyle={{
			textDecoration: "underline",
			// borderBottom: `2px solid ${props.borderColor || "var(--gray)"}`,
		}} />
);

const NavItem = styled(Nav.Item)`
	&:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}
`;

const Logo = styled.img`
	width: 32px;
	height: 32px;
	margin-right: 0.5rem;
	margin-top: auto;
	margin-bottom: auto;
`;

/* Ideally, would use sticky, but my Android has some glitches while scrolling. Assumming others have this minor yet annoying issue*/
export default ({coloredNavbar}) => (
	<NavbarStyled $coloredNavbar={coloredNavbar}>
		<Container fluid="lg">
			<Navbar.Brand as={Link} to="/" style={{display: "flex"}}>
				<Logo src={logo} alt="EECS Club logo"/>EECS Club
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="text-primary">
					<NavItem><NavRouterLink to="/">Home</NavRouterLink></NavItem>
					<NavItem><NavRouterLink to="/about/">About</NavRouterLink></NavItem>
					<NavItem><NavRouterLink to="/links/">Links</NavRouterLink></NavItem>
					{/* <NavItem><NavRouterLink to="/events">Workshops</NavRouterLink></NavItem> */}
					<NavItem><NavRouterLink to="/contact/">Contact</NavRouterLink></NavItem>
				</Nav>
			</Navbar.Collapse>
		</Container>
	</NavbarStyled>
);