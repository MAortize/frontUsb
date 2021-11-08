import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path:'',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'listaDestinos',
    loadChildren: () => import('./destinos/destinos.module').then(m => m.DestinosModule)
  },

  {
    path:'listaClientes',
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
