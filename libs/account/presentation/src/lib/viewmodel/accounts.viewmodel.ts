export class AccountStateVM {
  filter: string | 'all' = 'all';
  accounts: AccountVM[] = [];
}

export interface AccountVM {
  id: string;
  name: string;

  /**
   * different as in
   * account domain entity
   */
  editing?: boolean;
}
