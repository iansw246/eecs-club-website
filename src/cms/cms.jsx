import CMS from "netlify-cms-app"
import { URLWidgetControl, URLWidgetPreview } from "./URLWidget"
import { LinkWidgetControl } from "./LinkWidget"

CMS.registerWidget("url", URLWidgetControl, /* URLWidgetPreview */);
CMS.registerWidget("link", LinkWidgetControl);