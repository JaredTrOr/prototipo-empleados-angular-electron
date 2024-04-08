import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ClockComponent } from './pages/clock/clock.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { ListaEmpleadosComponent } from './pages/lista-empleados/lista-empleados.component';
import { SucursalComponent } from './pages/sucursal/sucursal.component';
import { ListaSucursalesComponent } from './pages/lista-sucursales/lista-sucursales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    ClockComponent,
    EmpleadosComponent,
    ListaEmpleadosComponent,
    SucursalComponent,
    ListaSucursalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
