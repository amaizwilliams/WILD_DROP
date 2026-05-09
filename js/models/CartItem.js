/* ═══════════════════════════════════════════════════════════════
   CLASE: CartItem
   Corresponde al UML: product (ref), quantity
═══════════════════════════════════════════════════════════════ */
class CartItem {
  constructor(product, quantity = 1, size = 'M') {
    this.product  = product;
    this.quantity = quantity;
    this.size     = size;
  }

  // getSubtotal(): number — método del UML
  getSubtotal() {
    return this.product.price * this.quantity;
  }
}
