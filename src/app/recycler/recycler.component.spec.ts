import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerComponent } from './recycler.component';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('RecyclerComponent', () => {
  let component: RecyclerComponent;
  let fixture: ComponentFixture<RecyclerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

      declarations: [ RecyclerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
