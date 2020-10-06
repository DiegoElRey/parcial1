import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RegistroPersonaComponent } from './registro-persona/registro-persona.component';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroPersonaComponent
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
