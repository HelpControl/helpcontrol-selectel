import { Component } from '@angular/core';
@Component({
  selector: 'hc-selectel-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    { title: 'Настройки', url: '/settings', icon: 'mail' },
    { title: 'Аккаунт', url: '/account', icon: 'mail' },
    { title: 'Сервера', url: '/servers', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  constructor() {}
}
