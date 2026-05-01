'use strict';

const FOODS = [
  { id:  1, name: 'Chicken Samosa',       category: 'snacks',     price: 25,  img: 'https://picsum.photos/seed/samosa1/400/300'       },
  { id:  2, name: 'Beef Singara',          category: 'snacks',     price: 20,  img: 'https://picsum.photos/seed/singara2/400/300'      },
  { id:  3, name: 'Egg Roll',              category: 'snacks',     price: 40,  img: 'https://picsum.photos/seed/eggroll3/400/300'      },
  { id:  4, name: 'Chicken Roll',          category: 'snacks',     price: 65,  img: 'https://picsum.photos/seed/chickenroll4/400/300'  },
  { id:  5, name: 'Puri',                  category: 'snacks',     price: 12,  img: 'https://picsum.photos/seed/puri5/400/300'         },
  { id:  6, name: 'Vegetable Bhaji',       category: 'snacks',     price: 30,  img: 'https://picsum.photos/seed/bhaji6/400/300'        },
  { id:  7, name: 'Fuchka',                category: 'snacks',     price: 35,  img: 'https://picsum.photos/seed/fuchka7/400/300'       },
  { id:  8, name: 'Chotpoti',              category: 'snacks',     price: 45,  img: 'https://picsum.photos/seed/chotpoti8/400/300'     },
  { id:  9, name: 'Fried Chicken',         category: 'snacks',     price: 90,  img: 'https://picsum.photos/seed/friedchk9/400/300'     },
  { id: 10, name: 'Chicken Nuggets',       category: 'snacks',     price: 75,  img: 'https://picsum.photos/seed/nuggets10/400/300'     },
  { id: 11, name: 'French Fries',          category: 'snacks',     price: 55,  img: 'https://picsum.photos/seed/fries11/400/300'       },
  { id: 12, name: 'Loaded Cheese Fries',   category: 'snacks',     price: 75,  img: 'https://picsum.photos/seed/cheesefries12/400/300' },
  { id: 13, name: 'Mango Juice',           category: 'juice',      price: 40,  img: 'https://picsum.photos/seed/mango13/400/300'       },
  { id: 14, name: 'Orange Juice',          category: 'juice',      price: 38,  img: 'https://picsum.photos/seed/orange14/400/300'      },
  { id: 15, name: 'Watermelon Juice',      category: 'juice',      price: 35,  img: 'https://picsum.photos/seed/watermelon15/400/300'  },
  { id: 16, name: 'Fresh Lemon Juice',     category: 'juice',      price: 30,  img: 'https://picsum.photos/seed/lemon16/400/300'       },
  { id: 17, name: 'Guava Juice',           category: 'juice',      price: 38,  img: 'https://picsum.photos/seed/guava17/400/300'       },
  { id: 18, name: 'Mixed Fruit Juice',     category: 'juice',      price: 55,  img: 'https://picsum.photos/seed/mixedfruit18/400/300'  },
  { id: 19, name: 'Pineapple Juice',       category: 'juice',      price: 42,  img: 'https://picsum.photos/seed/pineapple19/400/300'   },
  { id: 20, name: 'Coconut Water',         category: 'juice',      price: 50,  img: 'https://picsum.photos/seed/coconut20/400/300'     },
  { id: 21, name: 'Strawberry Juice',      category: 'juice',      price: 48,  img: 'https://picsum.photos/seed/strawberry21/400/300'  },
  { id: 22, name: 'Apple Juice',           category: 'juice',      price: 42,  img: 'https://picsum.photos/seed/apple22/400/300'       },
  { id: 23, name: 'Chocolate Milkshake',   category: 'milkshakes', price: 65,  img: 'https://picsum.photos/seed/chocshake23/400/300'   },
  { id: 24, name: 'Vanilla Milkshake',     category: 'milkshakes', price: 60,  img: 'https://picsum.photos/seed/vanilla24/400/300'     },
  { id: 25, name: 'Strawberry Milkshake',  category: 'milkshakes', price: 70,  img: 'https://picsum.photos/seed/strawshake25/400/300'  },
  { id: 26, name: 'Mango Milkshake',       category: 'milkshakes', price: 65,  img: 'https://picsum.photos/seed/mangoshake26/400/300'  },
  { id: 27, name: 'Oreo Milkshake',        category: 'milkshakes', price: 80,  img: 'https://picsum.photos/seed/oreoshake27/400/300'   },
  { id: 28, name: 'Banana Milkshake',      category: 'milkshakes', price: 60,  img: 'https://picsum.photos/seed/bananashake28/400/300' },
  { id: 29, name: 'KitKat Milkshake',      category: 'milkshakes', price: 85,  img: 'https://picsum.photos/seed/kitkat29/400/300'      },
  { id: 30, name: 'Nutella Milkshake',     category: 'milkshakes', price: 90,  img: 'https://picsum.photos/seed/nutella30/400/300'     },
  { id: 31, name: 'Cold Coffee Shake',     category: 'milkshakes', price: 70,  img: 'https://picsum.photos/seed/coffeeshake31/400/300' },
  { id: 32, name: 'Caramel Milkshake',     category: 'milkshakes', price: 75,  img: 'https://picsum.photos/seed/caramel32/400/300'     },
];

