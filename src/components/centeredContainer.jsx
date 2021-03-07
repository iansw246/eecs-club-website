import React from "react";
import { Container } from "react-bootstrap";

export default function CenteredContainer (props) {
	return (
		<Container as="main" className="text-light mt-3" fluid="lg" {...props}>
			{props.children}
		</Container>
	);
};