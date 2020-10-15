import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Carousel, Media } from "react-bootstrap"


const CarouselContentContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	margin-bottom: 2.5rem; ${'' /*Margin so Carousel page indicator doesn't overlap content*/}
	padding-left: 10%;
	padding-right: 10%;
	min-height: 27rem;

	@media only screen and (min-width: 750px) {
		min-height: 10rem;
	}
`;

const ProjectImage = styled.img`
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


export default function ProjectsShowcase() {
	return (
		<Carousel>
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage src="/img/light-cube.jpg" alt="LED light cube"/>
					<ProjectText>
						<h3>LED Light Cube</h3>
						<p>27 LEDs soldered into a 3x3x3 cube.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
			
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage src="/img/light-board-2.jpg" alt="LED light board"/>
					<ProjectText>
						<h3>Light Board</h3>
						<p>An array of LEDs, able to display patterns and animations.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>

			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage src="/img/soldering-workshop.jpg" alt="Soldering workshop"/>
					<ProjectText>
						<h3>Soldering Workshop</h3>
						<p>Beginning workshop to learn how to solder.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
		</Carousel>
	)
}