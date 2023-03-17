export const renderImage = ({ attributes, isWeb = false }: ImageProps) => {
  const finalVariant = isWeb ? "img" : "Image";
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

interface ImageProps {
  attributes?: {
    style?: {
      [key: string]: string;
    };
    source?: {
      uri: string;
    };
    src?: string;
    [key: string]: any;
  };
  isWeb?: boolean;
}
