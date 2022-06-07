import { AccountRepository } from '../repository/account.repository';
import { AccountEntity } from '../entity/account.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export class GetAllAccountsUseCase implements UseCase<void, AccountEntity[]> {
  constructor(private accountRepository: AccountRepository) {}

  execute(): Observable<AccountEntity[]> {
    return this.accountRepository.getAllAccounts();
  }
}
