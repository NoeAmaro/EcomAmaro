// En carrito.js

// Cargar los datos de productos desde productos.json
let productos = JSON.parse(localStorage.getItem('productos')) || [];

if (productos.length === 0) {
  fetch('productos.json')
    .then(response => response.json())
    .then(data => {
      productos = data;
      localStorage.setItem('productos', JSON.stringify(productos));
    })
    .catch(error => {
      console.error('Error al cargar los datos de productos:', error);
    });
}

// Array para almacenar los productos en el carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId) {
  // Buscar el producto en el array de productos
  const producto = productos.find(p => p.id === productoId);
  carrito.push(producto);

  // Guardar el carrito en el localStorage
  localStorage.setItem('carrito', JSON.stringify(carrito));

  // Actualizar la interfaz de usuario
  actualizarCarrito();
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(productoId) {
  // Buscar el índice del producto en el carrito
  const index = carrito.findIndex(producto => producto.id === productoId);

  // Si se encuentra, eliminar el producto del carrito
  if (index