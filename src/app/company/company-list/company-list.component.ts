import { Component, OnInit } from '@angular/core';
import { Company } from '../../models/company';
import { Observable } from 'rxjs';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  public companies$: Observable<Company[]>;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getCompaniesObservable();
  }

}
