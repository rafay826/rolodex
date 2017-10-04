import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">Contacts</md-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
