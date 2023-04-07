const formularioFooter = document.querySelector('[data-form-footer]');
const nombreMsj = document.querySelector("[data-form-nombre]");
const textarea = document.querySelector("[data-form-textarea]");
const btnEnviar = document.querySelector("[data-form-enviar]");

const imagen = document.querySelector("[data-url-imagen]");
const nombre = document.querySelector("[data-agregar-nombre]");
const precio = document.querySelector("[data-agregar-precio]");
const categoria = document.querySelector("[data-agregar-categoria]");
const descripcion = document.querySelector("[data-agregar-descripcion]");
const btnRegistarProducto = document.querySelector("[data-agregar-producto]");


document.addEventListener('DOMContentLoaded', () => {

    btnEnviar.classList.add("btn-desactivado");
    btnEnviar.disabled = true;

    nombreMsj.addEventListener('blur', validarForm);
    textarea.addEventListener('blur', validarForm);

    formularioFooter.addEventListener('submit', enviarForm);

})



function enviarForm(e) {
    // e.preventDefault()

    mostrarMensaje('Mensaje enviado', 'succes');
    setTimeout(() => {
        formularioFooter.reset();
    }, 3000);
}


function validarForm(e) {

    if (e.target.value === '') {

        mostrarMensaje(`Este campo no puede estar vacío`, 'error');
        e.target.classList.add('campo-error');

    } else {
        e.target.classList.remove('campo-error');
    }

    if (nombreMsj.value != '' && textarea.value != '') {
        btnEnviar.classList.remove('btn-desactivado');
        btnEnviar.disabled = false;
    }

}

function mostrarMensaje(msj, tipo) {

    const error = document.querySelector("[data-form-error]");
    const mensaje = document.createElement('p');

    mensaje.classList.add(tipo);
    mensaje.textContent = msj;

    error.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}

iniciarApp();
function iniciarApp() {

    btnRegistarProducto.classList.add('btn-desactivado');
    btnRegistarProducto.disabled = true;

    nombre.addEventListener('blur', validarForm2);
    precio.addEventListener('blur', validarForm2);
    imagen.addEventListener('blur', validarForm2);
    categoria.addEventListener('blur', validarForm2);
    descripcion.addEventListener('blur', validarForm2);

}

function validarForm2(e) {
    e.preventDefault();

    if (e.target.value === '') {

        mostrarMensaje2(`El campo ${e.target.id} no puede estar vacío`, 'error');
        e.target.classList.add('campo-error');

    } else {
        e.target.classList.remove('campo-error');
    }

    if (nombre.value != '' && precio.value != '' && imagen.value != '' && categoria.value != '' && descripcion.value != '') {
        btnRegistarProducto.classList.remove('btn-desactivado');
        btnRegistarProducto.disabled = false;
    }

}

function mostrarMensaje2(msj, tipo) {

  const error = document.querySelector('.cont-errores');
  const mensaje = document.createElement('p');

  mensaje.classList.add(tipo);
  mensaje.textContent = msj;

  error.appendChild(mensaje);

  setTimeout(() => {
      mensaje.remove();
  }, 3000);
}