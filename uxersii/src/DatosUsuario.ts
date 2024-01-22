export interface DatosUsuario {
    mensaje: string;
    nombUserH: string;
    nombre: string;
    correoH: string;
    contra: string;
    apellidoPat: string;
  }
  

  
  export class Usuario {
    private datos: DatosUsuario;
  
    constructor(datos: DatosUsuario) {
      this.datos = datos;
    }
  
    obtenerDatos(): DatosUsuario {
      return { ...this.datos }; // Devolver una copia de los datos para evitar modificaciones externas
    }
  
    // Setters y getters para las variables de instancia
  
    get mensaje(): string {
      return this.datos.mensaje;
    }
  
    set mensaje(value: string) {
      this.datos.mensaje = value;
    }
  
    get nombUserH(): string {
      return this.datos.nombUserH;
    }
  
    set nombUserH(value: string) {
      this.datos.nombUserH = value;
    }
  
    get nombre(): string {
      return this.datos.nombre;
    }
  
    set nombre(value: string) {
      this.datos.nombre = value;
    }
  
    get correoH(): string {
      return this.datos.correoH;
    }
  
    set correoH(value: string) {
      this.datos.correoH = value;
    }
  
    get contra(): string {
      return this.datos.contra;
    }
  
    set contra(value: string) {
      this.datos.contra = value;
    }
  
    get apellidoPat(): string {
      return this.datos.apellidoPat;
    }
  
    set apellidoPat(value: string) {
      this.datos.apellidoPat = value;
    }
  }
  