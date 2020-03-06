import { Action } from '@ngrx/store';

import { User } from 'src/app/models/user';

export enum UserActions {
    Get_Users = '[User] Get Users',
    Get_Users_Success = '[User] Get Users Success',
    Get_Users_Fail = '[User] Get Users Fail',
    Add_User = '[User] Add User',
    Add_User_Success = '[User] Add User Success',
    Add_User_Fail = '[User] Add User Fail'
}

export class GetUsers implements Action {
    readonly type = UserActions.Get_Users;
}

export class GetUsersSuccess implements Action {
    readonly type = UserActions.Get_Users_Success;
    constructor(public payload: User[]) {
        console.log('payload', payload);
    }
}

export class GetUsersFail implements Action {
    readonly type = UserActions.Get_Users_Fail;
    constructor(public payload: any) { }
}

export class AddUser implements Action {
    readonly type = UserActions.Add_User;
    constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
    readonly type = UserActions.Add_User_Success;
    constructor(public payload: any) { }
}

export class AddUserFail implements Action {
    readonly type = UserActions.Add_User_Fail;
    constructor(public payload: any) { }
}

export type UserActionTypes = GetUsers | GetUsersSuccess | GetUsersFail |
    AddUser | AddUserSuccess | AddUserFail;
