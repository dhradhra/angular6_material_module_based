import { GovtModule } from './govt.module';

describe('GovtModule', () => {
  let govtModule: GovtModule;

  beforeEach(() => {
    govtModule = new GovtModule();
  });

  it('should create an instance', () => {
    expect(govtModule).toBeTruthy();
  });
});
