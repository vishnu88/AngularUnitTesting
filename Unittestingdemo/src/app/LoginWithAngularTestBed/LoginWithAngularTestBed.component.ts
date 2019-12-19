import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../AuthService.service';

@Component({
  selector: 'app-LoginWithAngularTestBed',
  templateUrl: './LoginWithAngularTestBed.component.html',
  styleUrls: ['./LoginWithAngularTestBed.component.css']
})
export class LoginWithAngularTestBedComponent implements OnInit {

  constructor(private authSerive: AuthServiceService) { }

  ngOnInit() {
  }
  needsLogin(){

    return !this.authSerive.isAuthenticated();
  }
}
