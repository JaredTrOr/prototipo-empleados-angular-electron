import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/Empleado';
import Swal from 'sweetalert2';
import { AltasBajasEmpleadosService } from '../../services/altas-bajas-empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrl: './lista-empleados.component.css'
})
export class ListaEmpleadosComponent implements OnInit{

  empleados: Empleado[] = [];
  busqueda: string = '';
  activo: boolean = true;

  constructor(
    private empleadoService: EmpleadoService, 
    private altasBajasEmpleadosService: AltasBajasEmpleadosService
  ) { }

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

  deleteEmpleado(empleado: Empleado): void {
    Swal.fire({
      title: "¿Esta seguro de eliminar este empleado?",
      text: "No será posible revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Sí, borrar"
    }).then((result) => {
      if (result.isConfirmed) {

        let descripcionBaja: string = 'Baja empleado '+empleado.nombre+' '+empleado.apellidos;
        this.altasBajasEmpleadosService.createBajaEmpleado(empleado.idEmpleado!, descripcionBaja);
        this.empleadoService.deleteEmpleado(empleado.idEmpleado!);

        Swal.fire({
          title: "Eliminación realizada con éxito",
          text: "El empleado ha sido eliminado",
          icon: "success"
        });
      }
    });
  }
}
