import React from "react"

export default function DarkThemeTest() {
	return (<></>)
}
/*import { createGlobalStyle } from "styled-components"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const GlobalStyles = createGlobalStyle`
	body {
		--bg: white;
		--textNormal: #222;
		--textTitle: #222;
		--textLink: blue;
		--hr: hsla(0, 0%, 0%, 0.2);

		background-color: var(--bg);
	}

	body.dark {
	-webkit-font-smoothing: antialiased;

	--bg: darkslategray;
	--textNormal: rgba(255, 255, 255, 0.88);
	--textTitle: white;
	--textLink: yellow;
	--hr: hsla(0, 0%, 100%, 0.2);
	}
`;

export default function DarkThemeTest() {
	return (
		<div style={{
			backgroundColor: "var(--bg)",
		}}>
			<GlobalStyles></GlobalStyles>
			<h1>Header</h1>
			<p>Paragraph</p>
			<a>Link</a>

			<ThemeToggler>
				{({ theme, toggleTheme }) => (
						<button onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</button>
				)}
			</ThemeToggler>
		</div>
	);
}*/