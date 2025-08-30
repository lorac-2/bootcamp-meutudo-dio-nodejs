import Item from './services/item.js';
import {
  addItem,
  deleteItem,
  removeItem,
  updateQuantity,
  applyCoupon,
  calculateTotal,
  displayCart,
  saveCart,
  loadCart
} from './services/cart.js';

// 🔄 Carregar carrinho existente ou iniciar novo
let userCart = loadCart();

// 🛍️ Adicionar produtos
const tenis = new Item("Tênis Nike", 299.90, 2);
const fone = new Item("Fone JBL", 149.90, 1);

addItem(userCart, tenis);
addItem(userCart, fone);

// 👀 Exibir carrinho
console.log("\n📦 Carrinho após adicionar produtos:");
displayCart(userCart);

// 🎟️ Aplicar cupom
applyCoupon(userCart, 'DESC10');

// 🔄 Atualizar quantidade
updateQuantity(userCart, "Fone JBL", 3);

// 🧾 Calcular total com frete (CEP de Cabo Frio)
calculateTotal(userCart, "28900-000");

// 🗑️ Remover uma unidade
removeItem(userCart, "Tênis Nike");

// 💾 Salvar carrinho
saveCart(userCart);