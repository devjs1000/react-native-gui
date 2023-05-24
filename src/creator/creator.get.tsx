import ButtonCreator from "./Button.creator";
import ImageCreator from "./Image.creator";
import InputCreator from "./Input.creator";
import LayoutCreator from "./Layout.creator";
import TextCreator from "./Text.creator";

export const getCreator = (name: string) => {
  const creators: any = {
    LayoutCreator,
    ButtonCreator,
    TextCreator,
    ImageCreator,
    InputCreator
  };

  return creators[name] || LayoutCreator;
};
