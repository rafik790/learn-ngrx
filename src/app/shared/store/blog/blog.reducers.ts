import { createReducer, on } from "@ngrx/store"
import { addblogsuccess, loadblogSuccessAction, loadblogfail, loadblogsAction, updateblogsuccess } from "./blog.actions"
import { BlogState } from "./blog.state"

const _blogReducer = createReducer(BlogState,
    on(loadblogsAction, (state) => {
        return {
            ...state,
            errorMessage:''
        }
    }),
    on(loadblogSuccessAction, (state, action) => {
        return {
            ...state,
            bloglist: [...action.bloglist],
            errorMessage:''
        }
    }),
    on(loadblogfail,(state,action)=>{
        console.log(action.errorText)
        return{
            ...state,
            bloglist:[],
            errorMessage:action.errorText
        }
    }),
    /*on(addBlogAction, (state, action) => {
        const _blog = { ...action.blogdata };
        _blog.id = state.bloglist.length + 1;

        return {
            ...state,
            bloglist: [...state.bloglist, _blog]
        }
    }),*/
    on(addblogsuccess, (state, action) => {
        const _blog = { ...action.blogdata };
        return {
            ...state,
            bloglist: [...state.bloglist, _blog]
        }
    }),

    on(updateblogsuccess, (state, action) => {
        const _blog = { ...action.blogdata };
        const updatedblog = state.bloglist.map(blog => {
            return _blog.id === blog.id ? _blog : blog;
        });

        return {
            ...state,
            bloglist: updatedblog
            // IsLoaded:false
        }
    })
)

export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action)
}