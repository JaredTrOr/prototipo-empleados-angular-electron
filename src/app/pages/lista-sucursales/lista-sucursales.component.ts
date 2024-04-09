import { Component, OnInit } from '@angular/core';
import { SucursalService } from '../../services/sucursal.service';
import { Sucursal } from '../../models/Sucursal';
import Swal from 'sweetalert2';

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

  deleteSucursal(idSucursal: number): void {
    
    Swal.fire({
      title: "¿Esta seguro de eliminar esta sucursal?",
      text: "No será posible revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Sí, borrar"
    }).then((result) => {
      if (result.isConfirmed) {

        this.sucursalService.deleteSucursal(idSucursal);

        Swal.fire({
          title: "Eliminación realizada con éxito",
          text: "La sucursal ha sido eliminado",
          icon: "success"
        });
      }
    });

  }
}
