import { AccountEntity } from './account.entity';

describe('Account Entity', () => {
  it('should be properly initialized', () => {
    const model = AccountEntity.create({
      id: '1',
      name: 'foo',
    });

    expect(model.id).toEqual('1');
    expect(model.name).toEqual('foo');
  });
});
