import { AccountRepository } from '../repository/account.repository';
import { AccountEntity } from '../entity/account.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export interface RemoveAccountUseCaseDto {
  id: string;
}

export class RemoveAccountUseCase
  implements UseCase<RemoveAccountUseCaseDto, AccountEntity>
{
  constructor(private accountRepository: AccountRepository) {}

  execute(request: RemoveAccountUseCaseDto): Observable<AccountEntity> {
    return this.accountRepository.removeAccount(request.id);
  }
}
