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
    <div className="bg-gray-900 rounded-b-lg text-gray-200 p-2 border-t-[2px] border-white">
      <Container title={"COLORS"}>
        <Input
          onChange={handleChange("color")}
          type="color"
          label="text"
          placeholder="14"
          className={"p-0 border-none bg-transparent  w-[100px] h-[50px]"}
        />
        <Input
          onChange={handleChange("backgroundColor")}
          type="color"
          label="background"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
      </Container>
    </div>
  );
};

export default ColorEdit;

interface ColorEditProps {
  handleColorEdit: any;
}
