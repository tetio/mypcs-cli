/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http'
import { Router } from '@angular/router'

import { CompanyService } from './company.service';

describe('CompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([CompanyService], (service: CompanyService) => {
    expect(service).toBeTruthy();
  }));
});
