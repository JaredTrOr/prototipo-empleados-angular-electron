import { Injectable } from '@angular/core';
import { Sucursal } from '../models/Sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  sucursales: Sucursal[] = [];

  constructor() {
    this.sucursales = [
      {
        idSucursal: 1,
        nombre: 'Sucursal A',
        direccion: 'Calle Principal #123',
        telefono: '1234567890'
      },
      {
        idSucursal: 2,
        nombre: 'Sucursal B',
        direccion: 'Avenida Central #456',
        telefono: '0987654321'
      },
      {
        idSucursal: 3,
        nombre: 'Sucursal C',
        direccion: 'Boulevard Principal #789',
        telefono: '5678901234'
      },
      {
        idSucursal: 4,
        nombre: 'Sucursal D',
        direccion: 'Calle Secundaria #321',
        telefono: '2345678901'
      },
      {
        idSucursal: 5,
        nombre: 'Sucursal E',
        direccion: 'Avenida Principal #999',
        telefono: '3456789012'
      }
    ];
  }

  getSucursales(): Sucursal[] {
    return this.sucursales;
  }
}
