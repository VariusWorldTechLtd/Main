import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  userDetails = {
    firstName: '',
    secondName: '',
    emailAddress: ''
  };

  ngOnInit() {
  }

  constructor(private storage: Storage) { }

  saveUser() {
    const userToSave = this.userDetails;
    this.storage.set('Userdetails', userToSave).then(() => {
        this.storage.get('Userdetails').then(() => {
            console.log(userToSave);
            console.log('Your Name is ' + userToSave.firstName + userToSave.secondName +
              ' and email address is ' + userToSave.emailAddress);
        });
    });
  }
}
