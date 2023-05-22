import React, { useEffect } from "react";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";

const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = React.useState(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  useEffect(() => {
    document.onfullscreenchange = () => {
      setIsFullScreen(!isFullScreen);
    };
  }, [isFullScreen]);

  return (
    <div>
      <button
        onClick={toggleFullScreen}
        className="bg-white font-md hover:text-gray-800 text-gray-500  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
      >
        {isFullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
        {isFullScreen ? "Exit" : "Enter"}
      </button>
    </div>
  );
};

export default FullScreen;
