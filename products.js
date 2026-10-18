// ==========================================================
// VXPOINTS — TEMPAT EDIT PRODUK
// ==========================================================
// CARA TAMBAH FOTO:
// 1. Buat folder images di sebelah index.html.
// 2. Upload foto, misalnya images/akun-premium.jpg.
// 3. Isi foto: "images/akun-premium.jpg" di produk terkait.
//    Bisa juga pakai URL gambar langsung.
//
// CARA TAMBAH PRODUK: salin satu blok { ... }, lalu ubah isinya.
// kategori: "premium", "pelajar", "standar", "id-cantik"
// status: "ready" atau "sold"
// grade: "A", "B", "C", "D", "F" (khusus ID cantik)
// spek: daftar teks, satu baris untuk setiap spesifikasi.
// Untuk ID cantik, foto tidak perlu diisi.
// ==========================================================

const NOMOR_WHATSAPP = "6281234567890"; // GANTI NOMOR ADMIN DI SINI

const PRODUK = [
  {
    id: "VX001",
    nama: "PHANTOM ELITE",
    kategori: "premium",
    harga: 350000,
    foto: "", // contoh: "images/phantom-elite.jpg"
    status: "ready",
    deskripsi: "Akun Free Fire premium pilihan.",
    spek: ["Level: 70", "Rank: Heroic", "Evo Gun: 2", "Bind: Tanyakan admin"]
  },
  {
    id: "VX002",
    nama: "NOVA STUDENT",
    kategori: "pelajar",
    harga: 85000,
    foto: "",
    status: "ready",
    deskripsi: "Akun FF dengan harga ramah pelajar.",
    spek: ["Level: 45", "Rank: Diamond", "Bundle: 5", "Bind: Tanyakan admin"]
  },
  {
    id: "VX003",
    nama: "SHADOW STARTER",
    kategori: "standar",
    harga: 150000,
    foto: "",
    status: "ready",
    deskripsi: "Akun standar untuk main harian.",
    spek: ["Level: 55", "Rank: Platinum", "Bundle: 8", "Bind: Tanyakan admin"]
  },
  {
    id: "ID001",
    nama: "ID 123456789",
    kategori: "id-cantik",
    harga: 250000,
    foto: "", // ID CANTIK TIDAK PAKAI FOTO
    grade: "A",
    status: "ready",
    deskripsi: "Contoh ID berurutan. Ganti dengan ID asli yang tersedia.",
    spek: ["Nomor ID: 123456789", "Pola: Berurutan", "Region: Indonesia"]
  },
  {
    id: "ID002",
    nama: "ID 88880000",
    kategori: "id-cantik",
    harga: 125000,
    foto: "",
    grade: "B",
    status: "ready",
    deskripsi: "Contoh ID angka berulang.",
    spek: ["Nomor ID: 88880000", "Pola: Angka berulang"]
  }
];
