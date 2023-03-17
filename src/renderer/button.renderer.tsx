export const renderButton = ({
  children,
  attributes,
  variant = "Pressable",
  isWeb = false,
}: ButtonProps) => {
  const finalVariant = isWeb ? "Button" : variant;
  return `<${finalVariant}
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
      </${finalVariant}>`;
};

interface ButtonProps {
  children?: any;
  isWeb?: boolean;
  attributes?: {
    style?: {
      [key: string]: string;
    };
    [key: string]: any;
  };
  variant?:
    | "Pressable"
    | "TouchableOpacity"
    | "TouchableHighlight"
    | "TouchableWithoutFeedback"
    | "TouchableNativeFeedback";
}
