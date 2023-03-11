import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: number } = {
    value: 1,
};

export const currentPageSlice = createSlice({
    name: 'currentPageSlice',
    initialState,
    reducers: {
        resetCurrentPage: (state) => {
            state.value = 1;
        },
        incrementCurrentPage: (state) => {
            state.value += 1;
        },
        decrementCurrentPage: (state) => {
            state.value -= 1;
        },
    }
});

export const currentPageReducer = currentPageSlice.reducer;
export const currentPageActions = currentPageSlice.actions;