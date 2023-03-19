import { renderButton } from "./button.renderer";
import { renderImage } from "./image.renderer";
import { renderInput } from "./input.renderer";
import { renderLayout } from "./layout.renderer";
import { renderText } from "./text.renderer";

const toRender:any = {
  "ButtonCreator": renderButton,
  "LayoutCreator": renderLayout,
};

export type rendererType = typeof toRender;

export default toRender;
