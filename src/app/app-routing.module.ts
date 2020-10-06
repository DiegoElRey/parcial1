import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';

const routes: Routes = [
  {
    path: "Registro",
    component: RegistroPersonaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
