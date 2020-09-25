import { useEffect, useState } from "react"

export default function useDarkMode() {
	const [ theme, setTheme ] = useState(() => {
		// For server side rendering, render with dark theme
		// This might cause differences when React is hydrating, so don't change the DOM based on theme, only styles
		if (typeof(window) === "undefined") {
			return "dark";
		}
		let theme = window.localStorage.getItem("theme");
		// If theme key exists, return it. Otherwise, return dark as default.
		if (theme) {
			return theme;
		} else {
			return "dark"
		}
	});
	//const [theme, setTheme] = useState("dark");
	const toggleTheme = () => {
		// If theme is light, set to dark
		if (theme === "light") {
			window.localStorage.setItem("theme", "dark");
			setTheme("dark");
		// Otherwise set to light
		} else {
			setTheme("light");
			window.localStorage.setItem("theme", "light");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("theme");
		localTheme && setTheme(localTheme);
	}, []);

	return [theme, toggleTheme];
}