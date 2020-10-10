import React from "react"
import styled from "styled-components"

const MemberBoxesHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ContentHolder = styled.div`
	max-width: 300px;
	margin: 1rem;
	text-align: center;
	padding: 1rem;
	background-color: var(--gray-dark);
`;

const MemberBox = ({ name, title, description, imageSrc }) => (
	<ContentHolder>
		<h2>{name}</h2>
		<h4>{title}</h4>
		<img src={imageSrc} width={300} className="w-auto"></img>
		<p>{description}</p>
	</ContentHolder>
);

export default function BoardMemberShowcase() {
	return (
		<MemberBoxesHolder>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/uploads/star.png"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/uploads/star.png"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/uploads/star.png"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/uploads/star.png"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
		</MemberBoxesHolder>
	)
}