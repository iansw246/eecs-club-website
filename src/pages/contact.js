import React from "react";
import { graphql } from "gatsby"
import styled from "styled-components"
import { Form, Button } from "react-bootstrap"

import Layout from "../components/layout";
import { darkTheme } from "../components/theme"
import CenteredContainer from "../components/centeredContainer"

const NoBulletUl = styled.ul`
    list-style-type: none;
	padding: 0;
	margin-left: 0
`;

const FormStyled = styled(Form)`
	border-top: 2px solid ${darkTheme.accentColor};
	border-bottom: 2px solid ${darkTheme.accentColor};

	padding-top: 1rem;
	padding-bottom: 1rem;

	.form-control::placeholder {
		color: lightgray;
	}

	input:focus, textarea:focus {
		background-color: ${darkTheme.backgroundColorLighten};
		color: ${darkTheme.textColor};
	}
	input, textarea {
		background-color: ${darkTheme.backgroundColor};
		border-color: black;
		color: ${darkTheme.textColor};
	}
`;

const FormLabelStyled = styled(Form.Label)`
	&::after {
		${(prop) => prop.required ? `
			content: "*";
			color: red;
			` : null
		}
	}
`;

export default function Contact({ data }) {
	const links = data.site.siteMetadata.links;
	return (
		<Layout>
			<CenteredContainer as="main">
				<h1>Contact</h1>
				<p>
					We're always welcome to any feedback or suggestions.
					Contact us through: 
				</p>
				<NoBulletUl>
                    {/* I've read that emails will get scraped and filled with spam, so some captcha/javascript obfuscating should be used.
						Or just a form.	
					<li>Email: <a href={links.email}>lowelleecs@gmail.com</a></li> */}
                    <li>Discord: <a href={links.discord}>{links.discord}</a></li>
                    <li>Instagram: <a href={links.instagram}>{links.instagramUsername}</a></li>
                </NoBulletUl>
				<p>
					You can also fill out this form.
				</p>
				<FormStyled name="contact" method="POST" action="/success/" data-netlify="true">
					<Form.Group controlId="formEmail">
						<FormLabelStyled required>Email Address</FormLabelStyled>
						<Form.Control type="email" name="email" placeholder="Enter email" required />
					</Form.Group>
					<Form.Group controlId="formName">
						<FormLabelStyled required>Name</FormLabelStyled>
						<Form.Control type="text" name="name" placeholder="Enter name" required />
					</Form.Group>
					<Form.Group controlId="formMessage">
						<FormLabelStyled>Message</FormLabelStyled>
						<Form.Control as="textarea" name="message" placeholder="Enter your message" />
					</Form.Group>
					<Form.Group>	
						<Button variant="primary" type="submit">Submit</Button>
					</Form.Group>
					<input name="form-name" value="contact" type="hidden" />
				</FormStyled>
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
					instagramUsername
					email
				}
			}
		}
}
`;