import { Component, OnInit } from '@angular/core';
import { Sucursal } from '../../models/Sucursal';
import { SucursalService } from '../../services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrl: './sucursal.component.css'
})
export class SucursalComponent implements OnInit {
  
  nuevaSucursal!: Sucursal;

  constructor(private sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.nuevaSucursal = this.sucursalService.getNuevaSucursal();
  }

  createSucursal(): void {
    this.sucursalService.createSucursal(this.nuevaSucursal);
    this.nuevaSucursal = this.sucursalService.getNuevaSucursal();

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Se ha realizado el registro del empleado exitosamente',
      showConfirmButton: true,
      confirmButtonText: 'Cerrar'
    });
  }
}
