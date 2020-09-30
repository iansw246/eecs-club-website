import React from "react";
import { Helmet } from "react-helmet"
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";
import useDarkMode from "./useDarkMode"
import { GlobalStyles } from "./theme"


// background-image: url("https://media1.tenor.com/images/d600bc32b6dc1d9f4642f4794cbe6336/tenor.gif")

const SiteBackground = styled.div`
	min-height: 100vh;
	width: 100%;
	background: var(--siteBackground);
	transition: background-color 0.1s ease-in;
`;

const SiteContainer = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0.25rem 0.5rem;
	background: var(--contentBackground);
	border: black solid 1px;
	/*border-radius: 10px;*/

	transition: background-color 0.1s ease-in;
`;

const Header = styled.header`
	margin: 0.25rem auto;
	max-width: 1024px;
	border-bottom: var(--headerBorderBottom);
	display: grid;
	grid-template-columns: 1fr auto 1fr;
	justify-items: center;
`;

const LinkList = styled.nav`
	grid-row-start: 2;
	grid-column-start: 1;
	grid-column-end: 4;

	display: flex;
	align-items: baseline;
	justify-content: center;
	flex-flow: row wrap;
	
	margin-left: auto;
	margin-right: auto;
	margin-top: 2px;
`;

const LogoLink = styled(Link)`
	grid-column-start: 2;
	width: 100px;
	height: 40px;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
`;

const ThemeToggle = styled.button`
	margin-left: auto;

	background: var(--siteBackground);
	color: var(--textColor);
	border: 2px solid black;
	border-radius: 5px;
	padding: 0 0.2rem;
	height: 2rem;
	transition: background-color 0.1s ease-in;

	&:hover {
		background: var(--contentBackground);
	}
`;

const HeaderLink = styled(Link).attrs(() => ({
	// Styles for link to current page
	activeStyle: {
		borderTop: "var(--activeLinkBorder)",
		borderRadius: "2px",
	},
}))`
	&, &:visited {
		color: var(--linkColor);
	}
	border-top: 2px solid transparent;
	margin: 0.2rem 0.25rem;
	text-decoration: none;
`;

const SiteBody = styled.div`
`;

export default function Layout(props) {
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

	const bodyClass = theme === "dark" ? "dark" : "";

	return (
		<>
			{/* TODO: implement head and metadata. https://metatags.io/
			<Helmet></Helmet>
			*/}
			<Helmet
				bodyAttributes={{
					class: bodyClass,
				}}
			>
				{/*Primary tags */}
				<title>Lowell EECS Club</title>
				<meta name="title" content={data.site.siteMetadata.title} />
				<meta name="description" content={data.site.siteMetadata.description} />
			</Helmet>
			{/* CSS Styles in global namespace, not limited to a component. */}
			<GlobalStyles />
			<SiteBackground>
				<SiteContainer>
					<Header>
						<LogoLink to="/">
							<img height="40px" widht="100px" alt="EECS Club Logo" src="/eecs-website-icon-placeholder.svg" />
						</LogoLink>
						<ThemeToggle onClick={toggleTheme}>Toggle Theme</ThemeToggle>
						<LinkList>
							<HeaderLink to="/">Home</HeaderLink>
							<HeaderLink to="/contact/">Contact</HeaderLink>
							<HeaderLink to="/events/">Workshops/Events</HeaderLink>
							<HeaderLink to="/error/">Link to page that doesn't exist</HeaderLink>
						</LinkList>
					</Header>
					<SiteBody>
						{props.children}
					</SiteBody>
				</SiteContainer>
			</SiteBackground>
		</>
	);
}
