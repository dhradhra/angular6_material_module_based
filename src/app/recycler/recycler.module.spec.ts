import { RecyclerModule } from './recycler.module';

describe('RecyclerModule', () => {
  let recyclerModule: RecyclerModule;

  beforeEach(() => {
    recyclerModule = new RecyclerModule();
  });

  it('should create an instance', () => {
    expect(recyclerModule).toBeTruthy();
  });
});
