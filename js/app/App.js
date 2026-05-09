/* ═══════════════════════════════════════════════════════════════
   CLASE: App
   Corresponde al UML: users[], products[], orders[], currentUser
   Métodos: renderProducts(), renderCart(), checkout(), manageUsers()
═══════════════════════════════════════════════════════════════ */
class App {
  constructor() {
    this.users       = [];    // User[]
    this.products    = [];    // Product[]
    this.orders      = [];    // Order[]
    this.currentUser = null;  // User | null
    this.cart        = new Cart();
    this.currentView = 'home';
    this.selectedProduct = null;
    this.selectedSize    = null;
    this.activeFilter    = 'Todos';

    this._initData();
    this._bindDOM();
    this._initTicker();
    this._renderCollections();
    this.renderFilters();
    this.renderProducts();
    this._initScrollObserver();
  }

  // ── DATA SEED ────────────────────────────────────────────────
  _initData() {
    this.users    = SEED_USERS.map(u => new User(u));
    this.products = SEED_PRODUCTS.map(p => new Product(p));
  }

  // ── BIND DOM ─────────────────────────────────────────────────
  _bindDOM() {
    document.querySelectorAll('.nav-link').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.view));
    });
    document.getElementById('nav-logo').addEventListener('click', () => this.navigate('home'));
    document.getElementById('hero-shop-btn').addEventListener('click', () => this.navigate('catalog'));
    document.getElementById('home-catalog-btn').addEventListener('click', () => this.navigate('catalog'));

    document.getElementById('cart-nav-btn').addEventListener('click', () => this.openCart());
    document.getElementById('cart-close-btn').addEventListener('click', () => this.closeCart());
    document.getElementById('cart-overlay').addEventListener('click', () => this.closeCart());
    document.getElementById('btn-clear-cart').addEventListener('click', () => this.clearCart());
    document.getElementById('btn-checkout').addEventListener('click', () => this.checkout());

    document.getElementById('user-nav-btn').addEventListener('click', () => this.openLogin());
    document.getElementById('login-close').addEventListener('click', () => this.closeLogin());
    document.getElementById('login-overlay').addEventListener('click', (e) => {
      if (e.target === document.getElementById('login-overlay')) this.closeLogin();
    });
    document.querySelectorAll('.login-tab').forEach(tab => {
      tab.addEventListener('click', () => this.switchLoginTab(tab.dataset.tab));
    });
    document.getElementById('login-btn').addEventListener('click', () => this.handleLogin());
    document.getElementById('register-btn').addEventListener('click', () => this.handleRegister());
    document.getElementById('logout-btn').addEventListener('click', () => this.handleLogout());

    document.getElementById('bc-home').addEventListener('click', () => this.navigate('home'));
    document.getElementById('bc-catalog').addEventListener('click', () => this.navigate('catalog'));

    document.getElementById('newsletter-btn').addEventListener('click', () => {
      const v = document.getElementById('newsletter-input').value.trim();
      if (!v || !v.includes('@')) { this.toast('Ingresa un correo válido', 'error'); return; }
      document.getElementById('newsletter-input').value = '';
      this.toast('¡Te uniste a la lista de drops! 🔥');
    });

    document.getElementById('btn-add-detail').addEventListener('click', () => this.addToCartFromDetail());
  }

  // ── NAVIGATION ───────────────────────────────────────────────
  navigate(view) {
    this.currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.getElementById(`${view}-view`).classList.add('active');
    document.querySelector(`.nav-link[data-view="${view}"]`)?.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showDetail(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;
    this.selectedProduct = product;
    this.selectedSize    = null;
    this._renderDetail(product);
    this.navigate('detail');
  }

  // ── TICKER ───────────────────────────────────────────────────
  _initTicker() {
    const items = ['Premium Goods','Limited Drops','Urban Culture','500 GSM','Made in Portugal','Wild Drop 2024','Worldwide Shipping'];
    const ticker = document.getElementById('brand-ticker');
    [...items, ...items].forEach(text => {
      const el = document.createElement('div');
      el.className = 'brand-ticker-item';
      el.textContent = text;
      ticker.appendChild(el);
    });
  }

  // ── COLLECTIONS GRID ─────────────────────────────────────────
  _renderCollections() {
    const grid = document.getElementById('collections-grid');
    const cols = [
      { name: 'Hoodies',    sub: 'Explora',  filter: 'Hoodies',    large: true, img: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=1200&q=80' },
      { name: 'T-Shirts',   sub: 'Ver Todo', filter: 'T-Shirts',               img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80' },
      { name: 'Accesorios', sub: 'Shop',     filter: 'Accesorios',              img: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80' },
    ];
    grid.innerHTML = '';
    cols.forEach(col => {
      const card = document.createElement('div');
      card.className = 'collection-card' + (col.large ? ' large' : '');
      card.innerHTML = `
        <img class="collection-img" src="${col.img}" alt="${col.name}" loading="lazy"/>
        <div class="collection-info">
          <h3 class="collection-name">${col.name}</h3>
          <span class="collection-cta">${col.sub} →</span>
        </div>
      `;
      card.addEventListener('click', () => {
        this.activeFilter = col.filter;
        this.navigate('catalog');
        this.renderFilters();
        this.renderProducts();
      });
      grid.appendChild(card);
    });
  }

  // ── FILTERS ──────────────────────────────────────────────────
  renderFilters() {
    const categories = ['Todos', ...new Set(this.products.map(p => p.category))];
    const bar = document.getElementById('filter-bar');
    bar.innerHTML = '';
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-chip' + (cat === this.activeFilter ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        this.activeFilter = cat;
        this.renderFilters();
        this.renderProducts();
      });
      bar.appendChild(btn);
    });
  }

  // ── renderProducts() — método del UML ────────────────────────
  renderProducts() {
    const grid    = document.getElementById('catalog-grid');
    const count   = document.getElementById('catalog-count');
    grid.innerHTML = '';

    const filtered = this.activeFilter === 'Todos'
      ? this.products
      : this.products.filter(p => p.category === this.activeFilter);

    count.textContent = `${filtered.length} producto${filtered.length !== 1 ? 's' : ''}`;

    filtered.forEach((product, i) => {
      const card = this._createProductCard(product);
      card.style.animationDelay = `${i * 50}ms`;
      grid.appendChild(card);
    });
  }

  _createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';

    const tag     = product.getTag();
    const tagHTML = tag ? `<span class="product-tag ${tag.cls}">${tag.text}</span>` : '';
    const isSoldOut = !product.isAvailable();
    const btnText   = isSoldOut ? 'Sin Stock' : 'Agregar al Carrito';
    const btnCls    = isSoldOut ? 'btn-add-card sold-out-btn' : 'btn-add-card';

    card.innerHTML = `
      <div class="product-card-img-wrap">
        ${tagHTML}
        <img class="product-card-img" src="${product.image}" alt="${product.name}" loading="lazy"/>
        <div class="product-card-overlay">
          <button class="${btnCls}" data-id="${product.id}">${btnText}</button>
        </div>
      </div>
      <div class="product-card-info">
        <p class="product-card-category">${product.category}</p>
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-price">${product.formatPrice()}</p>
        <p class="product-card-stock">${product.stock > 0 ? `${product.stock} disponibles` : 'Agotado'}</p>
      </div>
    `;

    card.querySelector('.product-card-img-wrap').addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-add-card')) {
        this.showDetail(product.id);
      }
    });

    const addBtn = card.querySelector('.btn-add-card');
    if (addBtn && !isSoldOut) {
      addBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const size = product.sizes[0];
        this.cart.addItem(product, 1, size);
        this.updateCartUI();
        this.toast(`${product.name} agregado al carrito ✓`);
      });
    }

    return card;
  }

  // ── PRODUCT DETAIL ───────────────────────────────────────────
  _renderDetail(product) {
    document.getElementById('bc-product').textContent = product.name;
    document.getElementById('detail-drop').textContent  = product.drop;
    document.getElementById('detail-name').textContent  = product.name;
    document.getElementById('detail-price').textContent = product.formatPrice();
    document.getElementById('detail-desc').textContent  = product.description;

    document.getElementById('detail-img-main').src = product.image;
    document.getElementById('detail-img-main').alt = product.name;

    const thumbs = document.getElementById('detail-thumbs');
    thumbs.innerHTML = '';
    [product.image, product.image, product.image, product.image].forEach((src, i) => {
      const div = document.createElement('div');
      div.className = 'detail-thumb';
      div.innerHTML = `<img src="${src}?v=${i}" alt="${product.name} ${i+1}" loading="lazy"/>`;
      thumbs.appendChild(div);
    });

    const specsEl = document.getElementById('detail-specs');
    specsEl.innerHTML = Object.entries(product.specs).map(([k,v]) => `
      <div class="spec-item">
        <p class="spec-label">${k}</p>
        <p class="spec-value">${v}</p>
      </div>`).join('');

    const sizeGrid = document.getElementById('size-grid');
    sizeGrid.innerHTML = '';
    product.sizes.forEach(size => {
      const btn = document.createElement('button');
      btn.className = 'size-btn';
      btn.textContent = size;
      btn.addEventListener('click', () => {
        sizeGrid.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedSize = size;
      });
      sizeGrid.appendChild(btn);
    });

    const accordions = document.getElementById('accordions');
    accordions.innerHTML = '';
    product.accordions.forEach(acc => {
      const item = document.createElement('div');
      item.className = 'accordion-item';
      item.innerHTML = `
        <div class="accordion-header">
          ${acc.title}
          <span class="material-symbols-outlined accordion-icon">expand_more</span>
        </div>
        <div class="accordion-body">
          <div class="accordion-body-inner">${acc.body}</div>
        </div>
      `;
      item.querySelector('.accordion-header').addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');
        item.querySelector('.accordion-body').style.maxHeight = isOpen
          ? item.querySelector('.accordion-body-inner').scrollHeight + 'px'
          : '0';
      });
      accordions.appendChild(item);
    });

    const related = document.getElementById('related-grid');
    related.innerHTML = '';
    this.products.filter(p => p.id !== product.id).slice(0, 4).forEach(p => {
      const card = this._createProductCard(p);
      related.appendChild(card);
    });
  }

  addToCartFromDetail() {
    if (!this.selectedProduct) return;
    if (!this.selectedSize) { this.toast('Selecciona una talla primero', 'error'); return; }
    if (!this.selectedProduct.isAvailable()) { this.toast('Producto agotado', 'error'); return; }
    this.cart.addItem(this.selectedProduct, 1, this.selectedSize);
    this.updateCartUI();
    this.toast(`${this.selectedProduct.name} (${this.selectedSize}) agregado ✓`);
  }

  // ── renderCart() — método del UML ────────────────────────────
  renderCart() {
    const list   = document.getElementById('cart-items-list');
    const footer = document.getElementById('cart-panel-footer');
    list.innerHTML = '';

    if (this.cart.isEmpty()) {
      const empty = document.createElement('div');
      empty.className = 'cart-empty';
      empty.innerHTML = `
        <span class="material-symbols-outlined cart-empty-icon">shopping_bag</span>
        <p class="cart-empty-text">Tu carrito está vacío</p>
        <button class="btn-secondary" style="padding:12px 28px;font-size:10px;" id="empty-cart-shop">Ir al Catálogo</button>
      `;
      list.appendChild(empty);
      document.getElementById('empty-cart-shop').addEventListener('click', () => {
        this.closeCart();
        this.navigate('catalog');
      });
      footer.style.display = 'none';
      return;
    }

    footer.style.display = 'flex';

    this.cart.items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'cart-item';
      el.innerHTML = `
        <img class="cart-item-img" src="${item.product.image}" alt="${item.product.name}"/>
        <div class="cart-item-info">
          <p class="cart-item-cat">${item.product.category}</p>
          <p class="cart-item-name">${item.product.name}</p>
          <p class="cart-item-size">Talla: ${item.size}</p>
          <div class="cart-item-bottom">
            <div class="qty-control">
              <button class="qty-btn" data-action="dec" data-id="${item.product.id}" data-size="${item.size}">−</button>
              <span class="qty-display">${item.quantity}</span>
              <button class="qty-btn" data-action="inc" data-id="${item.product.id}" data-size="${item.size}">+</button>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <span class="cart-item-price">$${item.getSubtotal().toFixed(2)}</span>
              <button class="cart-item-remove" data-id="${item.product.id}" data-size="${item.size}" title="Eliminar">
                <span class="material-symbols-outlined" style="font-size:18px;">delete</span>
              </button>
            </div>
          </div>
        </div>
      `;
      list.appendChild(el);
    });

    list.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const delta = btn.dataset.action === 'inc' ? 1 : -1;
        this.cart.updateQty(btn.dataset.id, btn.dataset.size, delta);
        this.updateCartUI();
      });
    });
    list.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        this.cart.removeItem(btn.dataset.id, btn.dataset.size);
        this.updateCartUI();
        this.toast('Producto eliminado del carrito');
      });
    });

    const total = this.cart.getTotal();
    document.getElementById('cart-subtotal').textContent = `$${total.toFixed(2)}`;
    document.getElementById('cart-total').textContent    = `$${total.toFixed(2)}`;
  }

  updateCartUI() {
    this.renderCart();
    const qty   = this.cart.getTotalQty();
    const badge = document.getElementById('cart-badge');
    badge.textContent = qty;
    badge.classList.toggle('visible', qty > 0);
  }

  openCart()  { document.getElementById('cart-overlay').classList.add('open'); document.getElementById('cart-panel').classList.add('open'); document.body.style.overflow = 'hidden'; }
  closeCart() { document.getElementById('cart-overlay').classList.remove('open'); document.getElementById('cart-panel').classList.remove('open'); document.body.style.overflow = ''; }

  clearCart() { this.cart.clear(); this.updateCartUI(); this.toast('Carrito vaciado'); }

  // ── checkout() — método del UML ──────────────────────────────
  checkout() {
    if (this.cart.isEmpty()) return;
    const userId = this.currentUser ? this.currentUser.id : 'guest';
    const order  = new Order(userId, this.cart.items, this.cart.getTotal());
    this.orders.push(order);
    this.cart.clear();
    this.updateCartUI();
    this.closeCart();
    this.toast(`¡Pedido ${order.id} confirmado! Total: $${order.total.toFixed(2)} 🎉`);
    console.log('Order created:', order.getSummary());
  }

  // ── manageUsers() — método del UML ──────────────────────────
  manageUsers() {
    return this.users.map(u => ({ id: u.id, name: u.name, email: u.email, role: u.role }));
  }

  // ── LOGIN / AUTH ─────────────────────────────────────────────
  openLogin()  { document.getElementById('login-overlay').classList.add('open'); document.body.style.overflow = 'hidden'; this._updateLoginUI(); }
  closeLogin() { document.getElementById('login-overlay').classList.remove('open'); document.body.style.overflow = ''; }

  switchLoginTab(tab) {
    document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`.login-tab[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
  }

  handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const pass  = document.getElementById('login-password').value;
    const user  = this.users.find(u => u.login(email, pass));
    if (!user) { this.toast('Credenciales inválidas', 'error'); return; }
    this.currentUser = user;
    this.cart.userId = user.id;
    this._updateLoginUI();
    this.toast(`Bienvenido, ${user.name}! ✓`);
  }

  handleRegister() {
    const name  = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const pass  = document.getElementById('reg-password').value;
    if (!name || !email || pass.length < 6) { this.toast('Completa todos los campos (mín. 6 caracteres para contraseña)', 'error'); return; }
    if (this.users.find(u => u.email === email)) { this.toast('Ese correo ya está registrado', 'error'); return; }
    const newUser = new User({ id: 'u' + Date.now(), name, email, password: pass, role: 'customer' });
    this.users.push(newUser);
    this.currentUser = newUser;
    this.cart.userId = newUser.id;
    this._updateLoginUI();
    this.toast(`¡Cuenta creada! Bienvenido ${name} ✓`);
  }

  handleLogout() { this.currentUser = null; this.cart.userId = null; this._updateLoginUI(); this.closeLogin(); this.toast('Sesión cerrada'); }

  _updateLoginUI() {
    const loggedPanel = document.getElementById('user-logged-panel');
    const tabLogin    = document.getElementById('tab-login');
    const tabReg      = document.getElementById('tab-register');
    const loginTabs   = document.querySelector('.login-tabs');
    if (this.currentUser) {
      loggedPanel.style.display = 'block';
      tabLogin.style.display = 'none'; tabReg.style.display = 'none'; loginTabs.style.display = 'none';
      document.getElementById('logged-name').textContent  = this.currentUser.name;
      document.getElementById('logged-email').textContent = this.currentUser.email;
      document.getElementById('logged-role').textContent  = this.currentUser.role === 'admin' ? '★ Admin' : 'Customer';
      document.getElementById('login-title').textContent    = 'Mi Cuenta';
      document.getElementById('login-subtitle').textContent = 'Gestiona tu perfil y pedidos.';
    } else {
      loggedPanel.style.display = 'none';
      tabLogin.style.display = ''; tabReg.style.display = ''; loginTabs.style.display = '';
      document.getElementById('login-title').textContent    = 'Mi Cuenta';
      document.getElementById('login-subtitle').textContent = 'Accede para ver tus pedidos y drops exclusivos.';
    }
  }

  // ── TOAST ────────────────────────────────────────────────────
  toast(msg, type = '') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast${type === 'error' ? ' error' : ''}`;
    toast.innerHTML = `
      <span class="material-symbols-outlined" style="font-size:16px;color:${type === 'error' ? 'var(--error)' : 'var(--gold)'}">
        ${type === 'error' ? 'error' : 'check_circle'}
      </span>
      ${msg}
    `;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  // ── SCROLL OBSERVER ──────────────────────────────────────────
  _initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });

    const observe = () => {
      document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    };
    observe();

    const origNavigate = this.navigate.bind(this);
    this.navigate = (view) => {
      origNavigate(view);
      setTimeout(observe, 100);
    };
  }
}

// ── INICIALIZAR ───────────────────────────────────────────────
const app = new App();
window.app = app; // Exponer en window para debug
