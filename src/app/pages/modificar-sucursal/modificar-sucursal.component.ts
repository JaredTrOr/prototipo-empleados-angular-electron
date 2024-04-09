import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sucursal } from '../../models/Sucursal';
import { SucursalService } from '../../services/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-sucursal',
  templateUrl: './modificar-sucursal.component.html',
  styleUrl: './modificar-sucursal.component.css'
})
export class ModificarSucursalComponent implements OnInit {

  idSucursal!: number;
  sucursal!: Sucursal;

  constructor(private route: ActivatedRoute, private router: Router, private sucursalService: SucursalService){  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idSucursal = Number(params['id']);
      this.sucursal = this.sucursalService.getSucursalById(this.idSucursal);
    });
  }

  updateSucursal(): void {
    Swal.fire({
      title: "¿Esta seguro de modificar esta sucursal?",
      text: "No será posible revertir los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: 'Cancelar',
      confirmButtonText: "Sí, modificar"
    }).then((result) => {
      if (result.isConfirmed) {

        this.sucursalService.updateSucursal(this.sucursal);

        Swal.fire({
          title: "Modificación realizada con éxito",
          text: "La sucursal ha sido modificada",
          icon: "success"
        });

        this.router.navigate(['/lista-sucursales']);
        
      }
    });
  }
}
