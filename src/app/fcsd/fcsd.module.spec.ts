import { FcsdModule } from './fcsd.module';

describe('FcsdModule', () => {
  let fcsdModule: FcsdModule;

  beforeEach(() => {
    fcsdModule = new FcsdModule();
  });

  it('should create an instance', () => {
    expect(fcsdModule).toBeTruthy();
  });
});
