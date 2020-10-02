import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const AllProjectsBox = styled.div`
	display: flex;
`;

const ProjectContainer = styled.div`
	background: rgba(0, 0, 0, 0.1);
	margin-left: ${rhythm(0.5)};
	margin-right: ${rhythm(0.5)};

	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`;
const ProjectTitle = styled.h3`
	margin-bottom: ${rhythm(0.5)};
`;
const ProjectDescription = styled.p`
	margin-bottom: ${rhythm(0.4)};
`;

const ProjectBox = ({ title, description, imgSrc, imageTitle, className }) => (
	<ProjectContainer className={className}>
		<ProjectTitle>{title}</ProjectTitle>
		<ProjectDescription>{description}</ProjectDescription>
		<img src={imgSrc} alt={imageTitle || title}></img>
	</ProjectContainer>
);

export { AllProjectsBox, ProjectBox };