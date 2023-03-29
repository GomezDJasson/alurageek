//GET

async function listaProductos() {

    return await fetch("http://localhost:3000/productos")
        .then(respuesta => respuesta.json());
};

async function crearProducto(nombre, precio, descripcion, categoria, imagen, id, link) {

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, precio, descripcion, categoria, imagen, id, link
        })
    })
};

export const productService = {
    listaProductos,
    crearProducto
}