import { Component, Inject, inject, OnInit } from '@angular/core';
import { AccountPresenter } from '@helpcontrol/selectel/account/presentation';
import { AccountDataService } from './services/account-data.service';

@Component({
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  // accountRepo: AccountDataService = inject(AccountDataService);
  account$ = this.accountRepo.getAccount();
  // balance: Balamc
  // accounts$ = this.accountPresenter.accounts$;
  // constructor(private accountPresenter: AccountPresenter) {}
  constructor(@Inject(AccountDataService) private accountRepo: AccountDataService) {}

  ngOnInit() {
    // this.accountPresenter.getAllAccounts();
  }
}
