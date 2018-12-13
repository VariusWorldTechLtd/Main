import { Injectable } from '@angular/core';

export class User {
  public first_name = '';
  public last_name = '';
  public email = '';
  constructor() {}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User = <User>JSON.parse(localStorage.getItem('currentUser'));

  constructor() { }

  loadUserData() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('loadUserData - currentUser', this.currentUser);
  }

  isAuthenticated() {
    console.log('isAuthenticated', this.currentUser !== null);
    return this.currentUser !== null;
  }
}
