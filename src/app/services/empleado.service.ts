import { Injectable } from '@angular/core';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleados: Empleado[] = [];

  constructor() {
    this.empleados = [
      {
        idEmpleado: 1,
        nombre: 'Juan',
        apellidos: 'Pérez Gómez',
        sexo: 'Masculino',
        fechaNacimiento: '1990-05-15',
        domicilio: 'Calle Principal #123',
        telefono: '1234567890',
        correoElectronico: 'juan@example.com',
        salario: 25000,
        puesto: 'Gerente de Ventas',
        areaDepartamento: 'Ventas',
        sucursal: 1,
        activo: true,
        CURP: 'PERJ900515HDFZMN01',
        RFC: 'PERJ900515XXX',
        NSS: '12345678901234'
      },
      {
        idEmpleado: 2,
        nombre: 'María',
        apellidos: 'López Martínez',
        sexo: 'Femenino',
        fechaNacimiento: '1988-10-20',
        domicilio: 'Avenida Principal #456',
        telefono: '0987654321',
        correoElectronico: 'maria@example.com',
        salario: 20000,
        puesto: 'Analista de Sistemas',
        areaDepartamento: 'Tecnología de la Información',
        sucursal: 2,
        activo: true,
        CURP: 'LOMM881020MDFXYZ05',
        RFC: 'LOMM881020XXX',
        NSS: '98765432109876'
      },
      {
        idEmpleado: 3,
        nombre: 'Pedro',
        apellidos: 'García Rodríguez',
        sexo: 'Masculino',
        fechaNacimiento: '1995-03-10',
        domicilio: 'Boulevard Principal #789',
        telefono: '5678901234',
        correoElectronico: 'pedro@example.com',
        salario: 18000,
        puesto: 'Contador',
        areaDepartamento: 'Finanzas',
        sucursal: 3,
        activo: true,
        CURP: 'GARP950310HDFXYZ02',
        RFC: 'GARP950310XXX',
        NSS: '56789012304567'
      },
      {
        idEmpleado: 4,
        nombre: 'Ana',
        apellidos: 'Martínez García',
        sexo: 'Femenino',
        fechaNacimiento: '1992-08-05',
        domicilio: 'Calle Secundaria #321',
        telefono: '2345678901',
        correoElectronico: 'ana@example.com',
        salario: 22000,
        puesto: 'Jefe de Recursos Humanos',
        areaDepartamento: 'Recursos Humanos',
        sucursal: 4,
        activo: false,
        CURP: 'MAGA920805MDFXYZ08',
        RFC: 'MAGA920805XXX',
        NSS: '23456789012345'
      },
      {
        idEmpleado: 5,
        nombre: 'Carlos',
        apellidos: 'Hernández Juárez',
        sexo: 'Masculino',
        fechaNacimiento: '1987-12-25',
        domicilio: 'Calle Principal #999',
        telefono: '3456789012',
        correoElectronico: 'carlos@example.com',
        salario: 19000,
        puesto: 'Asistente Administrativo',
        areaDepartamento: 'Administración',
        sucursal: 5,
        activo: false,
        CURP: 'HEJC871225MDFXYZ03',
        RFC: 'HEJC871225XXX',
        NSS: '34567890123456'
      }
    ];
  }

  getEmpleados(): Empleado[] {
    return this.empleados;
  }

  getNuevoEmpleado(): Empleado {
    return {
      idEmpleado: this.empleados[this.empleados.length - 1].idEmpleado! + 1,
      nombre: '',
      apellidos: '',
      sexo: 'Masculino',
      fechaNacimiento: 'dd/mm/yyyy',
      domicilio: '',
      telefono: '',
      correoElectronico: '',
      salario: 0,
      puesto: '',
      areaDepartamento: '',
      sucursal:  1,
      activo: true,
      CURP: '',
      RFC: '',
      NSS: ''
    }
  }

  getEmpleadoById(empleadoId: number): Empleado {
    const [ empleado ] = this.empleados.filter(empleado => empleado.idEmpleado === empleadoId);
    return empleado;
  }

  createEmpleado(empleado: Empleado): void {
    this.empleados.push(empleado);
  }

  deleteEmpleado(empleadoId: number): void {
    const [ empleado ] = this.empleados.filter(empleado => empleado.idEmpleado === empleadoId);
    this.empleados.splice(this.empleados.indexOf(empleado), 1);
  }

  updateEmpleado(empleado: Empleado): void {
    this.empleados[this.empleados.indexOf(empleado)] = empleado;
  }

  getCantidadEmpleadosActivos(): number {
    return this.empleados.filter(empleado => empleado.activo).length;
  }
}
