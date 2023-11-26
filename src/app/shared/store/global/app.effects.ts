import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { EmptyAction, SHOW_ALERT } from "./gloabl.actions";

@Injectable()
export class AppEffects {
    constructor(private action$: Actions, private _snackbar: MatSnackBar) {

    }

    _ShowAlert = createEffect(() =>
        this.action$.pipe(
            ofType(SHOW_ALERT),
            exhaustMap((action: any) => {
                return this.ShowsnackbarAlert(action.message, action.actionresult)
                    .afterDismissed()
                    .pipe(
                        map(() => {
                            return EmptyAction();
                        })
                    )
            })
        )
    );

    ShowsnackbarAlert(message: string, actionresult: string = 'fail') {
        let _class = actionresult == 'pass' ? 'green-snackbar' : 'red-snackbar'
        return this._snackbar.open(message, 'OK', {
            verticalPosition: 'top',
            horizontalPosition: 'center',
            panelClass: [_class],
            duration: 5000
        })
    }
}