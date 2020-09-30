import React from "react";
import styled from "styled-components"
import Layout from "../components/layout";
import { ThemedA } from "../components/themedA"

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
                    <li>Email: <ThemedA href="mailto:lowelleecs@gmail.com">lowelleecs@gmail.com</ThemedA></li>
                    <li>Discord: <ThemedA href="https://discord.com">Insert Discord Link Here</ThemedA></li>
                    <li>Instagram: <ThemedA href="https://instagram.com">Insert Instagram Link Here</ThemedA></li>
                </NoBulletUl>
			</div>
		</Layout>
	);
}
