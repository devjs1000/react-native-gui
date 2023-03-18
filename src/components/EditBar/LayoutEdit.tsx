import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";

const LayoutEdit = ({ handleLayoutEdit }: LayoutEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const key = e.key;
    if (key !== "Enter") return;
    const { value } = e.target;
    handleLayoutEdit({
      name,
      value,
    });
  };
  const handleAllChange = (names: string[]) => (e: any) => {
    const key = e.key;
    console.log("handle all change", key);
    if (key !== "Enter") return;
    const { value } = e.target;
    names.forEach((name) => {
      handleLayoutEdit({
        name,
        value,
      });
    });
  };
  return (
    <div className="bg-gray-50  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container
        title={"MARGIN"}
        all={true}
        handleAllChange={handleAllChange([
          "marginTop",
          "marginBottom",
          "marginLeft",
          "marginRight",
        ])}
      >
        <Input
          onKeyPress={handleChange("marginTop")}
          type="text"
          label="top"
          placeholder="0"
        />
        <Input
          onKeyPress={handleChange("marginBottom")}
          type="text"
          label="bottom"
          placeholder="0"
        />
        <Input
          onKeyPress={handleChange("marginLeft")}
          type="text"
          label="left"
          placeholder="0"
        />
        <Input
          onKeyPress={handleChange("marginRight")}
          type="text"
          label="right"
          placeholder="0"
        />
      </Container>
      <Container
        title={"PADDING"}
        all={true}
        handleAllChange={handleAllChange([
          "paddingTop",
          "paddingBottom",
          "paddingLeft",
          "paddingRight",
        ])}
      >
        <Input
          onKeyPress={handleChange("paddingTop")}
          type="text"
          label="top"
          placeholder="0"
        />
        <Input
          onKeyPress={handleChange("paddingBottom")}
          type="text"
          label="bottom"
          placeholder="0"
        />
        <Input
          onKeyPress={handleChange("paddingLeft")}
          type="text"
          label="left"
          placeholder="0"
        />
        <Input
          onKeyPress={handleChange("paddingRight")}
          type="text"
          label="right"
          placeholder="0"
        />
      </Container>
      <Container
        title={"DIMENSIONS"}
        all={true}
        handleAllChange={handleAllChange(["width", "height"])}
      >
        <Input
          onKeyPress={handleChange("width")}
          type="text"
          label="width"
          placeholder="100%"
        />
        <Input
          onKeyPress={handleChange("height")}
          type="text"
          label="height"
          placeholder="200px"
        />
      </Container>
    </div>
  );
};

export default LayoutEdit;

interface LayoutEditProps {
  handleLayoutEdit: any;
}
