import Typography from "typography"
import judahTheme from "typography-theme-judah"

judahTheme.overrideStyles = ({ rhythm }, options) => ({
	"h1, h2, h3, h4, h5, h6": {
		color: "var(--text-color)"
	}
})

const typography = new Typography(judahTheme);

export default typography;