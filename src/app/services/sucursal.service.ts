import { Injectable } from '@angular/core';
import { Sucursal } from '../models/Sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  private sucursales: Sucursal[] = [];

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

  getNuevaSucursal(): Sucursal {
    return {
      idSucursal: this.sucursales[this.sucursales.length - 1].idSucursal! + 1,
      nombre: '',
      direccion: '',
      telefono: ''
    };
  }

  getSucursales(): Sucursal[] {
    return this.sucursales;
  }

  getSucursalById(sucursalId: number): Sucursal {
    const [ sucursal ] = this.sucursales.filter(sucursal => sucursal.idSucursal === sucursalId);
    return sucursal;
  }

  createSucursal(sucursal: Sucursal): void {
    this.sucursales.push(sucursal);
  }

  deleteSucursal(sucursalId: number): void {
    const [ sucursal ] = this.sucursales.filter(sucursal => sucursal.idSucursal === sucursalId);
    this.sucursales.splice(this.sucursales.indexOf(sucursal), 1);
  }

  updateSucursal(sucursal: Sucursal): void {
    this.sucursales[this.sucursales.indexOf(sucursal)] = sucursal;
  }
}
