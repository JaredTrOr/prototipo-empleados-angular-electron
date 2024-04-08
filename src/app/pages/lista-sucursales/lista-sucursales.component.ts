import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { Sucursal } from '../../models/Sucursal';

@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrl: './lista-sucursales.component.css'
})
export class ListaSucursalesComponent implements OnInit{

  sucursales: Sucursal[] = [];
  busqueda: string = '';
  constructor(private sucursalService: SucursalService){  }

  ngOnInit(): void {
    this.sucursales = this.sucursalService.getSucursales();
  }

  sucursalesFiltradas(): Sucursal[] {
    return this.sucursales.filter(sucursal => 
      sucursal.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      sucursal.direccion.toLocaleLowerCase().includes(this.busqueda.toLowerCase())
    );
  }
}