const WA_NUMBER = '8801758742415';
const CART_KEY  = 'bk_cart_v1';

/* STATE */
let cart      = loadCart();
let activeCat = 'all';

/* DOM */
const El = {
  foodGrid:       document.getElementById('foodGrid'),
  emptyState:     document.getElementById('emptyState'),
  searchInput:    document.getElementById('searchInput'),
  clearSearch:    document.getElementById('clearSearch'),
  categoryFilter: document.getElementById('categoryFilter'),
  pills:          document.querySelectorAll('.pill'),
  cartBtn:        document.getElementById('cartBtn'),
  cartCount:      document.getElementById('cartCount'),
  cartSidebar:    document.getElementById('cartSidebar'),
  cartOverlay:    document.getElementById('cartOverlay'),
  cartClose:      document.getElementById('cartClose'),
  cartEmpty:      document.getElementById('cartEmpty'),
  cartItemsList:  document.getElementById('cartItemsList'),
  cartFooter:     document.getElementById('cartFooter'),
  cartSubtotalEl: document.getElementById('cartSubtotal'),
  continueOrder:  document.getElementById('continueOrderBtn'),
  modalOverlay:   document.getElementById('modalOverlay'),
  modalClose:     document.getElementById('modalClose'),
  orderSummary:   document.getElementById('orderSummaryList'),
  modalSubtotal:  document.getElementById('modalSubtotal'),
  modalDelivery:  document.getElementById('modalDelivery'),
  modalTotal:     document.getElementById('modalTotal'),
  custName:       document.getElementById('custName'),
  custPhone:      document.getElementById('custPhone'),
  custBlock:      document.getElementById('custBlock'),
  custAddress:    document.getElementById('custAddress'),
  custNotes:      document.getElementById('custNotes'),
  confirmOrder:   document.getElementById('confirmOrderBtn'),
  navbar:         document.getElementById('navbar'),
};

/* ======= PERSISTENCE ======= */
function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

