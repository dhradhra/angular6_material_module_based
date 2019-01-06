import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

import { JwtModule } from '@auth0/angular-jwt';

import { Module2arrayComponent } from './module2array.component';

describe('Module2arrayComponent', () => {
  let component: Module2arrayComponent;
  let fixture: ComponentFixture<Module2arrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
            imports:[FormsModule,HttpClientModule,JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }}),],
      declarations: [ Module2arrayComponent ]   ,
             providers: [JwtHelperService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2arrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
