/* =============================================================
   VXPOINTS — PUSAT EDIT KONTEN
   Edit hanya file ini untuk banner, kategori, akun, ID, dan WA.
   FOTO: pakai nama file di root, misalnya "akun1.jpg".
   Bisa juga pakai URL gambar https://...
   Foto kosong = placeholder desain otomatis.
   ============================================================= */
const STORE = {
  whatsapp: "6281234567890", // GANTI nomor admin, format 62 tanpa +
  banners: [
    { title: "THE NEXT LEVEL OF GAMING", subtitle: "VXPOINTS EXCLUSIVE", description: "Akun pilihan, harga bersaing, dan koleksi yang terus diperbarui.", button: "Belanja Sekarang", target: "#produk", image: "" },
    { title: "FIND YOUR DREAM ACCOUNT", subtitle: "PREMIUM COLLECTION", description: "Jelajahi akun Free Fire dengan koleksi favoritmu.", button: "Lihat Sultan", target: "#produk", filter: "sultan", image: "" },
    { title: "BIG DEALS. SMALL PRICES.", subtitle: "FLASH SALE", description: "Cek pilihan akun dengan harga spesial sebelum kehabisan.", button: "Cek Flash Sale", target: "#flash", image: "" },
    { title: "RARE ID. YOUR IDENTITY.", subtitle: "ID CANTIK", description: "Pilih nomor ID favoritmu dari grade A, B, C, D, atau F.", button: "Lihat ID Cantik", target: "#produk", filter: "id-cantik", image: "" }
  ],
  categories: [
    { key: "standar", name: "Standar", caption: "Pilihan hemat", image: "" },
    { key: "pelajar", name: "Pelajar", caption: "Budget friendly", image: "" },
    { key: "sultan", name: "Sultan", caption: "Koleksi eksklusif", image: "" },
    { key: "id-cantik", name: "ID Cantik", caption: "Nomor pilihan", image: "" }
  ],
  products: [
    { code: "VX001", name: "PHANTOM ELITE", category: "sultan", price: 550000, oldPrice: 690000, flashSale: true, status: "ready", images: [""], description: "Akun koleksi premium untuk pemain yang mengutamakan penampilan.", specs: { Level: "70", Rank: "Heroic", "Evo Gun": "3", Bundle: "Koleksi premium", Bind: "Tanya admin" } },
    { code: "VX002", name: "CRIMSON STRIKE", category: "pelajar", price: 175000, oldPrice: 230000, flashSale: true, status: "ready", images: [""], description: "Akun dengan harga ramah pelajar.", specs: { Level: "58", Rank: "Diamond", "Evo Gun": "1", Bind: "Tanya admin" } },
    { code: "VX003", name: "SHADOW RUNNER", category: "standar", price: 95000, flashSale: false, status: "ready", images: [""], description: "Pilihan standar untuk mulai bermain.", specs: { Level: "45", Rank: "Platinum", Bind: "Tanya admin" } },
    { code: "VX004", name: "ROYAL REAPER", category: "sultan", price: 780000, oldPrice: 900000, flashSale: true, status: "ready", images: [""], description: "Akun dengan berbagai koleksi spesial.", specs: { Level: "76", Rank: "Grandmaster", "Evo Gun": "5", Bundle: "Beragam", Bind: "Tanya admin" } },
    { code: "VX005", name: "NOVA SPARK", category: "pelajar", price: 135000, flashSale: false, status: "sold", images: [""], description: "Akun ringan di budget dengan koleksi menarik.", specs: { Level: "51", Rank: "Diamond", Bind: "Tanya admin" } },
    { code: "VX006", name: "VIOLET STORM", category: "standar", price: 110000, flashSale: false, status: "ready", images: [""], description: "Akun standar siap pilih.", specs: { Level: "48", Rank: "Platinum", Bind: "Tanya admin" } }
  ],
  /* ID Cantik tidak punya foto, deskripsi, atau spesifikasi.
     Grade HANYA A, B, C, D, F — tidak ada E.
     Klik kartu ID langsung membuka chat WhatsApp. */
  prettyIds: [
    { id: "123456789", grade: "A", price: 250000, status: "ready" },
    { id: "112233445", grade: "B", price: 175000, status: "ready" },
    { id: "777123456", grade: "C", price: 120000, status: "ready" },
    { id: "987654321", grade: "D", price: 85000, status: "ready" },
    { id: "246813579", grade: "F", price: 50000, status: "ready" }
  ]
};
