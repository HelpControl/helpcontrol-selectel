export class AccountMockDto {
  id: string;
  title: string;

  // actdate: string;
  // country: string;
  // email: string;
  // face_id: string;
  // locale: string;
  // middlename: string;
  // mobile: string;
  // name: string;
  // state: string;
  // surname: string;

  constructor(params: AccountMockDto) {
    this.id = params.id;
    this.title = params.title;
    Object.assign(this, params);
  }
}
