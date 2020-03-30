import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { CompanyService } from '../../company/company.service';
import { Company } from '../../models/company';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts$: Observable<Contact[]>;
  public companies$: Observable<Company[]>;

  constructor(
    private contactService: ContactService,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.getContacts();
    this.companies$ = this.companyService.getCompaniesObservable();
  }

  getContacts(companyId: string = null) {
    this.contacts$ = this.contactService.getContactsObservable(companyId);
  }

}
