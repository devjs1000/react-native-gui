export const renderInput = ({ attributes, isWeb = false }: InputProps) => {
  const finalVariant = isWeb ? "input" : "Input";
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
  isWeb?: boolean;
}
