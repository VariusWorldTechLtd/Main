import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit, AfterViewInit {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.activatedRoute.params.subscribe((params) => { });
  }

  onKeyUp(value: string) {
    if (value.length >= 5) {
      this.router.navigate(['/details']);
    }
  }

}
