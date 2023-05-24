import ButtonCreator from "./Button.creator";
import ImageCreator from "./Image.creator";
import InputCreator from "./Input.creator";
import LayoutCreator from "./Layout.creator";
import LinkCreator from "./Link.creator";
import SelectCreator from "./Select.creator";
import TextCreator from "./Text.creator";
import TextareaCreator from "./Textarea.creator";

export const getCreator = (name: string) => {
  const creators: any = {
    LayoutCreator,
    ButtonCreator,
    TextCreator,
    ImageCreator,
    InputCreator,
    SelectCreator,
    TextareaCreator,
    LinkCreator,
  };

  return creators[name] || LayoutCreator;
};
