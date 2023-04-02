import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";
import { borderStyles } from "../../constants/borderStyles";

const BorderEdit = ({ handleBorderEdit, styles }: BorderEditProps) => {
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

      handleBorderEdit({
        name: names,
        value,
        batch: true,
      });
    };
  return (
    <div className="bg-white  text-gray-200 p-2 border-t-[1px] border-gray-200 ">
      <Container
        title={"BORDER WIDTH"}
        all={true}
        handleAllChange={handleAllChange([
          "borderRightWidth",
          "borderTopWidth",
          "borderBottomWidth",
          "borderLeftWidth",
        ])}
      >
        <Input
          onKeyPress={handleChange("borderTopWidth")}
          type="text"
          label="top"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderTopWidth}
        />
        <Input
          onKeyPress={handleChange("borderBottomWidth")}
          type="text"
          label="bottom"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderBottomWidth}
        />
        <Input
          onKeyPress={handleChange("borderLeftWidth")}
          type="text"
          label="left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderLeftWidth}
        />
        <Input
          onKeyPress={handleChange("borderRightWidth")}
          type="text"
          label="right"
          placeholder="14"
          className={"p-0  w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderRightWidth}
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
          label="top"
          placeholder="14"
          className={"bg-gray-600 border-none"}
          defaultValue={styles?.borderTopColor}
        />
        <Input
          onChange={handleValueChange("borderBottomColor")}
          type="color"
          label="bottom"
          placeholder="14"
          className={"bg-gray-600 border-none"}
          defaultValue={styles?.borderBottomColor}
        />
        <Input
          onChange={handleValueChange("borderLeftColor")}
          type="color"
          label="left"
          placeholder="14"
          className={"bg-gray-600 border-none"}
          defaultValue={styles?.borderLeftColor}
        />
        <Input
          onChange={handleValueChange("borderRightColor")}
          type="color"
          label="right"
          placeholder="14"
          className={"bg-gray-600 border-none"}
          defaultValue={styles?.borderRightColor}
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
          defaultValue={styles?.borderTopStyle}
        />
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderBottomStyle")}
          label={"bottom"}
          placeholder={"solid"}
          defaultValue={styles?.borderBottomStyle}
        />
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderLeftStyle")}
          label={"left"}
          placeholder={"solid"}
          defaultValue={styles?.borderLeftStyle}
        />
        <Select
          data={borderStyles}
          onChange={handleValueChange("borderRightStyle")}
          label={"right"}
          placeholder={"solid"}
          defaultValue={styles?.borderRightStyle}
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
          defaultValue={styles?.borderTopLeftRadius}
        />
        <Input
          onKeyPress={handleChange("borderTopRightRadius")}
          type="text"
          label="top right"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderTopRightRadius}
        />
        <Input
          onKeyPress={handleChange("borderBottomLeftRadius")}
          type="text"
          label="bottom left"
          placeholder="14"
          className={"p-0 w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderBottomLeftRadius}
        />
        <Input
          onKeyPress={handleChange("borderBottomRightRadius")}
          type="text"
          label="bottom right"
          placeholder="14"
          className={"p-0  w-auto border-none bg-transparent h-[50px]"}
          defaultValue={styles?.borderBottomRightRadius}
        />
      </Container>
    </div>
  );
};

export default BorderEdit;

interface BorderEditProps {
  handleBorderEdit: any;
  styles: any;
}
