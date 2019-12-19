import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  loggedIn : EventEmitter;
  constructor(private fb :FormBuilder) { }

  ngOnInit() {
    this.form=this.fb.group({
      email:['',[Validators.required,Validators.pattern("")]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
 login(){
   if(this.form.valid){
       this.loggedIn.emit("Vishnu");
   }
 }
}

 