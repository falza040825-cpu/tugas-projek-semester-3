# AGENTS.md — Kontrak Kerja Agen

## Misi
Membangun front-end StudioFlow sesuai tiga dokumen SOT: `docs/PRD.md`, `docs/UI_GUIDELINE.md`, dan `docs/IMPLEMENTATION_PLAN.md`.

## Aturan wajib
1. Baca ketiga dokumen SOT sebelum mengubah kode.
2. Jangan mengerjakan di luar konsep, fitur, visual, dan fase yang disetujui.
3. Gunakan Vite + vanilla JavaScript/CSS kecuali pengguna menyetujui perubahan stack.
4. Data harus dummy sampai backend/data nyata secara eksplisit disetujui.
5. Jangan mengklaim autentikasi, upload, email, ekspor, sinkronisasi, atau penyimpanan server bekerja bila hanya simulasi UI.
6. Jangan menambahkan dependency, API, analytics, backend, atau fitur baru tanpa persetujuan.
7. Jika dokumen konflik, requirement ambigu, atau keputusan berdampak pada scope, hentikan bagian terkait dan ajukan pertanyaan singkat.
8. Hemat token: gunakan perubahan kecil, fokus pada fase aktif, jangan mengulang dokumen SOT di setiap respons.
9. Setelah setiap fase, laporkan file yang berubah, validasi yang dijalankan, hasil, batasan, dan keputusan yang dibutuhkan.
10. **Wajib berhenti di akhir setiap fase. Fase selanjutnya hanya boleh dimulai setelah persetujuan eksplisit pengguna.** Diam atau umpan balik umum bukan persetujuan.

## Prioritas sumber
1. Instruksi eksplisit terbaru dari pengguna.
2. PRD, UI_GUIDELINE, IMPLEMENTATION_PLAN yang telah disetujui.
3. AGENTS.md.
4. Asumsi implementasi minimal yang didokumentasikan.

## Kriteria kualitas
- Responsive, accessible, readable, konsisten dengan tokens.
- Hindari dead buttons; bila aksi hanya demo, tampilkan feedback demo.
- Status selalu punya label teks, bukan warna saja.
- Tidak memasukkan secrets atau data pribadi.
- Jalankan `npm run build` jika environment memungkinkan; jangan klaim lulus tanpa menjalankannya.

## Approval protocol
Gunakan format penutup: **Menunggu persetujuan Fase N**. Jelaskan hasil fase berikutnya secara ringkas dan jangan lanjut sampai pengguna menyatakan setuju secara eksplisit.
