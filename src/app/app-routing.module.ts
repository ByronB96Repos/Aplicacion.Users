import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosComponent } from './components/cargos/cargos/cargos.component';
import { DepartamentosComponent } from './components/departamentos/departamentos/departamentos.component';
import { UsuariosComponent } from './components/usuarios/usuarios/usuarios.component';
const routes: Routes = [
  
  { path: 'usuarios', component: UsuariosComponent },
  {
    path: '**', pathMatch: 'full', redirectTo:'usuarios',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
