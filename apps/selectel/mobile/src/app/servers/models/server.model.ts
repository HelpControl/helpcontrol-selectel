export class Server {
  ctid!: number;
  name!: string;
  status!: 'started' | 'stopped' | 'billing';
  public_address!: { address?: string };
  constructor(dto: Partial<Server>) {
    Object.assign(this, dto);
  }
}
