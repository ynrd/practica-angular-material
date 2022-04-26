import { Component } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Formulario Persona';
  persona: Persona = this.newPersona()
  personas: Persona[] = []

  getCurrentPersona() {
    return JSON.stringify(this.persona);
  }

  onAddPerson() {
    console.log("hellow");
    
    this.personas.push({...this.persona})
    this.persona = this.newPersona()
  }

  onSubmit(){
    console.log(this.persona)
  }

  private newPersona(): Persona {
    return {
      nombre: '',
      apellidos: '',
      edad: 0,
      dni: "",
      cumpleanos: new Date(),
      colorFavorito: '',
      sexo: '',
    };
  }
}
