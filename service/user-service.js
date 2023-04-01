async function listaUsuarios() {

    return await fetch("http://localhost:3000/admins")
        .then(respuesta => respuesta.json());
};

async function crearCliente(email, password) {

    return await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    });
};


export const usuariosServices = {
    listaUsuarios,
    crearCliente
};