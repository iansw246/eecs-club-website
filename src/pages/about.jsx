import React from "react"
import { graphql } from "gatsby"
import Head from "../components/head"

import Layout from "../components/layout"
import AboutTemplate from "../templates/about-page"
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
			frontmatter {
				title
				boardMembers {
					name
					positionTitle
					description
					image {
						childImageSharp {
							fixed(width: 250, height: 325, cropFocus: ATTENTION, quality: 75) {
								...GatsbyImageSharpFixed_withWebp
							}
						}
					}
				}
			}
			html
		}
	}
`;