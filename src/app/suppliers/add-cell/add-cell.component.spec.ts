import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCellComponent } from './add-cell.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';


describe('AddCellComponent', () => {
  let component: AddCellComponent;
  let fixture: ComponentFixture<AddCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      
      imports: [RouterTestingModule,HttpClientModule,FormsModule ,JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }}),],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

      declarations: [ AddCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
