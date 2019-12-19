/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthservieAsyncService } from './authservie-async.service';

describe('Service: AuthservieAsync', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthservieAsyncService]
    });
  });

  it('should ...', inject([AuthservieAsyncService], (service: AuthservieAsyncService) => {
    expect(service).toBeTruthy();
  }));
});
