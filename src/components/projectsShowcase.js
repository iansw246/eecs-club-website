import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Carousel, Media } from "react-bootstrap"


const CarouselContentContainer = styled(Container)`
	margin-bottom: 1.5rem;
	padding-left: 10%;
	padding-right: 10%;
`;

const ProjectImage = styled.img`
	flex-grow: 4;
	width: 50%;
`;

const ProjectText = styled.div`
	flex-grow: 1;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
`;

const ProjectMedia = styled(Media)`
	display: inline;
	min-height: 200px;
`;



export default function ProjectsShowcase() {
	return (
		<Carousel interval={null}>
			<Carousel.Item>
				<CarouselContentContainer>
					<Row>
						<Col xs={8}>
							<ProjectImage src="/img/eecsphoto2-maxwell-xu.jpg" />
						</Col>
						<Col>
							<ProjectText>
								<h2>LED Light Cube</h2>
								<p>9 LEDs soldered into a 3x3 cube. akld akljf dkl aklsd fjklj</p>
							</ProjectText>
						</Col>
					</Row>
				</CarouselContentContainer>
			</Carousel.Item>
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage src="/img/eecsphoto2-maxwell-xu.jpg" style={{filter: "hue-rotate(90deg) saturate(1200%)"}} />
					<ProjectText>
						<h2>LED Light Cube</h2>
						<p>9 LEDs soldered into a 3x3 cube.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
		</Carousel>
	)
}