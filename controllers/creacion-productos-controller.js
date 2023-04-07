import {productService} from "../service/product-service.js";

const form = document.querySelector("[data-form-agregar]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const imagen = document.querySelector("[data-url-imagen]").value
  const nombre = document.querySelector("[data-agregar-nombre]").value
  const precio = document.querySelector("[data-agregar-precio]").value
  const categoria = document.querySelector("[data-agregar-categoria]").value
  const descripcion = document.querySelector("[data-agregar-descripcion]").value

  productService.crearProducto(imagen, nombre, precio, categoria, descripcion)
    .then( respuesta => {
      window.location.href = '../screens/productos.html'
      console.log(respuesta);
    }).catch (error => {
        console.log(error)
  })
});
