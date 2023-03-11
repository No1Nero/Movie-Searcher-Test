import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState: string = '';

export const searchBarSlice = createSlice({
    name: 'searchBarSlice',
    initialState,
    reducers: {
        setSearchBar: (_, action: PayloadAction<string>) => {
            return action.payload;
        },
    },
});

export const searchBarReducer = searchBarSlice.reducer;
export const searchBarActions = searchBarSlice.actions;