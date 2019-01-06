import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell2moduleComponent } from './cell2module.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

describe('Cell2moduleComponent', () => {
  let component: Cell2moduleComponent;
  let fixture: ComponentFixture<Cell2moduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,JwtModule.forRoot({	config: {
                tokenGetter: () => {
                  return localStorage.getItem('currentUser');
                }
              }})],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

      declarations: [ Cell2moduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell2moduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
