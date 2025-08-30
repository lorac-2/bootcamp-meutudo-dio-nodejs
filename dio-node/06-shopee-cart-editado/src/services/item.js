class Item {
  constructor(name, price, quantity = 1) {
    if (!name || typeof name !== 'string') throw new Error('Nome inválido');
    if (typeof price !== 'number' || price < 0) throw new Error('Preço inválido');
    if (typeof quantity !== 'number' || quantity < 0) throw new Error('Quantidade inválida');

    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.discount = 0; // valor padrão
  }

  subtotal() {
    return this.price * this.quantity * (1 - this.discount);
  }
}

export default Item;