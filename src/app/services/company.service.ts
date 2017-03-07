import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Company, PrimaryContact } from '../models'

@Injectable()
export class CompanyService {
  companies: Company[];
  currentCompany: Company;

  constructor(private http: Http) { }

  setCurrentCompany(company: Company) {
    this.currentCompany = company;
  }



}