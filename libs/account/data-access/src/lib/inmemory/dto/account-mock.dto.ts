export class AccountMockDto {
  id: string;
  title: string;

  constructor(params: AccountMockDto) {
    this.id = params.id;
    this.title = params.title;
  }
}
