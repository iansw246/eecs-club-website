import React from "react"
import { Carousel } from "react-bootstrap"

export default function ProjectsShowcase() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					src="/img/eecsphoto2-maxwell-xu.jpg"
					alt="LED light cube"
				/>
				<Carousel.Caption>
					<p>LED light cube</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}