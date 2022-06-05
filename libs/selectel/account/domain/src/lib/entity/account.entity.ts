export class AccountEntity {
  id!: string;
  name!: string;

  private constructor(params: Partial<AccountEntity>) {
    // this.id = params?.id;
    // this.name = params?.name;
    Object.assign(this, params);
  }

  static create(params: Partial<AccountEntity>) {
    return new this(params);
  }
}
