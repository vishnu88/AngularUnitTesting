/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginforMockAndSpieTestingComponent } from './loginforMockAndSpieTesting.component';
import { AuthServiceService } from '../AuthService.service';

describe('LoginforMockAndSpieTestingComponent', () => {
  let component: LoginforMockAndSpieTestingComponent;
  let authService: AuthServiceService;

  beforeEach(async(() => {
    authService = new AuthServiceService();
    component = new LoginforMockAndSpieTestingComponent(authService);
  }));

  afterEach(() => {
     localStorage.removeItem('token');
     authService =null;
     component =null;
  });

  it('Can login return fails if user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('Can login return true if user is not authenticated', () => {
    localStorage.setItem('token',"123");
    expect(component.needsLogin()).toBeFalsy();
  });
});
