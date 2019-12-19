/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginSpyTestingComponent } from './LoginSpyTesting.component';
import { AuthServiceService } from '../AuthService.service';

describe('LoginSpyTestingComponent', () => {
  let component: LoginSpyTestingComponent;
  let authService: AuthServiceService;

  beforeEach(async(() => {
    authService = new AuthServiceService();
    component = new LoginSpyTestingComponent(authService);
  }));

  afterEach(() => {
     authService =null;
     component =null;
  });

  it('Can login return fails if user is not authenticated', () => {
    spyOn(authService,'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });

  it('Can login return true if user is not authenticated', () => {
    spyOn(authService,'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
  });
});

