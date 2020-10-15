import React from "react";
import { graphql } from "gatsby"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"
import Layout, { CenteredContainer } from "../components/layout";

const NoBulletUl = styled.ul`
    list-style-type: none;
	padding: 0;
	margin-left: 0
`;

const FormStyled = styled(Form)`
	border-top: 2px solid var(--primary);
	border-bottom: 2px solid var(--primary);
`;

export default function Contact({ data }) {
	const links = data.site.siteMetadata.links;
	return (
		<Layout>
			<CenteredContainer>
				<h1>Contact</h1>
				<p>
					We're always welcome to any feedback or suggestions.
					Contact us through the links below.
				</p>
				<FormStyled data-netlify="true">
					<Form.Group controlId="formEmail">
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group controlId="formName">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Enter name" />
					</Form.Group>
					<Form.Group controlId="formMessage">
						<Form.Label>Message</Form.Label>
						<Form.Control as="textarea" placeholder="Enter your message" />
					</Form.Group>
					<Form.Group>	
						<Button variant="primary" type="submit">Submit</Button>
					</Form.Group>
				</FormStyled>
                <NoBulletUl>
                    <li>Email: <a href={links.email}>lowelleecs@gmail.com</a></li>
                    <li>Discord: <a href={links.discord}>Insert Discord Link Here</a></li>
                    <li>Instagram: <a href={links.instagram}>Insert Instagram Link Here</a></li>
                </NoBulletUl>
			</CenteredContainer>
		</Layout>
	);
}

export const query = graphql`
	{
		site {
			siteMetadata {
				links {
					discord
					instagram
					email
				}
			}
		}
}
`;