export interface AttributesType {
    style?: object;
    children?: any;
    [key: string]: any;
}

export interface ItemType {
    attributes: AttributesType;
    children?: ItemType[];
    type: string;
    id: string;
}

export type UIType = Array<ItemType>;

