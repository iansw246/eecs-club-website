import CMS from "netlify-cms-app"
import { URLWidgetControl, URLWidgetPreview } from "./betterLink"

/* CMS.registerEditorComponent({
	id: "betterLink",
	label: "Better Link",
	fields: [{
		name: "text",
		label: "Link text",
		widget: "string"
	},
	{
		name: "href",
		label: "Link to",
		widget: "string"
	}],
	pattern: /^buttonlink href="(.+)" text="(.+)"$/,
	fromBlock: (match) => {
		return {
			text: match[1],
			href: match[2],
		};
	},
	toBlock: (obj) => {
		return `buttonlink href="${obj.href || ""}" text="${obj.text || ""}"`;
	},
	toPreview: (obj) => {
		return "<p>Preview?</p>";
	},
}); */

/* const LinkWidgetControl = {
	isValid: () => {
		window.alert("HELLO");
		console.log(this.inputField.checkValidity());
		
		//return document.getElementById(this.props.forID).checkValidity() ? true : { error: { messsage: "Invalid URL" }};
		return false ? { error: { message: 'Invalid pathname.' } } : true;
	},
	handleChange: (event) => {
		this.props.onChange(event.target.value);
	},
	render: () => {
		return (
			<input
				type="text"
				id={this.props.forID}
				className={this.props.classNameWrapper}
				value={this.props.value || ""}
				onFocus={this.props.setActiveStyle}
				onBlur={this.props.setInactiveStyle}
				onChange={this.handleChange}
			/>
		);
	}
} */

CMS.registerWidget("url", URLWidgetControl, URLWidgetPreview);