import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyIonicModule } from '@ngx-formly/ionic';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyIonicModule,
    IonicModule,
  ],
  exports: [
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyIonicModule,
  ],
})
export class SharedModule {}
