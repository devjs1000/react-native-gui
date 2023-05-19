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
      });
    });
  };

  const handleCopy = () => {
    const code = screenCodeToCode(screenCode);
    const finalCode = `<>${code.join("")}</>`;
    navigator.clipboard.writeText(finalCode);
  };
  return (
    <button
      onClick={handleCopy}
      className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
    >
      <FaCopy />
      Copy as code
    </button>
  );
};

export default CopyAsCode;

interface CopyAsCodeProps {
  screenCode: any;
}
