import { Component, Inject, inject, OnInit } from '@angular/core';
import {map, Observable} from 'rxjs';
import { Server } from './models/server.model';
import { ServersPageFacadeService } from './services/servers-page-facade.service';

@Component({
  selector: 'hc-selectel-servers',
  templateUrl: './servers.page.html',
  styleUrls: ['./servers.page.scss'],
})
export class ServersPage implements OnInit {
  // facade = inject(ServersPageFacadeService);

  servers$ = this.facade.servers$;
  isReady$: Observable<boolean> = this.facade.isReady$;
  constructor(
    @Inject(ServersPageFacadeService)
    private facade: ServersPageFacadeService
  ) {}
  ngOnInit() {}

  onAddServer() {}
  onServerDetails(e: Event, server: Server) {}
}
