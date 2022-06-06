export class CurrentBalance {
  balance!: number;
  bonus!: number;
  status!: string;
  summ!: number;
  unpaid!: number;
  user_id!: number;
  constructor(dto: Partial<CurrentBalance>) {
    Object.assign(this, dto);
  }
}
