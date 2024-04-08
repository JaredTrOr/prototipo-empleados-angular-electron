import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { Sucursal } from '../../models/Sucursal';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit{

  sucursales: Sucursal[] = [];

  constructor(private sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.sucursales = this.sucursalService.getSucursales();
  }
}
