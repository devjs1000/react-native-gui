import React from "react";
import { createFinalCode } from "../NavBar/helpers/screenCodeToCode";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { DeviceFrameset } from "react-device-frameset";
import "../../styles/marvel-devices.min.css";
import "../../styles/device-selector.min.css";

const View = () => {
  const { framework, ui, hasPreview } = useSelector(
    (state: RootState) => state.app
  );

  const finalCode = createFinalCode(
    JSON.parse(JSON.stringify(ui)),
    framework,
    true
  );
  return (
    <div
      className="  h-[800px]  transition-[2s] overflow-auto   border-2rounded-lg mt-2 bg-white p-2"
      style={{
        width: hasPreview ? "auto" : "0%",
        visibility: hasPreview ? "visible" : "hidden",
        opacity: hasPreview ? 1 : 0,
        backgroundColor: hasPreview ? "white" : "black",
      }}
    >
      <div className="flex justify-between p-2"></div>
      <DeviceFrameset device="iPhone X" color="black" height={700} >
        <div dangerouslySetInnerHTML={{ __html: finalCode }} />
      </DeviceFrameset>
    </div>
  );
};

export default View;
