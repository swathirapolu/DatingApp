/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
// import { AuthService } from './auth.service';
// tslint:disable-next-line: import-spacing
import { AuthService } from  './_services/auth.service';
import { from } from 'rxjs';

describe('Service: Auth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService]
    });
  });

  it('should ...', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
