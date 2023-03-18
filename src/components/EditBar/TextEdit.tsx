import React, { ChangeEvent, ChangeEventHandler, useId } from "react";
import { Container } from "./Container";
import { Input } from "./Input";

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
export const Select = ({
  label,
  placeholder,
  className,
  data,
  ...rest
}: SelectProps) => {
  const id = useId();
  return (
    <div className="flex flex-col pb-2">
      <label
        className="bg-gray-700 select-none rounded-md mb-1 px-2 font-bold text-center"
        htmlFor={id}
      >
        {label?.toUpperCase()}
      </label>
      <select
        className={`p-2 w-full flex-grow-[1] text-gray-900 rounded-md ${className}`}
        id={id}
        placeholder={placeholder}
        {...rest}
      >
        {data.map((val: any) => {
          return <option value={val?.value}>{val?.label}</option>;
        })}
      </select>
    </div>
  );
};
interface SelectProps {
  data: { label: string; value: string }[];
  label: string;
  placeholder: string;
  [key: string]: any;
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
  }
];
