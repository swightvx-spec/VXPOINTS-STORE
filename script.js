"use strict";

// Jangan perlu edit file ini untuk menambah produk.
// Semua data produk dan nomor WhatsApp ada di products.js.

const grid = document.querySelector("#product-grid");
const modal = document.querySelector("#detail-modal");
const detail = document.querySelector("#detail-content");
const rupiah = angka => new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR", maximumFractionDigits: 0}).format(angka);
const namaKategori = {premium: "PREMIUM", pelajar: "PELAJAR", standar: "STANDAR", "id-cantik": "ID CANTIK"};
const isId = p => p.kategori === "id-cantik";
const el = (tag, className, teks) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (teks !== undefined) node.textContent = teks;
  return node;
};

function buatVisual(p) {
  const visual = el("div", "product-visual");
  if (isId(p)) {
    visual.append(el("div", "id-visual", p.nama));
    visual.append(el("span", "grade-tag", `GRADE ${p.grade || "F"}`));
  } else if (p.foto) {
    const img = el("img");
    img.src = p.foto;
    img.alt = `Foto ${p.nama}`;
    img.loading = "lazy";
    img.onerror = () => img.replaceWith(el("div", "photo-empty", "FOTO BELUM TERSEDIA"));
    visual.append(img);
  } else {
    visual.append(el("div", "photo-empty", "FOTO BELUM TERSEDIA"));
  }
  visual.append(el("span", `stock ${p.status === "sold" ? "sold" : ""}`, p.status === "sold" ? "SOLD OUT" : "READY STOCK"));
  return visual;
}

function buatKartu(p) {
  const card = el("button", "product-card");
  card.type = "button";
  card.setAttribute("aria-label", `Lihat detail ${p.nama}`);
  card.append(buatVisual(p));
  const body = el("div", "product-body");
  body.append(el("small", "category-label", namaKategori[p.kategori] || p.kategori));
  body.append(el("h3", "", p.nama));
  body.append(el("p", "description", p.deskripsi));
  const bottom = el("div", "product-bottom");
  bottom.append(el("strong", "price", rupiah(p.harga)), el("span", "detail-link", "LIHAT SPEK ↗"));
  body.append(bottom);
  card.append(body);
  card.addEventListener("click", () => bukaDetail(p));
  return card;
}

function tampilkanProduk(kategori = "semua") {
  const list = PRODUK.filter(p => kategori === "semua" || p.kategori === kategori);
  grid.replaceChildren(...list.map(buatKartu));
  if (!list.length) grid.append(el("p", "muted", "Belum ada produk di kategori ini."));
}

function linkWhatsapp(p) {
  const pesan = `Halo admin VXPOINTS!\nSaya mau pesan:\n\nID Produk: ${p.id}\nProduk: ${p.nama}\nKategori: ${namaKategori[p.kategori]}${isId(p) ? `\nGrade: ${p.grade || "F"}` : ""}\nHarga: ${rupiah(p.harga)}\n\nApakah masih tersedia?`;
  return `https://wa.me/${NOMOR_WHATSAPP}?text=${encodeURIComponent(pesan)}`;
}

let fokusSebelumnya;
function bukaDetail(p) {
  fokusSebelumnya = document.activeElement;
  detail.replaceChildren();
  const visual = buatVisual(p);
  visual.classList.add("detail-visual");
  detail.append(visual);
  detail.append(el("small", "category-label", namaKategori[p.kategori]));
  const judul = el("h2", "", p.nama);
  judul.id = "detail-title";
  detail.append(judul);
  detail.append(el("p", "muted", p.deskripsi));
  if (isId(p)) detail.append(el("div", "detail-grade", `GRADE ${p.grade || "F"}`));
  detail.append(el("h3", "spec-title", isId(p) ? "DETAIL ID" : "SPESIFIKASI AKUN"));
  const ul = el("ul", "spec-list");
  (p.spek || []).forEach(item => ul.append(el("li", "", item)));
  detail.append(ul);
  detail.append(el("p", "detail-price", rupiah(p.harga)));
  if (p.status === "sold") {
    const btn = el("button", "button disabled", "PRODUK TERJUAL");
    btn.disabled = true;
    detail.append(btn);
  } else {
    const btn = el("a", "button", "BELI VIA WHATSAPP ↗");
    btn.href = linkWhatsapp(p);
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    detail.append(btn);
  }
  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".close").focus();
}

function tutupDetail() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");
  fokusSebelumnya?.focus();
}

// Event navigasi
for (const button of document.querySelectorAll("[data-category]")) {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-category]").forEach(b => {
      b.classList.toggle("active", b === button);
      b.setAttribute("aria-pressed", String(b === button));
    });
    tampilkanProduk(button.dataset.category);
  });
}
modal.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", tutupDetail));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.hidden) tutupDetail();
  if (e.key === "Tab" && !modal.hidden) {
    const items = [...modal.querySelectorAll('button:not(:disabled),a[href]')];
    const first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});
tampilkanProduk();
