import { createReducer, on } from "@ngrx/store"
import { GlobalState } from "./global.state"
import { AppLoader } from './gloabl.actions'

const _globalReducer = createReducer(GlobalState,
    on(AppLoader, (state, action) => {
        console.log("Loader Action::", action);
        return {
            ...state,
            isLoader: action.isLoading
        }
    })
)

export function gloablReducer(state: any, action: any) {
    return _globalReducer(state, action)
}