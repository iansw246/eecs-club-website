import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	/* Light theme */
	body {
		--textColor: black;
		--secondaryTextColor: darkslategray;
		--linkColor: #6a006a;
		--activeLinkBorder: darkblue 2px solid;
		--siteBackground: white;
		--contentBackground: lightgrey;
		--altBackground: blue;
		--headerBorderBottom: darkblue 2px solid;

		--siteBackgroundImage: url("/EECS_Logo_Background_Light.png");

		color: var(--textColor);
		margin: 0;
	}
	/* Dark theme */
	body.dark {
		--textColor: white;
		--secondaryTextColor: lightgrey;
		--linkColor: lightblue;
		--activeLinkBorder: lightblue 2px solid;
		--siteBackground: black;
		--contentBackground: #232327;
		--altBackground: blue; 
		--headerBorderBottom: lightblue 2px solid;

		--siteBackgroundImage: url("/EECS_Logo_Background_Dark.png");

		--textColor: white;
		--background: black;
		--accent: #0f4c75;
		--backgroundAlt: 1b262c;
		${'' /* --accent: #3282b8; */}
		--accentAlt: #bbe1fa;
	}
`;