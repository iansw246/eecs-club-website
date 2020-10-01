import React from "react";
import { Helmet } from "react-helmet"
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";
import useDarkMode from "./useDarkMode"
import { rhythm, scale } from "../utils/typography"
import { GlobalStyles } from "./theme"


// background-image: url("https://media1.tenor.com/images/d600bc32b6dc1d9f4642f4794cbe6336/tenor.gif")

// TODO:
// Get proper backgroudn image with proper transparency (I just used magic want in Paint.NET)


const SiteBackground = styled.div`
	&:before {
		content: "";
		position: fixed;
		z-index: -1;
		background-image: url("/EECS_Logo_-_Dark cropped.png");
		background-size: cover;
		filter: opacity(0.1);
		width: 100%; height: 100%;
		left: 0; right: 0;
	}
	&:after {
		content: "";
		position: fixed;
		z-index: -2;
		background-color: var(--siteBackground);
		transition: background-color 0.1s ease-in;
		width: 100%; height: 100%;
		top: 0;
		left: 0; right: 0;
	}
	${'' /* min-height: 100vh; */}
	width: 100%;
	overflow: auto;
	position: relative;
`;

const SiteContainer = styled.div`
	margin: 0 auto;
	max-width: 1024px;
	padding: 0.25rem 0.5rem;
	background: var(--contentBackground);
	/*border: black solid 1px;*/
	border-radius: 10px;

	transition: background-color 0.1s ease-in;
`;

const Header = styled.header`
	background: var(--accent);
	${'' /* min-height: ${rhythm(1.8)}; */}
	margin-bottom: ${rhythm(1)};
`;

const HeaderInner = styled.div`
	min-height: 100%;
	max-width: 1024px;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr auto 1fr;
	grid-gap: ${rhythm(0.3)};
	justify-items: center;
	align-items: center;
`;

const LinkList = styled.nav`
	grid-row-start: 2;
	grid-column-start: 1;
	grid-column-end: 4;

	/* Desktops */
	@media only screen and (min-width: 768px) {
		& {
			grid-row-start: 1;
			grid-column-start: 2;
			grid-column-end: 3;
		}
	}

	display: flex;
	align-items: baseline;
	justify-content: center;
	flex-flow: row wrap;
	
	margin-left: auto;
	margin-right: auto;
`;

const HeaderLink = styled(Link).attrs(() => ({
	// Styles for link to current page
	activeStyle: {
		borderBottom: "var(--activeLinkBorder)",
		borderRadius: "2px",
	},
}))`
	&, &:visited {
		color: var(--linkColor);
	}
	border: 2px solid transparent;
	margin: ${rhythm(0.1)} ${rhythm(0.3)};
	text-decoration: none;

	&:hover {
		border-bottom-color: var(--activeLinkBorder);
	}
`;

const LogoLink = styled(Link)`
	@media only screen and (min-width: 768px) {
		grid-column-start: 1
	}
	grid-column-start: 2;
`;

const Logo = styled.img`
	width: 80px;
	height: 35px;
	display: block;
	margin-bottom: 0;
`;

const ThemeToggle = styled.button`
	margin-top: ${rhythm(0.1)};
	margin-bottom: ${rhythm(0.1)};
	/* "Float" right */
	margin-left: auto;
	margin-right: ${rhythm(0.1)};
	/* Center vertically */
	align-self: center;
	grid-column-start: 3;

	${scale(-0.3)}
	${'' /* background: var(--siteBackground); */}
	background: none;
	color: var(--textColor);
	${'' /* border: 2px solid black; */}
	border: 1px slid var(--siteBackground);
	border-radius: 5px;
	padding: 0 0.2rem;
	height: ${rhythm(1.2)};
	transition: background-color 0.1s ease-in;

	&:hover {
		background: var(--contentBackground);
	}
`;

const SiteContent = styled.main`
	max-width: 1024px;
	margin: 0 auto;
	padding-left: ${rhythm(0.15)};
	padding-right: ${rhythm(0.15)};
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
				<Header>
					<HeaderInner>
						<LogoLink to="/">
							<Logo alt="EECS Club Logo" src="/eecs-website-icon-placeholder.svg" />
						</LogoLink>
						<LinkList>
							<HeaderLink to="/">Home</HeaderLink>
							<HeaderLink to="/contact/">Contact</HeaderLink>
							<HeaderLink to="/events/">Workshops/Events</HeaderLink>
							<HeaderLink to="/error/">Link to page that doesn't exist</HeaderLink>
						</LinkList>
						<ThemeToggle onClick={toggleTheme}>Toggle Theme</ThemeToggle>
					</HeaderInner>
				</Header>
				<SiteContent>
					{props.children}
				</SiteContent>
			</SiteBackground>
		</>
	);
}
