import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListadoComponent } from './listados/listado/listado.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    MaterialModule
  ]
})
export class ClientesModule { }
