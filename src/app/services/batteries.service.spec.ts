import { TestBed } from '@angular/core/testing';

import { BatteriesService } from './batteries.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from '@auth0/angular-jwt';

describe('BatteriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
                schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

    imports: [RouterTestingModule,HttpClientModule  , RouterTestingModule,
              JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }}),],
          providers: [JwtHelperService]

    }));

  it('should be created', () => {
    const service: BatteriesService = TestBed.get(BatteriesService);
    expect(service).toBeTruthy();
  });
});
