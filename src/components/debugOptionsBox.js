import React, { useState } from "react";
import styled from "styled-components";

const DebugOptionsBox = styled.div`
	position: fixed;
	max-width: 10rem;
	bottom: ${props => props.top || "75px"};
	bottom: ${props => props.bottom || null};
	left: ${props => props.left || null};
	right: ${props => props.right || 0};
	z-index: 2;
	background-color: rgba(255, 255, 255, 0.5);

	${'' /* If window is undefined (which it is during build), then will return false and display: null */}
	display: ${(typeof window !== "undefined") && ((new URLSearchParams(window.location.search)).has("noDebug") ? "none" : null)};

	label {
		display: inline;
	}
`;

export default DebugOptionsBox;