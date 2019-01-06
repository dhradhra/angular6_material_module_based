import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';


// This is a mock auth service. we can use methods of this fake service as 
//  isLoggedIn method
class MockAuthService extends AuthService {
  isLoggedIn() {
    return false;
  }
}



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let testBedService: AuthService;
  let componentService: AuthService;

  beforeEach(async(() => {

    // creating instance of authservice
    componentService = new AuthService(null, null)


    //mocking  method of service to be returned. 
    spyOn(componentService, 'isLoggedIn').and.returnValue(true)
    spyOn(componentService, 'registerUser').and.returnValue(true)
    spyOn(componentService, 'getTokenPayload').and.returnValue("truee")
    
    
    

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({

      imports: [BrowserModule, RouterTestingModule, FormsModule, HttpClientModule, JwtModule.forRoot({
        config: {
          tokenGetter: () => {
            return localStorage.getItem('currentUser');
          }
        }
      })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA,],
      providers: [AuthService],
      declarations: [LoginComponent]
    })
      .compileComponents();

    // Over riding method for adding extra Services 
    TestBed.overrideComponent(
      LoginComponent,
      { 
        set: { 
          providers: [
                        { provide: AuthService, useValue: componentService },
                        // (MOCK SERVICE) use below code after commenting above line
                        // (MOCK SERVICE) uncomment this to use mock service class instead real
                        // { provide: AuthService, useClass: MockAuthService }
                    ] 
             }
       }
    )

    //   (MOCK SERVICE) for  mock service uncomment below code 

    // fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges()
    // testBedService =TestBed.get(AuthService)
    // componentService=fixture.debugElement.injector.get(AuthService)
  }));


  beforeEach(() => {
    //   (MOCK SERVICE) to use  mock service comment three lines 

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //Test if  isloggedin method is returning what we defined as a mock 
  it('canLogin returns true when the user is not authenticated', () => {
    expect(componentService.isLoggedIn()).toBe(true);
  });

  //Test if  isloggedin method is returning what we defined as a mock 
  it('canLogin returns true when the user is not authenticated', () => {
    expect(componentService.registerUser(null)).toBe(true);
  });

  //Test if  isloggedin method is returning what we defined as a mock 
  it('canLogin returns true when the user is not authenticated', () => {
    expect(componentService.getTokenPayload()).toBe(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
