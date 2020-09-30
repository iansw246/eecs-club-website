import React from "react"
// Script tag to put at beginning of each page
const BeginningScriptTag = () => {
	// Used for theme
	const codeToRunOnClient = "(" + (function() {
		var theme = window.localStorage.getItem("theme");
		switch (theme) {
			case "light":
				document.body.className = "";
				break;
			default:
			case "dark":
				document.body.className = "dark";
				break;
		}
	}).toString() + ")()";

	return (
		<script
			dangerouslySetInnerHTML={{__html: codeToRunOnClient}}
		/>
	);
};

export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents(<BeginningScriptTag />)
}