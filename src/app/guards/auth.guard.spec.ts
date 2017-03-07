/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing'

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard],
      imports: [
        HttpModule,
        RouterTestingModule.withRoutes([])
      ]
    });
  });

  it('should ....', inject([AuthGuard], (service: AuthGuard) => {
    let a = '0';
    expect(service).toBeTruthy();
  }));

});
