import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";

const RadiusEdit = ({ handleRadiusEdit }: RadiusEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const { value } = e.target;
    handleRadiusEdit({
      name,
      value:`${value}px`
    });
  };
  return (
    <div className="bg-gray-900 rounded-b-lg text-gray-200 p-2 border-t-[2px] border-white">
      <Container title={"RADIUS"}>
        <Input
          defaultValue={0}
          onChange={handleChange("borderTopLeftRadius")}
          min={0}
          max={1000}
          type="range"
          label="top left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
         <Input
          defaultValue={0}
          onChange={handleChange("borderTopRightRadius")}
          min={0}
          max={1000}
          type="range"
          label="top right"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
         <Input
          defaultValue={0}
          onChange={handleChange("borderBottomLeftRadius")}
          min={0}
          max={1000}
          type="range"
          label="bottom left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
         <Input
          defaultValue={0}
          onChange={handleChange("borderBottomRightRadius")}
          min={0}
          max={1000}
          type="range"
          label="bottom right"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
       
      </Container>
    </div>
  );
};

export default RadiusEdit;

interface RadiusEditProps {
  handleRadiusEdit: any;
}
