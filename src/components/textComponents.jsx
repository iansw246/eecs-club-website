import styled from "styled-components"
import { darkTheme } from "./theme"

const H1Line = styled.h1`
	&::before, &::after {
		display: inline-block;
		content: " ";
		background-color: ${props => props.lineColor || darkTheme.accentColor};
		height: 2px;
		width: 15%;
		max-width: 12rem;
		vertical-align: middle;
		text-align: ${props => props.textAlign};
	}
	&::before {
		margin-right: 1.5rem;
	}
	&::after {
		margin-left: 1.5rem;
	}
`;

export { H1Line };