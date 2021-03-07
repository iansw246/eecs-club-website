import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import React from "react"
import { Carousel, Container } from "react-bootstrap"
import styled from "styled-components"

const CarouselStyled = styled(Carousel)`
	${""/* To prevent layout shifts when switching between slide with different heights*/}
	min-height: 25rem;
	${"" /* border-top: 2px solid ${darkTheme.accentColor};
	padding-top: 2rem; */}
`;

const CarouselContentContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	margin-bottom: 2.5rem; ${"" /*Margin so Carousel page indicator doesn't overlap content*/}
	padding-left: 10%;
	padding-right: 10%;

	@media only screen and (min-width: 750px) {
		min-height: 10rem;
	}
`;

const ProjectImage = styled(GatsbyImage)`
	flex-grow: 3;
	width: 50%;
	max-width: 500px;
	height: auto;
`;

const ProjectText = styled.div`
	flex: 1;
	min-height: 10rem;
	min-width: 200px;
	margin-left: 0.75rem;
	margin-right: 0.75rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;


const ProjectsShowcase = ({ projects }) => {
	return (
		<CarouselStyled>
			{projects.map(( project, index ) => (
				<Carousel.Item key={index}>
					<CarouselContentContainer>
						<ProjectImage image={getImage(project.image)} alt={project.title}/>
						<ProjectText>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</ProjectText>
					</CarouselContentContainer>
				</Carousel.Item>	
			))}
		</CarouselStyled>
	)
};


ProjectsShowcase.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.shape({
		description: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		image: PropTypes.shape({
			childImageSharp: PropTypes.object.isRequired,
		}).isRequired,
	}).isRequired,
)};

export default ProjectsShowcase;