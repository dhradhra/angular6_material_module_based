import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { RetrieveArrayComponent } from './retrieve-array.component';

describe('RetrieveArrayComponent', () => {
  let component: RetrieveArrayComponent;
  let fixture: ComponentFixture<RetrieveArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA],
      declarations: [ RetrieveArrayComponent ],
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
    fixture = TestBed.createComponent(RetrieveArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
