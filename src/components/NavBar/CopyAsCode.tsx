import { FaCopy } from "react-icons/fa";
import toRender from "../../renderer/renderer.get";
const CopyAsCode = ({ screenCode }: CopyAsCodeProps) => {
  const screenCodeToCode = (screenCode: any) => {
    return screenCode.map((cd: any) => {
      const renderer = toRender[cd.type];
      return renderer({
        children: cd.children || "",
        attributes: cd.attributes || {},
      });
    });
  };

  const handleCopy = () => {
    const code = screenCodeToCode(screenCode);
    navigator.clipboard.writeText(code);
  };
  return (
    <FaCopy onClick={handleCopy} className="text-gray-600 cursor-pointer hover:text-gray-400 text-xl" />
  );
};

export default CopyAsCode;

interface CopyAsCodeProps {
  screenCode: any;
}
