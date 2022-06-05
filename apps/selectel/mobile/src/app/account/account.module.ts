import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPageRoutingModule } from './account-routing.module';

import { AccountPage } from './account.page';
import { AccountBalanceCardComponent } from './components/account-balance-card/account-balance-card.component';
import { AccountRepository } from '@helpcontrol/selectel/account/domain';
import {
  AccountInMemoryRepository,
  AccountMockDto,
} from '@helpcontrol/selectel/account/data-access';
import {
  AccountDefaultPresenter,
  AccountPresenter,
} from '@helpcontrol/selectel/account/presentation';
import { AccountDataService } from './services/account-data.service';
import { SharedModule } from '../shared/shared.module';
import {DataProvidersModule} from '../@data-providers/data-providers.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    FormsModule,
    IonicModule,
    AccountPageRoutingModule,
    DataProvidersModule,
  ],
  declarations: [AccountPage, AccountBalanceCardComponent],
  providers: [
    AccountDataService,
    {
      provide: AccountRepository,
      useFactory: () =>
        new AccountInMemoryRepository([
          {
            id: '1',
            title: 'Gerzhan',
          },
        ]),
    },
    {
      provide: AccountPresenter,
      useFactory: (repo: AccountRepository) =>
        new AccountDefaultPresenter(repo),
      deps: [AccountRepository],
    },
  ],
})
export class AccountPageModule {}
