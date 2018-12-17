import { Injectable } from '@angular/core';

export class User {
  public title: string;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public email: string;
  public phone: string;
  public account: any;

  constructor(properties: {
    title?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    email?: string;
    phone?: string;
    account?: string;
  }) {
    this.title = properties.title || 'Mr';
    this.firstName = properties.firstName || '';
    this.lastName = properties.lastName || '';
    this.dateOfBirth = properties.dateOfBirth || '';
    this.email = properties.email || '';
    this.phone = properties.phone || '';
    this.account = properties.account || {};
  }
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

  saveUser(userModel: User) {
    console.log('saveUser - userModel', JSON.stringify(userModel));
    if (userModel) {
      const tmpModel = userModel;
      console.log('saveUser - tmpModel before', JSON.stringify(tmpModel));

      const userData = JSON.parse(localStorage.getItem('currentUser'));
      if (userData) {
        for (const key of Object.keys(userData)) {
          if (!tmpModel[key]) {
            tmpModel[key] = userData[key];
          }
        }
      }
      localStorage.setItem('currentUser', JSON.stringify(tmpModel));
      console.log('saveUser - tmpModel after', JSON.stringify(tmpModel));
    }
  }
}
