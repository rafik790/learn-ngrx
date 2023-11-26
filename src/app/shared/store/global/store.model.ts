import { Blogs } from "../blog/blog.model";
import { CounterModel } from "../counter.model";
import { GlobalModel } from "./gloabl.model";

export interface StoreModel {
    counter: CounterModel,
    blog: Blogs,
    loader: GlobalModel
}