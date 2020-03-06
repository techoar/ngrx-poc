import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as socketIo from 'socket.io-client';
import { Store } from '@ngrx/store';
import { UserState } from './store/state/user.state';
import { GetUsers } from './store/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  socket;

  constructor(public http: HttpClient, private store: Store<UserState>) {
    this.socket = socketIo(`http://192.168.31.78:5901`, { query: { username: 'faceopen', password: 'faceopen' } });
    this.socket.on('update-getcount-event', (data) => {
      this.store.dispatch(new GetUsers());
    });
  }

  getUsers() {
    return this.http.get(`http://localhost:3500/admin/getUsers`);
  }

  addUser(body) {
    return this.http.post(`http://localhost:3500/admin/updateUser`, body);
  }

}
