/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginInputOutputComponent, User } from './login-input-output.component';

describe('LoginInputOutputComponent', () => {
  let component: LoginInputOutputComponent;
  let fixture: ComponentFixture<LoginInputOutputComponent>;
  let submitEl :DebugElement;
  let loginEl :DebugElement;
  let passwordEl :DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginInputOutputComponent ]
    })
    fixture = TestBed.createComponent(LoginInputOutputComponent);
    component = fixture.componentInstance;
    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'))
  
  }));


//Testing inputs
  it('Setting enabled to false will disable submit button', () => {
    component.enabled =false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });


  //Testing Outputs
  it('enting email and passwords emmits loggedIn events', () => {
     let  user : User;
     loginEl.nativeElement.value="vvv@gmail.com";
     passwordEl.nativeElement.value="12345";
     component.loggedIn.subscribe(value=>user=value);
     fixture.detectChanges();
     submitEl.triggerEventHandler('click',null);
     expect(user.email).toBe("vvv@gmail.com");
     expect(user.password).toBe("12345");
  });
});
