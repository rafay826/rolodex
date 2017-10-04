import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '@app/models/contact';
import {ContactService} from '@app/shared/contact.service';

@Component({
  selector: 'rolodex-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.paramMap.get('id'))
      .subscribe(contact => this.contact = contact);
  }
}
