import { Injectable } from '@angular/core';
import { Movimientos } from '../models/Movimientos';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  private movimientos: Movimientos[] = [];

  constructor() {
    this.movimientos = [
      {
        idMovimiento: 1,
        idEmpleado: 1,
        fecha: '2024-04-01',
        descripcion: 'Pago de salario',
        tipoMovimiento: 'Ingreso'
      },
      {
        idMovimiento: 2,
        idEmpleado: 2,
        fecha: '2024-04-01',
        descripcion: 'Pago de salario',
        tipoMovimiento: 'Ingreso'
      },
      {
        idMovimiento: 3,
        idEmpleado: 3,
        fecha: '2024-04-01',
        descripcion: 'Pago de salario',
        tipoMovimiento: 'Ingreso'
      },
      {
        idMovimiento: 4,
        idEmpleado: 4,
        fecha: '2024-04-01',
        descripcion: 'Pago de salario',
        tipoMovimiento: 'Ingreso'
      },
      {
        idMovimiento: 5,
        idEmpleado: 5,
        fecha: '2024-04-01',
        descripcion: 'Pago de salario',
        tipoMovimiento: 'Ingreso'
      }
    ];
  }

  getMovimientos(): Movimientos[] {
    return this.movimientos;
  }
}
