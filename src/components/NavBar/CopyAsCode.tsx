import { FaCopy } from "react-icons/fa";
import { createFinalCode } from "./helpers/screenCodeToCode";
const CopyAsCode = ({ screenCode }: CopyAsCodeProps) => {
  const handleCopy = () => {
    const finalCode = createFinalCode(screenCode);
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
