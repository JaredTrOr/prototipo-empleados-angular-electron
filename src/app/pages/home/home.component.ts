import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  numeroEmpleados!: number;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.numeroEmpleados = this.empleadoService.getCantidadEmpleadosActivos();
  }
}
