import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import { PersonaService } from './services/persona.service';
import { ConsultarPersonaComponent } from './consultar-persona/consultar-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroPersonaComponent,
    ConsultarPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
