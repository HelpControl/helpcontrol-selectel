import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getToken(): string {
    return 'a16a3c6129c13e4897e7aee7c3a1fc3e5552624be67bce32f98276b7a6c533ad';
  }
}
