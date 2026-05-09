/* ═══════════════════════════════════════════════════════════════
   CLASE: Order
   Corresponde al UML: id, userId, items, total, status, date
═══════════════════════════════════════════════════════════════ */
class Order {
  constructor(userId, items, total) {
    this.id     = 'ORD-' + Date.now();
    this.userId = userId;
    this.items  = items.map(i => ({ ...i }));
    this.total  = total;
    this.status = 'pending';
    this.date   = new Date();
  }

  // getSummary(): string — método del UML
  getSummary() {
    return `Orden ${this.id} — ${this.items.length} artículos — $${this.total.toFixed(2)} — Estado: ${this.status}`;
  }
}
