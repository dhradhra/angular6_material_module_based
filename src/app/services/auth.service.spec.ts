import { TestBed ,getTestBed} from '@angular/core/testing';

import { AuthService } from './auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';
import {  inject } from '@angular/core/testing';

import { Http, BaseRequestOptions, XHRBackend,Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';


// Httpclient test 
import { HttpParams } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


describe('AuthService', () => {
let subject: AuthService = null;
  let backend: MockBackend = null;
  let injector;
  let service: AuthService;
  let httpMock: HttpTestingController;

  
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [   RouterTestingModule,
      JwtModule.forRoot({	config: {
        tokenGetter: () => {
          return localStorage.getItem('currentUser');
        }
      }}),RouterTestingModule,HttpClientModule],
      providers: [JwtHelperService,
        { provide: XHRBackend, useClass: MockBackend },
        MockBackend,
      ]
      
      
    }));
    

    // beforeEach(() => {
    // });
    
    // beforeEach(() => {
    //   TestBed.configureTestingModule({
    //     imports: [HttpClientTestingModule],
    //     providers: [AuthService]
    //   });
  
    //   injector = getTestBed();
    //   service = injector.get(AuthService);
    //   httpMock = injector.get(HttpTestingController);
    // });
  
  
    // describe('#login', () => {
    //   it('Login method should return exact usergroup at  http post request on specific url', () => {
    //   //dummy /mock data
    //     const dummyUsers = [
    //       {Token:123,userGroup:"supplier"},
    //       {Token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsImNvbXBhbnlOYW1lIjoiRHVuZGVyIE1pZmZsaW4gUGFwZXIgQ29tcGFueSIsInVzZXJHcm91cCI6InN1cHBsaWVyIiwiZW1haWwiOiJzdXBwbGllckB0ZXN0LmNvbSIsImZpcnN0TmFtZSI6IlN1cHBsaWVyIiwibGFzdE5hbWUiOiJUZXN0IiwiZW1wbG95ZWVJRCI6MjMsImlhdCI6MTU0MzUxNTMxOSwiZXhwIjoxNTQzNjAxNzE5fQ.KYXPZYyxBoRiKdi3csaY35pNWDo9CgEvSfdgUzFH14U'}
    //     ]
        
    //     //call the method (login)  ,pass email and password  and get reponse from  backend.
    //     service.login("hi@mail.com","pass").subscribe(users => {
        
    //     //check if response is exactly what you want 
    //       expect(users).toEqual(dummyUsers[0].userGroup);
    //     });

    //     //make a mock api that will respond on post request
    //     const req = httpMock.expectOne(`http://localhost:3000/auth/employeeLogin`);
        
    //     //check if http request is a post requset not get request 
    //     expect(req.request.method).toBe('POST');

    //     //return dummtuser as a response to that request 
    //     req.flush(dummyUsers);
  
    //   });
    // });



  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
