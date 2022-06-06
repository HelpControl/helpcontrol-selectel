import { Inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BackendService } from '../../@data-providers/backend.services';
import { Account } from '../models/account.model';
import { CurrentBalance } from '../models/current-balance.model';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  // backend: BackendService = inject(BackendService);
  constructor(@Inject(BackendService) private backend: BackendService) {}

  /**
   * Метод запроса данных об Аккаунте
   * @returns
   */
  getAccount(): Observable<Account> {
    return this.backend
      .query('/account', {})
      .pipe(map((dto) => new Account(dto.info)));
  }

  /**
   * Метод запроса данных текущего баланса
   * @returns
   */
  getCurrentBalance(): Observable<CurrentBalance | null> {
    return this.backend.query('/billing/balance').pipe(
      map((data) => {
        return new CurrentBalance({ ...data });
      })
    );
  }
}
