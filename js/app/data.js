/* ═══════════════════════════════════════════════════════════════
   DATA SEED
   Usuarios y productos de demo para inicializar la App
═══════════════════════════════════════════════════════════════ */

const SEED_USERS = [
  { id: 'u1', name: 'Admin', email: 'admin@wilddrop.com', password: 'admin123', role: 'admin' },
  { id: 'u2', name: 'Carlos Rueda', email: 'carlos@test.com', password: '123456', role: 'customer' },
];

const SEED_PRODUCTS = [
  {
    id: 'p1', name: 'VOID HOODIE', price: 185, category: 'Hoodies', stock: 12,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80',
    description: 'Engineered for the urban vanguard. Crafted from 500GSM custom-milled loopback jersey. Dropped shoulders, double-layered oversized hood, industrial wash.',
    drop: 'Drop 04 — Limited Edition',
    sizes: ['XS','S','M','L'],
    specs: { 'Tejido': '100% Algodón Orgánico', 'Peso': '500 GSM', 'Origen': 'Portugal', 'Fit': 'Boxy / Oversized' },
    accordions: [
      { title: 'Especificaciones Técnicas', body: 'Tela: 100% Algodón Orgánico. Peso: 500 GSM Heavy Jersey. Origen: Fabricado en Portugal. Fit: Boxy, silueta oversized.' },
      { title: 'Envíos y Devoluciones', body: 'Envío exprés global disponible. Devoluciones aceptadas dentro de 14 días de entrega. Solo crédito en tienda por la naturaleza limitada del drop.' },
    ]
  },
  {
    id: 'p2', name: 'SYSTEM TEE', price: 75, category: 'T-Shirts', stock: 30,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    description: 'Camiseta esencial de corte boxy. Algodón de primera calidad con logo bordado en el pecho. El uniforme del explorador urbano.',
    drop: 'New',
    sizes: ['XS','S','M','L','XL'],
    specs: { 'Tejido': '100% Algodón Pima', 'Peso': '220 GSM', 'Origen': 'Perú', 'Fit': 'Boxy / Regular' },
    accordions: [
      { title: 'Especificaciones Técnicas', body: 'Tejido: 100% Algodón Pima Peruano. Peso: 220GSM. Logo bordado a máquina. Corte unisex.' },
    ]
  },
  {
    id: 'p3', name: 'OBSIDIAN BEANIE', price: 55, category: 'Accesorios', stock: 5,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80',
    description: 'Gorro oversized en tejido grueso de carbón. Punto estructurado para un perfil limpio y urbano.',
    drop: 'Drop 04',
    sizes: ['Única'],
    specs: { 'Material': '100% Lana Merino', 'Talla': 'Única', 'Origen': 'Italia', 'Fit': 'Oversized' },
    accordions: [
      { title: 'Cuidado', body: 'Lavar a mano en agua fría. No centrifugar. Secar plano.' },
    ]
  },
  {
    id: 'p4', name: 'CORE PARKA', price: 310, category: 'Outerwear', stock: 0,
    image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80',
    description: 'Parka técnica urbana de alto rendimiento. Múltiples bolsillos técnicos y herrajes metálicos. Agotada por ahora.',
    drop: 'Drop 03 — Sold Out',
    sizes: ['S','M','L','XL'],
    specs: { 'Material': 'Nylon Técnico', 'Relleno': 'Plumón 600-fill', 'Origen': 'Japón', 'Fit': 'Regular' },
    accordions: [
      { title: 'Características', body: '8 bolsillos técnicos. Impermeabilidad DWR. Capucha desmontable. Herrajes YKK.' },
    ]
  },
  {
    id: 'p5', name: 'PLATINUM RUNNER', price: 240, category: 'Footwear', stock: 8,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    description: 'Zapatillas urbanas premium en plata metálico y negro. Materiales técnicos con construcción artesanal.',
    drop: 'Drop 04',
    sizes: ['40','41','42','43','44','45'],
    specs: { 'Upper': 'Mesh Técnico + Cuero', 'Suela': 'Caucho Vulcanizado', 'Origen': 'Italia', 'Fit': 'True to size' },
    accordions: [
      { title: 'Tecnología', body: 'Upper en mesh técnico transpirable. Suela de caucho vulcanizado para máxima tracción. Plantilla Memory Foam.' },
    ]
  },
  {
    id: 'p6', name: 'STEEL CARGO', price: 165, category: 'Pants', stock: 15,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    description: 'Pantalón cargo técnico con silueta estructurada. Múltiples bolsillos utilitarios con cremalleras YKK.',
    drop: 'Drop 04',
    sizes: ['XS','S','M','L','XL'],
    specs: { 'Material': 'Cotton Ripstop', 'Peso': '280 GSM', 'Origen': 'Portugal', 'Fit': 'Relaxed Tapered' },
    accordions: [
      { title: 'Detalles', body: '6 bolsillos. Cremalleras YKK en todos los bolsillos. Tiro medio. Bajo ajustable con cordón.' },
    ]
  },
  {
    id: 'p7', name: 'URBAN JACKET', price: 220, category: 'Outerwear', stock: 3,
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80',
    description: 'Chaqueta ligera de transición con tratamiento DWR. Silueta oversized con detalles reflectivos.',
    drop: 'Drop 04',
    sizes: ['S','M','L','XL'],
    specs: { 'Material': 'Ripstop Nylon', 'Tratamiento': 'DWR', 'Origen': 'Corea', 'Fit': 'Oversized' },
    accordions: [
      { title: 'Características', body: 'Detalles reflectivos 3M. Empaquetable en bolsillo. Capucha integrada.' },
    ]
  },
  {
    id: 'p8', name: 'DARK LOGO TEE', price: 85, category: 'T-Shirts', stock: 20,
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&q=80',
    description: 'Camiseta premium con gráfico grande en serigrafía al frente. Algodón heavyweight 280GSM.',
    drop: 'New',
    sizes: ['XS','S','M','L','XL'],
    specs: { 'Material': '100% Algodón', 'Peso': '280 GSM', 'Origen': 'Portugal', 'Fit': 'Boxy' },
    accordions: [
      { title: 'Gráfico', body: 'Serigrafía a 6 tintas. Proceso de curing especial para durabilidad del estampado.' },
    ]
  },
];
