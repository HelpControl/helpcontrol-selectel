import { AccountRepository } from '../repository/account.repository';
import { AccountEntity } from '../entity/account.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

export interface GetAccountByIdUseCaseDto {
  id: string;
}

export class GetAccountByIdUseCase
  implements UseCase<GetAccountByIdUseCaseDto, AccountEntity>
{
  constructor(private accountRepository: AccountRepository) {}

  execute(request: GetAccountByIdUseCaseDto): Observable<AccountEntity> {
    return this.accountRepository.getAccountById(request.id);
  }
}
