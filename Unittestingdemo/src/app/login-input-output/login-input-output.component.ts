import { Component, OnInit, Output,EventEmitter, Input } from "@angular/core";

export class User {
  constructor(public email :string, public password: string) { }
}
@Component({
  selector: "app-login-input-output",
  templateUrl: "./login-input-output.component.html",
  styleUrls: ["./login-input-output.component.css"]
})
export class LoginInputOutputComponent implements OnInit {
  @Output() loggedIn =new EventEmitter<User>();
  @Input() enabled =true;
  constructor() {}
  login(email,password){
    if(email&&password)
    {
      this.loggedIn.emit(new User(email,password));
    }
  }

  ngOnInit() {}
}
