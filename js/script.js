// Generador de productos

function Productos(nombre,categoria,precio){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
}

let myGame1 = new Productos("Ufc 3","fight",2000);
let myGame2 = new Productos("Diablo 3","RPG",890);
let myGame3 = new Productos("PES 21","sports",1000);
let myGame4 = new Productos("Fifa 21","sports",4000);

// Carrito de compras

function carritoDeCompras(){
    this.productos = [] ;
    this.cantidad = 0;
    this.total = 0;

    this.agregarAlCarrito = function (nuevoProducto){
        this.productos.push(nuevoProducto);
        this.cantidad += 1;
        console.log(`Se agrego un nuevo producto al carrito "${nuevoProducto.nombre}"`);
        console.log(`Total de elementos en el carrito ${this.cantidad} productos`);
    }

    this.eliminarArticuloDelCarrito = function(articuloAEliminar){
        var posicionDelArticulo = 0;
        for (var articuloIterador = 0; articuloIterador < this.productos.length; articuloIterador++) {
            if (this.productos[articuloIterador] == articuloAEliminar) {
                posicionDelArticulo = articuloIterador;  
            }   
        }    
            this.productos.splice(posicionDelArticulo);
            this.cantidad -= 1;
            console.log(`Se elimino del carrito "${articuloAEliminar.nombre}"`);
            console.log(`Total de elementos en el carrito ${this.cantidad}`);
            
        }
    this.limpiarCarrito = function(){
        this.productos = [];
        this.cantidad = 0;
        console.log("Se ha limpiado el carrito");
        console.log(`Total de elementos en el carrito ${this.cantidad}`)
        }    
}

// Programa principal
 
var carrito = new carritoDeCompras();
carrito.agregarAlCarrito();
carrito.agregarAlCarrito();
carrito.eliminarArticuloDelCarrito();
carrito.agregarAlCarrito();
carrito.limpiarCarrito();
console.log();

