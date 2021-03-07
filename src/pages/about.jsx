import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"
import AboutTemplate from "../templates/aboutTemplate"
export default function About({ data }) {

	return (
		<Layout>
			<Head title="About"
				description="Lowell Electrical Engineering & Computer Science (EECS) Club is a student-run club at Lowell High School in San Francisco, California. Our goal is to inspire students' interest in EECS by providng them exposure to the field."
			/>
			<AboutTemplate
				title={data.markdownRemark.frontmatter.title}
				boardMembers={data.markdownRemark.frontmatter.boardMembers}
				body={data.markdownRemark.html}
			/>
		</Layout>
	)
}

export const query = graphql`
	{
		markdownRemark(fileAbsolutePath: {regex: "/.*pages/about.md$/"}) {
			html
			frontmatter {
				title
				boardMembers {
					name
					positionTitle
					description
					image {
						childImageSharp {
							gatsbyImageData(width: 250, height: 325)
						}
					}
				}
			}
		}
	}
`;