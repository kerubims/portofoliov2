# Daftar Konversi File Media (Menuju Standar WebP & WebM)

Dokumen ini mencatat seluruh file media di dalam project yang telah **berhasil dikonversi ke format modern (`.webp` untuk gambar dan `.webm` untuk video)**, beserta perbandingan ukuran dan statusnya.

---

## 📊 Ringkasan Hasil Konversi

| Kategori | Jumlah File | Ukuran Sebelum | Ukuran Sesudah | Penghematan | Status |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Video Hero** | 1 file | 3.20 MB | **1.16 MB** | -63.5% (2.04 MB) | ✅ Selesai (`hero.webm`) |
| **Hero Placeholder** | 1 file | 881.0 KB | **72.7 KB** | -91.6% (808 KB) | ✅ Selesai (`lazyhero.webp`) |
| **Mascot Portfolio** | 6 file | 2.18 MB | **156.6 KB** | -92.8% (2.02 MB) | ✅ Selesai (`.webp`) |
| **Project Showcase & Art** | 49 file | 16.28 MB | **2.30 MB** | -85.9% (13.98 MB) | ✅ Selesai (`.webp`) |
| **Cursor Trail Assets** | 4 file | 562.3 KB | **53.1 KB** | -90.6% (509 KB) | ✅ Selesai (`.webp`) |
| **Legacy Raw Images** | 4 file | 17.17 MB | **0 MB** | -100% (17.17 MB) | 🗑️ Dihapus (`c1-c4.png`) |
| **TOTAL KESELURUHAN** | **65 file** | **± 40.27 MB** | **± 3.74 MB** | **-90.7% (~36.53 MB)** | ✅ **OPTIMASI SUKSES** |

---

## 🎬 1. Video (`.mp4` → `.webm`)

| Status | File Path | Format Asli | Format Baru | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| [x] | `public/assets/hero.webm` | `.mp4` (3.20 MB) | `.webm` (VP9) | 3,203 KB | **1,169 KB** | **63.5%** |

*Catatan:* File `public/assets/hero.mp4` tetap dipertahankan sebagai fallback otomatis (`<source type="video/webm">` didahulukan, diikuti `<source type="video/mp4">`).

---

## 🖼️ 2. Hero Section Media (`.jpg` → `.webp`)

| Status | File Path | Format Asli | Format Baru | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| [x] | `public/assets/lazyhero.webp` | `.jpg` | `.webp` | 861.0 KB | **72.7 KB** | **91.6%** |

---

## 🛸 3. Mascot Portfolio (`.png` → `.webp`)

Semua maskot transparan di folder `public/assets/mascot-portofolio/`:

| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/mascot-portofolio/mascot1.webp` | 413.4 KB | **29.2 KB** | 92.9% |
| [x] | `public/assets/mascot-portofolio/mascot2.webp` | 380.6 KB | **23.9 KB** | 93.7% |
| [x] | `public/assets/mascot-portofolio/mascot3.webp` | 375.8 KB | **29.9 KB** | 92.0% |
| [x] | `public/assets/mascot-portofolio/mascot4.webp` | 343.7 KB | **23.0 KB** | 93.3% |
| [x] | `public/assets/mascot-portofolio/mascot5.webp` | 281.6 KB | **20.3 KB** | 92.8% |
| [x] | `public/assets/mascot-portofolio/mascot6.webp` | 389.2 KB | **29.4 KB** | 92.5% |

---

## 💼 4. Project Showcase & Screenshots (`.png` / `.jpg` → `.webp`)

Semua path telah diperbarui di `src/data/projects.ts`:

### 4.1. Artwork 3D & Thumbnail Utama Project
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/projects/art_cvku.webp` | 671.0 KB | **94.8 KB** | 85.9% |
| [x] | `public/assets/projects/art_polsen.webp` | 657.2 KB | **59.9 KB** | 90.9% |
| [x] | `public/assets/projects/art_simkerma.webp` | 601.6 KB | **47.7 KB** | 92.1% |
| [x] | `public/assets/projects/cvku.webp` | 23.0 KB | **8.2 KB** | 64.3% |
| [x] | `public/assets/projects/polsen.webp` | 1,022.9 KB | **78.8 KB** | 92.3% |
| [x] | `public/assets/projects/sebatas-kopi.webp` | 931.7 KB | **89.1 KB** | 90.4% |
| [x] | `public/assets/projects/sim-kerma.webp` | 28.9 KB | **13.2 KB** | 54.4% |
| [x] | `public/assets/projects/vespabox.webp` | 541.6 KB | **83.0 KB** | 84.7% |

