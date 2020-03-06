
import * as UActions from '../actions/actions';
import { UserState } from '../state/user.state';


export const initialState: UserState = {
    users: [],
    loaded: false,
    loading: false
};

export function usersReducer(state = initialState, action: UActions.UserActionTypes): UserState {
    console.log(action, state);
    switch (action.type) {
        // case UActions.UserActions.Get_Users: {
        //     return {
        //         ...state,
        //         loading: true
        //     };
        // }
        case UActions.UserActions.Get_Users_Success: {
            return {
                ...state,
                users: action.payload,
                loading: false,
                loaded: true
            };
        }
        case UActions.UserActions.Get_Users_Fail: {
            return {
                ...state,
                loading: false,
                loaded: false
            };
        }
        case UActions.UserActions.Add_User_Success: {
            const temp = {...state};
            temp.users.push(...action.payload);
            return {
                users: temp.users,
                loading: false,
                loaded: false
            };
        }
    }
    return state;
}
