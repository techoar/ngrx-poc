import { Injectable } from '@angular/core';

import { switchMap, map } from 'rxjs/operators';
import { Effect, Actions, ofType } from '@ngrx/effects';

import * as UActions from '../actions/actions';
import { AppService } from 'src/app/app.service';
import { of } from 'rxjs';



@Injectable()
export class UserEffects {
    @Effect()
    getUsers$ = this.actions$.pipe(ofType<UActions.GetUsers>(UActions.UserActions.Get_Users),
        switchMap(() => this.appService$.getUsers()),
        switchMap((data: any) => {
            console.log('data', data);
            return of(new UActions.GetUsersSuccess(data.users));
        }));

    @Effect()
    addUsers$ = this.actions$.pipe(ofType<UActions.AddUser>(UActions.UserActions.Add_User),
        switchMap((action) => this.appService$.addUser(action.payload).pipe(switchMap((data: any) => {
            console.log('sdefef->', action.payload);
            return of(new UActions.AddUserSuccess(data && data.status === 200 ? [action.payload] : []));
        }))));

    constructor(private appService$: AppService, private actions$: Actions) { }
}
