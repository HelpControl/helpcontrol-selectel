import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, share } from 'rxjs';
import { BackendService } from '../../@data-providers/backend.services';
import { Server } from '../models/server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersDataService {
  constructor(@Inject(BackendService) private backend: BackendService) {}

  getServers(): Observable<Server[]> {
    return this.backend.query('/scalets').pipe(
      map((rawDto) => {
        return (rawDto ?? []).map((i: any) => new Server(i));
      })
    );
  }
}
