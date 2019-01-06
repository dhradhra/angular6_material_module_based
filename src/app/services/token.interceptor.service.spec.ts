import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('Token.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers:[TokenInterceptor]
  }));

  it('should be created', () => {
    const service: TokenInterceptor = TestBed.get(TokenInterceptor);
    expect(service).toBeTruthy();
  });
});
