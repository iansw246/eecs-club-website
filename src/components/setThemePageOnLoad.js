import React from "react"
// Script tag to put at beginning of each page
export const BeginningScriptTag = () => {
	// Used for theme
	const codeToRunOnClient = "(" + (function() {
		var theme = window.localStorage.getItem("theme");
		if (theme === "light") {
			document.body.className = "";
		}
		console.log(JSON.stringify(document.body));
	}).toString() + ")()";

	console.log(codeToRunOnClient);

	return (
		<script
			dangerouslySetInnerHTML={{__html: codeToRunOnClient}}
		/>
	);
};