import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DealerRepairerComponent } from './dealer-repairer.component';

describe('DealerRepairerComponent', () => {
  let component: DealerRepairerComponent;
  let fixture: ComponentFixture<DealerRepairerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ DealerRepairerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerRepairerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
