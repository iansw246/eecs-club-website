import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	/* Light theme */
	body {
		--textColor: black;
		--secondaryTextColor: darkslategray;
		--linkColor: purple;
		--activeLinkBorder: darkblue 2px solid;
		--siteBackground: white;
		--contentBackground: lightgrey;
		--headerBorderBottom: darkblue 2px solid;

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
		--headerBorderBottom: lightblue 2px solid;
	}
`;