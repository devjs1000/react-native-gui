import React from "react";
import { Container } from "./Container";
import { Select } from "./Select";
import { FaPlus, FaTrash } from "react-icons/fa";
import _ from "lodash";

const AddChildren = ({ handleAddChildren, childrens }: AddChildrenProps) => {
  const addChild = () => {
    const prevChildrens = childrens || [];
    const newChildrens = [
      ...prevChildrens,
      {
        type: "null",
        id: `${prevChildrens.length}`,
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
    const prevChildrens = _.cloneDeep(childrens) || [];
    const newChildrens = prevChildrens.map((child: any) => {
      if (child.id == `${i}`) {
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

  const handleRemoveChild = (i: number) => () => {
    const prevChildrens = _.cloneDeep(childrens) || [];
    const newChildrens = prevChildrens.filter((child: any) => {
      return child.id != `${i}`;
    });

    handleAddChildren({
      name: "children",
      value: newChildrens,
      editType: "attributes",
    });
  };

  return (
    <div className="bg-white  text-gray-200 p-2 border-t-[1px] border-gray-200 ">
      <Container title={"CHILDREN"}>
        {childrens?.map((child: React.ReactElement, i: number) => {
          return (
            <div key={i} className="flex items-center justify-between">
              <Select
                key={i}
                value={child.type}
                data={elementsList}
                label={"Elements"}
                placeholder={"Elements"}
                onChange={handleValueChange(i)}
              />
              <FaTrash
                onClick={handleRemoveChild(i)}
                className="cursor-pointer text-red-500"
              />
            </div>
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
    value: "LayoutCreator",
  },
];
