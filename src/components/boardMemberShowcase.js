import React from "react"
import styled from "styled-components"
import { Container, Card } from "react-bootstrap"
import { darkTheme } from "./theme"

// Copied from projects showcase
const CarouselContentContainer = styled(Container)`
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 2.5rem; ${'' /*Margin so Carousel page indicator doesn't overlap content*/}
`;

const ProjectImage = styled.img`
	flex-grow: 3;
	width: 50%;
	max-width: 200px;

	margin-right: 0.5rem;
`;

const ProjectText = styled.div`
	flex: 1;
	min-width: 150px;

	margin-left: 0.5rem;
	margin-right: 0.5rem;

	display: flex;
	flex-direction: column;
	justify-content: center;


	/*text-align: center;*/
`;

const MemberBoxesHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const MemberCard = styled(Card)`
	margin: 1.5rem;
	margin-top: 0;
	max-width: 300px;
	background-color: ${darkTheme.backgroundColor};
`;

const MemberImage = styled.img`
	max-width: 200px;
`;

const MemberBox = ({ name, title, description, imageSrc }) => (
	<MemberCard text="light">
		<Card.Img src={imageSrc} width={250} style={{maxWidth: "250px", marginLeft: "auto", marginRight: "auto", marginTop: "1rem"}}/>
		<Card.Body>
			<Card.Title as="h5">{title}</Card.Title>
			<Card.Title as="h4">{name}</Card.Title>
			<Card.Text>
				{description}
			</Card.Text>
		</Card.Body>
	</MemberCard>
	// <ContentHolder>
	// 	<h2>{name}</h2>
	// 	<h4>{title}</h4>
	// 	<MemberImage src={imageSrc} width={250} className="w-auto" />
	// 	<p>{description}</p>
	// </ContentHolder>
);

export { MemberBox };

// Most likely to be used version
export default function BoardMemberShowcase({ justifyContent, marginLeft }) {
	return (
		<MemberBoxesHolder style={{justifyContent: justifyContent, marginLeft: marginLeft}}>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<MemberBox
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
		</MemberBoxesHolder>
	)
}