/* ======= RENDER FOODS (no description) ======= */
function renderFoods() {
  const q = El.searchInput.value.trim().toLowerCase();
  const filtered = FOODS.filter(f => {
    const catOk    = activeCat === 'all' || f.category === activeCat;
    const searchOk = !q || f.name.toLowerCase().includes(q);
    return catOk && searchOk;
  });

  if (!filtered.length) {
    El.foodGrid.innerHTML = '';
    El.emptyState.style.display = 'block';
    return;
  }
  El.emptyState.style.display = 'none';

  El.foodGrid.innerHTML = filtered.map((f, i) => {
    const inCart = cart.some(c => c.id === f.id);
    return `<div class="food-card" style="animation-delay:${Math.min(i * 0.04, 0.5)}s">
      <div class="food-img-wrap">
        <img src="${f.img}" alt="${f.name}" loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x300/FF7043/FFFFFF?text=${encodeURIComponent(f.name)}'" />
        <span class="food-category-badge">${catLabel(f.category)}</span>
      </div>
      <div class="food-card-body">
        <h3 class="food-name">${f.name}</h3>
        <div class="food-card-footer">
          <div class="food-price"><span>৳</span>${f.price}</div>
          <button class="add-to-cart-btn${inCart ? ' added' : ''}" data-food-id="${f.id}" aria-label="Add ${f.name} to cart">
            ${inCart
              ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>Added`
              : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Add`
            }
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function catLabel(cat) {
  const map = { snacks: '🥡 Snacks', juice: '🥤 Juice', milkshakes: '🥛 Shake' };
  return map[cat] || cat;
}

/* ======= CART MATH ======= */
function getSubtotal() { return cart.reduce((s, c) => s + c.price * c.qty, 0); }
function getCount()    { return cart.reduce((s, c) => s + c.qty, 0); }

/* ======= CART ACTIONS ======= */
function addToCart(id) {
  const food = FOODS.find(f => f.id === id);
  if (!food) return;
  const ex = cart.find(c => c.id === id);
  if (ex) { ex.qty += 1; }
  else { cart.push({ id: food.id, name: food.name, price: food.price, img: food.img, qty: 1 }); }
  saveCart();
  updateCartUI();
  renderFoods();
  showToast(`🛒 ${food.name} added to cart!`);
  El.cartCount.classList.add('bump');
  setTimeout(() => El.cartCount.classList.remove('bump'), 320);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
  renderFoods();
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { removeFromCart(id); return; }
  saveCart();
  updateCartUI();
}

/* ======= CART UI ======= */
function updateCartUI() {
  const count = getCount();
  const sub   = getSubtotal();

  El.cartCount.textContent = count > 99 ? '99+' : count;
  El.cartCount.classList.toggle('visible', count > 0);
  El.cartSubtotalEl.textContent = `৳${sub}`;
  El.cartFooter.style.display = cart.length ? 'block' : 'none';

  if (!cart.length) {
    El.cartEmpty.style.display = 'block';
    El.cartItemsList.innerHTML = '';
    return;
  }
  El.cartEmpty.style.display = 'none';
  El.cartItemsList.innerHTML = cart.map(item => `
    <li class="cart-item">
      <img class="cart-item-img" src="${item.img}" alt="${item.name}" loading="lazy"
        onerror="this.src='https://via.placeholder.com/60x60/FF7043/FFFFFF?text=Food'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">৳${item.price * item.qty} <small style="color:#aaa;font-weight:500">(৳${item.price} each)</small></div>
        <div class="cart-qty">
          <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-remove" data-remove-id="${item.id}">✕</button>
    </li>`).join('');
}

/* ======= CART PANEL ======= */
function openCart()  {
  El.cartSidebar.classList.add('open');
  El.cartOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
}
function closeCart() {
  El.cartSidebar.classList.remove('open');
  El.cartOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

/* ======= ORDER MODAL ======= */
function openModal()  {
  closeCart();
  refreshOrderSummary();
  El.modalOverlay.classList.add('active');
  document.body.classList.add('no-scroll');
}
function closeModal() {
  El.modalOverlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

function getDeliveryFee() {
  const opt = El.custBlock.options[El.custBlock.selectedIndex];
  return opt && opt.dataset.fee ? parseInt(opt.dataset.fee, 10) : 0;
}

function refreshOrderSummary() {
  const sub      = getSubtotal();
  const delivery = getDeliveryFee();
  El.orderSummary.innerHTML = cart.map(item =>
    `<li class="order-summary-item">
       <span>${item.name} × ${item.qty}</span>
       <span>৳${item.price * item.qty}</span>
     </li>`).join('');
  El.modalSubtotal.textContent = `৳${sub}`;
  El.modalDelivery.textContent = delivery ? `৳${delivery}` : 'Select block';
  El.modalTotal.textContent    = `৳${sub + delivery}`;
}

/* ======= WHATSAPP ======= */
function buildWAMsg() {
  const name    = El.custName.value.trim();
  const phone   = El.custPhone.value.trim();
  const block   = El.custBlock.options[El.custBlock.selectedIndex]?.text || '';
  const address = El.custAddress.value.trim();
  const notes   = El.custNotes.value.trim();
  const sub     = getSubtotal();
  const fee     = getDeliveryFee();
  const items   = cart.map(c => `  • ${c.name} × ${c.qty} = ৳${c.price * c.qty}`).join('\n');
  const msg = [
    `🍽️ *New Order — Banasree Kitchen*`,
    ``,
    `👤 *Name:* ${name}`,
    `📞 *Phone:* ${phone}`,
    `📍 *Area:* ${block}`,
    `🏠 *Address:* ${address}`,
    notes ? `📝 *Notes:* ${notes}` : null,
    ``,
    `🛒 *Items:*`,
    items,
    ``,
    `💰 *Subtotal:* ৳${sub}`,
    `🚚 *Delivery:* ৳${fee}`,
    `✅ *Grand Total:* ৳${sub + fee}`,
  ].filter(l => l !== null).join('\n');
  return encodeURIComponent(msg);
}

function validateForm() {
  const fields = [El.custName, El.custPhone, El.custBlock, El.custAddress];
  fields.forEach(el => el.classList.remove('error'));
  let ok = true;
  fields.forEach(el => { if (!el.value.trim()) { el.classList.add('error'); ok = false; } });
  if (!ok) showToast('⚠️ Please fill all required fields');
  return ok;
}

/* ======= TOAST ======= */
let _tt = null;
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_tt);
  _tt = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ======= CATEGORY ======= */
function setCategory(cat) {
  activeCat = cat;
  El.categoryFilter.value = cat;
  El.pills.forEach(p => p.classList.toggle('active', p.dataset.cat === cat));
  renderFoods();
}

/* ======= STATS COUNTER ANIMATION ======= */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.hero-stats .stat-num');
  if (!statNumbers.length) return;

  const statsData = [];
  statNumbers.forEach(el => {
    const originalText = el.innerText.trim();
    const match = originalText.match(/^([\d.]+)(K?)(.*)$/i);
    if (!match) return;
    let num = parseFloat(match[1]);
    const hasK = match[2].toUpperCase() === 'K';
    const suffix = match[3] || '';
    if (hasK) num *= 1000;
    const target = Math.floor(num);
    const suffixStr = suffix;
    statsData.push({ element: el, target, suffix: suffixStr });
    el.innerText = `0${suffixStr}`;
    el.dataset.target = target;
    el.dataset.suffix = suffixStr;
  });

  let animated = false;

  const animateNumber = (element, target, suffix, duration = 1500) => {
    const startValue = 0;
    const startTime = performance.now();
    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);

    const update = (now) => {
      const elapsed = now - startTime;
      let progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      const current = Math.floor(eased * target);
      element.innerText = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.innerText = `${target}${suffix}`;
      }
    };
    requestAnimationFrame(update);
  };

  const startCounters = () => {
    if (animated) return;
    animated = true;
    statsData.forEach(({ element, target, suffix }) => {
      animateNumber(element, target, suffix);
    });
  };

  const heroSection = document.querySelector('.hero');
  if (!heroSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        startCounters();
        observer.unobserve(heroSection);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(heroSection);
}

/* ======= EVENTS ======= */
window.addEventListener('scroll', () => {
  El.navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

El.searchInput.addEventListener('input', () => {
  El.clearSearch.classList.toggle('visible', El.searchInput.value.length > 0);
  renderFoods();
});

El.clearSearch.addEventListener('click', () => {
  El.searchInput.value = '';
  El.clearSearch.classList.remove('visible');
  El.searchInput.focus();
  renderFoods();
});

El.categoryFilter.addEventListener('change', () => setCategory(El.categoryFilter.value));

El.pills.forEach(p => p.addEventListener('click', () => setCategory(p.dataset.cat)));

El.foodGrid.addEventListener('click', e => {
  const btn = e.target.closest('.add-to-cart-btn');
  if (btn) addToCart(parseInt(btn.dataset.foodId, 10));
});

El.cartBtn.addEventListener('click', openCart);
El.cartClose.addEventListener('click', closeCart);
El.cartOverlay.addEventListener('click', closeCart);

El.cartItemsList.addEventListener('click', e => {
  const qb = e.target.closest('.qty-btn');
  if (qb) { changeQty(parseInt(qb.dataset.id, 10), qb.dataset.action === 'inc' ? 1 : -1); return; }
  const rb = e.target.closest('.cart-remove');
  if (rb) removeFromCart(parseInt(rb.dataset.removeId, 10));
});

El.continueOrder.addEventListener('click', () => {
  if (!cart.length) { showToast('🛒 Your cart is empty!'); return; }
  openModal();
});

El.modalClose.addEventListener('click', closeModal);
El.modalOverlay.addEventListener('click', e => { if (e.target === El.modalOverlay) closeModal(); });

El.custBlock.addEventListener('change', refreshOrderSummary);

[El.custName, El.custPhone, El.custBlock, El.custAddress].forEach(el => {
  el.addEventListener('input',  () => el.classList.remove('error'));
  el.addEventListener('change', () => el.classList.remove('error'));
});

El.confirmOrder.addEventListener('click', () => {
  if (!cart.length) { showToast('🛒 Cart is empty!'); return; }
  if (!validateForm()) return;
  window.open(`https://wa.me/${WA_NUMBER}?text=${buildWAMsg()}`, '_blank');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCart(); }
});

/* ======= INIT ======= */
renderFoods();
updateCartUI();
initStatsCounter();
