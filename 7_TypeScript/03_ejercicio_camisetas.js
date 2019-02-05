var Camiseta = /** @class */ (function () {
    function Camiseta(pre, tall, col) {
        //dentro del constructor son variables locales
        this.talla = tall;
        this.precio = pre;
        this.color = col;
    }
    Camiseta.prototype.mostrar = function () {
        console.log("Info camisetas: " + this.precio + "€");
        console.log("Talla: " + this.talla);
        console.log("Color: " + this.color);
    };
    return Camiseta;
}());
//////////////////////////////////////////////////////////////////////////
var Libro = /** @class */ (function () {
    function Libro(precio, titulo) {
        // public titulo: string  es una forma exclusiva de TS de introducir variables 
        this.precio = precio;
        this.titulo = titulo;
    }
    Libro.prototype.mostrar = function () {
        console.log("Info libro: " + this.precio + "€");
        console.log("Título: " + this.titulo);
    };
    return Libro;
}());
var miLibro = new Libro(900, "Mi libro");
var camisetaJorge;
camisetaJorge = new Camiseta(17, "L", "arcoiris");
var algunProducto;
algunProducto = new Camiseta(19, "S", "roja");
algunProducto.mostrar();

algunProducto = new Libro(32, "KrV");
algunProducto.mostrar();
algunProducto = miLibro;
algunProducto.mostrar();
//Cuando dejamos una función vacía TS infiere el tipo a partir del return.
//También ocurre con variables.
