import { AccountStateVM, AccountVM } from '../viewmodel/accounts.viewmodel';
import { AccountViewModelMapper } from '../mapper/account.mapper';
import { AccountPresenter } from './account.presenter';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  AccountRepository,
  AddAccountUseCase,
  GetAllAccountsUseCase,
  RemoveAccountUseCase,
} from '@helpcontrol/selectel/account/domain';

export class AccountDefaultPresenter implements AccountPresenter {
  accounts$: Observable<AccountVM[]>;
  filter$: Observable<string>;

  // internal state
  private state = new AccountStateVM();
  private dispatch = new BehaviorSubject<AccountStateVM>(this.state);
  private mapper = new AccountViewModelMapper();

  // use cases
  private getAllAccountsUC: GetAllAccountsUseCase;

  private addAccountUC: AddAccountUseCase;

  private removeAccountUC: RemoveAccountUseCase;

  constructor(private repository: AccountRepository) {
    this.getAllAccountsUC = new GetAllAccountsUseCase(this.repository);

    this.addAccountUC = new AddAccountUseCase(this.repository);

    this.removeAccountUC = new RemoveAccountUseCase(this.repository);

    // state selectors
    this.accounts$ = this.dispatch
      .asObservable()
      .pipe(map((state) => state.accounts));

    this.filter$ = this.dispatch
      .asObservable()
      .pipe(map((state) => state.filter));
  }

  getAllAccounts(): Observable<AccountVM[]> {
    const accounts$ = this.getAllAccountsUC
      .execute()
      .pipe(map((accounts) => accounts.map(this.mapper.mapFrom)));

    accounts$.subscribe((accounts) => {
      this.dispatch.next(
        (this.state = {
          ...this.state,
          accounts,
          filter: 'all',
        })
      );
    });

    return accounts$;
  }

  addAccount({ name }: Pick<AccountVM, 'name'>): Observable<AccountVM> {
    const add$ = this.addAccountUC
      .execute({ name, id: '' })
      .pipe(map(this.mapper.mapFrom));

    const accounts$ = this.getAllAccountsUC
      .execute()
      .pipe(map((accounts) => accounts.map(this.mapper.mapFrom)));

    add$.pipe(switchMap(() => accounts$)).subscribe((accounts) => {
      this.dispatch.next(
        (this.state = {
          ...this.state,
          accounts,
        })
      );
    });

    return add$;
  }

  removeAccount(id: string) {
    const remove$ = this.removeAccountUC.execute({ id });
    const accounts$ = this.getAllAccountsUC
      .execute()
      .pipe(map((accounts) => accounts.map(this.mapper.mapFrom)));

    forkJoin([remove$, accounts$]).subscribe(([, accounts]) => {
      this.dispatch.next(
        (this.state = {
          ...this.state,
          accounts: accounts.map(this.mapper.mapFrom),
        })
      );
    });
  }

  private updateAccounts(accounts: AccountVM[]) {
    this.dispatch.next(
      (this.state = {
        ...this.state,
        accounts,
      })
    );
  }
}
