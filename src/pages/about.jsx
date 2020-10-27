import React from "react"
import { graphql } from "gatsby"
import { css } from "styled-components"
import Img from "gatsby-image"

import Layout from "../components/layout"
import CenteredContainer from "../components/centeredContainer"
import BoardMemberShowcase from "../components/boardMemberShowcase"
import Head from "../components/head"
import { H1Line } from "../components/textComponents"
import NewTabLink from "../components/newTabLink"

export default function About({ data, location }) {
	const bannerSources = [
		data.bannerImageMobile.childImageSharp.fluid,
		{
			...data.bannerImageDesktop.childImageSharp.fluid,
			media: `(min-width: 768px)`,
		},
	];

	return (
		<Layout>
			<Head title="About" pagePath={location.pathname} />
			<CenteredContainer>
				{
					<h1>About</h1>
				}
				{/*
					Audience: Primarily Lowell students. Secondarily: Parents and the general public
					Make club interesting to students. Keep professional and actually important appeareance
				*/}
				<p>
					Lowell Electrical Engineering & Computer Science (EECS) Club is a student-run club at Lowell High School in San Francisco, California.
					Our goal is to inspire students' interest in EECS by providng them exposure to the field.
				</p>
				<p>
					We teach our members how to solder, code, build circuits, and use Arduino microcontrollers through hands-on projects
					creating colorful RGB displays, animated LED cubes, four-legged robots, and much more.
					In addition, we have guest speakers from the industry talk about the field and their work.
					All students are welcome to join regardless of experience. Our workshops will enable our members to create super cool projects in no time.
				</p>
				<Img className="my-4" fluid={bannerSources}/>
				<p>
					We meet every Friday from 3:30 to 4:30 pm. Due to the pandemic, our meetings are hosted on Zoom.
					Sign up <NewTabLink href={data.site.siteMetadata.links.signUpForm}>here</NewTabLink> (must use SFUSD account).
				</p>
				<p>
					We hope to see you there!
				</p>

				{/* <H1Line as="h2" className="text-center" css={`margin-top: 7rem;`}>Officers</H1Line> */}
				<h2 css={`margin-top: 7rem;`}>Officers</h2>
				<BoardMemberShowcase />
			</CenteredContainer>
		</Layout>
	)
}

export const query = graphql`
	{
		site {
			siteMetadata {
				links {
					signUpForm
				}
			}
		}
		bannerImageDesktop: file(relativePath: {eq: "aboutBanner.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 1100, cropFocus: CENTER) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
		bannerImageMobile: file(relativePath: {eq: "aboutBannerMobile.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 768, maxHeight: 300, cropFocus: CENTER) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;