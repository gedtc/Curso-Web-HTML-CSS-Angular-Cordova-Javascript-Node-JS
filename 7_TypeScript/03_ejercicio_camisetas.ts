interface IProducto {
  //precio: number; //En las interfaces es muy recomendable no poner propiedades.
  mostrar(): void; // any en TS es un tipo
}

class Producto implements IProducto {
  private precio: number; // campo obligatorio
  private nombre: string;
  constructor(pre: number, nom: string) {
    this.precio = pre;
    this.nombre = nom;

  }
  public mostrar() {
    if (this.precio <= 0) {
      //metodo obligatorio
      console.log(`Producto ${this.nombre}, precio: ${this.precio}$`);
    } else {
      console.log("MAl");
    }
  }
  //MÉTODOS DE ACCESO
  //A precio le dejas ser de lectura y escritura
  public getPrecio(): number {
    return this.precio;
  }
  public publsetPrecio(nuevoPrecio: number): void {
    this.precio = nuevoPrecio;
  }
  //A nombre le dejas  solo ser de lectura
  public getNombre(): string {
    return this.nombre;
  }

}


class Camiseta extends Producto {


  private talla: string;
  private color: string;

  constructor(nom: string, pre: number, tall: string, col: string) {
    //dentro del constructor son variables locales
    super(pre, nom);

    this.talla = tall;
    this.color = col;

  }
  mostrar() {
    if (this.getNombre() == "" || this.color == "" || this.talla == "") {
      console.log("MAL");
    } else {
      console.log("Info camisetas: " + this.getPrecio() + "€");
      console.log("Talla: " + this.talla);
      console.log("Color: " + this.color);
    }
  }
}

//////////////////////////////////////////////////////////////////////////

class Libro extends Producto {
  private titulo: string;

  constructor(pre: number, tit: string) {
    super(pre, "Libro");
    this.titulo = tit;
  }
  mostrar() {
    if (this.titulo == "") {
      console.log("MAL");
    } else {
      console.log("Info libro: " + this.getPrecio() + "€");
      console.log("Título: " + this.titulo);
    }
  }
}

let miLibro: Libro = new Libro(900, "Mi libro");
let camisetaJorge: Camiseta;
camisetaJorge = new Camiseta(this.getNombre(), this.getPrecio(), "L", "arcoiris");

let algunProducto: IProducto;
algunProducto = new Camiseta(this.getNombre(), this.getPrecio(), "S", "roja");
algunProducto.mostrar();

algunProducto = new Libro(32, "KrV");
algunProducto.mostrar();
algunProducto = miLibro;
algunProducto.mostrar();



/* 
1 - Poner público lo público y privado lo privado
2 - Terminar de heredar Libro
3 - Usarlos
4 - Validar datos: precionunca puede ser negativo y no puede haber nombres, tallas, títulos, etc. vacios.

*/


/* Es muy típico hacer un array de la clase padre

ej:

let listaProductos : Producto [];
listaProductos[0] = new Camiseta();
listaProductos[1] = new Libro();


*/





/*  let miLibro: Libro = new Libro(900, "Mi libro");
 let camisetaJorge: Camiseta;
 camisetaJorge = new Camiseta(17, "L", "arcoiris");

 let algunProducto: IProducto;
 algunProducto = new Camiseta(19, "S", "roja");
 algunProducto.mostrar();

 algunProducto = new Libro(32, "KrV");
 algunProducto.mostrar();
 algunProducto = miLibro;
 algunProducto.mostrar(); */

//////////////////////////////////////////////////////////////////////////





//Cuando dejamos una función vacía TS infiere el tipo a partir del return.
//También ocurre con variables.