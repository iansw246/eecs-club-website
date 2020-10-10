import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Carousel, Media } from "react-bootstrap"


const CarouselContentContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 2.5rem; ${'' /*Margin so Carousel page indicator doesn't overlap content*/}
	padding-left: 10%;
	padding-right: 10%;
`;

const ProjectImage = styled.img`
	flex-grow: 3;
	width: 50%;
	max-width: 500px;
`;

const ProjectText = styled.div`
	flex: 1;
	min-width: 200px;
	margin-left: 0.75rem;
	margin-right: 0.75rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;


export default function ProjectsShowcase() {
	return (
		<Carousel interval={null}>
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage src="/img/eecsphoto2-maxwell-xu.jpg" />
					<ProjectText>
						<h3>LED Light Cube</h3>
						<p>27 LEDs soldered into a 3x3x3 cube.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage src="/img/eecsphoto2-maxwell-xu.jpg" style={{filter: "hue-rotate(90deg) saturate(1200%)"}} />
					<ProjectText>
						<h3>Light Board</h3>
						<p>An array of LEDs, able to display patterns and animations.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
		</Carousel>
	)
}