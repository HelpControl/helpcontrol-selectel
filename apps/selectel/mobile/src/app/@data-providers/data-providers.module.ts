import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendService } from '../@core/services/backend.services';
import { AuthInterceptor } from '../@core/intersectors/auth.intersector';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    BackendService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class DataProvidersModule {}
