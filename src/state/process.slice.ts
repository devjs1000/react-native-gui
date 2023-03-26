import { createSlice } from '@reduxjs/toolkit';

const initialState: IProcessState = {
    process: {
        loading: false,
        error: null,
    },
};

const processSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        startLoading(state) {
            state.process.loading = true;
        },
        stopLoading(state) {
            state.process.loading = false;
        }
    }
});


export const { startLoading, stopLoading } = processSlice.actions;

export default processSlice.reducer;

export interface IProcessState {
    process: {
        loading: boolean;
        error: string | null;
    };
}
