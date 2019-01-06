import { TestBed } from '@angular/core/testing';

import { ToplinksService } from './toplinks.service';

describe('ToplinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToplinksService = TestBed.get(ToplinksService);
    expect(service).toBeTruthy();
  });
});
