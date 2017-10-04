import {Component} from '@angular/core';

@Component({
  selector: 'rolodex-root',
  template: `
    <md-toolbar color="primary">
      <a routerLink="/">Rolodex</a>
    </md-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
