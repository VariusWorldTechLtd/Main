import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserService, User } from '../user.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit, AfterViewInit {

  // Models
  confirmForm: FormGroup = null;

  // Flags
  isSending = false;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private userService: UserService) {

    this.confirmForm = formBuilder.group({
      seedWords: ['', Validators.compose([Validators.minLength(12), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  onConfirm() {
    this.isSending = true;

    const tmpModel: User = new User({
    });

    this.userService.saveUser(tmpModel);
    this.router.navigate(['/selfie']);
  }

}
