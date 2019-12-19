import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

constructor() { }

isAuthenticated(){

  return !!localStorage.getItem('token');
}

}
