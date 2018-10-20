/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DafComponent } from './daf.component';

describe('DafComponent', () => {
  let component: DafComponent;
  let fixture: ComponentFixture<DafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
