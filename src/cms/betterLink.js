import React from "react"

// https://www.netlifycms.org/docs/custom-widgets/

const BetterLink = (props) => (
	<a href={props.href}>{props.linkText}</a>
);

export default class BetterLink extends React.Component {
	static id = "betterLink";
	static label = "Better Link";
	static fields = [{
		name: "text",
		label: "Link text",
		widget: "string"
	},
	{
		name: "href",
		label: "Link to",
		widget: "string"
	}];
	// Required? Will this conflict with built in links?
	// How does this even work?
	static pattern = "";

	fromBlock(match) {

	}

	toBlock(obj) {
		return "link";
	}

	toPreview(obj) {
		return <BetterLink href={obj.href}  linkText={obj.text} />
	}
}