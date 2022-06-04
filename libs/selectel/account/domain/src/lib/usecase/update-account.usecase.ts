import { AccountRepository } from '../repository/account.repository';
import { AccountEntity } from '../entity/account.entity';
import { UseCase } from '@nx-clean/core';
import { Observable } from 'rxjs';

/**
 * Add your own transfer object definitions
 */
export interface UpdateAccountUseCaseDTO extends AccountEntity {
  id: string;
  name: string;
}

export class UpdateAccountUseCase
  implements UseCase<UpdateAccountUseCaseDTO, AccountEntity>
{
  constructor(private accountRepository: AccountRepository) {}

  execute(request: UpdateAccountUseCaseDTO): Observable<AccountEntity> {
    return this.accountRepository.updateAccount(request.id, request);
  }
}
