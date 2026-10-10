# SIM-KERMA — Deskripsi Halaman

Situs: https://kerjasama.ksm.web.id/
Tanggal screenshot: 10 Oktober 2026
Ukuran: 1280 × 720 piksel (viewport)

SIM-KERMA adalah aplikasi web enterprise untuk mengelola dokumen kerjasama universitas (MoU, MoA, IA) — mulai dari pembuatan draft, tracking status review, sampai export laporan audit. Screenshot diambil dalam kondisi login sebagai Super Admin. Sidebar navigasi berisi 5 item datar (tanpa dropdown/submenu).

## 01-login.png — Login
**URL:** https://kerjasama.ksm.web.id/login
**Fungsi:** Halaman otentikasi; gerbang masuk aplikasi. Pengguna yang belum login dan mengakses halaman dalam akan dialihkan ke sini.
**Komponen utama:**
- Panel branding SIM-KERMA di sisi kiri
- Formulir kredensial: kolom email, kolom kata sandi (dengan tombol intip password), checkbox "Ingat Saya"
- Tombol "Masuk"

## 02-dashboard.png — Dashboard
**URL:** https://kerjasama.ksm.web.id/dashboard
**Fungsi:** Halaman ringkasan utama setelah login. Memberi gambaran cepat kondisi kerjasama universitas hari ini.
**Komponen utama:**
- Sidebar navigasi (Dashboard, Dokumen Kerjasama, Tracking Dokumen, Export Laporan, Users) + profil "Super Admin" di bawah
- Sapaan "Selamat Datang, Super Admin"
- 4 kartu statistik: Total Mitra (10), Dokumen Aktif (10), Masa Tenggang (0), Kedaluwarsa (9)
- Grafik batang "Tren Kerjasama (MoU & MoA)" tahun ini vs tahun lalu
- Grafik donat "Kategori Mitra" (MoU, MoA, IA)
- Tabel "Dokumen Kerjasama Terbaru" (kolom No, Judul, Jenis, Client, Unit, Tanggal Dibuat, Tanggal Selesai, Status, Aksi) + tombol "+ Buat Baru"
- Kolom pencarian di header dan ikon notifikasi

## 03-dokumen-kerjasama.png — Dokumen Kerjasama
**URL:** https://kerjasama.ksm.web.id/documents
**Fungsi:** Halaman pengelolaan seluruh dokumen kerjasama (MoU, MoA, IA). Pengguna bisa membuat draft baru, memfilter, dan mengelola 25 dokumen.
**Komponen utama:**
- Tombol "Buat Draft Baru" dan panel "Filter"
- Tabel dokumen: No, Judul, Jenis, Client, Unit, Tanggal Dibuat, Tanggal Selesai, Status (EXPIRED, REVIEW UNIT, REVIEW CLIENT, Aktif), Aksi
- Aksi per baris: "Edit", "Lihat PDF", "Tanggal"
- Paginasi (1, 2, 3) dan teks "Showing 1 to 10 of 25 results"

## 04-tracking-dokumen.png — Tracking Dokumen
**URL:** https://kerjasama.ksm.web.id/tracking
**Fungsi:** Halaman pelacakan hierarki/alur dokumen kerjasama — melihat posisi tiap dokumen dalam proses review.
**Komponen utama:**
- Formulir "Cari & Lacak Dokumen": kolom pencarian nomor/judul + tombol "Lacak"
- Daftar "Hierarki Dokumen Kerjasama (17 root)": jenis, judul, nomor dokumen, nama mitra, rentang tanggal
- Lencana status: Aktif, Draft, Review Client, Review Unit, Expired

## 05-export-laporan.png — Export Laporan
**URL:** https://kerjasama.ksm.web.id/reports
**Fungsi:** Halaman pembuatan dan ekspor laporan audit kerjasama ke PDF/Excel.
**Komponen utama:**
- 5 kartu ringkasan: total 25 dokumen (12 MoU, 8 MoA, 5 IA, 10 Aktif/Signed)
- Formulir "Filter Laporan Audit": Tanggal Mulai, Tanggal Akhir, Jenis Dokumen, Status, Unit, tombol "Filter"
- 2 grafik distribusi (per jenis dan per status)
- Tombol "Export PDF", "Export Excel", "Print"
- Tabel "Preview Laporan" (5 data terbaru)

## 06-users.png — Manajemen User
**URL:** https://kerjasama.ksm.web.id/users
**Fungsi:** Halaman administrasi pengguna oleh Super Admin — mengelola akun dan peran.
**Komponen utama:**
- Tombol "+ Tambah User" dan kolom pencarian "Cari nama atau email..."
- Label "Total: 17 user"
- Tabel: User (avatar inisial + nama), Email, Role (lencana berwarna: SUPER ADMIN, UNIT PENGUSUL, CLIENT), Terdaftar, Aksi
- Ikon edit & hapus per baris, paginasi (1, 2)

## Catatan
- Tidak ada dropdown/submenu; seluruh item sidebar ter-cover.
- Tombol "Logout" di sidebar tidak diklik (sesi dibiarkan login).
- Tombol-tombol aksi di dalam halaman ("+ Buat Baru", "Buat Draft Baru", "Tambah User", ikon edit/hapus) bukan item menu navigasi sehingga tidak di-screenshot.
