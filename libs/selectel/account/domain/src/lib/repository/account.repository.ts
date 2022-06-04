import { AccountEntity } from '../entity/account.entity';
import { Observable } from 'rxjs';

import { Injectable } from '@nx-clean/core';

@Injectable()
export abstract class AccountRepository {
  public abstract getAllAccounts(): Observable<AccountEntity[]>;
  public abstract addAccount(
    account: Pick<AccountEntity, 'name'>
  ): Observable<AccountEntity>;
  public abstract updateAccount(
    id: string,
    account: AccountEntity
  ): Observable<AccountEntity>;
  public abstract removeAccount(id: string): Observable<AccountEntity>;
  public abstract getAccountById(id: string): Observable<AccountEntity>;
}
