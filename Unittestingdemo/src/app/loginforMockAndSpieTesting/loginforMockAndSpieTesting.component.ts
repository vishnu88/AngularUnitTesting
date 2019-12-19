import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../AuthService.service';

@Component({
  selector: 'app-loginforMockAndSpieTesting',
  templateUrl: './loginforMockAndSpieTesting.component.html',
  styleUrls: ['./loginforMockAndSpieTesting.component.css']
})
export class LoginforMockAndSpieTestingComponent implements OnInit {

  constructor(private authSerive: AuthServiceService) { }

  ngOnInit() {
  }
  needsLogin(){

    return !this.authSerive.isAuthenticated();
  }
}
