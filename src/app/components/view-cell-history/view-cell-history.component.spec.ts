import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCellHistoryComponent } from './view-cell-history.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { MatTableModule } from '@angular/material';

describe('ViewCellHistoryComponent', () => {
  let component: ViewCellHistoryComponent;
  let fixture: ComponentFixture<ViewCellHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatTableModule,FormsModule,HttpClientModule,JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }})],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
      declarations: [ ViewCellHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCellHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
