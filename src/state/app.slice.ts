import { createSlice } from '@reduxjs/toolkit';
import { ItemType, UIType } from '../types/ui.type';
import React
    from 'react';
export interface AppState {
    activeElement: React.RefObject<any> | null;
    hasFocus: boolean;
    ui: UIType;
    activeUI: ItemType | null;
    platform: PlatformType;
    hasFrameWork: boolean;
    framework: FrameworkType;
    libraries: string[];
    uiLibrary: string;
    screens?: {
        [key: string]: UIType;
    },
    activeScreen: string | null;
    name: string;
}

export type PlatformType = "web" | "android" | "desktop" | "ios" | "macos" | "win"
export type FrameworkType = "react" | "react-native" | "flutter" | "vue" | "angular" | "svelte" | "none"
export type UILibrary = "material-ui" | "react-native-paper" | 'native-base' | 'react-native-elements' | 'react-native-ui-kitten' | 'chakra-ui' | 'tailwind-css' | 'bootstrap' | 'semantic-ui' | 'ant-design' | 'none'

let initialUI: UIType = [
    {
        type: "LayoutCreator",
        id: "0",
        attributes: {
            style: {},
        },
    },
]

const initialState: AppState = {
    activeElement: null,
    hasFocus: false,
    ui: initialUI,
    activeUI: null,
    platform: "android",
    hasFrameWork: false,
    framework: "react-native",
    libraries: [],
    uiLibrary: "none",
    screens: {
        untitled: initialUI
    },
    activeScreen: null,
    name: 'untitled'
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
        },
        setPlatform: (state, action) => {
            state.platform = action.payload;
        },
        setFramework: (state, action) => {
            state.framework = action.payload;
        },
        setUILibrary: (state, action) => {
            state.uiLibrary = action.payload;
        },
        setHasFrameWork: (state, action) => {
            state.hasFrameWork = action.payload;
        },
        setLibraries: (state, action) => {
            state.libraries = action.payload;
        },
        setScreens: (state, action) => {
            state.screens = action.payload;
        },
        addScreen: (state, action) => {
            state.screens = {
                ...state.screens,
                [action.payload]: state.ui
            }
            state.activeScreen = null;
            state.ui = initialUI;
        },
        selectScreen: (state, action) => {
            const screen = state?.screens && state.screens[action.payload];
            const ui = state.ui;
            if (ui) {
                state.screens = {
                    ...state.screens,
                    [state.activeScreen || 'untitled']: ui
                }
            }
            if (screen) {
                state.ui = screen
                state.activeScreen = action.payload;
            }
        },
        saveUi: (state, action) => {
            state.screens = {
                ...state.screens,
                [action.payload]: state.ui
            }
        },
        updateName: (state, action) => {
            state.name = action.payload;
        }
    },
});


export const { setActiveElement, setUI, setActiveUI, setFramework, setPlatform, setUILibrary, setHasFrameWork, setLibraries, setScreens, addScreen, saveUi, selectScreen,updateName } = appSlice.actions;

export default appSlice.reducer;
