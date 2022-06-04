import { AccountMockDto } from '../dto/account-mock.dto';
import { AccountEntity } from '@helpcontrol-selectel/account/domain';
import { Mapper } from '@nx-clean/core';

export class AccountMockMapper
  implements Mapper<AccountEntity, AccountMockDto>
{
  mapFrom(input: AccountEntity): AccountMockDto {
    return {
      id: input?.id,
      title: input?.name,
    };
  }

  mapTo(input: AccountMockDto): AccountEntity {
    const account = AccountEntity.create({
      id: input?.id,
      name: input?.title,
    });

    return account;
  }
}
