import styled from "styled-components"
import { darkTheme } from "./theme"

export default styled.button`
	border: none;
	background: none;
	color: ${darkTheme.linkColor};
	padding: 0;

	&:hover {
		color: ${darkTheme.linkColorHover};
		text-decoration: underline;
	}
`;