/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrhComponent } from './drh.component';

describe('DrhComponent', () => {
  let component: DrhComponent;
  let fixture: ComponentFixture<DrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
