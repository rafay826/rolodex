export interface Address {
  street: string;
  city: string;
  zip: string;
  country: string;
}

export interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  birthday: string;
  website: string;
  image: string;
  address: Address;
}

export interface ContactResponse { item: Contact; }
export interface ContactsResponse { items: Contact[]; }