### 4.2. CVKU Feature Screenshots (`public/assets/projects/cvku/`)
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/projects/cvku/01-beranda.webp` | 157.8 KB | **72.4 KB** | 54.1% |
| [x] | `public/assets/projects/cvku/02-buat-cv.webp` | 46.4 KB | **19.4 KB** | 58.3% |
| [x] | `public/assets/projects/cvku/03-cek-skor-ats.webp` | 57.3 KB | **25.5 KB** | 55.4% |
| [x] | `public/assets/projects/cvku/04-contoh-cv.webp` | 97.8 KB | **53.9 KB** | 44.9% |
| [x] | `public/assets/projects/cvku/05-artikel-blog.webp` | 47.5 KB | **21.2 KB** | 55.3% |

### 4.3. SIM-KERMA Feature Screenshots (`public/assets/projects/sim-kerma/`)
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/projects/sim-kerma/01-login.webp` | 30.0 KB | **12.9 KB** | 57.0% |
| [x] | `public/assets/projects/sim-kerma/02-dashboard.webp` | 83.1 KB | **39.5 KB** | 52.5% |
| [x] | `public/assets/projects/sim-kerma/03-dokumen-kerjasama.webp` | 106.0 KB | **46.8 KB** | 55.9% |
| [x] | `public/assets/projects/sim-kerma/04-tracking-dokumen.webp` | 104.2 KB | **50.4 KB** | 51.6% |
| [x] | `public/assets/projects/sim-kerma/05-export-laporan.webp` | 130.5 KB | **41.0 KB** | 68.6% |
| [x] | `public/assets/projects/sim-kerma/06-users.webp` | 96.5 KB | **43.5 KB** | 54.9% |

### 4.4. Sebatas Kopi Feature Screenshots (`public/assets/projects/sebatas-kopi/`)
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/projects/sebatas-kopi/01-beranda.webp` | 898.2 KB | **83.4 KB** | 90.7% |
| [x] | `public/assets/projects/sebatas-kopi/02-menu.webp` | 169.8 KB | **44.2 KB** | 74.0% |
| [x] | `public/assets/projects/sebatas-kopi/03-about.webp` | 625.3 KB | **72.4 KB** | 88.4% |
| [x] | `public/assets/projects/sebatas-kopi/04-history.webp` | 40.8 KB | **16.1 KB** | 60.5% |
| [x] | `public/assets/projects/sebatas-kopi/05-order.webp` | 50.5 KB | **21.0 KB** | 58.5% |

### 4.5. VespaBox Feature Screenshots (`public/assets/projects/vespabox/`)
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/projects/vespabox/01-beranda.webp` | 540.2 KB | **84.3 KB** | 84.4% |
| [x] | `public/assets/projects/vespabox/02-katalog.webp` | 90.1 KB | **38.8 KB** | 56.9% |
| [x] | `public/assets/projects/vespabox/03-masuk.webp` | 51.0 KB | **17.6 KB** | 65.5% |
| [x] | `public/assets/projects/vespabox/04-riwayat-servis.webp` | 61.7 KB | **26.0 KB** | 57.9% |
| [x] | `public/assets/projects/vespabox/05-antrean-langsung.webp` | 65.8 KB | **24.6 KB** | 62.6% |
| [x] | `public/assets/projects/vespabox/06-pesan-servis.webp` | 62.1 KB | **29.1 KB** | 53.1% |
| [x] | `public/assets/projects/vespabox/07-profil-saya.webp` | 58.7 KB | **21.9 KB** | 62.6% |

