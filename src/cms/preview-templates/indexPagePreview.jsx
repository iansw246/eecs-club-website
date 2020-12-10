import React from "react"
import IndexTemplate from "../../templates/index-page"

const IndexPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(["data"]).toJS();

	if (data) {
		return (
			<IndexTemplate
				title={data.title}
				description={data.description}
				projects={data.projects}
			/>
		)
	} else {
		return <div>Loading...</div>
	}
};

export default IndexPagePreview;