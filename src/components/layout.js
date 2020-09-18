import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = styled.header`
	margin: 1rem auto;
	max-width: 1024px;
	display: flex;
	align-items: flex-end;
	background-image
`;

const Logo = styled.img`
	&:hover {
		filter: blur(10px);
	}
	width: 80px;
	height: 60px;
	margin-right: 0.5rem;
`;

const HeaderLink = styled(Link).attrs((props) => ({
	activeStyle: {
		color: "red",
	},
}))`
	margin: 0.2rem 0.5rem;
	text-decoration: none;
`;

const ContainerDiv = styled.div`
	margin: 1rem auto;
	max-width: 1024px;
	padding: 1rem;
`;

export default function Layout(props) {
	return (
		<ContainerDiv>
			<Header>
				<HeaderLink to="/">
					<Logo src="https://makezine.com/wp-content/uploads/2016/09/HeroImage.jpg"></Logo>
				</HeaderLink>
				<HeaderLink to="/about">About</HeaderLink>
				<HeaderLink to="/contact/">Contact</HeaderLink>
				<HeaderLink to="/contact/">Contact</HeaderLink>
			</Header>
			{props.children}
		</ContainerDiv>
	);
}
