export interface Persona {
nombre: string;
apellidos: string;
edad: number;
dni: string;
cumpleanos: Date;
colorFavorito: string;
sexo: string;
}

// export class Persona {
//   private nombre: string;
//   private apellidos: string;
//   private edad: number;
//   private dni: number;
//   private cumpleanos: Date;
//   private colorFavorito: string;
//   private sexo: string;

//   constructor(
//     nombre: string,
//     apellidos: string,
//     edad: number,
//     dni: number,
//     cumpleanos: Date,
//     colorFavorito: string,
//     sexo: string
//   ) {
//     this.nombre = nombre;
//     this.apellidos = apellidos;
//     this.edad = edad;
//     this.dni = dni;
//     this.cumpleanos = cumpleanos;
//     this.colorFavorito = colorFavorito;
//     this.sexo = sexo;
//   }

//   public get getNombre(): string {
//     return this.nombre;
//   }

//   public set setNombre(nombre: string) {
//     this.nombre = nombre;
//   }

//   public get getApellidos(): string {
//     return this.apellidos;
//   }

//   public set setApellidos(apellidos: string) {
//     this.apellidos = apellidos;
//   }

//   public get getEdad(): number {
//     return this.edad;
//   }

//   public set setEdad(edad: number) {
//     this.edad = edad;
//   }

//   public get getDni(): number {
//     return this.dni;
//   }

//   public set setDni(dni: number) {
//     this.dni = dni;
//   }

//   public get getCumple(): Date {
//     return this.cumpleanos;
//   }

//   public set setCumple(cumpleaños: Date) {
//     this.cumpleanos = this.cumpleanos;
//   }

//   public get getColor(): string {
//     return this.colorFavorito;
//   }

//   public set setColor(colorFavorito: string) {
//     this.colorFavorito = colorFavorito;
//   }

//   public get getSex(): string {
//     return this.sexo;
//   }

//   public set setSex(sexo: string) {
//     this.sexo = sexo;
//   }
// }
