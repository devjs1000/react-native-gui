
export const renderLayout = ({ children, attributes }: LayoutProps) => {
  return `<View
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
    </View>`;
};

interface LayoutProps {
  children: any;
  attributes?: {
    style: {
      [key: string]: string;
    };
    [key: string]: any;
  };
}
