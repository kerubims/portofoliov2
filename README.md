# 🚀 Kerubim SM — Modern Portfolio Website (v2)

Website portofolio interaktif dan modern berkinerja tinggi yang dibangun untuk merepresentasikan karya, keahlian, dan studi kasus proyek rekayasa perangkat lunak.

- **Live URL:** [https://ksm.web.id](https://ksm.web.id)
- **Author:** Kerubim Serafim Mahanaim (Full Stack Web Developer & Software Engineer)
- **Lokasi:** Malang, Jawa Timur, Indonesia

---

## 📑 Daftar Isi

1. [Fitur Unggulan](#-fitur-unggulan)
2. [Teknologi yang Digunakan](#-teknologi-yang-digunakan)
3. [Struktur Proyek](#-struktur-proyek)
4. [Persiapan Lingkungan Lokal (Local Development)](#-persiapan-lingkungan-lokal-local-development)
5. [Tahapan Deployment Lengkap](#-tahapan-deployment-lengkap)
   - [Opsi A: Deploy Menggunakan Docker & Nginx di VPS (Rekomendasi)](#opsi-a-deploy-menggunakan-docker--nginx-di-vps-rekomendasi)
   - [Opsi B: Deploy ke Vercel (Opsi Cloud Instan)](#opsi-b-deploy-ke-vercel-opsi-cloud-instan)
   - [Opsi C: Deploy Menggunakan PM2 di VPS (Tanpa Docker)](#opsi-c-deploy-menggunakan-pm2-di-vps-tanpa-docker)
6. [Konfigurasi Environment Variables](#-konfigurasi-environment-variables)
7. [Panduan Monitoring & Behavioral Analytics (Microsoft Clarity)](#-panduan-monitoring--behavioral-analytics-microsoft-clarity)
8. [Perawatan & Troubleshooting](#-perawatan--troubleshooting)

---

## ✨ Fitur Unggulan

- **Estetika Brutalist Modern & Fluid Typography:** Perpaduan visual tajam dengan tipografi dinamis (*Oswald* & *Hanken Grotesk*) dan animasi interaktif.
- **Media Super Ringan (WebP & VP9 WebM):** Penghematan ukuran aset lebih dari 90% dengan kompresi modern dan poster lazy loading.
- **Animasi Maskot Berkelanjutan:** Video transparan WebM maskot pada section Hero dan Work yang ringan dan hemat baterai/RAM.
- **SEO & Structured Data Kelas Satu:** Dilengkapi JSON-LD (*Person* & *WebSite*), metadata OpenGraph, Twitter Cards, serta pembuatan `sitemap.xml` dan `robots.txt` otomatis.
- **Behavioral Analytics & Session Recording:** Terintegrasi langsung dengan Microsoft Clarity (gratis tanpa kuota) untuk melihat rekaman video interaksi pengunjung, peta klik (*click heatmaps*), dan batas scroll (*scroll depth*).

---

## 🛠️ Teknologi yang Digunakan

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Standalone Output)
- **Library:** [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Containerization:** [Docker](https://www.docker.com/) (Multi-stage build alpine, limit memory ~256MB) & Docker Compose
- **Analytics:** [Microsoft Clarity](https://clarity.microsoft.com/) & [Google Analytics 4](https://analytics.google.com/)
- **Image Optimization:** [Sharp](https://sharp.pixelplumbing.com/)

---

## 📁 Struktur Proyek

```plaintext
portfoliov2/
├── public/                 # Aset statis (gambar .webp, video .webm, icon)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── layout.tsx      # Root layout, metadata SEO, Google Fonts, JSON-LD
│   │   ├── page.tsx        # Homepage (Hero, About, Work, Testimonials, Footer)
│   │   ├── globals.css     # Design tokens & styling portofolio
│   │   ├── sitemap.ts      # Generator sitemap.xml dinamis
│   │   ├── robots.ts       # Generator robots.txt otomatis
│   │   └── projects/[slug]/# Halaman detail studi kasus proyek
│   ├── components/         # Komponen UI modular
│   │   ├── Analytics.tsx   # Tracker Microsoft Clarity & Google Analytics
│   │   ├── Hero.tsx        # Hero section dengan live Malang clock & video
│   │   ├── Work.tsx        # Horizontal showcase proyek & maskot
│   │   ├── About.tsx       # Infinite ticker marquee & bio
│   │   ├── Testimonials.tsx# Review & testimoni klien
│   │   ├── Footer.tsx      # Footer kontak & tautan sosial
│   │   └── CursorTrail.tsx # Custom cursor interaktif
│   └── data/
│       └── projects.ts     # Data konten proyek & studi kasus
├── Dockerfile              # Multi-stage Docker build (Node 20 Alpine)
├── docker-compose.yml      # Service container runner (Port 9020:3000)
├── .env.example            # Template environment variables
└── README.md               # Dokumentasi proyek & panduan deployment
```

---

## 💻 Persiapan Lingkungan Lokal (Local Development)

### 1. Prasyarat
- Node.js versi 20.x atau lebih baru
- npm, pnpm, atau yarn

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi File Environment
Salin template `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```
Buka `.env.local` dan pastikan nilainya telah diisi:
```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka browser pada alamat [http://localhost:3000](http://localhost:3000).

---

## 🚢 Tahapan Deployment Lengkap

Pilih salah satu metode deployment di bawah sesuai dengan infrastruktur server Anda.

---

### Opsi A: Deploy Menggunakan Docker & Nginx di VPS (Rekomendasi)

Metode ini adalah metode bawaan proyek karena sudah dilengkapi file `Dockerfile` dan `docker-compose.yml` yang teroptimasi (RAM dibatasi maksimal ~256MB agar aman di VPS spesifikasi hemat 1GB RAM).

#### Langkah 1: Persiapan Server VPS
Pastikan VPS Anda (Ubuntu 22.04 / 24.04 atau Debian) sudah terpasang Git, Docker, dan Docker Compose:
```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl ufw nginx certbot python3-certbot-nginx

# Pasang Docker & Docker Compose Plugin
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```
*(Setelah menjalankan perintah di atas, relogin SSH agar izin Docker aktif)*.

#### Langkah 2: Clone Repository ke Server
```bash
cd /var/www
git clone https://github.com/kerubims/portfoliov2.git
cd portfoliov2
```

#### Langkah 3: Siapkan Environment Variable Produksi
Buat file `.env.local` atau `.env` di folder proyek VPS:
```bash
nano .env.local
```
Isi dengan kredensial produksi Anda:
```env
NEXT_PUBLIC_CLARITY_PROJECT_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```
Simpan file (`Ctrl + O`, `Enter`, lalu `Ctrl + X`).

#### Langkah 4: Build dan Jalankan Container
Jalankan Docker Compose dalam mode background (`detached`):
```bash
docker compose up -d --build
```
Periksa apakah container sudah aktif berjalan:
```bash
docker compose ps
# atau cek log:
docker compose logs -f
```
Aplikasi kini berjalan di dalam container dan terbuka di port lokal server: `http://localhost:9020`.

#### Langkah 5: Konfigurasi Reverse Proxy Nginx & SSL HTTPS
Buat file konfigurasi virtual host Nginx untuk domain Anda:
```bash
sudo nano /etc/nginx/sites-available/ksm.web.id
```
Tempelkan konfigurasi berikut:
```nginx
server {
    server_name ksm.web.id www.ksm.web.id;

    # Gzip Compression untuk performa tinggi
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    location / {
        proxy_pass http://127.0.0.1:9020;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Cache file statis Next.js untuk kecepatan maksimal
    location /_next/static {
        proxy_pass http://127.0.0.1:9020;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
}
```

Aktifkan konfigurasi Nginx dan pasang sertifikat SSL gratis via Let's Encrypt:
```bash
sudo ln -s /etc/nginx/sites-available/ksm.web.id /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Pasang SSL Otomatis
sudo certbot --nginx -d ksm.web.id -d www.ksm.web.id
```
Buka [https://ksm.web.id](https://ksm.web.id). Website Anda telah live dan terproteksi SSL!

---

### Opsi B: Deploy ke Vercel (Opsi Cloud Instan)

Jika Anda ingin hosting berbasis serverless cloud gratis:
1. Push repository Anda ke akun GitHub.
2. Buka [vercel.com](https://vercel.com) dan login.
3. Klik **"Add New"** > **"Project"** > Import repository `portfoliov2`.
4. Di bagian **Environment Variables**, tambahkan:
   - `NEXT_PUBLIC_CLARITY_PROJECT_ID`: ``
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: *(opsional jika ada)*
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`: *(opsional jika ada)*
5. Klik **"Deploy"**.
6. Setelah selesai, buka **Project Settings** > **Domains**, lalu tambahkan domain custom Anda: `ksm.web.id`. Ikuti petunjuk DNS CNAME / A Record yang diberikan Vercel.

---

### Opsi C: Deploy Menggunakan PM2 di VPS (Tanpa Docker)

Jika Anda tidak menggunakan Docker dan ingin langsung menjalankan Node.js standalone:

1. Build proyek di server:
   ```bash
   npm ci
   npm run build
   ```
2. Salin folder aset publik dan static ke folder standalone:
   ```bash
   cp -r public .next/standalone/
   cp -r .next/static .next/standalone/.next/
   ```
3. Pasang PM2 dan jalankan server standalone:
   ```bash
   sudo npm install -g pm2
   PORT=9020 pm2 start .next/standalone/server.js --name "portfoliov2"
   pm2 save
   pm2 startup
   ```
4. Arahkan reverse proxy Nginx ke port `9020` seperti pada langkah di Opsi A.

---

## 🔑 Konfigurasi Environment Variables

| Variabel | Deskripsi | Status | Contoh Nilai |
| :--- | :--- | :---: | :--- |
| `NEXT_PUBLIC_CLARITY_PROJECT_ID` | Project ID Microsoft Clarity untuk rekaman video & heatmap | **Aktif** | `` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | ID Pengukuran Google Analytics 4 (Format `G-XXXXX`) | Opsional | `G-ABC123XYZ` |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Token verifikasi Google Search Console untuk SEO | Opsional | `abc123xyz_verification_code` |

---

## 📊 Panduan Monitoring & Behavioral Analytics (Microsoft Clarity)

Website ini telah terkonfigurasi dengan Microsoft Clarity Project ID: **``**.

Setelah website dideploy atau diakses:
1. Buka dashboard di [clarity.microsoft.com](https://clarity.microsoft.com).
2. Pilih proyek portofolio Anda.
3. Fitur utama yang dapat Anda pantau:
   - **Session Recordings:** Memutar ulang video rekaman pengunjung saat menjelajah website, melihat arah kursor, dan membaca konten.
   - **Scroll Heatmap:** Melihat berapa persen pengunjung yang membaca sampai bagian *Hero*, *About*, *Work*, *Testimonials*, dan *Footer*.
   - **Click Heatmap:** Melihat tombol atau kartu proyek mana yang paling banyak diklik (misal: tombol email, link WhatsApp, kartu SIM-KERMA, dll).
   - **Rage Clicks & Dead Clicks:** Mengetahui jika ada elemen yang diklik berulang kali oleh pengunjung karena dikira tautan.
   - **Demografi & Sumber Traffic:** Mengetahui negara asal pengunjung, browser yang digunakan, dan apakah mereka datang dari LinkedIn, Instagram, atau Google.

> **Catatan:** Microsoft Clarity biasanya membutuhkan waktu 15–30 menit setelah ada interaksi kunjungan pertama untuk mulai menampilkan rekaman dan heatmap secara lengkap.

---

## 🔄 Perawatan & Troubleshooting

### Cara Update / Redeploy Kode Terbaru (Metode Docker)
Setiap kali ada commit atau perubahan baru di Git:
```bash
cd /var/www/portfoliov2
git pull origin main
docker compose up -d --build
```

### Perintah Berguna Docker
```bash
# Cek log aplikasi secara real-time:
docker compose logs -f --tail=100

# Restart container:
docker compose restart

# Hentikan container:
docker compose down

# Cek penggunaan RAM dan CPU container:
docker stats portfoliov2_web
```

---

*© 2026 Kerubim Serafim Mahanaim. Crafted with precision in Malang, Indonesia.*
