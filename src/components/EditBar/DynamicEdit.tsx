import { Container } from "./Container";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { Input } from "./Input";

const DynamicEdit = ({ handleDynamicEdit, attributes }: DynamicEditProps) => {
  const activeElementType: any = useSelector(
    (state: RootState) => state?.app?.activeElementType
  );

  console.log("activeElementType", activeElementType);
  const isTextCreator = ["Text Creator", "TextCreator"].includes(
    activeElementType
  );

  const isImageCreator = ["Image Creator", "ImageCreator"].includes(
    activeElementType
  );

  const isInputCreator = ["Input Creator", "InputCreator"].includes(
    activeElementType
  );

  return (
    <div className="bg-white  text-gray-200 p-2 border-t-[1px] border-gray-200 ">
      <Container title={"ATTRIBUTES"}>
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
        {isImageCreator && (
          <Input
            onChange={handleDynamicEdit("src")}
            label="Src"
            type="text"
            placeholder="Image URL"
            value={attributes?.src}
          />
        )}
        {isInputCreator && (
          <>
            <Input
              onChange={handleDynamicEdit("placeholder")}
              label="Placeholder"
              type="text"
              placeholder="Placeholder"
              value={attributes?.placeholder}
            />
          </>
        )}
      </Container>
    </div>
  );
};

export default DynamicEdit;

interface DynamicEditProps {
  handleDynamicEdit: any;
  attributes: any;
}
