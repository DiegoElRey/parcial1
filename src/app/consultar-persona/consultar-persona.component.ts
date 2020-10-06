import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-consultar-persona',
  templateUrl: './consultar-persona.component.html',
  styleUrls: ['./consultar-persona.component.css']
})
export class ConsultarPersonaComponent implements OnInit {
  public personas: any = [];
  constructor(private personaService: PersonaService) { }
  total: number;
  ngOnInit(): void {
    this.get();
  }
  get(){
    this.personas = this.personaService.get();
    console.log(this.personas);
  }
}
