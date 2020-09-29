import React from "react";
import styled from "styled-components"
import Layout from "../components/layout";
import { ThemedA } from "../components/themedA"

const NoBulletUl = styled.ul`
    list-style-type: none;
`;

export default function Contact() {
	return (
		<Layout>
			<div>
				<h2>Contact</h2>
                <NoBulletUl>
                    <li>Email: <ThemedA href="mailto:lowelleecs@gmail.com">lowelleecs@gmail.com</ThemedA></li>
                    <li>Discord: <ThemedA href="https://discord.com">Insert Discord Link Here</ThemedA></li>
                    <li>Instagram: <ThemedA href="https://instagram.com">Insert Instagram Link Here</ThemedA></li>
                </NoBulletUl>
			</div>
		</Layout>
	);
}
