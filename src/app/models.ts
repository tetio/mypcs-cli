export interface Company {
    code: string;
    name: string;
    web: string;
    email: string;
    address: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
    phone: string;
    fax: string;
    situation: string;
    lastModification: Date;
    primaryContact: PrimaryContact;
    users?: string[]
}

export interface PrimaryContact {
    firstName: string;
    lastName: String;
    mobile?: String;
    email: String;
}

export interface User {
  username: string,
  createdOn: Date,
  companyId: string,
  password: string,
  token: string
}