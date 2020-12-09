import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Container, Row, Nav } from "react-bootstrap"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons"

import { darkTheme } from "./theme.js"

const FAIconStyled = styled(FontAwesomeIcon)`
	&& {
		height: 1.7rem;
		width: 1.7rem;
	}
`;

const FooterStyled = styled(Container).attrs((props) => ({
	as: "footer",
	fluid: true,
	className: `${props.sticky && "mt-auto"} py-1`, //margin-top: auto, padding-top/bottom: 1
}))`
	background-color: ${darkTheme.footerBackground};
	color: ${darkTheme.textColorMuted};
`;

const FooterNavLink = styled(Nav.Link)``;

const FAIconLink = (props) => (
	<Nav.Link
		aria-label={props["aria-label"]}
		title={props.title}
		href={props.href}
		className="text-light"
		target={props.target}
		rel={props.target === "_blank" ? "noopener noreferrer" : null} // Possible phishing vulnerability if target="_blank" and these rel properties aren't set
	>
		<FAIconStyled icon={props.icon}/>
	</Nav.Link>
);

const Footer = ({ stickyFooter }) => {
	const data = useStaticQuery(graphql`
		{
			site {
				siteMetadata {
					links {
						discord
						instagram
						github
					}
				}
			}
		}
	`);
	
	return (
		<FooterStyled sticky={stickyFooter}>
			<Container fluid="lg">
				<Row className="mx-0">
					<Nav>
						<Nav.Item><FooterNavLink as={Link} to="/">Home</FooterNavLink></Nav.Item>
					</Nav>
					<Nav className="ml-auto">
						<Nav.Item>
							<FAIconLink title="EECS Club Discord Server" aria-label="EECS Club Discord Server" href={data.site.siteMetadata.links.discord} icon={faDiscord} target="_blank"/>
						</Nav.Item>
						<Nav.Item>
							<FAIconLink title="EECS Club Instagram Account" aria-label="EECS Club Instagram Account" href={data.site.siteMetadata.links.instagram} icon={faInstagram} target="_blank"/>
						</Nav.Item>
						<Nav.Item>
							<FAIconLink title="EECS Club Website Github" aria-label="EECS Club Website Github" href={data.site.siteMetadata.links.github} icon={faGithub} target="_blank"/>
						</Nav.Item>
					</Nav>
				</Row>
				<div className="d-flex justify-content-between">
					<small className="mr-4">©{(new Date().getFullYear())} Ian Wong - for Lowell EECS Club</small>
					{/* <small>Last updated {(new Date()).toLocaleDateString("en-US")}</small> */}
				</div>
			</Container>
		</FooterStyled>
	);
}

Footer.defaultProps = {
	stickyFooter: false,
}

Footer.propTypes = {
	stickyFooter: PropTypes.bool,
}

export default Footer