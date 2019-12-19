/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Login3Component } from './login3.component';
import { AuthServiceService } from '../AuthService.service';

class MockService{
    auth =false;
isAuthenticated(){

  return this.auth;
}
}

describe('Login3Component', () => {
  let component: Login3Component;
  let authService: MockService;

  beforeEach(async(() => {
    authService = new MockService();
    component = new Login3Component(authService);
  }));

  afterEach(() => {
     authService =null;
     component =null;
  });

  it('Can login return fails if user is not authenticated', () => {

    expect(component.needsLogin()).toBeTruthy();
  });

  it('Can login return true if user is not authenticated', () => {
    authService.auth= true;
    expect(component.needsLogin()).toBeFalsy();
  });
});

