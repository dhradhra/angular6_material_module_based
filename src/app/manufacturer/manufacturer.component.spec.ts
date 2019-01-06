import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerComponent } from './manufacturer.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';

describe('ManufacturerComponent', () => {
  let component: ManufacturerComponent;
  let fixture: ComponentFixture<ManufacturerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[MatTableModule,FormsModule,HttpClientModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

      declarations: [ ManufacturerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
