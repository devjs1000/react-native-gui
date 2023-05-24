import React from "react";
import { FaSave } from "react-icons/fa";
import { useStore } from "../../state/useStore";
import { AppState, saveUi } from "../../state/app.slice";
import { useDispatch } from "react-redux";

const SaveChanges = () => {
  const { ui, screens, activeScreen } = useStore<AppState>("app");
  const dispatch = useDispatch();
  const uiInScreen: any = screens[activeScreen as string];
  const hasChanges = JSON.stringify(ui) === JSON.stringify(uiInScreen);
  const saveChanges = () => {
    dispatch(saveUi());
  };
  return (
    <button
      disabled={hasChanges}
      onClick={saveChanges}
      className="bg-blue-500 font-md  text-white  py-2 px-4 rounded-xl disabled:bg-gray-400  disabled:text-gray-100 flex items-center gap-2 "
    >
      <FaSave />
      Save changes
    </button>
  );
};

export default SaveChanges;
