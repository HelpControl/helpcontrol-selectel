import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Server } from '../../models/server.model';

@Component({
  selector: 'hc-selectel-server-card-list-item',
  templateUrl: './server-card-list-item.component.html',
  styleUrls: ['./server-card-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServerCardListItemComponent implements OnInit, OnChanges {
  @Input() server: Server | null = null;
  constructor() {}

  statusColor = 'danger';
  address = '';
  locked = false;
  name = '';
  ngOnInit(): void {}
  ngOnChanges({ server }: SimpleChanges): void {
    if (server && !!server.currentValue) {
      this.name = this.server?.name ?? '';
      this.statusColor =
        this.server?.status === 'started' ? 'secondary' : 'danger';
      this.address = this.server?.public_address?.address ?? '';
    }
  }
}
