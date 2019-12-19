import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../AuthService.service';

@Component({
  selector: 'app-LoginSpyTesting',
  templateUrl: './LoginSpyTesting.component.html',
  styleUrls: ['./LoginSpyTesting.component.css']
})
export class LoginSpyTestingComponent implements OnInit {

 
  constructor(private authSerive: AuthServiceService) { }

  ngOnInit() {
  }
  needsLogin(){

    return !this.authSerive.isAuthenticated();
  }
}
