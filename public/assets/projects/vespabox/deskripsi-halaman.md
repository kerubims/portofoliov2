# VespaBox — Deskripsi Halaman

Situs: https://vespabox.ksm.web.id/
Tanggal screenshot: 10 Oktober 2026
Ukuran: 1280 × 720 piksel (viewport)

VespaBox adalah website bengkel spesialis Vespa ("VespaBox — Vespa Repair") yang melayani booking servis online dan penjualan sparepart. Navigasi publik berisi 2 menu (Beranda, Katalog) plus ikon akun (Masuk). Setelah login, navigasi bertambah: Riwayat Servis, Antrean Langsung, tombol Pesan Servis, ikon notifikasi, dan menu akun (Profil Saya, Keluar).

## 01-beranda.png — Beranda
**URL:** https://vespabox.ksm.web.id/
**Fungsi:** Halaman utama sekaligus landing page bengkel. Memperkenalkan layanan servis Vespa dan mengarahkan pengunjung ke booking servis atau katalog sparepart.
**Komponen utama:**
- Navbar: logo VespaBox, menu Beranda, Katalog, ikon Masuk
- Hero section dengan headline besar ("Perawatan Ahli untuk Vespa Anda. Pesan Servis Secara Online.") dan foto bengkel
- Badge rating 4.8/5.0 (4 ulasan pelanggan)
- Kartu statistik: total servis, jumlah Vespa, status "Open"
- Tombol CTA: "Booking Servis Sekarang" dan "Lihat Katalog"
- Footer dengan tautan Instagram & WhatsApp

## 02-katalog.png — Katalog Sparepart
**URL:** https://vespabox.ksm.web.id/katalog
**Fungsi:** Halaman belanja sparepart Vespa. Pengunjung bisa mencari, memfilter, dan menambahkan produk ke keranjang.
**Komponen utama:**
- Navbar (dengan ikon keranjang + badge jumlah item)
- Kolom pencarian "Cari sparepart..."
- Filter kategori berbentuk pill: Semua Kategori, Oli & Pelumas, Kampas Rem, Filter Udara, Aki & Kelistrikan
- Grid kartu produk (8 produk), masing-masing berisi gambar, nama, harga, stok, dan tombol "+ Keranjang"
- Contoh produk: Kampas Rem Depan Vespa Matic Rp85.000, Oli Mesin Motul 10W-40 Rp145.000, Aki Kering Vespa Matic Rp350.000
- Footer dengan tautan Instagram & WhatsApp

## 03-masuk.png — Login
**URL:** https://vespabox.ksm.web.id/login
**Fungsi:** Halaman masuk untuk pelanggan agar bisa mengelola booking servis mereka.
**Komponen utama:**
- Navbar
- Kartu form terpusat: judul "Selamat Datang Kembali", subjudul ajakan masuk
- Field Alamat Email dan Kata Sandi (dengan tautan "Lupa Kata Sandi?")
- Checkbox "Ingat Saya"
- Tombol "Masuk Sekarang →"
- Tautan "Belum punya akun? Daftar di sini"

## Catatan
- Tidak ada item menu/submenu yang dilewati; seluruh item navigasi ter-cover, termasuk menu khusus member setelah login.
- Tautan Instagram dan WhatsApp di footer bersifat eksternal sehingga tidak di-screenshot.
- Halaman 04–07 diambil dalam kondisi login sebagai Budi Santoso (budi@example.com).

## 04-riwayat-servis.png — Riwayat Servis (member)
**URL:** https://vespabox.ksm.web.id/customer/riwayat
**Fungsi:** Halaman "Riwayat Saya" — memantau semua booking dan riwayat servis milik pelanggan yang login.
**Komponen utama:**
- Navbar member: Beranda, Katalog, Riwayat Servis, Antrean Langsung, tombol "Pesan Servis", ikon notifikasi, ikon akun
- Tab "Jadwal Booking" dan "Riwayat Servis"
- Kartu booking: nomor booking (mis. VB-3DCF8D), lencana status "Menunggu Konfirmasi", nama/plat kendaraan, tanggal & jam booking, tautan "Pantau Antrean"

## 05-antrean-langsung.png — Antrean Langsung (member)
**URL:** https://vespabox.ksm.web.id/customer/antrean
**Fungsi:** Halaman "Live Antrean Hari Ini" — melihat daftar antrean servis yang sedang berjalan di bengkel hari ini.
**Komponen utama:**
- Navbar member
- Judul + tanggal hari ini, panel "Daftar Antrean" dengan badge jumlah kendaraan ("0 kendaraan")
- Status kosong "Belum ada antrean hari ini"
- Footer: kontak (Instagram, WhatsApp) dan peta lokasi

## 06-pesan-servis.png — Pesan Servis (member)
**URL:** https://vespabox.ksm.web.id/customer/booking/create
**Fungsi:** Formulir "Schedule Your Service" — pelanggan mengisi data kendaraan dan memilih jadwal untuk booking servis.
**Komponen utama:**
- Navbar member
- Bagian 1 "Vehicle Information": Plat Nomor, Merek & Tipe, Keluhan / Jenis Servis (textarea)
- Bagian 2 "Select Schedule": Pilih Tanggal (date picker, catatan "*Minggu tutup"), Pilih Slot Jam

## 07-profil-saya.png — Profil Saya (member)
**URL:** https://vespabox.ksm.web.id/customer/profile
**Fungsi:** Halaman "Profil Saya" — mengelola informasi akun dan keamanan.
**Komponen utama:**
- Navbar member
- Kartu "Informasi Profil": Nama Lengkap, Alamat Email, Nomor WhatsApp (terisi data Budi Santoso)
- Tombol "Simpan Perubahan"
