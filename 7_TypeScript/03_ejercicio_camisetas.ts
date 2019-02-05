interface IProducto {
  precio: number;
  mostrar(): void; // any en TS es un tipo

}
class Camiseta implements IProducto {

  precio: number;
  talla: string;
  color: string;

  constructor(pre: number, tall: string, col: string) {
    //dentro del constructor son variables locales

    this.talla = tall;
    this.precio = pre;
    this.color = col;

  }
  mostrar() {
    console.log("Info camisetas: " + this.precio + "€");
    console.log("Talla: " + this.talla);
    console.log("Color: " + this.color);
  }
}

//////////////////////////////////////////////////////////////////////////

class Libro implements IProducto {


  constructor(public precio: number, public titulo: string) {
    // public titulo: string  es una forma exclusiva de TS de introducir variables 


  }
  mostrar() {
    console.log("Info libro: " + this.precio + "€");
    console.log("Título: " + this.titulo);


  }
}

let miLibro : Libro = new Libro(900, "Mi libro");
let camisetaJorge : Camiseta;
camisetaJorge = new Camiseta(17,"L","arcoiris");

let algunProducto : IProducto;
algunProducto = new Camiseta(19, "S","roja");
algunProducto.mostrar();

algunProducto = new Libro(32, "KrV");
algunProducto.mostrar();
algunProducto =miLibro;
algunProducto.mostrar();


//Cuando dejamos una función vacía TS infiere el tipo a partir del return.
//También ocurre con variables.