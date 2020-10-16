import CMS from "netlify-cms-app"
import { URLWidgetControl, URLWidgetPreview } from "./URLWidget"

CMS.registerWidget("url", URLWidgetControl, /* URLWidgetPreview */);