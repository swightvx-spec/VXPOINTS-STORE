'use strict';

// Ganti nomor ini dengan WhatsApp admin (format: 628xxxxxxxxxx, tanpa +).
const ADMIN_WHATSAPP = '6281234567890';

// Edit produk di sini. Foto opsional: contoh 'assets/akun-1.jpg'.
const products = [
  { id: 'VX001', name: 'PHANTOM ELITE', description: 'Akun Free Fire premium • Detail lengkap via admin', price: 350000, category: 'premium', image: '', status: 'ready' },
  { id: 'VX002', name: 'GOLDEN VORTEX', description: 'Akun Free Fire koleksi premium • Detail via admin', price: 550000, category: 'premium', image: '', status: 'ready' },
  { id: 'VX003', name: 'SHADOW KING', description: 'Akun Free Fire koleksi eksklusif • Detail via admin', price: 950000, category: 'sultan', image: '', status: 'ready' },
  { id: 'VX004', name: 'NOVA STARTER', description: 'Akun Free Fire pilihan hemat • Detail via admin', price: 120000, category: 'budget', image: '', status: 'ready' },
  { id: 'VX005', name: 'ROYAL REAPER', description: 'Akun Free Fire koleksi eksklusif • Detail via admin', price: 1250000, category: 'sultan', image: '', status: 'ready' },
  { id: 'VX006', name: 'NIGHTFALL', description: 'Akun Free Fire pilihan hemat • Detail via admin', price: 175000, category: 'budget', image: '', status: 'sold' }
];

const formatRupiah = value => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0
}).format(value);

function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'card';

  const visual = document.createElement('div');
  visual.className = 'visual';
  if (product.image) {
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = `Foto ${product.name}`;
    img.loading = 'lazy';
    img.onerror = () => { img.remove(); visual.insertAdjacentHTML('afterbegin', '<div class="symbol">VX</div>'); };
    visual.append(img);
  } else {
    const symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = 'VX';
    visual.append(symbol);
  }

  const sold = product.status === 'sold';
  const badge = document.createElement('span');
  badge.className = `badge${sold ? ' sold' : ''}`;
  badge.textContent = sold ? 'SOLD OUT' : 'READY STOCK';
  visual.append(badge);

  const body = document.createElement('div');
  body.className = 'card-body';
  const title = document.createElement('h3');
  title.textContent = product.name;
  const description = document.createElement('div');
  description.className = 'meta';
  description.textContent = product.description;

  const bottom = document.createElement('div');
  bottom.className = 'card-bottom';
  const price = document.createElement('div');
  price.className = 'price';
  const priceLabel = document.createElement('small');
  priceLabel.textContent = 'HARGA';
  price.append(priceLabel, document.createTextNode(formatRupiah(product.price)));

  let action;
  if (sold) {
    action = document.createElement('button');
    action.disabled = true;
    action.textContent = 'TERJUAL';
  } else {
    action = document.createElement('a');
    const message = `Halo admin VXPOINTS, saya mau pesan akun ini:\n\nID: ${product.id}\nNama: ${product.name}\nHarga: ${formatRupiah(product.price)}\n\nApakah masih tersedia?`;
    action.href = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;
    action.target = '_blank';
    action.rel = 'noopener noreferrer';
    action.textContent = 'BELI ↗';
    action.setAttribute('aria-label', `Beli ${product.name} via WhatsApp`);
  }
  action.className = 'buy';
  bottom.append(price, action);
  body.append(title, description, bottom);
  card.append(visual, body);
  return card;
}

function renderProducts(category = 'all') {
  const container = document.getElementById('products');
  if (!container) return;
  const filtered = products.filter(product => category === 'all' || product.category === category);
  container.replaceChildren(...filtered.map(createProductCard));
}

function init() {
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.classList.contains('active')));
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(other => {
        other.classList.remove('active');
        other.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
      renderProducts(button.dataset.filter);
    });
  });
  renderProducts();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
