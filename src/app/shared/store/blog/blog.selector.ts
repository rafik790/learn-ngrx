import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BlogModel, Blogs } from "./blog.model";

const getblogstate = createFeatureSelector<Blogs>('blog');
export const getBlogs = createSelector(getblogstate, (state) => {
    return state;
});

export const getBlogById = (_blogid: number) => createSelector(getblogstate, (state) => {
    return (state.bloglist.find(_blog=>_blog.id==_blogid) as BlogModel);
});