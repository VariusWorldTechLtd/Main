import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyPage } from './already.page';

describe('AlreadyPage', () => {
  let component: AlreadyPage;
  let fixture: ComponentFixture<AlreadyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
