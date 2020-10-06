import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-registro-persona',
  templateUrl: './registro-persona.component.html',
  styleUrls: ['./registro-persona.component.css']
})
export class RegistroPersonaComponent implements OnInit {
  nombre: string;
  apellido: string;
  sexo: string;
  edad: string;
  constructor() { }

  ngOnInit(): void {
  }

}
