import React, { useId } from "react";

const LayoutEdit = () => {
  return (
    <div className="bg-gray-900 rounded-lg text-gray-200 p-2 border-t-[2px] border-white">
      <Container title={"MARGIN"}>
        <Input type="number" label="top" placeholder="14" />
        <Input type="number" label="bottom" placeholder="14" />
        <Input type="number" label="left" placeholder="14" />
        <Input type="number" label="right" placeholder="14" />
      </Container>
      <Container title={"PADDING"}>
        <Input type="number" label="top" placeholder="14" />
        <Input type="number" label="bottom" placeholder="14" />
        <Input type="number" label="left" placeholder="14" />
        <Input type="number" label="right" placeholder="14" />
      </Container>
      <Container title={"DIMENSIONS"}>
        <Input type="number" label="width" placeholder="14" />
        <Input type="number" label="height" placeholder="14" />
      </Container>
    </div>
  );
};

export default LayoutEdit;

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  const id = useId();
  return (
    <div className="flex flex-col w-[100px]">
      <label className="bg-gray-700 select-none rounded-md mb-1 font-bold text-center" htmlFor={id}>
        {label?.toUpperCase()}
      </label>
      <input
        className="p-2 text-gray-900 rounded-md"
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

interface InputProps {
  label: string;
  placeholder: string;
  [key: string]: any;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className="bg-gray-800 py-4 rounded-md">
      <h1 className="text-xl my-2 text-center bg-gray-800">{title}</h1>
      <div className="flex flex-wrap justify-around gap-4">{children}</div>
    </div>
  );
};

interface ContainerProps {
  children: React.ReactNode;
  title: string;
}
