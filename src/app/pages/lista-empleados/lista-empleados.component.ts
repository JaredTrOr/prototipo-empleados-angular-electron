import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{

  empleados: Empleado[] = [];
  busqueda: string = '';
  activo: boolean = true;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.empleados = this.empleadoService.getEmpleados();
  }

  empleadosFiltrados(): Empleado[] {

    return this.empleados.filter(empleado =>
      (empleado.activo === this.activo) &&
      (empleado.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      empleado.apellidos.toLowerCase().includes(this.busqueda.toLowerCase()) ||
      empleado.areaDepartamento.toLowerCase().includes(this.busqueda.toLowerCase()))
    );

  }
}
