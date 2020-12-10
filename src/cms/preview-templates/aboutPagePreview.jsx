import React from "react"
import AboutTemplate from "../../templates/about-page"

const AboutPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(["data"]).toJS();

	if (data) {
		return (
			<AboutTemplate
				title={data.title}
				body={data.body}
				boardMembers={data.boardMembers}
			/>
		)
	} else {
		return <div>Loading...</div>
	}
};

export default AboutPagePreview;