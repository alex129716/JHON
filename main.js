// PRODUCTOS
const productos = [
    // abrigos
    {
        id: "abrigo-01",
        titulo: "abrigo 01",
        imagen: "imagenes/IMG.04.jpg",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "abrigo 02",
        imagen: "imagenes/IMG.04.jpg",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "abrigo 03",
        imagen: "imagenes/IMG.04.jpg",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "abrigo 04",
        imagen: "imagenes/IMG.04.jpg",
        categoria: {
            nombre: "abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "imagenes/IMG.04.jpg",
        categoria: {
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    // Camisetas
    {
        id: "camiseta-01",
        titulo: "Camiseta 01",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Camiseta 02",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Camiseta 03",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-04",
        titulo: "Camiseta 04",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-05",
        titulo: "Camiseta 05",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-06",
        titulo: "Camiseta 06",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-07",
        titulo: "Camiseta 07",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-08",
        titulo: "Camiseta 08",
        imagen: "imagenes/Camisa0001.jpg",
        categoria: {
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    // Pantalones
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "imagenes/pantalones00001.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "imagenes/pantalones00001.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "imagenes/pantalones00001.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "imagenes/pantalones00001.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "imagenes/pantalones00001.jpeg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];



const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

        contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
                <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles">
                     <h3 class="producto-titulo">${producto.titulo}</h3>
                     <p class="producto-precio">$${producto.precio}</p>
                     <button class="producto-agregar" id="${producto.id}">agregar</button>
                </div>      
        `;

        contenedorProductos.append(div);
        
    })

        actualizarBotonesAgregar();
        console.log(botonesAgregar);
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e) => {

            botonesCategorias.forEach(boton => boton.classList.remove("active"));          
            e.currentTarget.classList.add("active");


            if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos)
        } 
        })
});
function actualizarBotonesAgregar(){
botonesAgregar = document.querySelectorAll(".producto-agregar");


botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlcarrito);

});

}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);

} else {
    productosEnCarrito = [];
}
actualizarNumerito();

function agregarAlcarrito(e){

    const idBoton= e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id ===idBoton);
       productosEnCarrito[index].cantidad++;
     
    } else {
         productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
       
    }
    
    actualizarNumerito()
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))

}
function actualizarNumerito(){ 
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}



     



  

    
    
