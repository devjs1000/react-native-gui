import { FaPlay } from "react-icons/fa";
import { createFinalCode } from "./helpers/screenCodeToCode";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const Preview = ({ screenCode }: PreviewProps) => {
  const { framework } = useSelector((state: RootState) => state.app);
  const handlePreview = () => {
    
    const finalCode = createFinalCode(screenCode, framework, true);
    const newWindow = open("rngui://preview", "previewWindow", "width=600,height=600");
    newWindow?.document.write(finalCode);
    newWindow?.document.close();
  };

  return (
    <button
      onClick={handlePreview}
      className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
    >
      <FaPlay />
      Preview
    </button>
  );
};

export default Preview;

interface PreviewProps {
  screenCode: any;
}
