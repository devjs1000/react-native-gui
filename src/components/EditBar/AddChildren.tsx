import React from "react";
import { Container } from "./Container";
import { Select } from "./Select";
import { FaPlus } from "react-icons/fa";

const AddChildren = ({ handleAddChildren, childrens }: AddChildrenProps) => {
  const addChild = () => {
    const prevChildrens = childrens || [];
    const newChildrens = [
      ...prevChildrens,
      {
        type: "null",
        id: prevChildrens.length,
        attributes: {
          style: {},
        },
      },
    ];
    handleAddChildren({
      name: "children",
      value: newChildrens,
      editType: "attributes",
    });
  };

  const handleValueChange = (i: number) => (e: any) => {
    const value = e.target.value;
    const prevChildrens = childrens || [];
    const newChildrens = prevChildrens.map((child: any) => {
      if (child.id == i) {
        child.type = value;
      }
      return child;
    });

    handleAddChildren({
      name: "children",
      value: newChildrens,
      editType: "attributes",
    });
  };

  return (
    <div className="bg-white  text-gray-200 p-2 border-t-[2px] border-gray-400 ">
      <Container title={"CHILDREN"}>
        {childrens?.map((child: React.ReactElement, i: number) => {
          return (
            <Select
              key={i}
              value={child.type}
              data={elementsList}
              label={"Elements"}
              placeholder={"Elements"}
              onChange={handleValueChange(i)}
            />
          );
        })}
        <button
          onClick={addChild}
          className="bg-gray-700 w-full flex px-4 py-2 justify-around items-center rounded-md"
        >
          ADD <FaPlus />
        </button>
      </Container>
    </div>
  );
};

export default AddChildren;

interface AddChildrenProps {
  handleAddChildren: any;
  childrens: any;
}

const elementsList = [
  {
    label: "None",
    value: "null",
  },
  {
    label: "Layout",
    value: "Layout Creator",
  },
];
