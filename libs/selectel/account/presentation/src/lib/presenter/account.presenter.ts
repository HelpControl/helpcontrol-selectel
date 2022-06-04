import { AccountVM } from '../viewmodel/accounts.viewmodel';
import { Observable } from 'rxjs';

export abstract class AccountPresenter {
  abstract accounts$: Observable<AccountVM[]>;
  abstract filter$: Observable<string>;

  abstract getAllAccounts(): Observable<AccountVM[]>;
  abstract addAccount(account: Pick<AccountVM, 'name'>): Observable<AccountVM>;
  abstract removeAccount(id: string): void;
}
