import React from "react";
import styled from "styled-components"
import Layout from "../components/layout";

const NoBulletUl = styled.ul`
    list-style-type: none;
	padding: 0;
	margin-left: 0
`;

export default function Contact() {
	return (
		<Layout>
			<div>
				<h1>Contact</h1>
                <NoBulletUl>
                    <li>Email: <a href="mailto:lowelleecs@gmail.com">lowelleecs@gmail.com</a></li>
                    <li>Discord: <a href="https://discord.com">Insert Discord Link Here</a></li>
                    <li>Instagram: <a href="https://instagram.com">Insert Instagram Link Here</a></li>
                </NoBulletUl>
			</div>
		</Layout>
	);
}
