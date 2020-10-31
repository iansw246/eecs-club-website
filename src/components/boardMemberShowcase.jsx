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
	width: 25%;
	min-width: 250px;
	margin: 1.5rem;
	margin-top: 0;
	${'' /* width: 300px; */}
	background-color: ${darkTheme.backgroundColor};
	border-top: 2px solid ${darkTheme.accentColor};
`;

const MemberImage = styled(Img).attrs(() => ({
	className: "card-img"
}))`
	margin-left: 1rem;
	margin-right: 1rem;
	align-self: center;
	margin-top: 1rem;
	max-width: 250px;
	${'' /* width: 250px;
	height: 325px; */}
`;

const MemberBox = ({ name, title, description, imageSrc, imageFixed, imageFluid }) => (
	<MemberCard text="light">
		{
			imageFluid ?
			<MemberImage fluid={imageFluid} alt={`${name} - ${title}`}/>
			:
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
				noellaImage: file(relativePath: {eq: "boardmembers/Noella Lee.png"}) {
					childImageSharp {
						fixed(width: 250, height: 325, cropFocus: ATTENTION) {
							...GatsbyImageSharpFixed_withWebp
						}
						fluid(maxWidth: 250, maxHeight: 325) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				ianImage: file(relativePath: {eq: "boardmembers/Ian Wong.jpg"}) {
					childImageSharp {
						fixed(width: 250, height: 325, cropFocus: ATTENTION) {
							...GatsbyImageSharpFixed_withWebp
						}
						fluid(maxWidth: 250, maxHeight: 325) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				katieImage: file(relativePath: {eq: "boardmembers/Katie Ho.jpg"}) {
					childImageSharp {
						fixed(width: 250, height: 320, cropFocus: ATTENTION) {
							...GatsbyImageSharpFixed_withWebp
						}
						fluid(maxWidth: 250, maxHeight: 325) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				alyssaImage: file(relativePath: {eq: "boardmembers/Alyssa Wu.jpg"}) {
					childImageSharp {
						fixed(width: 250, height: 320, cropFocus: ATTENTION) {
							...GatsbyImageSharpFixed_withWebp
						}
						fluid(maxWidth: 250, maxHeight: 325) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				marvinImage: file(relativePath: {eq: "boardmembers/Marvin Chen.jpg"}) {
					childImageSharp {
						fixed(width: 250, height: 320, cropFocus: ATTENTION) {
							...GatsbyImageSharpFixed_withWebp
						}
						fluid(maxWidth: 250, maxHeight: 325) {
							...GatsbyImageSharpFluid_withWebp
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
				imageFixed={data.noellaImage.childImageSharp.fixed}
				imageFluid={data.noellaImage.childImageSharp.fluid}
				description=""
			/>
			<MemberBox
				name="Ian Wong"
				title="Vice President of Finance"
				imageFixed={data.ianImage.childImageSharp.fixed}
				imageFluid={data.ianImage.childImageSharp.fluid}
				description=""
			/>
			<MemberBox
				name="Katie Ho"
				title="Vice President of Public Relations"
				imageFixed={data.katieImage.childImageSharp.fixed}
				imageFluid={data.katieImage.childImageSharp.fluid}
				description=""
			/>
			<MemberBox
				name="Alyssa Wu"
				title="Project Leader"
				imageFixed={data.alyssaImage.childImageSharp.fixed}
				imageFluid={data.alyssaImage.childImageSharp.fluid}
				description=""
			/>
			<MemberBox
				name="Marvin Chen"
				title="Project Leader"
				imageFixed={data.marvinImage.childImageSharp.fixed}
				imageFluid={data.marvinImage.childImageSharp.fluid}
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