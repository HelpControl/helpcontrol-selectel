import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackendService {
  private http: HttpClient = inject(HttpClient);
  // private apiEndpointUrl = 'https://api.vscale.io/v1';
  private apiEndpointUrl = '/v1';
  private token = null;

  constructor() {}

  getAuthToken() {
    return this.token;
  }

  query(path: string, params: any = undefined): Observable<any> {
    return this.http.get(this.apiEndpointUrl + path, params).pipe(
      tap(
        (data) => console.log(data),
        (err) => {
          // TODO: error handle
          throw new Error('Transport ERROR');
        }
      )
    );
  }

  cmd() {}
}
