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

  const handleValueChange = (name: string) => (e: any) => {
    const { value } = e.target;
    handleBorderEdit({
      name,
      value,
    });
  };

  const handleAllChange =
    (names: string[], keyMode = true) =>
    (e: any) => {
      if (keyMode) {
        const key = e.key;
        if (key !== "Enter") return;
      }
      const { value } = e.target;
      names.forEach((name) => {
        handleBorderEdit({
          name,
          value,
        });
      });
    };
  return (
    <div className="bg-gray-50  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container
        title={"BORDER WIDTH"}
        all={true}
        handleAllChange={handleAllChange([
          "borderTopWidth",
          "borderBottomWidth",
          "borderLeftWidth",
          "borderRightWidth",
        ])}
      >
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
      <Container
        title={"BORDER COLOR"}
        all={true}
        handleAllChange={handleAllChange(
          [
            "borderTopColor",
            "borderBottomColor",
            "borderLeftColor",
            "borderRightColor",
          ],
          false
        )}
        elType="color"
      >
        <Input
          onChange={handleValueChange("borderTopColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleValueChange("borderBottomColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleValueChange("borderLeftColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
        <Input
          onChange={handleValueChange("borderRightColor")}
          type="color"
          label="text"
          placeholder="14"
          className={"bg-gray-600 border-none"}
        />
      </Container>
      <Container
        title={"BORDER STYLE"}
        all={true}
        data={borderStyles}
        elType="select"
        handleAllChange={handleAllChange(
          [
            "borderTopStyle",
            "borderBottomStyle",
            "borderLeftStyle",
            "borderRightStyle",
          ],
          false
        )}
      >
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderTopStyle")}
          label={"top"}
          placeholder={"solid"}
        />
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderBottomStyle")}
          label={"bottom"}
          placeholder={"solid"}
        />
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderLeftStyle")}
          label={"left"}
          placeholder={"solid"}
        />
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderRightStyle")}
          label={"right"}
          placeholder={"solid"}
        />
      </Container>
      <Container
        title={"BORDER RADIUS"}
        all={true}
        handleAllChange={handleAllChange([
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ])}
      >
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
