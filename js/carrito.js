// carrito.js

// Obtenemos referencias a elementos importantes
const cartCount = document.querySelector('.cart-count');
const buyButtons = document.querySelectorAll('.buy-button');

// Carrito como array de productos
let cart = [];

// Función para actualizar el contador visual del carrito
function updateCartCount() {
  cartCount.textContent = `(${cart.length})`;
}

// Función para calcular el total del carrito
function calculateTotal() {
  return cart.reduce((total, product) => total + product.price, 0);
}

// Función para mostrar el resumen del carrito
function showCartSummary() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío.');
    return;
  }

  let summary = 'Productos en tu carrito:\n\n';
  cart.forEach((product, index) => {
    summary += `${index + 1}. ${product.name} - $${product.price.toLocaleString()}\n`;
  });

  summary += `\nTotal: $${calculateTotal().toLocaleString()}`;

  alert(summary);
}

// Agregamos evento click a cada botón Comprar
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Obtenemos la tarjeta del producto (padre)
    const productCard = button.closest('.product-card');
    const name = productCard.querySelector('h2').textContent;
    const priceText = productCard.querySelector('.price').textContent;
    // Extraemos el número del precio (removiendo $ y puntos)
    const price = Number(priceText.replace(/[^0-9]/g, ''));

    // Agregamos producto al carrito
    cart.push({ name, price });

    // Actualizamos contador
    updateCartCount();

    // Confirmamos al usuario
    alert(`Agregaste "${name}" al carrito.`);
  });
});

// Botón para mostrar el carrito
const cartDiv = document.querySelector('.cart');
const showCartBtn = document.createElement('button');
showCartBtn.textContent = 'Ver carrito';
showCartBtn.style.marginLeft = '10px';
showCartBtn.style.padding = '5px 10px';
showCartBtn.style.cursor = 'pointer';
showCartBtn.style.border = 'none';
showCartBtn.style.borderRadius = '5px';
showCartBtn.style.backgroundColor = '#38003c';
showCartBtn.style.color = 'white';

showCartBtn.addEventListener('click', showCartSummary);
cartDiv.appendChild(showCartBtn);
