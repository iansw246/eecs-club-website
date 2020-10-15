import React from "react"

// https://www.netlifycms.org/docs/custom-widgets/

const BetterA = (props) => (
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
	static pattern = /^buttonlink (href=".+") (text=".+")$/;

	fromBlock(match) {
		console.log(match);
	}

	toBlock(obj) {
		console.log(`buttonlink href="${obj.href}" text="${obj.text}"`);
		return `buttonlink href="${obj.href}" text="${obj.text}"`;
	}

	toPreview(obj) {
		return <BetterA href={obj.href}  linkText={obj.text} />
	}
}

export class URLWidgetControl extends React.Component {
	// "Fat arrow function" of arrow function inside class
	// For Babel at least, binds function to this, so callbacks can use this
	// without having to be .bind ed to this class
	isValid = () => {
		// console.log(document.getElementById(this.props.forID));
		// console.log(document.getElementById(this.props.forID).checkValidity());
		return document.getElementById(this.props.forID).checkValidity() ? 
			true :
			{ error: { message: "Invalid URL." } };
	};

	handleChange = (event) => {
		this.props.onChange(event.target.value);
	};

	render() {
		return (
			<input
				type="url"
				id={this.props.forID}
				className={this.props.classNameWrapper}
				value={this.props.value || ""}
				onFocus={this.props.setActiveStyle}
				onBlur={this.props.setInactiveStyle}
				onChange={this.handleChange}
			/>
		);
	}
}

export class URLWidgetPreview extends React.Component {
	render() {
		return (
			<a href={this.props.value}>{this.props.value}</a>
		);
	}
}