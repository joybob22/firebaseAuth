import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { CompanyService } from '../../company/company.service';
import { Company } from '../../models/company';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  contact$: Observable<Contact>;
  companies$: Observable<Company[]>;

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private companyService: CompanyService
  ) {
    if (!this.isNew) {
      this.contact$ = contactService.getContactObservable(this.id);
    } else {
      this.contact$ = of({}) as Observable<Contact>;
    }
    this.companies$ = companyService.getCompaniesObservable();
  }

  ngOnInit() {
  }

  get id(): string {
    return this.activatedRoute.snapshot.paramMap.get('id');
  }

  get isNew(): boolean {
    return this.id === 'new';
  }

  saveContact(contact: Contact) {
    this.contactService.saveContact(contact)
      .then(_ => this.router.navigate(['/contact/all']));
  }

  editContact(contact: Contact) {
    this.contactService.editContact({
      id: this.id,
      ...contact
    })
      .then(_ => this.router.navigate(['/contact/all']));
  }

  deleteContact() {
    this.contactService.deleteContact(this.id)
      .then(_ => this.router.navigate(['/contact/all']));
  }

}
