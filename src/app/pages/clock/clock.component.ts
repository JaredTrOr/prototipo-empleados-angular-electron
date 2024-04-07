import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent {

  date: Date = new Date();
  diasSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  fechaActual:string = '';

  constructor() { }

  ngOnInit(): void {

    this.fechaActual = this.fechaActualDiaMesAnio();

    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  fechaActualDiaMesAnio(): string {

    const diaSemana: string = this.diasSemana[this.date.getDay()];
    const diaMes: number = this.date.getDate();
    const mes: string = this.meses[this.date.getMonth()];
    const anio: number = this.date.getFullYear();

    return `${diaSemana} ${diaMes} de ${mes} del ${anio}`;
  }
}
