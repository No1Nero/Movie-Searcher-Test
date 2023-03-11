import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { searchBarActions } from "../searchBarSlice";
import { favouritesActions } from "../favoritesSlice";
import { currentPageActions } from "../currentPageSlice";

const allActions = { ...searchBarActions, ...favouritesActions, ...currentPageActions };

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActions, dispatch);
};