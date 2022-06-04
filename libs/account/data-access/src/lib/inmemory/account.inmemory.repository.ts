import {
  AccountRepository,
  AccountEntity,
} from '@helpcontrol-selectel/account/domain';
import { AccountMockMapper } from './mapper/account-mock.mapper';
import { AccountMockDto } from './dto/account-mock.dto';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@nx-clean/core';

@Injectable()
export class AccountInMemoryRepository implements AccountRepository {
  constructor(private data: AccountMockDto[] = []) {}

  private mapper = new AccountMockMapper();

  public getAllAccounts(): Observable<AccountEntity[]> {
    return of(this.data).pipe(map((mocks) => mocks.map(this.mapper.mapTo)));
  }

  public addAccount({
    name,
  }: Pick<AccountEntity, 'name'>): Observable<AccountEntity> {
    const id = 'item-' + new Date().getTime();
    const account: AccountEntity = AccountEntity.create({ id, name });

    this.data.push(this.mapper.mapFrom(account));
    return of(account);
  }

  public getAccountById(id: string): Observable<AccountEntity> {
    return of<AccountMockDto>(
      this.data.find((account) => account.id === id) as AccountMockDto
    ).pipe(map(this.mapper.mapTo));
  }

  public updateAccount(
    id: string,
    account: AccountEntity
  ): Observable<AccountEntity> {
    const record = this.data.findIndex((account) => account.id === id);
    this.data[record] = this.mapper.mapFrom(account);
    return of(this.mapper.mapTo(this.data[record]));
  }

  public removeAccount(id: string): Observable<AccountEntity> {
    const idx = this.data.findIndex((t) => t.id === id);
    const account = this.data.find((t) => t.id === id);

    this.data.splice(idx, 1);

    return of<AccountMockDto>(account as AccountMockDto).pipe(
      map(this.mapper.mapTo)
    );
  }
}
