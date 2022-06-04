export class AccountEntity {
  id: string;
  name: string;

  private constructor(params: AccountEntity) {
    this.id = params?.id;
    this.name = params?.name;
  }

  static create(params: AccountEntity) {
    return new this(params);
  }
}
