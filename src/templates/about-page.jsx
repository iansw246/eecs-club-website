import React from "react"
import PropTypes from "prop-types"

import { css } from "styled-components"
import CenteredContainer from "../components/centeredContainer"
import BoardMemberShowcase from "../components/boardMemberShowcase"

const AboutTemplate = ({
	title,
	body,
	boardMembers
}) => {
	return (
		<CenteredContainer>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{__html: body}}></div>
			<h2 css={`margin-top: 7rem;`}>Officers</h2>
			<BoardMemberShowcase boardMembers={boardMembers}/>
		</CenteredContainer>
	)
}

AboutTemplate.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	boardMembers: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		positionTitle: PropTypes.string,
		image: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fixed: PropTypes.object.isRequired,
			}).isRequired,
		}),
		description: PropTypes.string,
	})),
}

export default AboutTemplate;