# Nusantara Seismic Logs

Nusantara Seismic Logs adalah aplikasi web untuk memantau aktivitas kegempaan (seismik) di Indonesia. Aplikasi ini menampilkan informasi gempa bumi terkini, termasuk peta interaktif yang menunjukkan lokasi gempa, magnitudo, kedalaman, dan informasi relevan lainnya bersumber dari data BMKG.

## Fitur Utama

- **Informasi Gempa Terkini**: Menampilkan detail gempa terbaru (magnitudo, wilayah, waktu, kedalaman, potensi tsunami).
- **Peta Interaktif**: Visualisasi lokasi gempa pada peta menggunakan MapLibre GL.
- **Peta Guncangan (Shakemap)**: Menampilkan shakemap resmi dari BMKG.
- **Klasifikasi Magnitudo Warna**: Indikator warna berdasarkan skala magnitudo gempa.

## Teknologi yang Digunakan

Proyek ini dibangun menggunakan:

- **React 19**
- **Vite** (Build tool)
- **Tailwind CSS v4** (Styling)
- **React Router v8** (Routing)
- **MapLibre GL & React Map GL** (Peta interaktif)

## Persyaratan Sistem

- Node.js (direkomendasikan versi 18 atau lebih baru)
- npm atau pnpm atau yarn

## Instalasi dan Menjalankan Proyek Secara Lokal

1. **Kloning repositori:**
   ```bash
   git clone https://github.com/K4nes/NusantaraSeismicLogs
   cd NusantaraSeismicLogs
   ```

2. **Instal dependensi:**
   ```bash
   npm install
   ```
   *(atau gunakan `yarn install` / `pnpm install`)*

3. **Konfigurasi Environment Variable:**
   Buat file `.env` di root direktori proyek dan tambahkan API Key MapTiler Anda. Aplikasi menggunakan MapTiler untuk memuat peta (pada `src/components/Layout/Layout.jsx`).
   ```env
   VITE_MAPTILER_API=api_key_anda_disini
   ```

4. **Jalankan server pengembangan (development server):**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan pada `http://localhost:5173` (port default Vite).

## Struktur Direktori

- `src/`
  - `components/`: Komponen UI.
  - `context/`: `MapContext` untuk state peta.
  - `data/`: Fungsi pengambilan data (fetch) dari API/sumber data (BMKG).
  - `pages/`: Komponen halaman utama (`Home`, `Magnitude`, `Felt`).
  - `utils/`: Fungsi utilitas bantuan.
  - `App.jsx`: Komponen root aplikasi & definisi rute.
  - `main.jsx`: Entry point aplikasi.

## Skrip yang Tersedia

- `npm run dev`: Memulai development server.
- `npm run build`: Membangun aplikasi untuk produksi (production ready).
- `npm run lint`: Menjalankan ESLint untuk memeriksa kualitas kode.
- `npm run preview`: Mempratinjau hasil build (production preview).
