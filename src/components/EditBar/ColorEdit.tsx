import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";

const ColorEdit = ({ handleColorEdit }: ColorEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const { value } = e.target;
    handleColorEdit({
      name,
      value,
    });
  };
  return (
    <div className="bg-gray-50  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container title={"COLORS"}>
        <Input
          onChange={handleChange("color")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleChange("backgroundColor")}
          type="color"
          label="background"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
      </Container>
    </div>
  );
};

export default ColorEdit;

interface ColorEditProps {
  handleColorEdit: any;
}
