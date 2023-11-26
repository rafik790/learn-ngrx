import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterModel } from "./counter.model";

const getcounterstate = createFeatureSelector<CounterModel>('counter');
export const getCounter = createSelector(getcounterstate,(state)=>{
    return state.counter;
});

export const getChannelname= createSelector(getcounterstate,(state)=>{
    return state.channelname;
})