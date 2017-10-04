import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import {API_ENDPOINT} from './app.token';
import {appRoutes} from '@app/app.routes';
import { ContactsComponent } from './contacts-list/contacts-list.component';
import {ContactService, ConfirmNavigation} from '@app/shared/contact.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsEditComponent } from './contacts-edit/contacts-edit.component';
import {ContactResolver} from '@app/shared/contact.resolver';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsDetailComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MaterialModule
  ],
  providers: [
    ContactService,
    ContactResolver,
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' },
    { provide: 'ConfirmNavigation', useValue: ConfirmNavigation }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