### 4.6. Politeknik Sendawar Feature Screenshots (`public/assets/projects/poltek-sendawar/`)
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/projects/poltek-sendawar/01-beranda.webp` | 1,028.4 KB | **88.7 KB** | 91.4% |
| [x] | `public/assets/projects/poltek-sendawar/02-profil-politeknik-sendawar.webp` | 490.4 KB | **67.3 KB** | 86.3% |
| [x] | `public/assets/projects/poltek-sendawar/03-kepemimpinan-politeknik-sendawar.webp` | 566.0 KB | **61.6 KB** | 89.1% |
| [x] | `public/assets/projects/poltek-sendawar/04-fasilitas-politeknik-sendawar.webp` | 432.2 KB | **40.6 KB** | 90.6% |
| [x] | `public/assets/projects/poltek-sendawar/05-kerjasama-politeknik-sendawar.webp` | 414.5 KB | **63.6 KB** | 84.7% |
| [x] | `public/assets/projects/poltek-sendawar/06-program-studi.webp` | 691.3 KB | **69.2 KB** | 90.0% |
| [x] | `public/assets/projects/poltek-sendawar/07-akreditasi.webp` | 361.6 KB | **30.6 KB** | 91.5% |
| [x] | `public/assets/projects/poltek-sendawar/08-kalender-akademik.webp` | 406.9 KB | **36.7 KB** | 91.0% |
| [x] | `public/assets/projects/poltek-sendawar/09-tracer-study.webp` | 405.3 KB | **57.5 KB** | 85.8% |
| [x] | `public/assets/projects/poltek-sendawar/10-penelitian-pengabdian.webp` | 415.4 KB | **65.4 KB** | 84.3% |
| [x] | `public/assets/projects/poltek-sendawar/11-komunitas.webp` | 436.3 KB | **39.2 KB** | 91.0% |
| [x] | `public/assets/projects/poltek-sendawar/12-organisasi.webp` | 436.3 KB | **39.2 KB** | 91.0% |
| [x] | `public/assets/projects/poltek-sendawar/13-tentang-p2mpp.webp` | 417.6 KB | **73.4 KB** | 82.4% |
| [x] | `public/assets/projects/poltek-sendawar/14-dokumen-p2mpp.webp` | 389.3 KB | **47.7 KB** | 87.8% |
| [x] | `public/assets/projects/poltek-sendawar/15-spmi.webp` | 374.3 KB | **40.9 KB** | 89.1% |
| [x] | `public/assets/projects/poltek-sendawar/16-survei-kepuasan.webp` | 390.5 KB | **54.8 KB** | 86.0% |
| [x] | `public/assets/projects/poltek-sendawar/17-berita.webp` | 450.6 KB | **53.0 KB** | 88.2% |
| [x] | `public/assets/projects/poltek-sendawar/18-acara.webp` | 412.5 KB | **40.9 KB** | 90.1% |

---

## ✨ 5. Cursor Trail Assets (`.png` → `.webp`)

Diperbarui di `src/components/CursorTrail.tsx`:
| Status | File Path | Ukuran Asli | Ukuran Baru | Penghematan |
| :---: | :--- | :---: | :---: | :---: |
| [x] | `public/assets/trail/c1.webp` | 103.0 KB | **8.7 KB** | 91.6% |
| [x] | `public/assets/trail/c2.webp` | 217.8 KB | **19.9 KB** | 90.9% |
| [x] | `public/assets/trail/c3.webp` | 88.5 KB | **8.7 KB** | 90.1% |
| [x] | `public/assets/trail/c4.webp` | 153.0 KB | **15.8 KB** | 89.7% |

---

## 🗑️ 6. File Legacy Tak Terpakai yang Berhasil Dihapus

| File Path | Ukuran Asli | Status |
| :--- | :---: | :---: |
| `public/assets/c1.png` | 2.80 MB | 🗑️ Berhasil dihapus |
| `public/assets/c2.png` | 4.31 MB | 🗑️ Berhasil dihapus |
| `public/assets/c3.png` | 4.93 MB | 🗑️ Berhasil dihapus |
| `public/assets/c4.png` | 5.15 MB | 🗑️ Berhasil dihapus |
| **Total Ruang Hemat** | **17.17 MB** | |
