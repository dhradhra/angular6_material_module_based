import { DealerRepairerModule } from './dealer-repairer.module';

describe('DealerRepairerModule', () => {
  let dealerRepairerModule: DealerRepairerModule;

  beforeEach(() => {
    dealerRepairerModule = new DealerRepairerModule();
  });

  it('should create an instance', () => {
    expect(dealerRepairerModule).toBeTruthy();
  });
});
