import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/Empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../services/empleado.service';
import { Sucursal } from '../../models/Sucursal';
import { SucursalService } from '../../services/sucursal.service';
import Swal from 'sweetalert2';
import { MovimientosService } from '../../services/movimientos.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrl: './modificar-empleado.component.css'
})

export class ModificarEmpleadoComponent implements OnInit{

  idEmpleado!: number;
  empleado!: Empleado;
  sucursales: Sucursal[] = [];

  movimiento = { descripcion: '', tipoMovimiento: '' };

  constructor(
    private route: ActivatedRoute, 
    private empleadoService: EmpleadoService, 
    private sucursalService: SucursalService,
    private movimientoService: MovimientosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idEmpleado = Number(params['id']);
      this.empleado = this.empleadoService.getEmpleadoById(this.idEmpleado);
    });

    this.sucursales = this.sucursalService.getSucursales();
  }

  updateEmpleado(): void {
    Swal.fire({
      title: "¿Esta seguro de modificar este empleado?",
      text: "No será posible revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Sí, modificar"
    }).then((result) => {
      if (result.isConfirmed) {

        this.empleadoService.updateEmpleado(this.empleado);
        this.movimientoService.createMovimiento(this.empleado.idEmpleado!, this.movimiento);

        Swal.fire({
          title: "Modificación realizada con éxito",
          text: "El empleado ha sido modificado",
          icon: "success"
        });

        this.router.navigate(['/lista-empleados']);
        
      }
    });
  }
}
