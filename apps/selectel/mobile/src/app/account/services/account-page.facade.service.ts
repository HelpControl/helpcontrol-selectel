import { inject, Inject, Injectable } from '@angular/core';
import { map, Observable, share, switchMap } from 'rxjs';
import { Account } from '../models/account.model';
import { CurrentBalance } from '../models/current-balance.model';
import { AccountDataService } from './account-data.service';

@Injectable({
  providedIn: 'root',
})
export class AccountPageFacadeService {
  accountDataAccess = inject(AccountDataService);
  account$: Observable<Account> = this.accountDataAccess
    .getAccount()
    .pipe(share());

  balance$: Observable<CurrentBalance | null> = this.account$.pipe(
    switchMap(() => this.accountDataAccess.getCurrentBalance()),
    share()
  );
}
