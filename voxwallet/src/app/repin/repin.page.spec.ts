import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepinPage } from './repin.page';

describe('RepinPage', () => {
  let component: RepinPage;
  let fixture: ComponentFixture<RepinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
