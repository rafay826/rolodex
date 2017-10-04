import { Routes } from '@angular/router';
import {AppComponent} from '@app/app.component';
import {ContactsComponent} from '@app/contacts-list/contacts-list.component';
import {ContactsDetailComponent} from '@app/contacts-detail/contacts-detail.component';

export const appRoutes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'contact/:id', component: ContactsDetailComponent }
];