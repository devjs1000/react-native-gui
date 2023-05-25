export const renderInput = ({
  attributes,
  framework = "react-native",
}: InputProps) => {
  const finalVariant = elementNameMapping[framework] || "div";
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
      />`;
};

interface InputProps {
  attributes?: {
    style?: {
      [key: string]: string;
    };
    placeholder?: string;
    [key: string]: any;
  };
  framework?: "react-native" | "react";
}

const elementNameMapping: any = {
  "react-native": "Input",
  react: "input",
};
