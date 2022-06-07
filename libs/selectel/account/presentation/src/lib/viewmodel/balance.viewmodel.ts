export class BalanceStateVM {
  filter: string | 'all' = 'all';
  value:  = [];
}

export interface balanceVM {
  id: string;
  summ: string;

  /**
   * different as in
   * balance domain entity
   */
  editing?: boolean;
}
