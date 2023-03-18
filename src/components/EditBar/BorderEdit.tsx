import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";

const BorderEdit = ({ handleBorderEdit }: BorderEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const key = e.key;
    if (key !== "Enter") return;
    const { value } = e.target;
    handleBorderEdit({
      name,
      value: `${value}`,
    });
  };

  const handleColorChange = (name: string) => (e: any) => {
    const { value } = e.target;
    handleBorderEdit({
      name,
      value,
    });
  };
  return (
    <div className="bg-gray-50  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container title={"BORDER WIDTH"}>
        <Input
          onKeyPress={handleChange("borderTopWidth")}
          type="text"
          label="top"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
        <Input
          onKeyPress={handleChange("borderBottomWidth")}
          type="text"
          label="bottom"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
        <Input
          onKeyPress={handleChange("borderLeftWidth")}
          type="text"
          label="left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
        />
        <Input
          onKeyPress={handleChange("borderRightWidth")}
          type="text"
          label="right"
          placeholder="14"
          className={"p-0  w-auto border-none bg-transparent h-[50px]"}
        />
      </Container>
      <Container title={"BORDER COLOR"}>
        <Input
          onChange={handleColorChange("borderTopColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleColorChange("borderBottomColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleColorChange("borderLeftColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleColorChange("borderRightColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
      </Container>
      <Container title={"BORDER STYLE"}>
        <Select
          data={borderStyles}
          onChange={handleColorChange("borderTopStyle")}
          label={"top"}
          placeholder={"solid"}
        />
        <Select
          data={borderStyles}
          onChange={handleColorChange("borderBottomStyle")}
          label={"bottom"}
          placeholder={"solid"}
        />
        <Select
          data={borderStyles}
          onChange={handleColorChange("borderLeftStyle")}
          label={"left"}
          placeholder={"solid"}
        />
        <Select
          data={borderStyles}
          onChange={handleColorChange("borderRightStyle")}
          label={"right"}
          placeholder={"solid"}
        />
      </Container>
      <Container title={"BORDER RADIUS"}>
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

export default BorderEdit;

interface BorderEditProps {
  handleBorderEdit: any;
}

const borderStyles = [
  {
    value: "solid",
    label: "solid",
  },
  {
    value: "dashed",
    label: "dashed",
  },
  {
    value: "dotted",
    label: "dotted",
  },
  {
    value: "double",
    label: "double",
  },
  {
    value: "groove",
    label: "groove",
  },
  {
    value: "ridge",
    label: "ridge",
  },
  {
    value: "inset",
    label: "inset",
  },
  {
    value: "outset",
    label: "outset",
  },
  {
    value: "none",
    label: "none",
  },
  {
    value: "hidden",
    label: "hidden",
  },
];
