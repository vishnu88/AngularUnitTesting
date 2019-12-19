import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../AuthService.service';

@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {

  constructor(private authSerive: AuthServiceService) { }

  ngOnInit() {
  }
  needsLogin(){

    return !this.authSerive.isAuthenticated();
  }
}
