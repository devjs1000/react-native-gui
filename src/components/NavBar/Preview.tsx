import { FaPause, FaPlay } from "react-icons/fa";
import { createFinalCode } from "./helpers/screenCodeToCode";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { togglePreview } from "../../state/app.slice";

const Preview = ({ screenCode }: PreviewProps) => {
  const { hasPreview } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  const handlePreview = () => {
    dispatch(togglePreview());
  };

  return (
    <button
      onClick={handlePreview}
      className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
    >
      {hasPreview ? <FaPause /> : <FaPlay />}
      {hasPreview ? "Close Preview" : "Open Preview"}
    </button>
  );
};

export default Preview;

interface PreviewProps {
  screenCode: any;
}
