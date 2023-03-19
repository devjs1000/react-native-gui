import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";
import { fontFamilies } from "../../constants/fontFamilies";

const TextEdit = ({ handleTextEdit, styles }: TextEditProps) => {
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
    <div className="bg-white  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container title={"TEXT"}>
        <Input
          onKeyPress={handleChange("fontSize")}
          type="text"
          label="font size"
          className={""}
          placeholder="14"
          value={styles?.fontSize}
        />
        <Input
          onKeyPress={handleChange("fontWeight")}
          type="text"
          label="font weight"
          className={"w-[130px] flex-grow-[1]"}
          placeholder="14"
          value={styles?.fontWeight}
        />
        <Select
          data={fontFamilies}
          onKeyPress={handleSelect("fontFamily")}
          type="text"
          label="font family"
          className={"w-full"}
          placeholder="14"
          value={styles?.fontFamily}
        />
      </Container>
    </div>
  );
};

export default TextEdit;

interface TextEditProps {
  handleTextEdit: any;
  styles: any;
}
