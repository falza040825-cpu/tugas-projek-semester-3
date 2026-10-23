# UI Guideline — StudioFlow

**Status:** Draft untuk persetujuan pengguna. Jangan memperluas scope visual tanpa approval.

## 1. Arah visual
Modern futuristic SaaS yang tenang dan profesional: permukaan off-white, silver, abu-abu lembut, cokelat muda/taupe, dengan aksen sage dan lavender pastel. Hindari neon keras, gradien berlebihan, dan kepadatan tabel yang melelahkan.

## 2. Design tokens
- Canvas: `#F4F2EE`; surface: `#FFFFFF`; elevated: `#FAF9F7`.
- Ink: `#252723`; secondary: `#777970`; border: `#E7E4DE`.
- Taupe: `#B9A895`; sage: `#DCE8DE`; lavender: `#E8E3F1`; sand: `#EFE4D6`; blush: `#F1DEDA`.
- Radius: kartu 18–22px; kontrol 10–12px; pill 999px.
- Spacing: basis 4px; area utama 28–32px; antar kartu 16–20px.
- Typography: system sans-serif untuk scaffold, hirarki jelas; heading ringkas, body 14–15px.

## 3. Kerangka aplikasi
- Sidebar kiri: brand, menu utama, bagian workspace, profil dan role simulasi.
- Topbar: breadcrumb/judul halaman, pencarian demo, notifikasi, tombol aksi utama.
- Konten: grid responsif dengan statistik, grafik mini, daftar aktivitas, tabel/list.
- Navigasi aktif menggunakan surface lembut dan aksen tipis; hindari warna penuh yang dominan.

## 4. Komponen
- **Stat card:** label, angka besar, delta/catatan pendek, ikon sederhana.
- **Status pill:** label status + latar pastel; warna selalu disertai teks.
- **Task row:** judul, platform/proyek, assignee, deadline, prioritas.
- **Content card:** judul, kategori, kanal, tanggal produksi/publikasi, status.
- **Filter:** kontrol ringkas, clear state, nilai aktif terlihat.
- **Document preview:** daftar tiga dokumen SOT, panel preview dengan judul, versi, status approval.
- **Dialog/form:** label eksplisit, validasi inline, tombol batal dan simpan.

## 5. Interaksi prototipe
- Sidebar mengganti halaman tanpa reload.
- Toggle kalender hari/minggu/bulan mengubah mode tampilan.
- Filter mencari/menyaring dummy content.
- Tombol tambah membuka modal demo; simpan menambah item lokal sementara.
- Kontrol status pipeline mengubah status pada sesi UI.
- Tombol ekspor/notifikasi menampilkan feedback demo dan tidak mengklaim operasi backend.
- Dokumen SOT dapat dipilih untuk melihat ringkasan isi; dokumen lengkap tersedia di folder `docs/`.

## 6. Responsif dan aksesibilitas
- Desktop: sidebar tetap dan dashboard multi-kolom.
- Tablet: sidebar ringkas; kartu 2 kolom.
- Mobile: sidebar menjadi drawer/menu, tabel menjadi list, kontrol kalender dapat digulir.
- Fokus keyboard terlihat, elemen interaktif punya nama yang bermakna, target sentuh nyaman, dan status memakai teks.

## 7. Do / Don't
**Do:** ruang kosong, batas halus, hierarki kuat, status yang konsisten, dummy badge yang jelas.

**Don't:** efek blur berat, animasi mengganggu, chart dekoratif tanpa makna, data palsu yang disebut real-time, atau komponen baru di luar PRD.
