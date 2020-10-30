import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { Card } from "react-bootstrap"
import Img from "gatsby-image"
import { darkTheme } from "./theme"

const MemberBoxesHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const MemberCard = styled(Card)`
	margin: 1.5rem;
	margin-top: 0;
	width: 300px;
	background-color: ${darkTheme.backgroundColor};
	border-top: 2px solid ${darkTheme.accentColor};
`;

const MemberImage = styled(Img).attrs(() => ({
	className: "card-img"
}))`
	margin-left: auto;
	margin-right: auto;
	margin-top: 1rem;
	width: 250px;
	height: 325px;
`;

const MemberBox = ({ name, title, description, imageSrc, imageFixed }) => (
	<MemberCard text="light">
		{
			imageFixed ? 
			<MemberImage fixed={imageFixed} alt={`${name} - ${title}`}/>
			:
			(
				imageSrc ?
				<MemberImage as="img" src={imageSrc} alt={`${name} - ${title}`}/>
				: <MemberImage as="img" src={imageSrc} alt={`Image of ${name} not yet added`}/>
			)
			
			
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

export { MemberBox };

// Most likely to be used version
export default function BoardMemberShowcase({ justifyContent, marginLeft }) {
	const data = useStaticQuery(
		graphql`
			{
				ianImage: file(relativePath: {eq: "boardmembers/Ian Wong.jpg"}) {
					childImageSharp {
						fixed(width: 250, height: 325, cropFocus: ATTENTION) {
							...GatsbyImageSharpFixed_withWebp
						}
					}
				}
			}
		`
	);
	return (
		<MemberBoxesHolder style={{justifyContent: justifyContent, marginLeft: marginLeft}}>
			<MemberBox
				name="Maxwell Xu"
				title="President"
				imageSrc={null}
				description=""
			/>
			<MemberBox
				name="Noella Lee"
				title="Vice President of Operations"
				imageSrc={null}
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
				imageSrc={null}
				description=""
			/>
			<MemberBox
				name="Alyssa Wu"
				title="Project Leader"
				imageSrc={null}
				description=""
			/>
			<MemberBox
				name="Marvin Chen"
				title="Project Leader"
				imageSrc={null}
				description=""
			/>
			<MemberBox
				name="Liam Giraldo"
				title="Project Leader"
				imageSrc={null}
				description=""
			/>
		</MemberBoxesHolder>
	)
}