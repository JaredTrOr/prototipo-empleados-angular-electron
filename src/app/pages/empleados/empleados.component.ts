import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { Sucursal } from '../../models/Sucursal';
import { Empleado } from '../../models/Empleado';
import { EmpleadoService } from '../../services/empleado.service';
import Swal from 'sweetalert2'
import { AltasBajasEmpleadosService } from '../../services/altas-bajas-empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent implements OnInit {

  sucursales: Sucursal[] = [];
  nuevoEmpleado!: Empleado;
  descripcionAlta: string = 'Alta de empleado ';

  constructor(
    private sucursalService: SucursalService, 
    private empleadoService: EmpleadoService,
    private altaBajaEmpleadoService: AltasBajasEmpleadosService
  ) { }

  ngOnInit(): void {
    this.nuevoEmpleado = this.empleadoService.getNuevoEmpleado();
    this.sucursales = this.sucursalService.getSucursales();
  }

  createEmpleado(): void {
    this.empleadoService.createEmpleado(this.nuevoEmpleado);
    //Obtener el ID del empleado que se ha creado
    const [empleadoCreado] = this.empleadoService.getEmpleados().filter(empleado => empleado.CURP === this.nuevoEmpleado.CURP);
    //Limpiar el nuevo empleado
    this.nuevoEmpleado = this.empleadoService.getNuevoEmpleado();

    //Crear una alta de empleado, buscar una manera de obtener el ID del empleado
    this.descripcionAlta += empleadoCreado.nombre + ' ' +  empleadoCreado.apellidos;
    this.altaBajaEmpleadoService.createAltaEmpleado(empleadoCreado.idEmpleado!, this.descripcionAlta);

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Se ha realizado el registro del empleado exitosamente',
      showConfirmButton: true,
      confirmButtonText: 'Cerrar'
    });
  }
}
