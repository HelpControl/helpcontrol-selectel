import { BalanceMockDto } from '../dto/balance-mock.dto';
import { BalanceEntity } from '@helpcontrol/selectel/balance/domain';
import { Mapper } from '@nx-clean/core';

export class BalanceMockMapper
  implements Mapper<BalanceEntity, BalanceMockDto>
{
  mapFrom(input: BalanceEntity): BalanceMockDto {
    return {
      id: input?.id,
      title: input?.name,
    };
  }

  mapTo(input: BalanceMockDto): BalanceEntity {
    const balance = BalanceEntity.create({
      id: input?.id,
      name: input?.title,
    });

    return balance;
  }
}
