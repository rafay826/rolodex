import {Routes} from '@angular/router';
import {AppComponent} from '@app/app.component';
import {ContactsComponent} from '@app/contacts-list/contacts-list.component';
import {ContactsDetailComponent} from '@app/contacts-detail/contacts-detail.component';
import {ContactsEditComponent} from '@app/contacts-edit/contacts-edit.component';
import {ContactResolver} from '@app/shared/contact.resolver';

export const appRoutes: Routes = [
  {path: '', component: ContactsComponent},
  {
    path: 'contact/:id',
    component: ContactsDetailComponent,
    resolve: {
      contact: ContactResolver
    }
  },
  {
    path: 'contact/:id/edit',
    component: ContactsEditComponent,
    canDeactivate: ['ConfirmNavigation'],
    resolve: {
      contact: ContactResolver
    }
  },
  {path: '**', redirectTo: '/'}
];
