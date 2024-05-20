import { Injectable } from '@angular/core';
import { Altas } from '../models/Altas';
import { Bajas } from '../models/Bajas';

@Injectable({
  providedIn: 'root'
})
export class AltasBajasEmpleadosService {

  private altas: Altas[] = [];
  private bajas: Bajas[] = [];

  constructor() {
    this.altas = [
      {
        idAltas: 1, 
        idEmpleado: 1,
        descripcion: 'Alta empleado Juan Pérez',
        fechaIngreso: '2024-04-01'
      },
      {
        idAltas: 2, 
        idEmpleado: 2,
        descripcion: 'Alta empleado María López',
        fechaIngreso: '2024-04-01'
      }
    ];

    this.bajas = [
      {
        idBajas: 1, 
        idEmpleado: 10,
        descripcion: 'Baja empleado José Ramírez',
        fechaSalida: '2024-04-01'
      }
    ];
  }

  createAltaEmpleado(idEmpleado: number, descripcion: string): void {
    const alta: Altas = {
      idAltas: this.altas[this.altas.length - 1].idAltas! + 1,
      idEmpleado,
      descripcion, 
      fechaIngreso: 'fecha'
    }

    this.altas.push(alta)
  }

  createBajaEmpleado(idEmpleado: number, descripcion: string): void {
    const baja: Bajas = {
      idBajas: this.altas[this.altas.length - 1].idAltas! + 1,
      idEmpleado,
      descripcion, 
      fechaSalida: 'fecha'
    };

    this.bajas.push(baja);
  }

  getAltas(): Altas[] {
    return this.altas;
  }

  getBajas(): Bajas[] {
    return this.bajas;
  }
}
