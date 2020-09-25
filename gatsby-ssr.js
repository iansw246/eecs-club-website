import React from "react"
// Script tag to put at beginning of each page
const BeginningScriptTag = () => {
	// Used for theme
	const codeToRunOnClient = "(" + (function() {
		var theme = window.localStorage.getItem("theme");
		console.log(theme);
		switch (theme) {
			case "light":
				console.log("Setting theme to ''");
				document.body.className = "";
				break;
			default:
			case "dark":
				console.log("Setting theme to 'dark'");
				document.body.className = "dark";
				break;
		}
		console.log(document.body.classList);
	}).toString() + ")()";

	console.log(codeToRunOnClient);

	return (
		<script
			dangerouslySetInnerHTML={{__html: codeToRunOnClient}}
		/>
	);
};

export const onRenderBody = ({ setPreBodyComponents }) => {
	setPreBodyComponents(<BeginningScriptTag />)
}