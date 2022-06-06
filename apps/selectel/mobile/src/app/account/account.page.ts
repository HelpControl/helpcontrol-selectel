import { Component, Inject, inject, OnInit } from '@angular/core';
import { AccountPageFacadeService } from './services/account-page.facade.service';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
  account$ = this.accountFacade.account$;
  balance$ = this.accountFacade.balance$;
  constructor(
    @Inject(AccountPageFacadeService)
    private accountFacade: AccountPageFacadeService
  ) {}
}
