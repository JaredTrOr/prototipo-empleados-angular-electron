import { TestBed } from '@angular/core/testing';

import { AltasBajasEmpleadosService } from './altas-bajas-empleados.service';

describe('AltasBajasEmpleadosService', () => {
  let service: AltasBajasEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AltasBajasEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
