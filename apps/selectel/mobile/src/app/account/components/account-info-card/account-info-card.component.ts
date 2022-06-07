import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Account } from '../../models/account.model';

@Component({
  selector: 'hc-selectel-account-info-card',
  templateUrl: './account-info-card.component.html',
  styleUrls: ['./account-info-card.component.scss'],
})
export class AccountInfoCardComponent implements OnChanges {
  @Input() account: Account | null = null;

  fio = '';

  constructor() {}

  ngOnChanges({ account }: SimpleChanges): void {
    if (account) {
      const { surname, name, middlename } = this.account ?? {};
      this.fio = [surname, name, middlename]
        .filter((v) => (v ?? '').length > 0)
        .join(' ');
    }
  }
}
