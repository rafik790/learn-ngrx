import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GlobalModel } from "./gloabl.model";

const getLoaderState = createFeatureSelector<GlobalModel>('loader');
export const getProgessLoader = createSelector(getLoaderState, (state) => {
    return state.isLoader;
});