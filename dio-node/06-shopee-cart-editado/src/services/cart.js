import fs from 'fs';
import Item from './item.js';

// 1️⃣ Adicionar item
function addItem(userCart, newItem) {
  const existing = userCart.find(item => item.name === newItem.name);
  if (existing) {
    existing.quantity += newItem.quantity;
  } else {
    userCart.push(newItem);
  }
}

// 2️⃣ Mostrar carrinho
function displayCart(userCart) {
  console.log("\n🛒 Seu Carrinho:");
  userCart.forEach((item, index) => {
    const subtotal = item.subtotal();
    console.log(`${index + 1}. ${item.name} - R$${item.price} x ${item.quantity} | Subtotal: R$${subtotal.toFixed(2)}`);
  });
}

// 3️⃣ Deletar item pelo nome
function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
    console.log(`Item "${name}" removido.`);
  } else {
    console.log(`Item "${name}" não encontrado.`);
  }
}

// 4️⃣ Remover uma unidade
function removeItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);
  if (index === -1) {
    console.log(`Item "${name}" não encontrado.`);
    return;
  }

  if (userCart[index].quantity > 1) {
    userCart[index].quantity -= 1;
    console.log(`Quantidade de "${name}" reduzida para ${userCart[index].quantity}.`);
  } else {
    userCart.splice(index, 1);
    console.log(`Item "${name}" removido do carrinho.`);
  }
}

// 5️⃣ Atualizar quantidade diretamente
function updateQuantity(userCart, name, newQuantity) {
  const item = userCart.find(i => i.name === name);
  if (!item) {
    console.log(`Item "${name}" não encontrado.`);
    return;
  }
  item.quantity = newQuantity;
  console.log(`Quantidade de "${name}" atualizada para ${newQuantity}.`);
}

// 6️⃣ Aplicar cupom
function applyCoupon(userCart, couponCode) {
  const discounts = {
    'DESC10': 0.10,
    'DESC20': 0.20,
    'FRETEGRATIS': 0.00
  };
  const discount = discounts[couponCode] || 0;

  userCart.forEach(item => {
    item.discount = discount;
  });

  console.log(`Cupom "${couponCode}" aplicado com ${discount * 100}% de desconto.`);
}

// 7️⃣ Calcular frete por CEP
function calculateShipping(cep) {
  cep = String(cep);
  if (cep.startsWith('28')) return 10.00;
  if (cep.startsWith('20')) return 20.00;
  return 30.00;
}

// 8️⃣ Calcular total com frete
function calculateTotal(userCart, cep = '') {
  const cartTotal = userCart.reduce((total, item) => {
    return total + item.subtotal();
  }, 0);

  const shipping = cep ? calculateShipping(cep) : 0;
  const finalTotal = cartTotal + shipping;

  console.log(`\n🧾 TOTAL: R$${finalTotal.toFixed(2)} (Frete: R$${shipping.toFixed(2)})`);
}

// 9️⃣ Salvar carrinho
function saveCart(userCart) {
  const plainCart = userCart.map(item => ({
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    discount: item.discount || 0
  }));

  fs.writeFileSync('cart.json', JSON.stringify(plainCart, null, 2));
  console.log("💾 Carrinho salvo.");
}

// 🔟 Carregar carrinho
function loadCart() {
  if (!fs.existsSync('cart.json')) return [];
  const data = fs.readFileSync('cart.json');
  console.log("📥 Carrinho carregado.");

  const rawItems = JSON.parse(data);
  return rawItems.map(obj => {
    const item = new Item(obj.name, obj.price, obj.quantity);
    item.discount = obj.discount || 0;
    return item;
  });
}

export {
  addItem,
  deleteItem,
  removeItem,
  updateQuantity,
  applyCoupon,
  calculateTotal,
  displayCart,
  saveCart,
  loadCart
};