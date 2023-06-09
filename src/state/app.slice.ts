import { createSlice } from '@reduxjs/toolkit';
import { ItemType, UIType } from '../types/ui.type';
import React from 'react';


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
    framework: "react",
    libraries: [],
    uiLibrary: "none",
    screens: {
        untitled: initialUI
    },
    activeScreen: 'untitled',
    name: 'untitled',
    activeElementType: null,
    hasPreview: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setActiveElement: (state, action) => {
            const payload = action.payload;
            if (payload?.name) {
                state.activeElementType = payload.name;
            }
            if (payload?.id) {
                state.activeElement = payload.id
                state.hasFocus = !!action.payload;
            }
            if (!payload) {
                state.activeElement = null;
                state.hasFocus = false;
                state.activeElementType = null;
            }
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
        saveUi: (state) => {
            state.screens = {
                ...state.screens,
                [state.activeScreen || 'untitled']: state.ui
            }
        },
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateScreenName: (state, action) => {
            const { oldName, newName } = action.payload;
            const screen = state.screens && state.screens[oldName];
            if (screen) {
                delete state.screens[oldName];
                state.screens[newName] = screen;
                state.activeScreen = newName;
            }

        },
        deleteScreen: (state, action) => {
            const name = action.payload;
            const screen = state.screens && state.screens[name];
            const isActiveScreen = state.activeScreen === name;
            if (screen) {
                delete state.screens[name];
                state.activeScreen = 'untitled'
                if (isActiveScreen) {
                    state.ui = initialUI;
                }
            }
        },
        togglePreview: (state) => {
            state.hasPreview = !state.hasPreview;
        }
    },
});


export const {
    setActiveElement,
    setUI,
    setActiveUI,
    setFramework,
    setPlatform,
    setUILibrary,
    setHasFrameWork,
    setLibraries,
    setScreens,
    addScreen,
    saveUi,
    selectScreen,
    updateName,
    updateScreenName,
    deleteScreen,
    togglePreview
} = appSlice.actions;

export default appSlice.reducer;


export interface AppState {
    activeElement: string | null;
    activeElementType: string | null;
    hasFocus: boolean;
    ui: UIType;
    activeUI: ItemType | null;
    platform: PlatformType;
    hasFrameWork: boolean;
    framework: FrameworkType;
    libraries: string[];
    uiLibrary: string;
    screens: {
        [key: string]: UIType;
    },
    activeScreen: string | null;
    name: string;
    hasPreview: boolean;
}

export type PlatformType = "web" | "android" | "desktop" | "ios" | "macos" | "win"
export type FrameworkType = "react" | "react-native" | "flutter" | "vue" | "angular" | "svelte" | "none"
export type UILibrary = "material-ui" | "react-native-paper" | 'native-base' | 'react-native-elements' | 'react-native-ui-kitten' | 'chakra-ui' | 'tailwind-css' | 'bootstrap' | 'semantic-ui' | 'ant-design' | 'none'
