import React, { ChangeEvent, ChangeEventHandler } from "react";
import { Container } from "./Container";
import { Input } from "./Input";
import { Select } from "./Select";
import positions from "../../constants/positions";
import display from "../../constants/display";
import {
  alignContent,
  alignItems,
  alignSelf,
  flexDirections,
  flexWrap,
  justifyContent,
} from "../../constants/flex";

import {
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnEnd,
  gridColumnStart,
  gridRow,
  gridRowEnd,
  gridRowStart,
  gridTemplateColumns,
  gridTemplateRows,
  placeContent,
  placeItems,
  placeSelf,
} from "../../constants/grid";
const LayoutEdit = ({ handleLayoutEdit, styles }: LayoutEditProps) => {
  const handleChange = (name: string) => (e: any) => {
    const key = e.key;
    if (key !== "Enter") return;
    const { value } = e.target;
    handleLayoutEdit({
      name,
      value,
    });
  };
  const handleAllChange = (names: string[]) => (e: any) => {
    const key = e.key;
    if (key !== "Enter") return;
    const { value } = e.target;

    handleLayoutEdit({
      name: names,
      value,
      batch: true,
    });
  };

  const handleSelect = (name: string) => (e: any) => {
    const { value } = e.target;
    handleLayoutEdit({
      name,
      value,
    });
  };

  return (
    <div className="bg-white  text-gray-200 p-2 ">
      <Container
        title={"MARGIN"}
        all={true}
        handleAllChange={handleAllChange([
          "marginTop",
          "marginBottom",
          "marginLeft",
          "marginRight",
        ])}
      >
        <Input
          onKeyPress={handleChange("marginTop")}
          type="text"
          label="top"
          placeholder="0"
          defaultValue={styles?.marginTop}
        />
        <Input
          onKeyPress={handleChange("marginBottom")}
          type="text"
          label="bottom"
          placeholder="0"
          defaultValue={styles?.marginBottom}
        />
        <Input
          onKeyPress={handleChange("marginLeft")}
          type="text"
          label="left"
          placeholder="0"
          defaultValue={styles?.marginLeft}
        />
        <Input
          onKeyPress={handleChange("marginRight")}
          type="text"
          label="right"
          placeholder="0"
          defaultValue={styles?.marginRight}
        />
      </Container>
      <Container
        title={"PADDING"}
        all={true}
        handleAllChange={handleAllChange([
          "paddingTop",
          "paddingBottom",
          "paddingLeft",
          "paddingRight",
        ])}
      >
        <Input
          onKeyPress={handleChange("paddingTop")}
          type="text"
          label="top"
          placeholder="0"
          defaultValue={styles?.paddingTop}
        />
        <Input
          onKeyPress={handleChange("paddingBottom")}
          type="text"
          label="bottom"
          placeholder="0"
          defaultValue={styles?.paddingBottom}
        />
        <Input
          onKeyPress={handleChange("paddingLeft")}
          type="text"
          label="left"
          placeholder="0"
          defaultValue={styles?.paddingLeft}
        />
        <Input
          onKeyPress={handleChange("paddingRight")}
          type="text"
          label="right"
          placeholder="0"
          defaultValue={styles?.paddingRight}
        />
      </Container>
      <Container
        title={"DIMENSIONS"}
        all={true}
        handleAllChange={handleAllChange(["width", "height"])}
      >
        <Input
          onKeyPress={handleChange("width")}
          type="text"
          label="width"
          placeholder="100%"
          defaultValue={styles?.width}
        />
        <Input
          onKeyPress={handleChange("height")}
          type="text"
          label="height"
          placeholder="200px"
          defaultValue={styles?.height}
        />
      </Container>
      <Container
        title={"POSITION"}
        all={true}
        handleAllChange={handleAllChange(["top", "left", "right", "bottom"])}
      >
        <Select
          data={positions}
          label="position"
          placeholder="static"
          onChange={handleSelect("position")}
          type="text"
          className={"w-full"}
          value={styles?.position}
        />

        <Input
          onKeyPress={handleChange("top")}
          type="text"
          label="top"
          placeholder="0"
          defaultValue={styles?.top}
        />
        <Input
          onKeyPress={handleChange("bottom")}
          type="text"
          label="bottom"
          placeholder="0"
          defaultValue={styles?.bottom}
        />
        <Input
          onKeyPress={handleChange("left")}
          type="text"
          label="left"
          placeholder="0"
          defaultValue={styles?.left}
        />
        <Input
          onKeyPress={handleChange("right")}
          type="text"
          label="right"
          placeholder="0"
          defaultValue={styles?.right}
        />
      </Container>

      <Select
        data={display}
        label="display"
        placeholder="flex"
        onChange={handleSelect("display")}
        className={"w-full"}
        value={styles?.display}
      />

      {styles && (styles?.display === "flex" || !styles.display) && (
        <Container title={"FLEX"} all={false}>
          <Input
            onKeyPress={handleChange("flex")}
            label="flex"
            placeholder="1"
            defaultValue={styles?.flex}
          />
          <Input
            onKeyPress={handleChange("flexGrow")}
            label="flex-grow"
            placeholder="1"
            defaultValue={styles?.flexGrow}
          />
          <Input
            onKeyPress={handleChange("flexShrink")}
            label="flex-shrink"
            placeholder="1"
            defaultValue={styles?.flexShrink}
          />
          <Input
            onKeyPress={handleChange("flexBasis")}
            label="flex-basis"
            placeholder="1"
            defaultValue={styles?.flexBasis}
          />
          <Select
            data={flexDirections}
            label="flex-direction"
            placeholder="row"
            onChange={handleSelect("flexDirection")}
            className={"w-full"}
            value={styles?.flexDirection}
          />

          <Select
            data={justifyContent}
            label="justify-content"
            placeholder="flex-start"
            onChange={handleSelect("justifyContent")}
            className={"w-full"}
            value={styles?.justifyContent}
          />

          <Select
            data={alignItems}
            label="align-items"
            placeholder="flex-start"
            onChange={handleSelect("alignItems")}
            className={"w-full"}
            value={styles?.alignItems}
          />

          <Select
            data={alignContent}
            label="align-content"
            placeholder="flex-start"
            onChange={handleSelect("alignContent")}
            className={"w-full"}
            value={styles?.alignContent}
          />

          <Select
            data={alignSelf}
            label="align-self"
            placeholder="flex-start"
            onChange={handleSelect("alignSelf")}
            className={"w-full"}
            value={styles?.alignSelf}
          />

          <Select
            data={flexWrap}
            label="flex-wrap"
            placeholder="flex-start"
            onChange={handleSelect("flexWrap")}
            className={"w-full"}
            value={styles?.flexWrap}
          />
        </Container>
      )}

      {styles && styles?.display === "grid" && (
        <Container title={"GRID"} all={false}>
          <Select
            data={gridTemplateColumns}
            label="grid-template-columns"
            placeholder="1fr 1fr"
            onChange={handleSelect("gridTemplateColumns")}
            className={"w-full"}
            value={styles?.gridTemplateColumns}
          />

          <Select
            data={gridTemplateRows}
            label="grid-template-rows"
            placeholder="1fr 1fr"
            onChange={handleSelect("gridTemplateRows")}
            className={"w-full"}
            value={styles?.gridTemplateRows}
          />

          <Select
            data={placeContent}
            label="place-content"
            placeholder="center"
            onChange={handleSelect("placeContent")}
            className={"w-full"}
            value={styles?.placeContent}
          />
        </Container>
      )}
    </div>
  );
};

export default LayoutEdit;

interface LayoutEditProps {
  handleLayoutEdit: any;
  styles: any;
}
