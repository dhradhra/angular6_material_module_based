import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCellsComponent } from './view-cells.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

import { JwtModule } from '@auth0/angular-jwt';

describe('ViewCellsComponent', () => {
  let component: ViewCellsComponent;
  let fixture: ComponentFixture<ViewCellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatTableModule,FormsModule,HttpClientModule,JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }})],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
      declarations: [ ViewCellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
