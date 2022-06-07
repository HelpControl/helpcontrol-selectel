export class ServerTag {
  id!: number;
  name!: string;
  constructor(dto: Partial<ServerTag>) {
    Object.assign(this, dto);
  }
}
