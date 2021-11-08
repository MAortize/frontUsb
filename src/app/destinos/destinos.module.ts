import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinosRoutingModule } from './destinos-routing.module';
import { ListadoComponent } from './listados/listado/listado.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    DestinosRoutingModule,
    MaterialModule
  ]
})
export class DestinosModule { }
