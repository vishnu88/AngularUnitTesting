import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../AuthService.service';
import { AuthservieAsyncService } from '../authservie-async.service';

@Component({
  selector: 'app-login-async-testing',
  templateUrl: './login-async-testing.component.html',
  styleUrls: ['./login-async-testing.component.css']
})
export class LoginAsyncTestingComponent implements OnInit {
   needsLogin :boolean =true;
  constructor(private auth : AuthservieAsyncService) { }

  ngOnInit() {

    this.auth.isAuthenticatedAsync().then((authenticated)=>{this.needsLogin=!authenticated});
  }

}
