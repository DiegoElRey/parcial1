import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';

const routes: Routes = [
  {
    path: "Registro",
    component: RegistroPersonaComponent
  },
  {
    path: "Consulta",
    component: ConsultarPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
