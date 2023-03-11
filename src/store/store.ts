import { configureStore } from "@reduxjs/toolkit";
import { currentPageReducer } from "./currentPageSlice";
import { favouritesReducer } from "./favoritesSlice";
import { searchBarReducer } from "./searchBarSlice";

export const store = configureStore({
    reducer: {
        searchBar: searchBarReducer,
        favourites: favouritesReducer,
        currentPage: currentPageReducer,
    },
});

export type TypeRootState = ReturnType<typeof store.getState>;