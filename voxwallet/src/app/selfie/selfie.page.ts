import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService, User } from '../user.service';

@Component({
  selector: 'app-selfie',
  templateUrl: './selfie.page.html',
  styleUrls: ['./selfie.page.scss'],
})
export class SelfiePage implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) { 

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  onSelfie() {
    
  }

}
