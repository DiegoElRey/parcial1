import { Component, OnInit } from '@angular/core';
import { Persona } from '../modelos/persona';
import { PersonaService } from '../services/persona.service';
@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {
  persona : Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona;
  }
  agregar() {
    alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }
}
