import {Component, OnInit} from '@angular/core';
import {ContactService} from '@app/shared/contact.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '@app/models/contact';

@Component({
  selector: 'rolodex-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.css']
})
export class ContactsEditComponent implements OnInit {

  contact: Contact = <Contact>{address: {}};

  constructor(private contactService: ContactService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.contactService.getContact(this.route.snapshot.paramMap.get('id'))
      .subscribe(contact => this.contact = contact);
  }

  save(contact: Contact) {
    this.contactService.updateContact(contact)
      .subscribe(() => this.goToDetails(contact));
  }

  cancel(contact: Contact) {
    this.goToDetails(contact);
  }

  private goToDetails(contact: Contact) {
    this.router.navigate((['/contact', contact.id]));
  }

}
