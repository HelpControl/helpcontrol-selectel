import { AccountVM } from '../viewmodel/accounts.viewmodel';
import { AccountEntity } from '@helpcontrol-selectel/account/domain';
import { Mapper } from '@nx-clean/core';

export class AccountViewModelMapper
  implements Mapper<AccountEntity, AccountVM>
{
  mapFrom(input: AccountEntity): AccountVM {
    return { id: input.id, name: input.name };
  }

  mapTo(input: AccountVM): AccountEntity {
    return { id: input.id, name: input.name };
  }
}
