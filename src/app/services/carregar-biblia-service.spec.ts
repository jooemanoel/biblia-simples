import { TestBed } from '@angular/core/testing';

import { CarregarBibliaService } from './carregar-biblia-service';

describe('CarregarBibliaService', () => {
  let service: CarregarBibliaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarregarBibliaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
