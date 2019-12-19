import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { DefaultPipe } from './Default.pipe';
import { LoginComponent } from './login/login.component';
import { LoginforMockAndSpieTestingComponent } from './loginforMockAndSpieTesting/loginforMockAndSpieTesting.component';
import { Login3Component } from './login3/login3.component';
import { LoginSpyTestingComponent } from './LoginSpyTesting/LoginSpyTesting.component';
import { LoginWithAngularTestBedComponent } from './LoginWithAngularTestBed/LoginWithAngularTestBed.component';
import { LoginAsyncTestingComponent } from './login-async-testing/login-async-testing.component';
import { LoginInputOutputComponent } from './login-input-output/login-input-output.component';

@NgModule({
   declarations: [
      AppComponent,
      DefaultPipe,
      LoginComponent,
      LoginforMockAndSpieTestingComponent,
      Login3Component,
      LoginSpyTestingComponent,
      LoginWithAngularTestBedComponent,
      LoginAsyncTestingComponent,
      LoginInputOutputComponent,
      NgForm
   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule  
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
