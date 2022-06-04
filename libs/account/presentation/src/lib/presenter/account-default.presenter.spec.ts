import {
  AccountInMemoryRepository,
  AccountMockDto,
} from '@helpcontrol-selectel/account/data-access';
import { AccountDefaultPresenter } from './account-default.presenter';
import { AccountPresenter } from './account.presenter';
import { skip } from 'rxjs/operators';

describe('Account Presenter', () => {
  let accountPresenter: AccountPresenter;

  const item1 = { id: '1', title: 'account 1' };
  const item2 = { id: '2', title: 'account 2' };
  const db: AccountMockDto[] = [item1, item2];

  beforeEach(() => {
    accountPresenter = new AccountDefaultPresenter(
      new AccountInMemoryRepository(db)
    );
  });

  describe('Initial State', () => {
    describe('Accounts', () => {
      it('should return empty array of accounts', (done) => {
        accountPresenter.accounts$.subscribe((accounts) => {
          expect(accounts).toEqual([]);
          done();
        });
      });
    });

    describe('Filter', () => {
      it('should return "all"', (done) => {
        accountPresenter.filter$.subscribe((filter) => {
          expect(filter).toEqual('all');
          done();
        });
      });
    });
  });

  describe('Get All Accounts', () => {
    describe('Accounts', () => {
      it('should return proper accounts from repository', (done) => {
        accountPresenter.accounts$.pipe(skip(1)).subscribe((accounts) => {
          expect(accounts).toHaveLength(2);

          expect(accounts[0].id).toEqual(item1.id);
          expect(accounts[0].name).toEqual(item1.title);
          expect(accounts[0].editing).toBeFalsy();

          expect(accounts[1].id).toEqual(item2.id);
          expect(accounts[1].name).toEqual(item2.title);
          expect(accounts[1].editing).toBeFalsy();

          done();
        });

        accountPresenter.getAllAccounts();
      });
    });

    describe('Filter', () => {
      it('should return "all"', (done) => {
        accountPresenter.filter$.pipe(skip(1)).subscribe((filter) => {
          expect(filter).toEqual('all');
          done();
        });

        accountPresenter.getAllAccounts();
      });
    });
  });
});
