/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoginWithAngularTestBedComponent } from './LoginWithAngularTestBed.component';
import { AuthServiceService } from '../AuthService.service';

describe('LoginWithAngularTestBedComponent', () => {
  let component: LoginWithAngularTestBedComponent;
  let fixture: ComponentFixture<LoginWithAngularTestBedComponent>;
  let service :AuthServiceService;
  let el :DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginWithAngularTestBedComponent ],
      providers:[AuthServiceService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithAngularTestBedComponent);
    component = fixture.componentInstance;
    service = TestBed.get(AuthServiceService);
    el = fixture.debugElement.query(By.css('a'));
    fixture.detectChanges();
  });

  it('Can login return fails if user is not authenticated', () => {
    spyOn(service,'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });

  it('Can login return true if user is not authenticated', () => {
    spyOn(service,'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
  });


  it('Detect Changes', () => {
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Login');
    spyOn(service,'isAuthenticated').and.returnValue(true);
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe('Logout');
   
  });
});
