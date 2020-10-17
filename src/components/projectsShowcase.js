import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Container, Carousel } from "react-bootstrap"


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

const ProjectImage = styled(Img)`
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
	const data = useStaticQuery(graphql`
		query {
			lightCube: file(relativePath: {eq: "projects/DSC_4071.JPG"}) {
				childImageSharp {
					fixed(width: 500, height:300) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
			ledBoard: file(relativePath: {eq: "projects/DSC_4215.JPG"}) {
				childImageSharp {
					fixed(width: 500, height:300, cropFocus: CENTER) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
			solderingWorkshop: file(relativePath: {eq: "projects/DSC_4710.JPG"}) {
				childImageSharp {
					fixed(width: 500, height:300) {
						...GatsbyImageSharpFixed_withWebp
					}
				}
			}
		}
	`);
	
	return (
		<Carousel>
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage fixed={data.lightCube.childImageSharp.fixed} alt="LED light cube"/>
					<ProjectText>
						<h3>LED Light Cube</h3>
						<p>27 LEDs soldered into a 3x3x3 cube.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
			
			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage fixed={data.ledBoard.childImageSharp.fixed} alt="LED light board"/>
					<ProjectText>
						<h3>Light Board</h3>
						<p>An array of LEDs, able to display patterns and animations.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>

			<Carousel.Item>
				<CarouselContentContainer>
					<ProjectImage fixed={data.solderingWorkshop.childImageSharp.fixed} alt="Soldering workshop"/>
					<ProjectText>
						<h3>Soldering Workshop</h3>
						<p>Introductory workshop teaching members how to solder.</p>
					</ProjectText>
				</CarouselContentContainer>
			</Carousel.Item>
		</Carousel>
	)
}