import { BalanceEntity } from './balance.entity';

describe('Balance Entity', () => {
  it('should create an instance', () => {
    expect(new BalanceEntity()).toBeTruthy();
  });
  it('should be properly initialized', () => {
    const model = new BalanceEntity({
      id: '1',
      balance: 0,
      summ: 0,
      state: 'active',
    });

    expect(model.id).toEqual('1');
    expect(model.balance).toEqual(0);
    expect(model.summ).toEqual(0);
    expect(model.state).toEqual('active');
  });
});
