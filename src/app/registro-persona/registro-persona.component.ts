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
    // alert('Se agrego una nueva persona' + JSON.stringify(this.persona));
    const noExisteCedula = this.validarCedula(this.persona.identificacion);
    if (noExisteCedula) {
      this.personaService.post(this.persona);
      alert("Se agrego la persona");
    } else {
      alert("La indentificación ya existe");
    }
  }

  validarCedula(identificacion: any): boolean {
    const datos = this.personaService.get();

    // if (datos && datos.length > 0) {

      if (!datos) {
        return true;
      }
      const cedulaEncontrada = datos.filter(it => it.identificacion == identificacion);
  
      if (cedulaEncontrada.length == 0) {
        return true;
      }

    // }
    return false;
  }
}
