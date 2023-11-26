import { blogReducer } from "../blog/blog.reducers";
import { counterReducer } from "../counter.reducers";
import { gloablReducer } from "./global.reducers";

export const AppState = {
    counter: counterReducer,
    blog: blogReducer,
    loader: gloablReducer
}