import { FaCopy } from "react-icons/fa";
import toRender from "../../renderer/renderer.get";
const CopyAsCode = ({ screenCode }: CopyAsCodeProps) => {
  
  const screenCodeToCode = (myScreenCode: any) => {
    return myScreenCode?.map((cd: any) => {
      const renderer = toRender[cd?.type];
      const children = cd.attributes.children;
      const attr = cd.attributes;
      delete attr.children;
      return renderer({
        children: children ? screenCodeToCode(children) : [],
        attributes: attr || {},
      })
    });
  };

  const handleCopy = () => {
    const code = screenCodeToCode(screenCode);
    const finalCode = `<>${code.join("")}</>`;
    navigator.clipboard.writeText(finalCode);
  };
  return (
    <FaCopy
      onClick={handleCopy}
      className="text-gray-600 cursor-pointer hover:text-gray-400 text-xl"
    />
  );
};

export default CopyAsCode;

interface CopyAsCodeProps {
  screenCode: any;
}
