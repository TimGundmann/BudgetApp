import { GunRoutingModule } from './gun-routing.module';

describe('GunRoutingModule', () => {
  let gunRoutingModule: GunRoutingModule;

  beforeEach(() => {
    gunRoutingModule = new GunRoutingModule();
  });

  it('should create an instance', () => {
    expect(gunRoutingModule).toBeTruthy();
  });
});
