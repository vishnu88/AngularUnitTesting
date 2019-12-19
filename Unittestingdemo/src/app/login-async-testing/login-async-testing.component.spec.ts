/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, tick, fakeAsync, inject } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { LoginAsyncTestingComponent } from "./login-async-testing.component";
import { AuthservieAsyncService } from "../authservie-async.service";
import { AuthServiceService } from '../AuthService.service';

describe("LoginAsyncTestingComponent", () => {
  let component: LoginAsyncTestingComponent;
  let fixture: ComponentFixture<LoginAsyncTestingComponent>;
  let authService: AuthservieAsyncService;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAsyncTestingComponent],
      providers: [AuthservieAsyncService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAsyncTestingComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthservieAsyncService);
    el = fixture.debugElement.query(By.css("a"));
    fixture.detectChanges();
  });

  it("Button Label This test should be failed because of asyncronous", () => {
    expect(el.nativeElement.textContent.trim()).toBe("Login");
    spyOn(authService, "isAuthenticatedAsync").and.returnValue(
      Promise.resolve(true)
    );
    component.ngOnInit();
    fixture.detectChanges();
    expect(el.nativeElement.textContent.trim()).toBe("Logout");
  });

  //Jasmine Way.
  it("Button Label Jasmine way async testing", done => {
    expect(el.nativeElement.textContent.trim()).toBe("Login");
    let spy = spyOn(authService, "isAuthenticatedAsync").and.returnValue(
      Promise.resolve(true)
    );
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe("Logout");
      done();
    });
  });

  //Async Way.
  it("Button Label Async  way async testing", async(() => {
    expect(el.nativeElement.textContent.trim()).toBe("Login");
    let spy = spyOn(authService, "isAuthenticatedAsync").and.returnValue(
      Promise.resolve(true)
    );
    component.ngOnInit();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe("Logout");
    });
  }));

  //FakeAsync Way.
  it(
    "Button Label Async  way async testing",
    fakeAsync(() => {
      expect(el.nativeElement.textContent.trim()).toBe("Login");
      let spy = spyOn(authService, "isAuthenticatedAsync").and.returnValue(
        Promise.resolve(true)
      );
      component.ngOnInit();
      tick();

      fixture.detectChanges();
      expect(el.nativeElement.textContent.trim()).toBe("Logout");
    })
  );

  it("Service injected via inject(....)", () => {
    inject([AuthservieAsyncService],(injectService:AuthservieAsyncService)=>{
      expect(injectService).toBe(authService)
    })
  });
});
