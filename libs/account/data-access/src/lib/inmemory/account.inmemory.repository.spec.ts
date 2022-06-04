import { AccountInMemoryRepository } from './account.inmemory.repository';
import { AccountRepository } from '@helpcontrol-selectel/account/domain';
import { forkJoin } from 'rxjs';

describe('Account In Memory Repository', () => {
  let repo: AccountRepository;

  beforeEach(() => {
    repo = new AccountInMemoryRepository([
      {
        id: '1',
        title: 'one',
      },
      {
        id: '2',
        title: 'two',
      },
      {
        id: '3',
        title: 'three',
      },
    ]);
  });

  it('get all', (done) => {
    repo.getAllAccounts().subscribe((accounts) => {
      expect(accounts.length).toEqual(3);
      done();
    });
  });

  it('add account', (done) => {
    const name = 'bar';
    const add$ = repo.addAccount({ name });
    const all$ = repo.getAllAccounts();

    forkJoin([add$, all$]).subscribe(([account, accounts]) => {
      expect(account.name).toEqual('bar');
      expect(accounts.length).toEqual(4);
      done();
    });
  });
});
