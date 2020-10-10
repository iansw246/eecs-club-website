import React from "react"
import styled from "styled-components"
import { Container } from "react-bootstrap"

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
	background-color: var(--gray-dark);
`;

const MemberImage = styled.img`
	max-width: 250px;
`;

// Copied from projects showcase
const CarouselContentContainer = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 2.5rem; ${'' /*Margin so Carousel page indicator doesn't overlap content*/}
`;

const ProjectImage = styled.img`
	flex-grow: 3;
	width: 50%;
	max-width: 300px;
`;

const ProjectText = styled.div`
	flex: 1;
	min-width: 200px;
	margin-left: 0.75rem;
	margin-right: 0.75rem;

	display: flex;
	flex-direction: column;
	justify-content: center;

	text-align: center;
`;

const MemberBox = ({ name, title, description, imageSrc }) => (
	<ContentHolder>
		<h2>{name}</h2>
		<h4>{title}</h4>
		<MemberImage src={imageSrc} width={250} className="w-auto" />
		<p>{description}</p>
	</ContentHolder>
);

export const MemberRow = ({ name, title, description, imageSrc }) => (
	<CarouselContentContainer>
		<ProjectImage src={imageSrc} width={300} />
		<ProjectText>
			<h2>{name}</h2>
			<h4>{title}</h4>
			<p>{description}</p>
		</ProjectText>
	</CarouselContentContainer>
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