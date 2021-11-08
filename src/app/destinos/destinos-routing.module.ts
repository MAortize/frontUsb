import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listados/listado/listado.component';


const routes: Routes = [{
  path: '', redirectTo:'listado',
},
{
  path:'listado',
  component: ListadoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestinosRoutingModule { }
