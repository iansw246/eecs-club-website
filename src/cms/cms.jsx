import CMS from "netlify-cms-app"
import { URLWidgetControl, URLWidgetPreview } from "./URLWidget"
import { LinkWidgetControl } from "./LinkWidget"
import { CroppedImagePreview } from "./CroppedImage"
import Image from "netlify-cms-widget-image"

CMS.registerWidget("url", URLWidgetControl, /* URLWidgetPreview */);
CMS.registerWidget("link", LinkWidgetControl);

// Fields:
//		image_height: "height of image. Passed to css"
//		image_width: "width of image. Passed to css"
CMS.registerWidget("croppedImage", Image.controlComponent, CroppedImagePreview);