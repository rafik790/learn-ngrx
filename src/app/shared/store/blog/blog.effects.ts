
import { MasterService } from "../../master.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ADD_BLOG, LOAD_BLOGS, LOAD_BLOG_FAIL, LOAD_BLOG_SUCCESS, UPDATE_BLOG, UPDATE_BLOG_SUCCESS, addblogsuccess, updateblogsuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map, switchMap, of } from "rxjs";
import { EmptyAction, ShowAlert } from "../global/gloabl.actions";
import { BlogModel } from "./blog.model";

@Injectable({ providedIn: 'root' })
export class BlogEffects {
    constructor(private action$: Actions, private service: MasterService) {

    }

    _loadblogs = createEffect(() => this.action$
        .pipe(
            ofType(LOAD_BLOGS),
            exhaustMap((action) => this.service.getAllBlogs()
                .pipe(
                    map(data => {
                        return {
                            type: LOAD_BLOG_SUCCESS,
                            bloglist: data
                        }
                    }),
                    catchError((_error) => of(
                        ({ type: LOAD_BLOG_FAIL, errorText: _error.message })
                    ))
                )
            )
        )
    );

    _addblog = createEffect(() => this.action$
        .pipe(
            ofType(ADD_BLOG),
            switchMap((action: any) =>
                this.service.createBlog(action.blogdata)
                    .pipe(
                        switchMap(data => of(
                            addblogsuccess({ blogdata: data as BlogModel }),
                            ShowAlert({ message: 'Created successfully.', actionresult: 'pass' })
                        )),
                        catchError((_error) => of(
                            ShowAlert({ message: 'Failed to create blog.', actionresult: 'fail' })
                        ))
                    )
            )
        )
    );

    _updateBlog = createEffect(() =>
        this.action$.pipe(
            ofType(UPDATE_BLOG),
            switchMap((action: any) =>
                this.service.updateBlog(action.blogdata).pipe(
                    switchMap(res => of(
                        updateblogsuccess({ blogdata: action.blogdata }),
                        ShowAlert({ message: 'Updated successfully.', actionresult: 'pass' })
                    )),
                    catchError((_error) => of(
                        ShowAlert({ message: 'Update Failed - Due to' + _error.message, actionresult: 'fail' })
                    ))
                )
            )
        )
    );

}