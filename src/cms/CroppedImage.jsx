import React from "react"
import CMS from "netlify-cms-app"

class CroppedImagePreview extends React.Component {
	render = () => {
		const width = this.props.field.get("image_width");
		const height = this.props.field.get("image_height");
		const objectFit = this.props.field.get("object_fit");
		const background = this.props.field.get("image_background");
		const src = this.props.getAsset(this.props.value, this.props.field);
		return (
			<img src={src} style={{width: width, height: height, objectFit: objectFit, background: background}} role="presentation"/>
		)
	}
}

export { CroppedImagePreview }