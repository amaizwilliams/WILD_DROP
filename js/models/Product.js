/* ═══════════════════════════════════════════════════════════════
   CLASE: Product
   Corresponde al UML: id, name, price, category, stock, image
═══════════════════════════════════════════════════════════════ */
class Product {
  constructor({ id, name, price, category, stock, image, description, drop, sizes, specs, accordions }) {
    this.id          = id;
    this.name        = name;
    this.price       = price;
    this.category    = category;
    this.stock       = stock;
    this.image       = image;
    this.description = description;
    this.drop        = drop || 'Drop 04';
    this.sizes       = sizes || ['XS','S','M','L','XL'];
    this.specs       = specs || {};
    this.accordions  = accordions || [];
  }

  // getInfo(): string — método del UML
  getInfo() {
    return `${this.name} — ${this.category} — $${this.price.toFixed(2)} — Stock: ${this.stock}`;
  }

  isAvailable() { return this.stock > 0; }

  formatPrice() { return `$${this.price.toFixed(2)}`; }

  getTag() {
    if (!this.isAvailable()) return { text: 'Sold Out',       cls: 'sold-out' };
    if (this.stock <= 5)     return { text: 'Últimas Unidades', cls: 'limited'  };
    if (this.drop === 'New') return { text: 'New Arrival',    cls: ''         };
    return null;
  }
}
