import React, { useState } from "react"

export default function DebugOptionsBox({ children }) {
	return (
		<div className="bg-light" style={{
			position: "fixed",
			right: 0,
			top: 75,
			zIndex: 2,
		}}>
		{children}
		</div>
	)
}