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
import { AccountDataService } from './services/account-data.service';
import { SharedModule } from '../shared/shared.module';
import { DataProvidersModule } from '../@data-providers/data-providers.module';
import { AccountInfoCardComponent } from './components/account-info-card/account-info-card.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    FormsModule,
    AccountPageRoutingModule,
    DataProvidersModule,
  ],
  declarations: [
    AccountPage,
    AccountBalanceCardComponent,
    AccountInfoCardComponent,
  ],
  providers: [AccountDataService],
})
export class AccountPageModule {}
