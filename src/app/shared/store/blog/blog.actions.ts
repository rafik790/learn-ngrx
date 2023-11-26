import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";
export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG_FAIL = '[blog page] load blog fail';
export const LOAD_BLOGS = '[blog page] load blog';

export const ADD_BLOG_SUCCESS = '[blog page] add blog success';
export const ADD_BLOG = '[blog page] add blog';
export const UPDATE_BLOG = '[blog page] update blog';
export const UPDATE_BLOG_SUCCESS = '[blog page] update blog success';
export const ADD_EDIT_BLOG_FAIL = '[blog page] add edit blog failed';

export const loadblogsAction = createAction(LOAD_BLOGS);
export const loadblogSuccessAction = createAction(LOAD_BLOG_SUCCESS, props<{ bloglist: BlogModel[] }>());
export const loadblogfail = createAction(LOAD_BLOG_FAIL, props<{ errorText: any }>());

export const addBlogAction = createAction(ADD_BLOG, props<{ blogdata: BlogModel }>());
export const addblogsuccess = createAction(ADD_BLOG_SUCCESS, props<{ blogdata: BlogModel }>());

export const updateBlogAction = createAction(UPDATE_BLOG, props<{ blogdata: BlogModel }>());
export const updateblogsuccess = createAction(UPDATE_BLOG_SUCCESS, props<{ blogdata: BlogModel }>());
export const addEditBlogFailAction = createAction(ADD_EDIT_BLOG_FAIL, props<{ errorText: any }>());