import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";

const RadiusEdit = ({ handleRadiusEdit }: RadiusEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const key = e.key;
    if (key !== "Enter") return;
    const { value } = e.target;
    handleRadiusEdit({
      name,
      value: `${value}px`,
    });
  };
  return (
    <div className="bg-gray-50  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container title={"RADIUS"}>
        <Input
          onKeyPress={handleChange("borderTopLeftRadius")}
          type="text"
          label="top left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
        <Input
          onKeyPress={handleChange("borderTopRightRadius")}
          type="text"
          label="top right"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
        <Input
          onKeyPress={handleChange("borderBottomLeftRadius")}
          type="text"
          label="bottom left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
        <Input
          onKeyPress={handleChange("borderBottomRightRadius")}
          type="text"
          label="bottom right"
          placeholder="14"
          className={"p-0  w-auto border-none bg-transparent h-[50px]"}
        />
      </Container>
    </div>
  );
};

export default RadiusEdit;

interface RadiusEditProps {
  handleRadiusEdit: any;
}
