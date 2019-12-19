/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthServiceService } from './AuthService.service';

describe('Service: AuthService', () => {
  let service : AuthServiceService;
  beforeEach(() => {
    // TestBed.configureTestingModule({
    //   providers: [AuthServiceService]
    // });

    service = new AuthServiceService();
  });

  afterEach(() => {
    // TestBed.configureTestingModule({
    //   providers: [AuthServiceService]
    // });

    service = null;
    localStorage.removeItem('token');
  });

  it('should return true from isAuthenticate when there is token ', () => {
    localStorage.setItem('token','123');
    expect(service.isAuthenticated()).toBeTruthy();
  });


  it('should return fale from isAuthenticate when there is token ', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
