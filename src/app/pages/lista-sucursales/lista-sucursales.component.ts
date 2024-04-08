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
  constructor(private sucursalService: SucursalService){  }

  ngOnInit(): void {
    this.sucursales = this.sucursalService.getSucursales();
  }
}
