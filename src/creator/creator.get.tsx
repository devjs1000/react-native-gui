import LayoutCreator from "./Layout.creator";

export const getCreator = (name: string) => {
  switch (name) {
    case "LayoutCreator":
      return LayoutCreator;
    default:
      return LayoutCreator;
  }
};
