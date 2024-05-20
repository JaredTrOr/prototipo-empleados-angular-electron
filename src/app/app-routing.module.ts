import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { ListaSucursalesComponent } from './pages/lista-sucursales/lista-sucursales.component';
import { ListaMovimientosComponent } from './pages/lista-movimientos/lista-movimientos.component';
import { ModificarEmpleadoComponent } from './pages/modificar-empleado/modificar-empleado.component';
import { ModificarSucursalComponent } from './pages/modificar-sucursal/modificar-sucursal.component';
import { AltasBajasComponent } from './pages/altas-bajas/altas-bajas.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'lista-empleados',
    component: ListaEmpleadosComponent
  },
  {
    path: 'modificar-empleado/:id',
    component: ModificarEmpleadoComponent
  },
  {
    path: 'sucursal',
    component: SucursalComponent
  },
  {
    path: 'lista-sucursales',
    component: ListaSucursalesComponent
  },
  {
    path: 'modificar-sucursal/:id',
    component: ModificarSucursalComponent
  },
  {
    path: 'lista-movimientos',
    component: ListaMovimientosComponent
  },
  {
    path: 'altas-bajas',
    component: AltasBajasComponent 
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
