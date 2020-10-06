import { Injectable } from '@angular/core';
import { Persona } from '../modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  total: number;
  constructor() { }
  get(): Persona[] {
    return JSON.parse(localStorage.getItem('datos'));
  }
  post(persona: Persona){
    let personas: Persona[] = [];
    if (this.get() != null) {
      personas=this.get();
    }
    personas.push(persona);
    localStorage.setItem('datos', JSON.stringify(personas));
  }
  suma(): number{
    this.get();
    var lista = this.get();
    for (let index = 0; index < this.get().length; index++) {
      this.total = this.total + lista[index].ValorApoyoRecivido; 
    }
    return this.total;
  }
}
