import ButtonCreator from "./Button.creator";
import ImageCreator from "./Image.creator";
import LayoutCreator from "./Layout.creator";
import TextCreator from "./Text.creator";

export const getCreator = (name: string) => {
  switch (name) {
    case "LayoutCreator":
      return LayoutCreator;
    case "ButtonCreator":
      return ButtonCreator;
    case "TextCreator":
      return TextCreator;
    case "ImageCreator":
      return ImageCreator;
    default:
      return LayoutCreator;
  }
};
