import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";


const SiteContainer = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0.25rem 0.5rem;
`;

const Header = styled.header`
	margin: 0.25rem auto;
	max-width: 1024px;
	display: flex;
	align-items: center;
`;

const LinkList = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row wrap;
`;

const Logo = styled.img`
	&:hover {
		filter: blur(10px);
	}
	width: 60px;
	height: 40px;
	margin-right: 0.5rem;
`;

const HeaderLink = styled(Link).attrs((props) => ({
	activeStyle: {
		color: "red",
	},
}))`
	margin: 0.2rem 0.25rem;
	text-decoration: none;
`;

export default function Layout(props) {
	return (
		<SiteContainer>
			<Header>
				<Link to="/">
					<Logo src="https://makezine.com/wp-content/uploads/2016/09/HeroImage.jpg"></Logo>
				</Link>
				<LinkList>
					<HeaderLink to="/about">About</HeaderLink>
					<HeaderLink to="/contact/">Contact</HeaderLink>
					<HeaderLink to="/events/">Workshops/Events</HeaderLink>
					<HeaderLink to="/error/">This link has way too much stuff</HeaderLink>
				</LinkList>
			</Header>
			{props.children}
		</SiteContainer>
	);
}
