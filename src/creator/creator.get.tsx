import LayoutCreator from "./layout.creator";

export const getCreator = (name: string) => {
  switch (name) {
    case "LayoutCreator":
      return LayoutCreator;
    default:
      return null;
  }
};
