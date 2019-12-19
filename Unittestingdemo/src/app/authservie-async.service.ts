import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservieAsyncService {

constructor() { }
isAuthenticatedAsync(): Promise<boolean>{

  return Promise.resolve(!!localStorage.getItem('token'));
}
}
