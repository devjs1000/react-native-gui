import { createSlice } from '@reduxjs/toolkit';
import { ItemType, UIType } from '../types/ui.type';
import React
    from 'react';
export interface AppState {
    activeElement: React.RefObject<any> | null;
    hasFocus: boolean;
    ui: UIType;
    activeUI: ItemType | null;
}

const initialState: AppState = {
    activeElement: null,
    hasFocus: false,
    ui: [
        {
            type: "LayoutCreator",
            id: "0",
            attributes: {
                style: {},
            },
        },
    ],
    activeUI: null
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveElement: (state, action) => {
            state.activeElement = action.payload;
            state.hasFocus = !!action.payload;
        },
        setUI: (state, action) => {
            state.ui = action.payload;
        },
        setActiveUI: (state, action) => {
            state.activeUI = action.payload;
        }
    },
});


export const { setActiveElement, setUI,setActiveUI } = appSlice.actions;

export default appSlice.reducer;
