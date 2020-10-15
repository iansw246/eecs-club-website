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

// Experimental alternate version
export const MemberRow = ({ name, title, description, imageSrc }) => (
	<CarouselContentContainer>
		<ProjectText>
			<h3>{name}</h3>
			<h5>{title}</h5>
			<p>{description}</p>
		</ProjectText>
		<ProjectImage src={imageSrc} width={200} />
	</CarouselContentContainer>
);

const HorBlkContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: center;

	/* I don't like this for some reason */
	max-width: 100vw;

	margin-left: -2rem;
	margin-right: -2rem;
`;

const HorBlkMemberInfo = styled.div`
	display: inline-flex;
	flex-flow: row-reverse;
	flex-wrap: wrap;
	justify-content: flex-end;
	max-width: 450px;
	padding: 0;
	margin-left: 2rem;
	margin-right: 2rem;
	margin-top: 4rem;

	/*@media only screen and (min-width: 900px) {
		margin-right: 0.5rem;
	}*/
`;


// Alternate version
const HorizontalBlock = ({ name, title, description, imageSrc }) => (
	<HorBlkMemberInfo>
		<ProjectText>
			<h3>{name}</h3>
			<h5>{title}</h5>
			<p>{description}</p>
		</ProjectText>
		<ProjectImage src={imageSrc} width={200} />
	</HorBlkMemberInfo>
);

export function HorizontalBlockShowcase() {
	return (
		<HorBlkContainer>
			<HorizontalBlock
				name="Bob"
				title="VP of Bob"
				imageSrc="/img/bob.svg"
				description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<HorizontalBlock
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<HorizontalBlock
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<HorizontalBlock
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<HorizontalBlock
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
			<HorizontalBlock
					name="Bob"
					title="VP of Bob"
					imageSrc="/img/bob.svg"
					description="Bob is such a bob he even the VP of Bob wow such cool."
			/>
		</HorBlkContainer>
	);
}


const MemberBoxesHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ContentHolder = styled.div`
	margin: 1rem;
	text-align: center;
	padding: 1rem;
	max-width: 300px;
	background-color: #454545;
`;

const MemberImage = styled.img`
	max-width: 200px;
`;

const MemberBox = ({ name, title, description, imageSrc }) => (
	<Card text="light" style={{margin: "1.5rem", maxWidth: "300px", backgroundColor: darkTheme.backgroundColor}}>
		<Card.Img src={imageSrc} width={250} style={{maxWidth: "250px", marginLeft: "auto", marginRight: "auto", marginTop: "1rem"}}/>
		<Card.Body>
			<Card.Title as="h5">{title}</Card.Title>
			<Card.Title as="h4">{name}</Card.Title>
			<Card.Text>
				{description}
			</Card.Text>
		</Card.Body>
	</Card>
	// <ContentHolder>
	// 	<h2>{name}</h2>
	// 	<h4>{title}</h4>
	// 	<MemberImage src={imageSrc} width={250} className="w-auto" />
	// 	<p>{description}</p>
	// </ContentHolder>
);

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