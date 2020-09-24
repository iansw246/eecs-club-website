import { useEffect, useState } from "react"

export default function useDarkMode() {
	const [ theme, setTheme ] = useState(() => {
		const theme = window.localStorage.getItem("theme");
		// If theme key exists, return it. Otherwise, return dark as default.
		return theme || "dark";
	});
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

	return [ theme, toggleTheme ];
}