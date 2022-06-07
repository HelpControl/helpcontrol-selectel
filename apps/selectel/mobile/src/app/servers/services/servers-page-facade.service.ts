import { inject, Injectable } from '@angular/core';
import { map, Observable, publish, refCount, share } from 'rxjs';
import { Server } from '../models/server.model';
import { ServersDataService } from './servers-data.servece';

@Injectable({
  providedIn: 'root',
})
export class ServersPageFacadeService {
  serversDataService = inject(ServersDataService);
  servers$: Observable<Server[]> = this.serversDataService
    .getServers()
    .pipe(publish(), refCount());

  isReady$ = this.servers$.pipe(map((list) => !!list));
}
