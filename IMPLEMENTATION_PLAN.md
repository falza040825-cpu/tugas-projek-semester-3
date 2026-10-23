# Implementation Plan — StudioFlow

**Status:** Draft untuk persetujuan pengguna. Tidak ada fase berikutnya dijalankan tanpa persetujuan eksplisit.

## Prinsip eksekusi SOT
Hanya tiga dokumen yang menjadi sumber kebenaran produk: `PRD.md`, `UI_GUIDELINE.md`, dan `IMPLEMENTATION_PLAN.md`. `AGENTS.md` dan `PROMPT_EXECUTION.md` adalah kontrak kerja untuk agen, bukan pengganti SOT. Bila ada konflik, hentikan pekerjaan dan minta keputusan pengguna.

## Fase 0 — Persetujuan SOT (sekarang)
- Tampilkan preview dashboard dan preview isi ketiga dokumen.
- Kumpulkan persetujuan/perubahan pengguna.
- **Gate:** jangan mulai implementasi fase berikutnya sebelum pengguna menyatakan setuju.

## Fase 1 — Fondasi front-end
- Siapkan Vite dan struktur modul ringan.
- Tetapkan tokens, layout shell, navigasi, komponen dasar.
- Gunakan dummy data terpusat.
- **Gate:** minta approval setelah fondasi dapat dipreview.

## Fase 2 — Halaman operasional
- Dashboard, kalender, pipeline produksi, tugas.
- Implementasikan interaksi lokal pada dummy data.
- **Gate:** minta approval untuk alur utama sebelum lanjut.

## Fase 3 — Workspace pendukung
- Pengguna/peran (simulasi), aset, notifikasi, laporan.
- Pastikan seluruh delapan area dari PRD memiliki keadaan UI.
- **Gate:** minta approval sebelum polish/penutupan.

## Fase 4 — QA visual dan handoff
- Uji navigasi, filter, mode kalender, form demo, responsif, dan konsistensi status.
- Verifikasi build Vite dan dokumentasi.
- Catat keterbatasan prototype serta pekerjaan backend yang belum termasuk.
- **Gate:** minta persetujuan akhir; tidak deploy tanpa instruksi eksplisit.

## Batasan teknis yang disetujui untuk scaffold
- Vite + vanilla JavaScript/CSS agar ringan dan hemat token.
- Tidak menambahkan framework, library chart, backend, database, login, atau integrasi pihak ketiga tanpa approval.
- Dummy data berada di front-end; penyimpanan sesi boleh bersifat sementara.
- Build target static Vite.

## Definisi selesai per fase
1. Hasil cocok dengan SOT yang disetujui.
2. Tidak ada fitur tambahan yang tidak diminta.
3. Build/test yang relevan dijalankan dan hasilnya dilaporkan apa adanya.
4. Ringkasan perubahan dan pertanyaan keputusan diberikan kepada pengguna.
5. Berhenti dan menunggu persetujuan eksplisit.
