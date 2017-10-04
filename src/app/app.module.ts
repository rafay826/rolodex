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
import {ContactService} from '@app/shared/contact.service';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsDetailComponent
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
    { provide: API_ENDPOINT, useValue: 'http://localhost:4201/api' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
