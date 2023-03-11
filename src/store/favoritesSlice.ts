import { IMovie } from "@/models/movies";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState: IMovie[] = [];

export const favouritesSlice = createSlice({
    name: 'favouritesSlice',
    initialState,
    reducers: {
        addToFavourites: (state, action: PayloadAction<IMovie>) => {
            state.push(action.payload);
        },
        removeFromFavourites: (state, action: PayloadAction<string>) => {
            return state.filter(movie => movie.imdbID !== action.payload);
        },
    },
});

export const favouritesReducer = favouritesSlice.reducer;
export const favouritesActions = favouritesSlice.actions;