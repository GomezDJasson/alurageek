//GET

async function listaProductos() {
    return await fetch("http://localhost:3000/productos")
        .then(respuesta => respuesta.json());
};

async function crearProducto (nombre, precio, descripcion, categoria, imagen) {
    return await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, precio, descripcion, categoria, imagen})
    }).then(respuesta =>{
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("El producto no fue creado")
};

export const productService = {
    listaProductos,
    crearProducto
};