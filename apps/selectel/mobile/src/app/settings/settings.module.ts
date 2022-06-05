import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';
import { SettingsEditFormComponent } from './settings-edit-form/settings-edit-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, IonicModule, SettingsPageRoutingModule],
  declarations: [SettingsPage, SettingsEditFormComponent],
})
export class SettingsPageModule {}
