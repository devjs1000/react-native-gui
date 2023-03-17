export const renderText = ({ children, attributes }: TextProps) => {
  return `<Text
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
        </Text>`;
};

interface TextProps {
  children: any;
  attributes?: {
    style: {
      [key: string]: string;
    };
    [key: string]: any;
  };
}
