import React, { useRef, useState } from "react";
import { FaFolderOpen, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  addScreen,
  deleteScreen,
  selectScreen,
  updateScreenName,
} from "../../state/app.slice";
import fileIcons from "../../constants/fileIcon";

const ScreenBar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const screenRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const _addScreen = () => {
    const screenName = screenRef.current?.value;
    if (screenName?.length) {
      dispatch(addScreen(screenName));
      screenRef.current && (screenRef.current.value = "");
      onClose();
    }
  };
  const onOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      screenRef.current?.focus();
    }, 0);
  };
  const onClose = () => setIsOpened(false);
  const screens: any = useSelector((state: RootState) => state.app.screens);
  const screenKeys = Object.keys(screens);

  const _selectScreen = (screenName: string) => () =>
    dispatch(selectScreen(screenName));
  const handleScreenName =
    (screenName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newName: string = e.target.value;
      dispatch(
        updateScreenName({
          oldName: screenName,
          newName: newName,
        })
      );
    };

  const handleDeleteScreen = (screenName: string) => () => {
    dispatch(deleteScreen(screenName));
  };
  return (
    <aside className="flex-grow-[1] p-2 h-[100vh] bg-white max-w-[300px]">
      <div className="flex flex-col gap-2  w-full p-3 bg-gray-200 rounded-lg overflow-auto h-[100%]">
        <button
          onClick={onOpen}
          className="bg-blue-500 w-full flex px-4 py-2 justify-around text-white items-center rounded-xl hover:bg-blue-400 "
        >
          <FaPlus /> Add Screen
        </button>
        {screenKeys.map((screen: string, i) => {
          const ext: string = screen.split(".").pop() || "";
          const iconObj = fileIcons[ext] || fileIcons["default"];
          const icon = (
            <iconObj.component
              style={{
                color: iconObj.color,
              }}
            />
          );
          return (
            <div
              key={i}
              className="bg-white w-full flex px-4 py-2 justify-start text-gray-500 items-center rounded-xl hover:text-gray-700 gap-4 "
              onClick={_selectScreen(screen)}
            >
              {icon}
              <span className="w-[150px] inline">{screen}</span>
              {screen !== "untitled" && (
                <button onClick={handleDeleteScreen(screen)}>
                  <FaTrash className="text-red-500" />
                </button>
              )}
            </div>
          );
        })}
      </div>

      <dialog
        className="bg-white h-[200px] text-gray-200 p-6 border-t-[1px] border-gray-200 fixed z-[1000]  rounded-lg  inset-0 "
        open={isOpened}
        onClose={onClose}
      >
        <div className="flex flex-col">
          <label className="text-gray-700" htmlFor="screen-name">
            Screen Name
          </label>
          <input
            ref={screenRef}
            type="text"
            placeholder="ex: Home"
            className="border border-gray-300 p-2 rounded-md text-gray-700"
            id="screen-name"
          />
        </div>
        <div className="flex  w-full justify-end gap-4 absolute bottom-0 right-[20px]  my-4">
          <button
            className="bg-gray-700 text-white px-4 py-2 rounded-md"
            onClick={_addScreen}
          >
            Add
          </button>
          <button
            className="bg-white text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </dialog>
    </aside>
  );
};

export default ScreenBar;
