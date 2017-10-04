import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Contact} from '../models/contact';
import {ContactService} from '../shared/contact.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/merge';

@Component({
  selector: 'rolodex-contacts',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts$: Observable<Array<Contact>>;
  terms$ = new Subject<string>();

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contacts$ = this.contactService.search(this.terms$)
      .merge(this.contactService.getContacts());
    this.contacts$.subscribe(res => console.log(res));
  }

  trackByContactId(index, contact): Contact {
    return contact.id;
  }

}
