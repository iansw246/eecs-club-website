import React from "react"

import CMS from "netlify-cms-app"

class LinkWidgetControl extends React.Component {
	render() {
		console.log(this.props.value);
		const Url = CMS.getWidget("url").control;

		const { fieldId, ...rest } = this.props;

		return (
			<>
				<Url {...rest} fieldId={fieldId+"url"}/>
				<br />
				<input />
			</>
		);
	}
}

export { LinkWidgetControl }