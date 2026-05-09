/* ═══════════════════════════════════════════════════════════════
   CLASE: Cart
   Corresponde al UML: items[], userId
   Métodos: addItem(), removeItem(), getTotal()
═══════════════════════════════════════════════════════════════ */
class Cart {
  constructor(userId = null) {
    this.items  = [];   // CartItem[]
    this.userId = userId;
  }

  // addItem(p, qty) — método del UML
  addItem(product, qty = 1, size = 'M') {
    const existing = this.items.find(
      i => i.product.id === product.id && i.size === size
    );
    if (existing) {
      existing.quantity += qty;
    } else {
      this.items.push(new CartItem(product, qty, size));
    }
  }

  // removeItem(id) — método del UML
  removeItem(productId, size) {
    this.items = this.items.filter(
      i => !(i.product.id === productId && i.size === size)
    );
  }

  updateQty(productId, size, delta) {
    const item = this.items.find(
      i => i.product.id === productId && i.size === size
    );
    if (!item) return;
    item.quantity = Math.max(1, item.quantity + delta);
  }

  // getTotal(): number — método del UML
  getTotal() {
    return this.items.reduce((sum, i) => sum + i.getSubtotal(), 0);
  }

  getTotalQty() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  clear()   { this.items = []; }
  isEmpty() { return this.items.length === 0; }
}
