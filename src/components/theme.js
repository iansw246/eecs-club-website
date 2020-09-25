import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
	body {
		--textColor: black;
		--linkColor: purple;
		--activeLinkBorder: darkblue 2px solid;
		--siteBackground: white;
		--contentBackground: lightgrey;
		--headerBorderBottom: darkblue 2px solid;

		color: var(--textColor);

		margin: 0;
	}

	body.dark {
		--textColor: white;
		--linkColor: lightblue;
		--activeLinkBorder: lightblue 2px solid;
		--siteBackground: black;
		--contentBackground: #1e1e1e;
		--headerBorderBottom: lightblue 2px solid;
	}
`;