import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/store/state/user.state';
import { GetUsers, AddUser } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: Observable<User[]>;
  json = '';

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
    this.store.select('users').subscribe((state: any) => {
      this.users = state.users;
      console.log(state);
    });

    this.store.dispatch(new GetUsers());

  }

  addUser() {
    console.log(this.json);
    console.log(JSON.parse(this.json));
    this.store.dispatch(new AddUser(JSON.parse(this.json)));
  }

}
