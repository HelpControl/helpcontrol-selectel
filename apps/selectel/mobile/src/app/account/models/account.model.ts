export class Account {
  name!: string;
  middlename!: string;
  surname!: string;
  email!: string;

  constructor(dto: Partial<Account>) {
    Object.assign(this, dto);
  }
}
