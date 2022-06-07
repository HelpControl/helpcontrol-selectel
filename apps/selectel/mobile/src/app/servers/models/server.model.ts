import { ServerTag } from './server-tag.model';

export class Server {
  ctid!: number;
  name!: string;
  status!: 'started' | 'stopped' | 'billing';
  public_address!: { address?: string };
  tags!: Array<ServerTag>;

  constructor(dto: Partial<Server>) {
    Object.assign(this, dto);
    if (dto?.tags) {
      this.tags = (dto?.tags ?? []).map((item) => new ServerTag(item));
    }
  }
}
