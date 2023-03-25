export interface AttributesType {
    style?: any;
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

