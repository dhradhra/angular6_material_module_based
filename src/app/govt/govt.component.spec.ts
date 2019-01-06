import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtComponent } from './govt.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('GovtComponent', () => {
  let component: GovtComponent;
  let fixture: ComponentFixture<GovtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ GovtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
