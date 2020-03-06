import { User } from 'src/app/models/user';

export interface UserState {
    users: User[];
    loaded: boolean;
    loading: boolean;
}
