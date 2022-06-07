import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServersPageRoutingModule } from './servers-routing.module';

import { ServersPage } from './servers.page';
import { ServerCardListItemComponent } from './components/server-card-list-item/server-card-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { DataProvidersModule } from '../@data-providers/data-providers.module';
import { ServersDataService } from './services/servers-data.servece';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    FormsModule,
    ServersPageRoutingModule,
    DataProvidersModule,
  ],
  declarations: [ServersPage, ServerCardListItemComponent],
  providers: [ServersDataService],
})
export class ServersPageModule {}
