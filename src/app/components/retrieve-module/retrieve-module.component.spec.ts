import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveModuleComponent } from './retrieve-module.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

describe('RetrieveModuleComponent', () => {
  let component: RetrieveModuleComponent;
  let fixture: ComponentFixture<RetrieveModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
            declarations: [ RetrieveModuleComponent ],
  imports: [
          
  HttpClientModule,
          FormsModule  ,JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }})    
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
