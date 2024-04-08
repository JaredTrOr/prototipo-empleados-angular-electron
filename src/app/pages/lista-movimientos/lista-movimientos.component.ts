import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../../services/movimientos.service';
import { Movimientos } from '../../models/Movimientos';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-lista-movimientos',
  templateUrl: './lista-movimientos.component.html',
  styleUrl: './lista-movimientos.component.css'
})
export class ListaMovimientosComponent implements OnInit{

  movimientos: Movimientos[] = [];
  empleados: Empleado[] = [];

  constructor(private movimientosService: MovimientosService, private empleadoService: EmpleadoService){ }

  ngOnInit(): void {
    this.movimientos = this.movimientosService.getMovimientos();
    this.empleados = this.empleadoService.getEmpleados();
  }
  
  getNombreEmpleado(id: number): string{
    const empleado: Empleado[] = this.empleados.filter(empleado => empleado.idEmpleado === id);

    if (empleado.length) return empleado[0].nombre

    return '';
  }
}
