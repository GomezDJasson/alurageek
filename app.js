const formularioFooter = document.querySelector('[data-form-footer]');
const nombreMsj = document.querySelector("[data-form-nombre]");
const textarea = document.querySelector("[data-form-textarea]");
const btnEnviar = document.querySelector("[data-form-enviar]");


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