import React from "react";
import containerStyles from "./test-container.module.css";

export default function TestContainer({ children }) {
	return <div className={containerStyles.container}>{children}</div>;
}
