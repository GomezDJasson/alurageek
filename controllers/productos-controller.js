import {productService} from "../service/product-service.js";

const containerStar = document.querySelector("[data-product-starwars]");
const containerConsolas = document.querySelector("[data-product-consolas]");
const containerDiversos = document.querySelector("[data-product-diversos]");

const nuevoProducto = (nombre, precio, descripcion, categoria, imagen, id, link) => {
    const card = document.createElement("div");
    card.classList.add("product-card")
    const contenido = `
    <a href="${link}?id=${id}" data-verproducto><img src="${imagen}" alt="${nombre}"></a>
    <div class="product-info">
        <p>${nombre}</p>
        <p>${precio}</p>
        <a href="${link}?id=${id}" type="button" class="producto_enlace" data-verproducto>Ver producto</a>
    </div>
    `

    card.innerHTML = contenido
    // card.dataset.id = id

    return card
}

productService.listaProductos()
    .then(async respuesta => {
        try {

            await respuesta.forEach(({ nombre, precio, descripcion, categoria, imagen, id, link }) => {
                const nuevaLinea = nuevoProducto(nombre, precio, descripcion, categoria, imagen, id, link);

                switch (categoria) {
                    case "Star War":
                        containerStar.appendChild(nuevaLinea);
                        break;

                    case "Consolas":
                        containerConsolas.appendChild(nuevaLinea);
                        break;

                    case "Diversos":
                        containerDiversos.appendChild(nuevaLinea);

                    default:
                        categoria = "";
                        break;
                }
            })
        } catch (error) {
            console.log(error)
        }

    })
