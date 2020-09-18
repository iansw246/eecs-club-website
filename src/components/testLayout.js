import React from "react";

export default function TestLayout({ children }) {
	return (
		<div style={{ margin: "3rem auto", maxWidth: 650, padding: "0 1rem" }}>
			<h3>Insert site title</h3>
			{children}
		</div>
	);
}
