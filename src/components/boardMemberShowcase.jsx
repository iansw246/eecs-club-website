import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { darkTheme } from "./theme"

const MemberBoxesHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	margin: 3rem 0.5rem;
`;

const MemberCard = styled(Card)`
	margin: 1.5rem;
	margin-top: 0;
	width: 275px;
	background-color: ${darkTheme.backgroundColor};
	border-top: 2px solid ${darkTheme.accentColor};
`;

const MemberImage = styled(GatsbyImage).attrs(() => ({
	className: "card-img"
}))`
	margin-left: 1rem;
	margin-right: 1rem;
	align-self: center;
	margin-top: 1rem;

	width: 250px;
	height: 325px;
`;

const MemberBox = ({name, title, description, image}) => {
	return (
		<MemberCard text="light">
			{
				// Image is null if there is no image
				image ?
				<MemberImage image={getImage(image)} alt={`${name} - ${title}`}/>
				:
				<MemberImage as="div">
					Image of {name} not yet added
				</MemberImage>
			}
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
}

export { MemberBox };

const BoardMemberShowcase = ({
	justifyContent,
	marginLeft,
	boardMembers
}) => {
	return (
		<MemberBoxesHolder style={{justifyContent: justifyContent, marginLeft: marginLeft}}>
			{boardMembers.map((member, index) => (
				<MemberBox
					key={index}
					name={member.name}
					title={member.positionTitle}
					image={member.image}
					description={member.description}
				/>
			))}
			{/* <MemberBox
				name="Maxwell Xu"
				title="President"
				imageText="No image by request of Max"
				description=""
			/>
			<MemberBox
				name="Noella Lee"
				title="Vice President of Operations"
				imageFixed={data.noellaImage.childImageSharp.fixed}
				description=""
			/>
			<MemberBox
				name="Ian Wong"
				title="Vice President of Finance"
				imageFixed={data.ianImage.childImageSharp.fixed}
				description=""
			/>
			<MemberBox
				name="Katie Ho"
				title="Vice President of Public Relations"
				imageFixed={data.katieImage.childImageSharp.fixed}
				description=""
			/>
			<MemberBox
				name="Alyssa Wu"
				title="Project Leader"
				imageFixed={data.alyssaImage.childImageSharp.fixed}
				description=""
			/>
			<MemberBox
				name="Marvin Chen"
				title="Project Leader"
				imageFixed={data.marvinImage.childImageSharp.fixed}
				description=""
			/>
			<MemberBox
				name="Liam Giraldo"
				title="Project Leader"
				imageFixed={data.liamImage.childImageSharp.fixed}
				description=""
			/> */}
		</MemberBoxesHolder>
	)
}

BoardMemberShowcase.propTypes = {
	justifyContent: PropTypes.string,
	marginLeft: PropTypes.string,
	boardMembers: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		positionTitle: PropTypes.string,
		image: PropTypes.shape({
			childImageSharp: PropTypes.object.isRequired,
		}),
		description: PropTypes.string,
	})),
};

export default BoardMemberShowcase;