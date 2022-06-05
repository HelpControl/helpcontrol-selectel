import { Inject, inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BackendService } from '../../@core/services/backend.services';
import {AccountPageModule} from '../account.module';

@Injectable(
  {
  providedIn: 'root',
}
)
export class AccountDataService {
  backend: BackendService = inject(BackendService);
  // constructor( private backend: BackendService){}
  getAccount(): Observable<any> {
    return this.backend.query('/account', {}).pipe(
      map((dto) => {
        const { email } = dto.info;
        return { email };
      })
    );
    return of('')
  }
}
