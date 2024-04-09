import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { Sucursal } from '../../models/Sucursal';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {

  sucursales: Sucursal[] = [];
  nuevoEmpleado!: Empleado;

  constructor(private sucursalService: SucursalService, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.nuevoEmpleado = this.empleadoService.getNuevoEmpleado();
    this.sucursales = this.sucursalService.getSucursales();
  }

  createEmpleado(): void {
    this.empleadoService.createEmpleado(this.nuevoEmpleado);
    this.nuevoEmpleado = this.empleadoService.getNuevoEmpleado();

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Se ha realizado el registro del empleado exitosamente',
      showConfirmButton: true,
      confirmButtonText: 'Cerrar'
    });
  }
}
