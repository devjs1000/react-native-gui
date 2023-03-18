import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";

const TextEdit = ({ handleTextEdit }: TextEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const key = e.key;
    if (key !== "Enter") return;
    const { value } = e.target;
    handleTextEdit({
      name,
      value,
    });
  };
  const handleSelect = (name: string) => (e: any) => {
    const { value } = e.target;
    handleTextEdit({
      name,
      value,
    });
  };
  return (
    <div className="bg-gray-50  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container title={"TEXT"}>
        <Input
          onKeyPress={handleChange("fontSize")}
          type="text"
          label="font size"
          className={""}
          placeholder="14"
        />
        <Input
          onKeyPress={handleChange("fontWeight")}
          type="text"
          label="font weight"
          className={"w-[130px] flex-grow-[1]"}
          placeholder="14"
        />
        <Select
          data={fontFamilies}
          onKeyPress={handleSelect("fontFamily")}
          type="text"
          label="font family"
          className={"w-full"}
          placeholder="14"
        />
      </Container>
    </div>
  );
};

export default TextEdit;

interface TextEditProps {
  handleTextEdit: any;
}

const fontFamilies = [
  {
    label: "monospace",
    value: "monospace",
  },
  {
    label: "arial",
    value: "arial",
  },
  {
    label: "verdana",
    value: "verdana",
  },
];
