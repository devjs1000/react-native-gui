export const renderButton = ({
  children,
  attributes,
  variant = "Pressable",
}: ButtonProps) => {
  return `<${variant}
      ${
        attributes
          ? Object.keys(attributes)
              .map((key) => {
                const val = attributes[key];
                if (typeof val === "object") {
                  return `${key}={${JSON.stringify(val)}}`;
                }
                return `${key}="${attributes[key]}"`;
              })
              .join(" ")
          : ""
      }
    >
      ${children || ""} 
      </${variant}>`;
};

interface ButtonProps {
  children: any;
  attributes?: {
    style: {
      [key: string]: string;
    };
    [key: string]: any;
  };
  variant:
    | "Pressable"
    | "TouchableOpacity"
    | "TouchableHighlight"
    | "TouchableWithoutFeedback"
    | "TouchableNativeFeedback";
}
