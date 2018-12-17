import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  ngOnInit() {
  }

  userDetails = {
    firstName:'',
    secondName:'',
    emailAddress:''     
  };


  constructor(private storage: Storage) { }

  saveUser(){  
    var obj = this.userDetails;
    this.storage.set('Userdetails', obj).then(() => {
        this.storage.get('Userdetails').then(() => {
            console.log(obj);
            console.log('Your Name is ' + obj.firstName + obj.secondName + ' and email address is ' + obj.emailAddress);
        });
    });
  }
}