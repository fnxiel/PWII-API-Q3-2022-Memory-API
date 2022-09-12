import { TestBed } from '@angular/core/testing';

import { MemoriaDatosService } from './memoria-datos.service';

describe('MemoriaDatosService', () => {
  let service: MemoriaDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoriaDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
