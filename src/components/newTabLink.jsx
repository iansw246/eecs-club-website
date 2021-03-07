import React from "react"

export default function newTabLink(props) {
	return (
		<a
			{...props}
			target="_blank"
			rel="noopener noreferrer" // Possible phishing vulnerability if target="_blank" and these rel properties aren't set>
		>{props.children}</a>
	);
}