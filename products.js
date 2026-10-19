/* =============================================================
   VXPOINTS — PUSAT EDIT KONTEN
   Edit hanya file ini untuk banner, kategori, akun, ID, dan WA.
   FOTO: pakai nama file di root, misalnya "akun1.jpg".
   Bisa juga pakai URL gambar https://...
   Foto kosong = placeholder desain otomatis.
   ============================================================= */
const STORE = {
  whatsapp: "6287780981310", // GANTI nomor admin, format 62 tanpa +
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
    { code: "VX001", name: "Kosong", category: "sultan", price: 0, oldPrice: 0, flashSale: true, status: "sold", images: ["", "", ""], description: "Akun koleksi premium untuk pemain yang mengutamakan penampilan.", specs: { Level: "70", Vault: "Isi jumlah vault", "Level Prime": "Isi level prime", Evo: "Isi jumlah evo", "Max Evo": "Isi jumlah max evo" } },
    { code: "VX002", name: "Kosong", category: "pelajar", price: 0, oldPrice: 0, flashSale: true, status: "Sold", images: ["", "", ""], description: "Akun dengan harga ramah pelajar.", specs: { Level: "70", Vault: "Isi jumlah vault", "Level Prime": "Isi level prime", Evo: "Isi jumlah evo", "Max Evo": "Isi jumlah max evo" } },
    { code: "VX003", name: "Kosong", category: "standar", price: 0, flashSale: false, status: "sold", images: ["", "", ""], description: "Pilihan standar untuk mulai bermain.", specs: { Level: "70", Vault: "Isi jumlah vault", "Level Prime": "Isi level prime", Evo: "Isi jumlah evo", "Max Evo": "Isi jumlah max evo" } },
    { code: "VX004", name: "Kosong", category: "sultan", price: 0, oldPrice: 0, flashSale: true, status: "sale", images: ["", "", ""], description: "Akun dengan berbagai koleksi spesial.", specs: { Level: "70", Vault: "Isi jumlah vault", "Level Prime": "Isi level prime", Evo: "Isi jumlah evo", "Max Evo": "Isi jumlah max evo" } },
    { code: "VX005", name: "Kosong", category: "pelajar", price: 0, flashSale: false, status: "sold", images: ["", "", ""], description: "Akun ringan di budget dengan koleksi menarik.", specs: { Level: "70", Vault: "Isi jumlah vault", "Level Prime": "Isi level prime", Evo: "Isi jumlah evo", "Max Evo": "Isi jumlah max evo" } },
    { code: "VX006", name: "Kosong", category: "standar", price: 0, flashSale: false, status: "sold", images: ["", "", ""], description: "Akun standar siap pilih.", specs: { Level: "70", Vault: "Isi jumlah vault", "Level Prime": "Isi level prime", Evo: "Isi jumlah evo", "Max Evo": "Isi jumlah max evo" } }
  ],
  /* STATUS: ubah status: "sale" menjadi status: "sold" untuk menandai TERJUAL.
   FOTO AKUN: images: ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
   Bisa tambah foto ke-4, ke-5, dst. Foto kosong akan menampilkan slot placeholder.
   URUTAN PRODUK: item paling bawah dianggap TERBARU (atau pakai createdAt: "2026-10-18").
   SPEK WAJIB: Level, Vault, Level Prime, Evo, Max Evo.
*/
/* ID Cantik tidak punya foto, deskripsi, atau spesifikasi.
     Grade HANYA A, B, C, D, F — tidak ada E.
     Klik kartu ID langsung membuka chat WhatsApp. */
  prettyIds: [
    { id: "18588885555", grade: "A", price: 50000, status: "sale" },
    { id: "Kosong", grade: "B", price: 0, status: "sold" },
    { id: "kosong", grade: "C", price: 0, status: "sold" },
    { id: "kosong", grade: "D", price: 0, status: "sold" },
    { id: "246813579", grade: "F", price: 0, status: "sold" }
  ]
};
