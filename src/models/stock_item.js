class StockItem {
  constructor(name, quantity, strength) {
    this.id = 3;
    this.name = name;
    this.createdAt = 2018;
    this.strength = strength+'°';
    this.quantity = Number(quantity);
    this.lastConsumedAt = new Date(2018, 11, 5);
  }

  get properties() {
    return ({
      id: this.id,
      name: this.name,
      createdAt: this.createdAt,
      strength: this.strength,
      quantity: this.quantity,
      lastConsumedAt: this.lastConsumedAt,
    });
  }
}

export default StockItem;
