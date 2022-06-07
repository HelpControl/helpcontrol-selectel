import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CurrentBalance } from '../../models/current-balance.model';

@Component({
  selector: 'hc-selectel-account-balance-card',
  templateUrl: './account-balance-card.component.html',
  styleUrls: ['./account-balance-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBalanceCardComponent implements OnChanges {
  @Input() balance: CurrentBalance | null = null;

  value = '0';
  bonus = '0';

  ngOnChanges({ balance }: SimpleChanges): void {
    if (balance) {
      this.value = `${(this.balance?.balance ?? 0) / 100} руб.`;
      this.bonus = `${(this.balance?.bonus ?? 0) / 100} руб.`;
    }
  }
}
