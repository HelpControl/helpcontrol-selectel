export class BalanceMockDto {
  balance: number;
  bonus: number;
  status: string;
  summ: number;
  unpaid: number;
  user_id: number;

  constructor(params: BalanceMockDto) {
    Object.assign(this, params);
  }
}
