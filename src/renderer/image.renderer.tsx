export const renderImage = ({ attributes }: ImageProps) => {
  return `<Image
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
    style: {
      [key: string]: string;
    };
    source: {
      uri: string;
    };
    [key: string]: any;
  };
}
