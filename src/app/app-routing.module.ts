import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { ListaSucursalesComponent } from './pages/lista-sucursales/lista-sucursales.component';
import { ListaMovimientosComponent } from './pages/lista-movimientos/lista-movimientos.component';
import { ModificarEmpleadoComponent } from './pages/modificar-empleado/modificar-empleado.component';

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
    path: 'lista-movimientos',
    component: ListaMovimientosComponent
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
