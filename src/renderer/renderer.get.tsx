import { renderButton } from "./button.renderer";
import { renderImage } from "./image.renderer";
import { renderInput } from "./input.renderer";
import { renderLayout } from "./layout.renderer";
import { renderLink } from "./link.renderer";
import { renderSelect } from "./select.renderer";
import { renderText } from "./text.renderer";
import { renderTextarea } from "./textarea.renderer";

const toRender: any = {
  ButtonCreator: renderButton,
  LayoutCreator: renderLayout,
  TextCreator: renderText,
  LinkCreator: renderLink,
  ImageCreator: renderImage,
  InputCreator: renderInput,
  SelectCreator: renderSelect,
  TextareaCreator: renderTextarea,
};

export type rendererType = typeof toRender;

export default toRender;
