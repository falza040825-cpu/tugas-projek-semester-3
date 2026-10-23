# PRD — StudioFlow Content Operations

**Status:** Draft untuk persetujuan pengguna · **Versi:** 0.1 · **Sumber kebenaran:** dokumen ini bersama `UI_GUIDELINE.md` dan `IMPLEMENTATION_PLAN.md`.

## 1. Ringkasan produk
StudioFlow adalah aplikasi web internal untuk mengelola perencanaan, kalender, alur produksi, tugas, aset, notifikasi, serta evaluasi konten digital dalam satu ruang kerja. Rilis awal berupa front-end Vite dengan data dummy; tidak ada backend, autentikasi nyata, integrasi platform, atau pengiriman notifikasi sungguhan pada tahap konsep ini.

## 2. Tujuan
- Memberi visibilitas cepat terhadap volume konten, status produksi, publikasi, keterlambatan, dan tugas mendesak.
- Menyatukan kalender produksi dan publikasi dengan pipeline yang konsisten.
- Memperjelas pemilik tugas, tenggat, review, revisi, serta persetujuan.
- Menyediakan gambaran evaluasi per periode, platform, dan anggota tim.

## 3. Pengguna dan peran
- **Admin:** seluruh data dan pengaturan pengguna.
- **Koordinator:** perencanaan konten, kalender, penugasan, dan persetujuan alur.
- **Tim kreatif:** naskah, desain/video, editing, revisi, dan unggah aset.
- **Reviewer:** review, komentar, persetujuan atau penolakan.
- **Publikasi:** penjadwalan tayang, pembaruan status, dan tautan publikasi.

Pada prototipe, pergantian peran hanya simulasi tampilan, bukan kontrol keamanan.

## 4. Ruang lingkup fitur
1. **Dashboard:** total direncanakan, sedang diproduksi, selesai/terpublikasi, terlambat, tugas prioritas, aktivitas terbaru, ringkasan progres.
2. **Kalender digital:** tampilan bulanan/mingguan/harian; jadwal produksi dan publikasi; kategori edukasi, promosi, informasi, hiburan; filter platform, kategori, status; penanda jadwal berdekatan/terlambat.
3. **Pipeline produksi:** ide/perencanaan → naskah/caption → desain/pengambilan video → editing → review/revisi → persetujuan → siap publikasi → dipublikasikan. Status dapat diubah melalui kontrol UI prototipe.
4. **Tugas:** buat/edit, penanggung jawab, deadline, prioritas, status, instruksi/catatan.
5. **Pengguna & hak akses:** daftar peran dan matriks kemampuan konseptual; implementasi keamanan ditunda hingga backend disetujui.
6. **Aset:** daftar berkas dummy, tipe, konten terkait, dan tautan eksternal placeholder. Unggahan nyata di luar lingkup.
7. **Notifikasi:** daftar pengingat tenggat, tugas baru, revisi, keputusan review, dan publikasi mendekat. Email adalah pengembangan berikutnya.
8. **Laporan:** jumlah per status/periode/platform, ketepatan waktu, produktivitas anggota; tombol ekspor pada demo dapat memberi umpan balik simulasi, bukan menghasilkan data server.

## 5. Alur utama
1. Koordinator membuat item konten dan menentukan platform, kategori, tanggal produksi, tanggal publikasi, serta pemilik.
2. Tim kreatif mengerjakan tugas dan menautkan aset.
3. Reviewer memberi persetujuan atau meminta revisi.
4. Setelah disetujui, konten masuk status siap publikasi.
5. Peran publikasi mencatat waktu tayang dan URL.
6. Dashboard dan laporan membaca status konten serta tenggat.

## 6. Kebutuhan kualitas
- Layout responsif desktop/tablet/mobile.
- Navigasi konsisten, fokus keyboard terlihat, label form jelas, kontras teks terbaca.
- Status tidak hanya dibedakan oleh warna; sertakan teks/ikon.
- Dummy data diberi label dan tidak menyiratkan integrasi nyata.
- Tidak ada kredensial, API key, atau data pribadi nyata di repo.

## 7. Kriteria penerimaan konsep
- Semua delapan area fitur memiliki halaman/keadaan UI yang dapat diakses dari navigasi.
- Dashboard menampilkan indikator utama dan daftar tugas mendesak.
- Kalender menyediakan switch hari/minggu/bulan dan filter yang bekerja pada data dummy.
- Pipeline memperlihatkan seluruh tahapan produksi dan kontrol status demo.
- Dokumen PRD, UI guideline, implementation plan, AGENTS.md, dan prompt eksekusi tersedia.
- Tidak ada phase implementasi berikutnya dimulai tanpa persetujuan eksplisit pengguna.

## 8. Batasan dan asumsi
- Nama produk sementara: StudioFlow.
- Bahasa UI: Indonesia.
- Zona waktu tampilan mengikuti data contoh; jadwal aktual perlu zona waktu organisasi.
- Belum mencakup backend, DB, login, upload sungguhan, analytics platform, email, atau ekspor server-side.
- Semua data di prototype adalah data dummy.

## 9. Pertanyaan untuk fase setelah persetujuan
- Apakah brand/nama StudioFlow dipertahankan?
- Platform target apa saja (Instagram, TikTok, YouTube, web, lainnya)?
- Apakah perlu multi-organisasi/proyek atau satu workspace?
- Apakah backend dan autentikasi akan ditentukan pada fase arsitektur berikutnya?
