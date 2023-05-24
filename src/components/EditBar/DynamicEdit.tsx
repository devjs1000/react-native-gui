import { Container } from "./Container";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

const DynamicEdit = ({ handleDynamicEdit, attributes }: DynamicEditProps) => {
  const activeElementType = useSelector(
    (state: RootState) => state?.app?.activeElementType
  );

  console.log("activeElementType", activeElementType);
  const isTextCreator = ["Text Creator", "TextCreator"].includes(
    activeElementType as string
  );
  return (
    <div className="bg-white  text-gray-200 p-2 border-t-[1px] border-gray-200 ">
      <Container title={"INNER"}>
        {isTextCreator && (
          <div className="text-gray-600">
            <label htmlFor={"children"} className="text-xs">
              Text
            </label>
            <textarea
              id={"children"}
              onChange={handleDynamicEdit("children")}
              className="bg-white border-2 p-2 border-gray-500 w-full rounded-md border-dashed"
              value={attributes?.children}
            ></textarea>
          </div>
        )}
        {/* <Input
          onChange={handleChange("backgroundColor")}
          type="color"
          label="background"
          placeholder="14"
          className={"bg-gray-600 border-none"}
          value={styles?.backgroundColor}
        /> */}
      </Container>
    </div>
  );
};

export default DynamicEdit;

interface DynamicEditProps {
  handleDynamicEdit: any;
  attributes: any;
}
