import { AccountRepository } from '../repository/account.repository';
import { AccountEntity } from '../entity/account.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

/**
 * Add your own transfer object definitions
 */
export interface AddAccountUseCaseDTO extends AccountEntity {
  name: string;
}

export class AddAccountUseCase
  implements UseCase<AddAccountUseCaseDTO, AccountEntity>
{
  constructor(private accountRepository: AccountRepository) {}

  execute(request: AddAccountUseCaseDTO): Observable<AccountEntity> {
    return this.accountRepository.addAccount(request);
  }
}
