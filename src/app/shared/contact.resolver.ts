import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Contact} from '@app/models/contact';
import {ContactService} from '@app/shared/contact.service';

@Injectable()
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactService: ContactService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.contactService.getContact(route.params['id']);
  }

}
