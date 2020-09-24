import React, { useState } from "react";
import { Helmet } from "react-helmet"
import { useStaticQuery, Link, graphql } from "gatsby";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import useDarkMode from "./useDarkMode"
import { darkTheme, lightTheme } from "./theme"


// background-image: url("https://media1.tenor.com/images/d600bc32b6dc1d9f4642f4794cbe6336/tenor.gif")
const GlobalStyles = createGlobalStyle`
	body {
		background: ${({ theme }) => theme.bodyBackground};
		color: ${({ theme }) => theme.textColor};
		transition: background-color 0.1s ease-in;
	}
`;

const SiteContainer = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0.25rem 0.5rem;
	background: ${({ theme }) => theme.contentBackground};
	border: black solid 1px;
	border-radius: 10px;
`;

const Header = styled.header`
	margin: 0.25rem auto;
	max-width: 1024px;
	${""/*Logo on left in-line with links: 
	display: flex;*/}
	border-bottom: lightgray 2px solid;
`;

const LinkList = styled.nav`
	display: flex;
	align-items: baseline;
	justify-content: center;
	flex-flow: row wrap;
`;

const Logo = styled.img`
	width: 100px;
	height: 40px;
	margin: 0.2rem auto;
	display: block;
`;

const HeaderLink = styled(Link).attrs(({ theme }) => ({
	// Styles for link to current page
	activeStyle: {
		borderTop: theme.activeLinkBorder,
		borderRadius: "2px",
	},
}))`
	&, &:visited {
		color: ${({ theme }) => theme.linkColor };
	}
	padding-top: 2px;
	box-sizing: border-box;
	margin: 0.2rem 0.25rem;
	text-decoration: none;
`;

const SiteBody = styled.div`
`;

// Maybe should move theme selection from ThemeProvider to inside Layout, before return
export default function Layout(props) {
	const [ theme, toggleTheme ] = useDarkMode();
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
			{/* TODO: implement head and metadata. https://metatags.io/
			<Helmet></Helmet>
			*/}
			<Helmet>
				{/*Primary tags */}
				<title>Lowell EECS Club</title>
				<meta name="title" content={data.site.siteMetadata.title} />
				<meta name="description" content={data.site.siteMetadata.description} />
			</Helmet>
			<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
				{/* CSS Styles in global namespace, not limited to a component. */}
				<GlobalStyles />

				<SiteContainer>
					<Header>
						<Link to="/">
							<Logo alt="EECS Club Logo" src="/eecs-website-icon-placeholder.svg" />
						</Link>
						<LinkList>
							<HeaderLink to="/">Home</HeaderLink>
							<HeaderLink to="/contact/">Contact</HeaderLink>
							<HeaderLink to="/events/">Workshops/Events</HeaderLink>
							<HeaderLink to="/error/">This link has way too much stuff</HeaderLink>
						</LinkList>
					</Header>
					<SiteBody>
						{props.children}
						<button onClick={toggleTheme}>Toggle Theme</button>
					</SiteBody>
				</SiteContainer>
			</ThemeProvider>
		</>
	);
}
