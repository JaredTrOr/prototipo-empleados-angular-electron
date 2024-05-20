import { Component, OnInit } from '@angular/core';
import { AltasBajasEmpleadosService } from '../../services/altas-bajas-empleados.service';
import { Altas } from '../../models/Altas';
import { Bajas } from '../../models/Bajas';

@Component({
  selector: 'app-altas-bajas',
  templateUrl: './altas-bajas.component.html',
  styleUrl: './altas-bajas.component.css'
})
export class AltasBajasComponent implements OnInit {

  altas: Altas[] = [];
  bajas: Bajas[] = [];

  constructor(private altasBajasEmpleadosService: AltasBajasEmpleadosService) {}

  ngOnInit(): void{  
    this.altas = this.altasBajasEmpleadosService.getAltas();
    this.bajas = this.altasBajasEmpleadosService.getBajas();
  }
}
