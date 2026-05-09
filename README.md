# WILD DROP — Premium Streetwear

Proyecto separado en arquitectura modular con POO (Programación Orientada a Objetos).

## Estructura de Carpetas

```
wild-drop/
│
├── index.html              ← Punto de entrada principal
│
├── css/
│   ├── tokens.css          ← Variables CSS, reset, base y animaciones
│   ├── navbar.css          ← Navbar + botones globales
│   ├── home.css            ← Hero, colecciones, brand strip, sección about
│   ├── catalog.css         ← Catálogo, filtros y tarjetas de producto
│   ├── detail.css          ← Vista de detalle de producto y related
│   └── ui.css              ← Cart panel, login modal, toast, footer
│
└── js/
    ├── models/             ← Clases POO (UML)
    │   ├── Product.js      ← Clase Product: id, name, price, category, stock, image
    │   ├── CartItem.js     ← Clase CartItem: product (ref), quantity, getSubtotal()
    │   ├── Cart.js         ← Clase Cart: addItem(), removeItem(), getTotal()
    │   ├── User.js         ← Clase User: login()
    │   └── Order.js        ← Clase Order: getSummary()
    │
    └── app/
        ├── data.js         ← Seed de datos: SEED_USERS, SEED_PRODUCTS
        └── App.js          ← Clase App: renderProducts(), renderCart(), checkout(), manageUsers()
```

## Diagrama de Clases (UML simplificado)

```
Product          CartItem         Cart
────────         ────────         ────
id               product ──────► id
name             quantity         userId
price            size             items[]
category         ────────         ──────
stock            getSubtotal()    addItem()
image                             removeItem()
                                  getTotal()

User             Order            App
────             ─────            ───
id               id               users[]
name             userId           products[]
email            items[]          orders[]
password         total            currentUser
role             status           cart
────             date             ──────────
login()          ──────           renderProducts()
                 getSummary()     renderCart()
                                  checkout()
                                  manageUsers()
```

## Imágenes Insertadas

Las siguientes secciones que antes tenían placeholders ahora tienen imágenes reales:

- **Hero**: Foto editorial de streetwear urbano oscuro (pantalla completa)
- **Sección About**: Foto de tienda/moda urbana en la columna visual
- **Editorial Strip**: 3 fotografías de moda urbana editorial

Todas las imágenes usan Unsplash con estilos: `grayscale`, `brightness` reducido,
y hover que revela el color — consistente con la estética dark de Wild Drop.

## Uso

Abrir `index.html` directamente en el navegador. No requiere servidor ni build tools.

## Credenciales de Demo

| Email                    | Contraseña | Rol      |
|--------------------------|------------|----------|
| admin@wilddrop.com       | admin123   | Admin    |
| carlos@test.com          | 123456     | Customer |
