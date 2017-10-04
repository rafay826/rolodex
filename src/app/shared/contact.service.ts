import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {API_ENDPOINT} from '../app.token';
import {Contact, ContactsResponse, ContactResponse} from '@app/models/contact';

@Injectable()
export class ContactService {

  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) {
  }

  getContact(id: string): Observable<Contact> {
    return this.http.get<ContactResponse>(`${this.apiEndpoint}/contacts/${id}`)
      .map(data => data.item);
  }

  getContacts(): Observable<Array<Contact>> {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/contacts`)
      .map(data => data.items);
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<ContactResponse>(`${this.apiEndpoint}/contacts/${contact.id}`, contact)
      .map(data => data.item);
  }

  search(term: Observable<string>, debounceMs = 400): Observable<Array<Contact>> {
    return term.debounceTime(debounceMs)
      .distinctUntilChanged()
      .switchMap(query => this.rawSearch(<string>query));
  }

  rawSearch(term: string) {
    return this.http.get<ContactsResponse>(`${this.apiEndpoint}/search?text=${term}`)
      .map(data => data.items);
  }

}
