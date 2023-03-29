import {productService} from "../service/product-service.js";


const containerProducto = document.querySelector("[data-vista-producto]");

const url = new URL(window.location);
const idURL = Number(url.searchParams.get("id"));


function obtenerInfoProducto(nombre, precio, descripcion, imagen) {

    if (idURL === null) {
        window.location.href = "./index.html";
    }

    const vistaProducto = document.createElement("div");
    vistaProducto.classList.add("vista_producto");

    const contenido = `
            <img src="${imagen}" alt="${nombre}" class="vista_producto-img">
            <div class="vista_producto-texto">
                <h2 class="productos_listado-titulo">${nombre}</h2>
                <p class="producto-precio">${precio}</p>
                <p class="vista_producto-parrafo">${descripcion}</p>
            </div>
        `;


    vistaProducto.innerHTML = contenido;

    return vistaProducto;
}



productService.listaProductos()
    .then(async respuesta => {

        for (let i = 0; i < respuesta.length; i++) {

            const id = await respuesta[i].id;
            const imagen = await respuesta[i].imagen;
            const nombre = await respuesta[i].nombre;
            const descripcion = await respuesta[i].descripcion;
            const precio = await respuesta[i].precio;

            if (Number(id) === idURL) {
                
                const mostrarProducto = obtenerInfoProducto(nombre, precio, descripcion, imagen, id);
                containerProducto.appendChild(mostrarProducto);

                return;
            }
        }
    })



function masProductos(id, nombre, imagen, precio, link) {

    const otrosProductos = document.createElement("div");
    otrosProductos.classList.add("product-card");
    const contenido = `
    <a href="${link}?id=${id}" data-verproducto><img src="${imagen}" alt="${nombre}" class="producto_img"></a>
    <div class="product-info">
        <p>${nombre}</p>
        <p>${precio}</p>
        <a href="${link}?id=${id}" type="button" class="producto_enlace" data-verproducto>Ver producto</a>
    </div>
    `;

    otrosProductos.innerHTML = contenido;

    return otrosProductos;
}

const contenedorProductos = document.querySelector("[data-mas-productos]");

productService.listaProductos()
    .then(async respuesta => {

        let contador = 0;
        let nuevoArray = [];
        do {
            const max = respuesta.length;
            const aleatorio = Math.floor(Math.random() * max);
            nuevoArray.push(respuesta[aleatorio]);

            contador++;

        } while (contador < 6);

        nuevoArray.forEach(({ id, nombre, imagen, precio, link }) => {

            const productoAleatorio = masProductos(id, nombre, imagen, precio, link);
            contenedorProductos.appendChild(productoAleatorio);

        })

    })
    .catch(error => console.log(error));