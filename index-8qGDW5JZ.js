(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const x={name:"Farah Aulia",role:"Administrator",avatar:"FA",workspace:"Tim Kreatif SGQ"},u={planned:{value:48,delta:"+12.8%",label:"Konten direncanakan",kind:"lavender",icon:"▤"},inProduction:{value:16,delta:"+4.2%",label:"Dalam produksi",kind:"sage",icon:"◷"},completed:{value:24,delta:"+8.6%",label:"Selesai & tayang",kind:"sand",icon:"✓"},overdue:{value:8,delta:"-2.1%",label:"Terlambat",kind:"rose",icon:"⚑"}},ia=[{id:"sch-1",title:"Tips belajar efektif",platform:"Instagram",category:"Edukasi",date:"10 OKT",time:"10.00",color:"sage"},{id:"sch-2",title:"Program unggulan SGQ",platform:"TikTok",category:"Informasi",date:"10 OKT",time:"13.30",color:"lavender"},{id:"sch-3",title:"Weekend class teaser",platform:"Instagram",category:"Promosi",date:"11 OKT",time:"16.00",color:"sand"},{id:"sch-4",title:"Di balik layar tim",platform:"YouTube",category:"Hiburan",date:"12 OKT",time:"19.00",color:"sage"}],na=[{id:"tsk-1",title:"Finalisasi carousel edukasi",assignee:"Nadia Putri",initials:"NP",deadline:"Hari ini",status:"Dalam proses",statusClass:"st-progress"},{id:"tsk-2",title:"Revisi video program baru",assignee:"Raka Pratama",initials:"RP",deadline:"Hari ini",status:"Revisi",statusClass:"st-revision"},{id:"tsk-3",title:"Caption promo weekend",assignee:"Dimas Akbar",initials:"DA",deadline:"Kemarin",status:"Terlambat",statusClass:"st-late",isOverdue:!0},{id:"tsk-4",title:"Review konten mingguan",assignee:"Farah Aulia",initials:"FA",deadline:"11 Okt",status:"Menunggu",statusClass:"st-wait"}],la=[{id:"act-1",user:"Nadia Putri",initials:"NP",action:"mengunggah desain baru",target:"Carousel edukasi",time:"12 menit lalu",avatarClass:"av-sage"},{id:"act-2",user:"Raka Pratama",initials:"RP",action:"mengirim revisi",target:"Video program baru",time:"38 menit lalu",avatarClass:"av-lav"},{id:"act-3",user:"Farah Aulia",initials:"FA",action:"menyetujui caption",target:"Konten informasi",time:"1 jam lalu",avatarClass:"av-sand"}],R={PRD:{id:"PRD",filename:"PRD.md",title:"Product Requirements Document",version:"v0.1",status:"Draft SOT",subtitle:"Tujuan produk, pengguna, 8 area fitur, alur kerja, dan kriteria penerimaan.",bullets:["8 area fitur: Dashboard, Kalender, Pipeline, Tugas, Pengguna, Aset, Notifikasi, Laporan.","5 peran pengguna: Admin, Koordinator, Tim Kreatif, Reviewer, Publikasi.","Alur produksi: Ide → Naskah → Desain/Video → Editing → Review → Approval → Tayang.","Rilis awal murni front-end Vite dengan data dummy terpusat."]},UI:{id:"UI",filename:"UI_GUIDELINE.md",title:"UI Guideline — Design System",version:"v0.1",status:"Draft SOT",subtitle:"Arah visual, design tokens, komponen UI, interaksi, dan aksesibilitas.",bullets:["Palet pastel silver, abu-abu lembut, taupe, sage, dan lavender.","Canvas #F4F2EE, Surface #FFFFFF, Elevated #FAF9F7, Ink #252723.","Radius 18-22px (kartu), 10-12px (kontrol), 999px (pill).","Status selalu memakai teks dan indikator warna, kontras dan aksesibel."]},PLAN:{id:"PLAN",filename:"IMPLEMENTATION_PLAN.md",title:"Implementation Plan",version:"v0.1",status:"Draft SOT",subtitle:"Rencana eksekusi bertahap (Fase 0 hingga 4) dengan approval gate wajib.",bullets:["Fase 0 — Persetujuan SOT","Fase 1 — Fondasi front-end (Shell, Layout, Navigasi, Tokens, Dashboard, Dummy Store)","Fase 2 — Halaman operasional (Kalender, Pipeline, Tugas)","Fase 3 — Workspace pendukung (Pengguna, Aset, Notifikasi, Laporan)","Fase 4 — QA visual dan handoff"]}},L=[{id:"Overview",label:"Overview",icon:"◫",category:"main",phase:1},{id:"Kalender konten",label:"Kalender konten",icon:"▦",category:"main",phase:2},{id:"Alur produksi",label:"Alur produksi",icon:"⇄",category:"main",phase:2},{id:"Manajemen tugas",label:"Manajemen tugas",icon:"☷",category:"main",phase:2},{id:"Aset & file",label:"Aset & file",icon:"▧",category:"main",phase:3},{id:"Notifikasi",label:"Notifikasi",icon:"♧",category:"main",badge:"3",phase:3},{id:"Laporan",label:"Laporan",icon:"▥",category:"main",phase:3},{id:"Pengguna & akses",label:"Pengguna & akses",icon:"♙",category:"main",phase:3},{id:"Dokumen SOT",label:"Dokumen SOT",icon:"✳",category:"sot",phase:1}],K=[{id:"cal-01",title:"Tips belajar efektif",platform:"Instagram",category:"Edukasi",status:"Siap tayang",statusClass:"st-ready",prodDate:"2026-10-08",pubDate:"2026-10-10",owner:"Nadia Putri",initials:"NP"},{id:"cal-02",title:"Program unggulan SGQ",platform:"TikTok",category:"Informasi",status:"Dalam proses",statusClass:"st-progress",prodDate:"2026-10-09",pubDate:"2026-10-10",owner:"Raka Pratama",initials:"RP"},{id:"cal-03",title:"Weekend class teaser",platform:"Instagram",category:"Promosi",status:"Review",statusClass:"st-review",prodDate:"2026-10-09",pubDate:"2026-10-11",owner:"Dimas Akbar",initials:"DA"},{id:"cal-04",title:"Di balik layar tim",platform:"YouTube",category:"Hiburan",status:"Dipublikasikan",statusClass:"st-published",prodDate:"2026-10-06",pubDate:"2026-10-12",owner:"Farah Aulia",initials:"FA"},{id:"cal-05",title:"Cara mengatasi burnout",platform:"Instagram",category:"Edukasi",status:"Terlambat",statusClass:"st-late",prodDate:"2026-10-07",pubDate:"2026-10-13",owner:"Nadia Putri",initials:"NP"},{id:"cal-06",title:"Testimoni alumni batch 12",platform:"YouTube",category:"Informasi",status:"Naskah",statusClass:"st-script",prodDate:"2026-10-12",pubDate:"2026-10-15",owner:"Raka Pratama",initials:"RP"},{id:"cal-07",title:"Flash sale program baru",platform:"TikTok",category:"Promosi",status:"Ide",statusClass:"st-idea",prodDate:"2026-10-14",pubDate:"2026-10-17",owner:"Dimas Akbar",initials:"DA"},{id:"cal-08",title:"Story challenge bersama",platform:"Instagram",category:"Hiburan",status:"Siap tayang",statusClass:"st-ready",prodDate:"2026-10-13",pubDate:"2026-10-18",owner:"Farah Aulia",initials:"FA"},{id:"cal-09",title:"Kuis interaktif edukasi",platform:"Instagram",category:"Edukasi",status:"Dalam proses",statusClass:"st-progress",prodDate:"2026-10-14",pubDate:"2026-10-19",owner:"Nadia Putri",initials:"NP"},{id:"cal-10",title:"Behind the scene produksi",platform:"YouTube",category:"Hiburan",status:"Review",statusClass:"st-review",prodDate:"2026-10-15",pubDate:"2026-10-21",owner:"Raka Pratama",initials:"RP"},{id:"cal-11",title:"Promo akhir bulan",platform:"TikTok",category:"Promosi",status:"Dipublikasikan",statusClass:"st-published",prodDate:"2026-10-05",pubDate:"2026-10-08",owner:"Dimas Akbar",initials:"DA"},{id:"cal-12",title:"Update kurikulum 2027",platform:"Instagram",category:"Informasi",status:"Naskah",statusClass:"st-script",prodDate:"2026-10-16",pubDate:"2026-10-22",owner:"Farah Aulia",initials:"FA"}],I=[{id:"ide",label:"Ide / Perencanaan",icon:"💡"},{id:"naskah",label:"Naskah / Caption",icon:"✍️"},{id:"desain",label:"Desain / Video",icon:"🎨"},{id:"editing",label:"Editing",icon:"✂️"},{id:"review",label:"Review / Revisi",icon:"👁"},{id:"approval",label:"Persetujuan",icon:"✅"},{id:"siap",label:"Siap Tayang",icon:"🚀"},{id:"published",label:"Dipublikasikan",icon:"📡"}];let G=[{id:"pip-01",title:"Flash sale program baru",platform:"TikTok",category:"Promosi",stage:"ide",owner:"Dimas Akbar",initials:"DA",pubDate:"17 Okt"},{id:"pip-02",title:"Update kurikulum 2027",platform:"Instagram",category:"Informasi",stage:"naskah",owner:"Farah Aulia",initials:"FA",pubDate:"22 Okt"},{id:"pip-03",title:"Testimoni alumni batch 12",platform:"YouTube",category:"Informasi",stage:"naskah",owner:"Raka Pratama",initials:"RP",pubDate:"15 Okt"},{id:"pip-04",title:"Kuis interaktif edukasi",platform:"Instagram",category:"Edukasi",stage:"desain",owner:"Nadia Putri",initials:"NP",pubDate:"19 Okt"},{id:"pip-05",title:"Weekend class teaser",platform:"Instagram",category:"Promosi",stage:"editing",owner:"Dimas Akbar",initials:"DA",pubDate:"11 Okt"},{id:"pip-06",title:"Behind the scene produksi",platform:"YouTube",category:"Hiburan",stage:"review",owner:"Raka Pratama",initials:"RP",pubDate:"21 Okt"},{id:"pip-07",title:"Program unggulan SGQ",platform:"TikTok",category:"Informasi",stage:"review",owner:"Raka Pratama",initials:"RP",pubDate:"10 Okt"},{id:"pip-08",title:"Cara mengatasi burnout",platform:"Instagram",category:"Edukasi",stage:"approval",owner:"Nadia Putri",initials:"NP",pubDate:"13 Okt"},{id:"pip-09",title:"Tips belajar efektif",platform:"Instagram",category:"Edukasi",stage:"siap",owner:"Nadia Putri",initials:"NP",pubDate:"10 Okt"},{id:"pip-10",title:"Story challenge bersama",platform:"Instagram",category:"Hiburan",stage:"siap",owner:"Farah Aulia",initials:"FA",pubDate:"18 Okt"},{id:"pip-11",title:"Promo akhir bulan",platform:"TikTok",category:"Promosi",stage:"published",owner:"Dimas Akbar",initials:"DA",pubDate:"8 Okt"},{id:"pip-12",title:"Di balik layar tim",platform:"YouTube",category:"Hiburan",stage:"published",owner:"Farah Aulia",initials:"FA",pubDate:"12 Okt"}],y=[{id:"task-01",title:"Finalisasi carousel edukasi",project:"Kuis interaktif edukasi",platform:"Instagram",assignee:"Nadia Putri",initials:"NP",deadline:"2026-10-10",priority:"Tinggi",status:"Dalam proses",statusClass:"st-progress",notes:"Selesaikan sebelum review hari ini."},{id:"task-02",title:"Revisi video program baru",project:"Program unggulan SGQ",platform:"TikTok",assignee:"Raka Pratama",initials:"RP",deadline:"2026-10-10",priority:"Tinggi",status:"Revisi",statusClass:"st-revision",notes:"Perbaiki segmen opening 0-5 detik."},{id:"task-03",title:"Caption promo weekend",project:"Weekend class teaser",platform:"Instagram",assignee:"Dimas Akbar",initials:"DA",deadline:"2026-10-09",priority:"Tinggi",status:"Terlambat",statusClass:"st-late",notes:"Sudah terlambat 1 hari.",isOverdue:!0},{id:"task-04",title:"Review konten mingguan",project:"Di balik layar tim",platform:"YouTube",assignee:"Farah Aulia",initials:"FA",deadline:"2026-10-11",priority:"Normal",status:"Menunggu",statusClass:"st-wait",notes:""},{id:"task-05",title:"Unggah aset desain banner",project:"Flash sale program baru",platform:"TikTok",assignee:"Dimas Akbar",initials:"DA",deadline:"2026-10-14",priority:"Normal",status:"Belum mulai",statusClass:"st-idea",notes:"Gunakan template terbaru."},{id:"task-06",title:"Naskah testimoni alumni",project:"Testimoni alumni batch 12",platform:"YouTube",assignee:"Raka Pratama",initials:"RP",deadline:"2026-10-13",priority:"Normal",status:"Dalam proses",statusClass:"st-progress",notes:""},{id:"task-07",title:"Approval konten akhir bulan",project:"Promo akhir bulan",platform:"TikTok",assignee:"Farah Aulia",initials:"FA",deadline:"2026-10-07",priority:"Tinggi",status:"Selesai",statusClass:"st-done",notes:""},{id:"task-08",title:"Desain thumbnail YouTube",project:"Behind the scene produksi",platform:"YouTube",assignee:"Nadia Putri",initials:"NP",deadline:"2026-10-16",priority:"Normal",status:"Dalam proses",statusClass:"st-progress",notes:"Referensi di folder Aset/Thumbnails."}];const Y=[{name:"Farah Aulia",initials:"FA"},{name:"Nadia Putri",initials:"NP"},{name:"Raka Pratama",initials:"RP"},{name:"Dimas Akbar",initials:"DA"}],A=[{id:"u-01",name:"Farah Aulia",initials:"FA",email:"farah@sgq.demo",role:"Admin",status:"Aktif",joined:"Jan 2025",avatarClass:"av-sand"},{id:"u-02",name:"Nadia Putri",initials:"NP",email:"nadia@sgq.demo",role:"Tim Kreatif",status:"Aktif",joined:"Mar 2025",avatarClass:"av-sage"},{id:"u-03",name:"Raka Pratama",initials:"RP",email:"raka@sgq.demo",role:"Koordinator",status:"Aktif",joined:"Feb 2025",avatarClass:"av-lav"},{id:"u-04",name:"Dimas Akbar",initials:"DA",email:"dimas@sgq.demo",role:"Tim Kreatif",status:"Aktif",joined:"Apr 2025",avatarClass:"av-taupe"},{id:"u-05",name:"Siti Rahayu",initials:"SR",email:"siti@sgq.demo",role:"Reviewer",status:"Aktif",joined:"Jun 2025",avatarClass:"av-sage"},{id:"u-06",name:"Bagas Wicaksono",initials:"BW",email:"bagas@sgq.demo",role:"Publikasi",status:"Tidak aktif",joined:"Aug 2025",avatarClass:"av-lav"}],H=[{role:"Admin",dashboard:!0,kalender:!0,pipeline:!0,tugas:!0,aset:!0,notifikasi:!0,laporan:!0,pengguna:!0},{role:"Koordinator",dashboard:!0,kalender:!0,pipeline:!0,tugas:!0,aset:!0,notifikasi:!0,laporan:!0,pengguna:!1},{role:"Tim Kreatif",dashboard:!0,kalender:!0,pipeline:!0,tugas:!0,aset:!0,notifikasi:!0,laporan:!1,pengguna:!1},{role:"Reviewer",dashboard:!0,kalender:!0,pipeline:!1,tugas:!1,aset:!0,notifikasi:!0,laporan:!1,pengguna:!1},{role:"Publikasi",dashboard:!0,kalender:!0,pipeline:!1,tugas:!1,aset:!1,notifikasi:!0,laporan:!1,pengguna:!1}],N=[{id:"ast-01",name:"Carousel Edukasi v3.psd",type:"Desain",size:"4.2 MB",project:"Kuis interaktif edukasi",uploader:"Nadia Putri",initials:"NP",date:"14 Okt 2026",url:"#",tag:"Desain"},{id:"ast-02",name:"Video Program Baru_raw.mp4",type:"Video",size:"312 MB",project:"Program unggulan SGQ",uploader:"Raka Pratama",initials:"RP",date:"13 Okt 2026",url:"#",tag:"Video"},{id:"ast-03",name:"Caption Weekend Class.docx",type:"Dokumen",size:"38 KB",project:"Weekend class teaser",uploader:"Dimas Akbar",initials:"DA",date:"10 Okt 2026",url:"#",tag:"Dokumen"},{id:"ast-04",name:"Thumbnail_BTS.png",type:"Gambar",size:"980 KB",project:"Behind the scene produksi",uploader:"Nadia Putri",initials:"NP",date:"15 Okt 2026",url:"#",tag:"Gambar"},{id:"ast-05",name:"Naskah Testimoni Alumni.docx",type:"Dokumen",size:"52 KB",project:"Testimoni alumni batch 12",uploader:"Raka Pratama",initials:"RP",date:"12 Okt 2026",url:"#",tag:"Dokumen"},{id:"ast-06",name:"Logo_SGQ_2026.ai",type:"Desain",size:"1.8 MB",project:"—",uploader:"Farah Aulia",initials:"FA",date:"1 Sep 2026",url:"#",tag:"Desain"},{id:"ast-07",name:"Flash Sale Banner.png",type:"Gambar",size:"2.1 MB",project:"Flash sale program baru",uploader:"Dimas Akbar",initials:"DA",date:"16 Okt 2026",url:"#",tag:"Gambar"},{id:"ast-08",name:"BGM Promo Oktober.mp3",type:"Audio",size:"8.4 MB",project:"Promo akhir bulan",uploader:"Raka Pratama",initials:"RP",date:"5 Okt 2026",url:"#",tag:"Audio"}];let k=[{id:"ntf-01",type:"deadline",icon:"⏰",title:"Deadline hari ini",body:"Finalisasi carousel edukasi jatuh tempo pukul 17.00 WIB.",time:"08.00",read:!1,route:"Manajemen tugas"},{id:"ntf-02",type:"revision",icon:"🔄",title:"Revisi diminta",body:"Siti Rahayu meminta revisi pada “Video Program Baru” — perbaiki opening.",time:"09.15",read:!1,route:"Alur produksi"},{id:"ntf-03",type:"task",icon:"📋",title:"Tugas baru ditetapkan",body:"Kamu ditugaskan untuk mengerjakan Caption promo weekend.",time:"09.30",read:!1,route:"Manajemen tugas"},{id:"ntf-04",type:"publish",icon:"📡",title:"Konten segera tayang",body:"“Tips belajar efektif” dijadwalkan tayang 10 Okt di Instagram.",time:"10.00",read:!0,route:"Kalender konten"},{id:"ntf-05",type:"approval",icon:"✅",title:"Konten disetujui",body:"“Promo akhir bulan” telah disetujui oleh Farah Aulia.",time:"11.30",read:!0,route:"Alur produksi"},{id:"ntf-06",type:"deadline",icon:"⏰",title:"Terlambat: Caption promo weekend",body:"Konten ini sudah melewati deadline 1 hari. Segera selesaikan.",time:"13.00",read:!1,route:"Manajemen tugas"},{id:"ntf-07",type:"task",icon:"📋",title:"Update tugas",body:"Desain thumbnail YouTube telah diperbarui oleh Nadia Putri.",time:"14.22",read:!0,route:"Manajemen tugas"}];const S=[{platform:"Instagram",planned:22,done:14,late:3,rate:64},{platform:"TikTok",planned:14,done:8,late:2,rate:57},{platform:"YouTube",planned:12,done:6,late:1,rate:50}],U=[{name:"Nadia Putri",initials:"NP",avatarClass:"av-sage",done:10,ontime:9,late:1,rate:90},{name:"Raka Pratama",initials:"RP",avatarClass:"av-lav",done:9,ontime:7,late:2,rate:78},{name:"Dimas Akbar",initials:"DA",avatarClass:"av-taupe",done:7,ontime:5,late:2,rate:71},{name:"Farah Aulia",initials:"FA",avatarClass:"av-sand",done:5,ontime:5,late:0,rate:100}],z=[{period:"Jul 2026",total:36,done:28},{period:"Agu 2026",total:40,done:32},{period:"Sep 2026",total:44,done:30},{period:"Okt 2026",total:48,done:28}];function ra(a){const e=L.filter(i=>i.category==="main"),t=L.find(i=>i.category==="sot");return`
    <aside class="sidebar" id="sidebar" aria-label="Navigasi utama">
      <div class="brand">
        <div class="brand-mark">s.</div>
        <div class="brand-info">
          <strong>studioflow</strong>
          <small>CONTENT OPERATIONS</small>
        </div>
      </div>

      <div class="sidebar-section-label">WORKSPACE</div>
      <div class="workspace-select">
        <span class="workspace-dot"></span>
        <span>${x.workspace}</span>
        <span class="chevron">⌄</span>
      </div>

      <div class="sidebar-section-label">MENU UTAMA</div>
      <nav class="nav-menu" aria-label="Menu utama">
        ${e.map(i=>`
            <button
              class="nav-item ${a===i.id?"active":""}"
              data-route="${i.id}"
              aria-label="Navigasi ke ${i.label}"
              aria-current="${a===i.id?"page":"false"}"
            >
              <span class="nav-icon" aria-hidden="true">${i.icon}</span>
              <span>${i.label}</span>
              ${i.badge?`<span class="nav-badge" aria-label="${i.badge} item baru">${i.badge}</span>`:""}
            </button>
          `).join("")}
      </nav>

      <div class="sidebar-bottom">
        ${t?`
          <div class="sidebar-section-label" style="margin-top:16px;">DOKUMEN SOT</div>
          <nav class="nav-menu" aria-label="Dokumen SOT">
            <button
              class="nav-item ${a===t.id?"active":""}"
              data-route="${t.id}"
              aria-label="Navigasi ke ${t.label}"
              aria-current="${a===t.id?"page":"false"}"
            >
              <span class="nav-icon" aria-hidden="true">${t.icon}</span>
              <span>${t.label}</span>
            </button>
          </nav>
        `:""}

        <div class="user-profile" style="margin-top:16px;">
          <div class="user-avatar" aria-hidden="true">${x.avatar}</div>
          <div class="user-info">
            <strong>${x.name}</strong>
            <small>${x.role}</small>
          </div>
          <span class="dots" aria-hidden="true">• • •</span>
        </div>
      </div>
    </aside>
  `}function oa(a){return`
    <header class="topbar">
      <div class="topbar-left">
        <button class="mobile-nav-toggle" id="mobile-toggle" aria-label="Buka/tutup menu navigasi">
          ☰
        </button>
        <div class="breadcrumb" aria-label="Breadcrumb navigasi">
          Workspace <span>/</span> <b>${a}</b>
        </div>
      </div>

      <div class="topbar-right">
        <label class="topbar-search">
          <span aria-hidden="true">⌕</span>
          <input id="global-search" placeholder="Cari konten, tugas, SOT..." aria-label="Pencarian global" />
          <kbd aria-label="Pintasan keyboard Command K">⌘ K</kbd>
        </label>

        <button class="icon-button" data-route="Notifikasi" aria-label="Lihat notifikasi">
          ♧
          <span class="badge-dot" aria-hidden="true"></span>
        </button>

        <button class="role-badge-pill" data-route="Pengguna &amp; akses" title="Simulasi peran aktif — klik untuk lihat Pengguna &amp; Akses" aria-label="Peran aktif: ${x.role} (simulasi)">
          ${x.role} <span style="font-size:9px;opacity:0.55;margin-left:4px;font-weight:600;">DEMO</span>
        </button>
      </div>
    </header>
  `}function da(){return new Date().toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).toUpperCase()}function pa(){return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">
          ${da()} <span class="live-dot" title="Status Sistem Aktif"></span>
        </div>
        <h1>Selamat datang, ${x.name.split(" ")[0]} ✳</h1>
        <p>Ringkasan operasional dan status alur produksi konten tim kamu hari ini.</p>
      </div>
      <button class="btn-primary" id="btn-demo-new">
        <span>＋</span> Buat konten (Demo)
      </button>
    </div>

    <!-- Stats Cards Grid -->
    <section class="stats-grid">
      <article class="stat-card">
        <div class="stat-top">
          <span>${u.planned.label}</span>
          <span class="stat-icon ${u.planned.kind}">${u.planned.icon}</span>
        </div>
        <div class="stat-value">${u.planned.value}</div>
        <div class="stat-foot">
          <span class="stat-delta positive">${u.planned.delta}</span>
          <span class="stat-muted">vs bulan lalu</span>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-top">
          <span>${u.inProduction.label}</span>
          <span class="stat-icon ${u.inProduction.kind}">${u.inProduction.icon}</span>
        </div>
        <div class="stat-value">${u.inProduction.value}</div>
        <div class="stat-foot">
          <span class="stat-delta positive">${u.inProduction.delta}</span>
          <span class="stat-muted">vs bulan lalu</span>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-top">
          <span>${u.completed.label}</span>
          <span class="stat-icon ${u.completed.kind}">${u.completed.icon}</span>
        </div>
        <div class="stat-value">${u.completed.value}</div>
        <div class="stat-foot">
          <span class="stat-delta positive">${u.completed.delta}</span>
          <span class="stat-muted">vs bulan lalu</span>
        </div>
      </article>

      <article class="stat-card">
        <div class="stat-top">
          <span>${u.overdue.label}</span>
          <span class="stat-icon ${u.overdue.kind}">${u.overdue.icon}</span>
        </div>
        <div class="stat-value">${u.overdue.value}</div>
        <div class="stat-foot">
          <span class="stat-delta negative">${u.overdue.delta}</span>
          <span class="stat-muted">vs bulan lalu</span>
        </div>
      </article>
    </section>

    <!-- Top Grid: Chart & Upcoming Schedule -->
    <section class="dashboard-grid-top">
      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Ikhtisar produksi konten</h2>
            <p>Distribusi status pengerjaan sepanjang periode berjalan</p>
          </div>
          <button class="btn-secondary">Oktober 2026 ⌄</button>
        </div>

        <div class="chart-container">
          <div class="chart-header">
            <div>
              <strong>48 <small style="font-size: 12px; font-weight: normal; color: var(--color-ink-muted);">konten total</small></strong>
            </div>
            <div class="chart-legend">
              <span><i class="lg-done"></i>Selesai</span>
              <span><i class="lg-doing"></i>Dalam proses</span>
              <span><i class="lg-todo"></i>Belum mulai</span>
            </div>
          </div>

          <div class="bar-chart" aria-label="Grafik dummy produksi">
            ${[24,32,27,42,35,46,38,31,44,36,49,41].map((e,t)=>`
              <div class="bar-col">
                <div class="bar-segment done" style="height: ${e*.5}%"></div>
                <div class="bar-segment doing" style="height: ${e*.3}%"></div>
                <div class="bar-segment todo" style="height: ${e*.2}%"></div>
                <div class="bar-label">${t*2+1}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </article>

      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Jadwal terdekat</h2>
            <p>Konten yang segera tayang di platform</p>
          </div>
          <button class="btn-secondary" data-route="Kalender konten">
            Kalender ↗
          </button>
        </div>

        <div class="schedule-list">
          ${ia.map(e=>`
            <div class="schedule-item">
              <div class="date-tile ${e.color}">
                <b>${e.date.split(" ")[0]}</b>
                <small>${e.date.split(" ")[1]}</small>
              </div>
              <div class="schedule-info">
                <strong>${e.title}</strong>
                <span>${e.platform} · ${e.category}</span>
              </div>
              <div class="schedule-time">${e.time}</div>
            </div>
          `).join("")}
        </div>
      </article>
    </section>

    <!-- Bottom Grid: Priority Tasks & Recent Activity -->
    <section class="dashboard-grid-bottom">
      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Perlu perhatian kamu</h2>
            <p>Tugas prioritas yang membutuhkan tindak lanjut</p>
          </div>
          <button class="btn-secondary" data-route="Manajemen tugas">
            Semua tugas ↗
          </button>
        </div>

        <div class="task-table">
          <div class="table-head">
            <span>TUGAS</span>
            <span>PENANGGUNG JAWAB</span>
            <span>DEADLINE</span>
            <span>STATUS</span>
          </div>
          ${na.map(e=>`
            <div class="task-row">
              <div class="task-name">
                <span class="task-check ${e.isOverdue?"overdue":""}">
                  ${e.isOverdue?"!":"✓"}
                </span>
                <strong>${e.title}</strong>
              </div>
              <div class="assignee">
                <span class="mini-avatar">${e.initials}</span>
                <span>${e.assignee}</span>
              </div>
              <div class="deadline ${e.isOverdue?"late":""}">
                ${e.deadline}
              </div>
              <div>
                <span class="status-pill ${e.statusClass}">${e.status}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="panel">
        <div class="panel-head">
          <div>
            <h2>Aktivitas terbaru</h2>
            <p>Update pengerjaan dari anggota tim</p>
          </div>
          <span style="font-size: 11px; color: var(--color-ink-muted);">Simulasi</span>
        </div>

        <div class="activity-list">
          ${la.map(e=>`
            <div class="activity-item">
              <div class="activity-avatar ${e.avatarClass}">${e.initials}</div>
              <div class="activity-text">
                <p><strong>${e.user}</strong> ${e.action}</p>
                <small>${e.target} · ${e.time}</small>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    </section>

    <!-- Demo Banner Notice -->
    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Mode Pratinjau — Data Dummy Terpusat</strong>
        <p>Aplikasi ini berjalan sebagai prototipe UI front-end sesuai SOT. Semua data dummy. Tanpa backend atau database nyata.</p>
      </div>
      <span class="demo-badge">FASE 3</span>
    </div>
  `}function ca(a){const e=L.find(i=>i.id===a)||{label:a,phase:2},t=e.phase===2?"Fase 2 (Halaman Operasional)":"Fase 3 (Workspace Pendukung)";return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / ${a.toUpperCase()}</div>
        <h1>${e.label}</h1>
        <p>Area halaman operasional sesuai kontrak kerja SOT.</p>
      </div>
      <button class="btn-secondary" data-route="Overview">
        ← Kembali ke Overview
      </button>
    </div>

    <div class="placeholder-container">
      <div class="placeholder-badge">
        <span>✳</span> Terjadwal pada ${t}
      </div>
      <h2>Halaman ${e.label} Siap Dikerjakan</h2>
      <p>
        Berdasarkan <code>IMPLEMENTATION_PLAN.md</code> dan kontrak kerja <code>AGENTS.md</code>, 
        halaman operasional ini berada pada <strong>${t}</strong> dan akan diimplementasikan 
        setelah <strong>Fase 1 (Fondasi front-end)</strong> secara resmi disetujui pengguna.
      </p>

      <div class="placeholder-actions">
        <button class="btn-primary" data-route="Overview">
          Lihat Dashboard Fase 1
        </button>
        <button class="btn-secondary" data-route="Dokumen SOT">
          Periksa SOT & Implementation Plan
        </button>
      </div>
    </div>
  `}function ua(a="PRD"){const e=R[a]||R.PRD;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">GOVERNANCE / SOURCE OF TRUTH</div>
        <h1>Dokumen Acuan SOT</h1>
        <p>Tiga dokumen acuan tunggal proyek sesuai kontrak kerja <code>AGENTS.md</code>.</p>
      </div>
      <button class="btn-secondary" data-route="Overview">
        ← Kembali ke Overview
      </button>
    </div>

    <div style="display: grid; grid-template-columns: 280px 1fr; gap: 20px; align-items: start;">
      <!-- SOT Select List -->
      <div class="panel" style="padding: 0; overflow: hidden;">
        <div style="padding: 18px 20px 12px; border-bottom: 1px solid var(--color-border);">
          <h3 style="font-size: 14px; margin: 0;">Dokumen Acuan</h3>
          <span style="font-size: 10px; color: var(--color-ink-muted);">Versi 0.1 · Draft SOT</span>
        </div>

        <div>
          ${Object.values(R).map(t=>`
            <button 
              class="sot-doc-item ${t.id===a?"selected":""}" 
              data-doc-key="${t.id}"
              style="
                width: 100%;
                text-align: left;
                padding: 16px 20px;
                border: 0;
                border-bottom: 1px solid var(--color-border-subtle);
                background: ${t.id===a?"var(--color-surface-subtle)":"transparent"};
                border-left: 3px solid ${t.id===a?"var(--color-sage-ink)":"transparent"};
                cursor: pointer;
              "
            >
              <strong style="display: block; font-size: 13px; color: var(--color-ink); margin-bottom: 4px;">
                ${t.title}
              </strong>
              <small style="display: block; font-size: 11px; color: var(--color-ink-muted);">
                <code>docs/${t.filename}</code>
              </small>
            </button>
          `).join("")}
        </div>
      </div>

      <!-- SOT Preview Body -->
      <div class="panel">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border);">
          <div>
            <span class="eyebrow">${e.filename}</span>
            <h2 style="font-size: 20px; margin: 4px 0 6px;">${e.title}</h2>
            <p style="font-size: 12px; color: var(--color-ink-secondary); margin: 0;">${e.subtitle}</p>
          </div>
          <span class="role-badge-pill">${e.status}</span>
        </div>

        <div style="background-color: var(--color-surface-subtle); border: 1px solid var(--color-border); border-radius: var(--radius-control); padding: 16px; margin-bottom: 20px;">
          <strong style="font-size: 12px; color: var(--color-ink); display: block; margin-bottom: 8px;">
            Poin Inti Dokumen SOT:
          </strong>
          <ul style="padding-left: 20px; font-size: 12px; color: var(--color-ink-secondary); line-height: 1.8;">
            ${e.bullets.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>

        <div style="font-size: 12px; color: var(--color-ink-muted); line-height: 1.6;">
          <p>📌 Dokumentasi lengkap tersimpan dalam folder <code>docs/${e.filename}</code> pada repositori proyek.</p>
        </div>
      </div>
    </div>
  `}let o={view:"monthly",filterPlatform:"Semua",filterCategory:"Semua",filterStatus:"Semua",focusDate:new Date("2026-10-16")};const va=["Semua","Instagram","TikTok","YouTube"],ma=["Semua","Edukasi","Promosi","Informasi","Hiburan"],ga=["Semua","Ide","Naskah","Dalam proses","Review","Revisi","Siap tayang","Dipublikasikan","Terlambat"];function ba(a){return a.filter(e=>{const t=o.filterPlatform==="Semua"||e.platform===o.filterPlatform,i=o.filterCategory==="Semua"||e.category===o.filterCategory,s=o.filterStatus==="Semua"||e.status===o.filterStatus;return t&&i&&s})}function j(a,e){return a.filter(t=>t.pubDate===e)}function W(a){const e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),i=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${i}`}function Q(a){return a==="2026-10-16"}function V(a){return`
    <div class="cal-event ${a.statusClass}" title="${a.title} · ${a.platform} · ${a.status}">
      <span class="cal-event-dot"></span>
      <span class="cal-event-text">${a.title}</span>
    </div>
  `}function fa(a){const e=o.focusDate.getFullYear(),t=o.focusDate.getMonth(),i=new Date(e,t,1).getDay(),s=new Date(e,t+1,0).getDate(),n=o.focusDate.toLocaleDateString("id-ID",{month:"long",year:"numeric"}),r=["Min","Sen","Sel","Rab","Kam","Jum","Sab"].map(v=>`<div class="cal-day-name">${v}</div>`).join("");let p="";for(let v=0;v<i;v++)p+='<div class="cal-cell empty"></div>';for(let v=1;v<=s;v++){const f=`${e}-${String(t+1).padStart(2,"0")}-${String(v).padStart(2,"0")}`,b=j(a,f),h=Q(f),D=b.slice(0,2).map(V).join(""),E=b.length>2?`<div class="cal-more">+${b.length-2} lagi</div>`:"";p+=`
      <div class="cal-cell ${h?"today":""}">
        <span class="cal-date-num ${h?"today-badge":""}">${v}</span>
        ${D}${E}
      </div>
    `}return`
    <div class="cal-month-header">
      <button class="cal-nav-btn" id="cal-prev" aria-label="Bulan sebelumnya">←</button>
      <strong>${n}</strong>
      <button class="cal-nav-btn" id="cal-next" aria-label="Bulan berikutnya">→</button>
    </div>
    <div class="cal-grid-month">
      ${r}
      ${p}
    </div>
  `}function ka(a){const e=new Date(o.focusDate),t=e.getDay()===0?6:e.getDay()-1;e.setDate(e.getDate()-t);const i=["Sen","Sel","Rab","Kam","Jum","Sab","Min"];let s="";for(let l=0;l<7;l++){const r=new Date(e);r.setDate(r.getDate()+l);const p=W(r),v=j(a,p),f=Q(p),b=v.map(V).join("")||'<p class="cal-empty-day">—</p>';s+=`
      <div class="cal-week-col ${f?"today":""}">
        <div class="cal-week-head">
          <span class="cal-day-label">${i[l]}</span>
          <span class="cal-date-num ${f?"today-badge":""}">${r.getDate()}</span>
        </div>
        <div class="cal-week-body">${b}</div>
      </div>
    `}return`
    <div class="cal-month-header">
      <button class="cal-nav-btn" id="cal-prev" aria-label="Pekan sebelumnya">←</button>
      <strong>${`Pekan ${e.getDate()}–${new Date(e.getFullYear(),e.getMonth(),e.getDate()+6).getDate()} ${e.toLocaleDateString("id-ID",{month:"long",year:"numeric"})}`}</strong>
      <button class="cal-nav-btn" id="cal-next" aria-label="Pekan berikutnya">→</button>
    </div>
    <div class="cal-grid-week">${s}</div>
  `}function ya(a){const e=W(o.focusDate),t=j(a,e),i=o.focusDate.toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"}),s=t.length>0?t.map(n=>`
        <div class="cal-daily-row">
          <div class="cal-daily-time">Tayang</div>
          <div class="cal-daily-card">
            <div class="cal-daily-platform">${n.platform} · ${n.category}</div>
            <strong>${n.title}</strong>
            <div class="cal-daily-meta">
              <span class="status-pill ${n.statusClass}">${n.status}</span>
              <span class="assignee-chip">
                <span class="mini-avatar">${n.initials}</span> ${n.owner}
              </span>
            </div>
          </div>
        </div>
      `).join(""):'<div class="cal-empty-state">Tidak ada konten terjadwal pada hari ini.</div>';return`
    <div class="cal-month-header">
      <button class="cal-nav-btn" id="cal-prev" aria-label="Hari sebelumnya">←</button>
      <strong>${i}</strong>
      <button class="cal-nav-btn" id="cal-next" aria-label="Hari berikutnya">→</button>
    </div>
    <div class="cal-daily-list">${s}</div>
  `}function ha(a){return a.length===0?'<div class="cal-empty-state">Tidak ada konten yang cocok dengan filter aktif.</div>':`
    <div class="content-list-table">
      <div class="content-list-head">
        <span>JUDUL KONTEN</span>
        <span>PLATFORM</span>
        <span>KATEGORI</span>
        <span>TGL PRODUKSI</span>
        <span>TGL TAYANG</span>
        <span>STATUS</span>
        <span>PEMILIK</span>
      </div>
      ${a.map(e=>`
        <div class="content-list-row">
          <div class="content-list-title">${e.title}</div>
          <div><span class="platform-chip plat-${e.platform.toLowerCase()}">${e.platform}</span></div>
          <div class="cl-muted">${e.category}</div>
          <div class="cl-muted">${e.prodDate}</div>
          <div class="cl-muted ${e.status==="Terlambat"?"cl-late":""}">${e.pubDate}</div>
          <div><span class="status-pill ${e.statusClass}">${e.status}</span></div>
          <div class="assignee">
            <span class="mini-avatar">${e.initials}</span>
            <span class="cl-muted">${e.owner}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `}function O(a,e,t,i){return`
    <div class="filter-group">
      <span class="filter-label">${i}</span>
      <div class="filter-pills" id="${a}">
        ${e.map(s=>`
          <button class="filter-pill ${s===t?"active":""}" data-filter-group="${a}" data-filter-val="${s}">
            ${s}
          </button>
        `).join("")}
      </div>
    </div>
  `}function $a(){const a=ba(K);let e="";o.view==="monthly"?e=fa(a):o.view==="weekly"?e=ka(a):e=ya(a);const t=[o.filterPlatform!=="Semua",o.filterCategory!=="Semua",o.filterStatus!=="Semua"].filter(Boolean).length;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / KALENDER KONTEN</div>
        <h1>Kalender Konten</h1>
        <p>Jadwal produksi dan publikasi konten tim · ${a.length} dari ${K.length} item</p>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        ${t>0?`<button class="btn-secondary" id="cal-clear-filters">Hapus filter (${t})</button>`:""}
        <button class="btn-primary" id="btn-cal-new"><span>＋</span> Konten Baru (Demo)</button>
      </div>
    </div>

    <!-- View Toggle -->
    <div class="cal-view-toggle-bar">
      <div class="view-toggle-group" role="group" aria-label="Pilih tampilan kalender">
        <button class="view-toggle-btn ${o.view==="monthly"?"active":""}" id="cal-view-monthly" data-cal-view="monthly">Bulanan</button>
        <button class="view-toggle-btn ${o.view==="weekly"?"active":""}" id="cal-view-weekly"  data-cal-view="weekly">Mingguan</button>
        <button class="view-toggle-btn ${o.view==="daily"?"active":""}" id="cal-view-daily"   data-cal-view="daily">Harian</button>
      </div>
      <span class="filter-summary-chip" style="${t===0?"opacity:0.4":""}">
        ${t>0?`${t} filter aktif`:"Tampil semua"}
      </span>
    </div>

    <!-- Filter Row -->
    <div class="panel" style="margin-bottom:20px; padding: 16px 20px;">
      <div class="filter-row">
        ${O("cal-filter-platform",va,o.filterPlatform,"Platform")}
        ${O("cal-filter-category",ma,o.filterCategory,"Kategori")}
        ${O("cal-filter-status",ga,o.filterStatus,"Status")}
      </div>
    </div>

    <!-- Calendar View -->
    <div class="panel" style="margin-bottom:20px;">
      <div id="cal-view-container">
        ${e}
      </div>
    </div>

    <!-- Content List Table -->
    <div class="panel" style="margin-bottom:20px;">
      <div class="panel-head">
        <div>
          <h2>Daftar Konten</h2>
          <p>Ringkasan semua item yang sesuai filter aktif</p>
        </div>
        <span class="demo-badge">DATA DUMMY</span>
      </div>
      ${ha(a)}
    </div>

    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Kalender Konten — Fase 2</strong>
        <p>Filter, tampilan, dan navigasi bekerja pada data dummy lokal. Tidak ada koneksi backend.</p>
      </div>
      <span class="demo-badge">FASE 2</span>
    </div>
  `}function Sa(a,e){var t,i,s,n;document.querySelectorAll("[data-cal-view]").forEach(l=>{l.addEventListener("click",()=>{o.view=l.dataset.calView,a()})}),document.querySelectorAll("[data-filter-group]").forEach(l=>{l.addEventListener("click",()=>{const r=l.dataset.filterGroup,p=l.dataset.filterVal;r==="cal-filter-platform"&&(o.filterPlatform=p),r==="cal-filter-category"&&(o.filterCategory=p),r==="cal-filter-status"&&(o.filterStatus=p),a()})}),(t=document.querySelector("#cal-clear-filters"))==null||t.addEventListener("click",()=>{o.filterPlatform="Semua",o.filterCategory="Semua",o.filterStatus="Semua",a()}),(i=document.querySelector("#cal-prev"))==null||i.addEventListener("click",()=>{const l=new Date(o.focusDate);o.view==="monthly"?l.setMonth(l.getMonth()-1):o.view==="weekly"?l.setDate(l.getDate()-7):l.setDate(l.getDate()-1),o.focusDate=l,a()}),(s=document.querySelector("#cal-next"))==null||s.addEventListener("click",()=>{const l=new Date(o.focusDate);o.view==="monthly"?l.setMonth(l.getMonth()+1):o.view==="weekly"?l.setDate(l.getDate()+7):l.setDate(l.getDate()+1),o.focusDate=l,a()}),(n=document.querySelector("#btn-cal-new"))==null||n.addEventListener("click",()=>{e("Form tambah konten: tersedia di pipeline & dashboard (simulasi).")})}const P=I.map(a=>a.id);function w(a){return I.find(e=>e.id===a)}function xa(a){return a==="Instagram"?"plat-instagram":a==="TikTok"?"plat-tiktok":a==="YouTube"?"plat-youtube":""}function _(a){const e=P.indexOf(a);return e>0?P[e-1]:null}function J(a){const e=P.indexOf(a);return e<P.length-1?P[e+1]:null}function Ta(a){var i,s;const e=_(a.stage),t=J(a.stage);return`
    <div class="pip-card" data-pip-id="${a.id}" tabindex="0">
      <div class="pip-card-header">
        <span class="platform-chip ${xa(a.platform)}">${a.platform}</span>
        <span class="pip-cat">${a.category}</span>
      </div>
      <div class="pip-card-title">${a.title}</div>
      <div class="pip-card-footer">
        <span class="assignee-chip">
          <span class="mini-avatar">${a.initials}</span>
          <span>${a.owner.split(" ")[0]}</span>
        </span>
        <span class="pip-pub-date">↗ ${a.pubDate}</span>
      </div>
      <div class="pip-card-controls">
        ${e?`<button class="pip-move-btn prev" data-pip-id="${a.id}" data-pip-dir="prev" title="Kembalikan ke ${(i=w(e))==null?void 0:i.label}" aria-label="Pindah ke tahap sebelumnya">←</button>`:"<span></span>"}
        ${t?`<button class="pip-move-btn next" data-pip-id="${a.id}" data-pip-dir="next" title="Maju ke ${(s=w(t))==null?void 0:s.label}" aria-label="Pindah ke tahap berikutnya">→</button>`:"<span></span>"}
      </div>
    </div>
  `}function Da(a,e){const t=e.filter(i=>i.stage===a.id);return`
    <div class="pip-col" data-stage="${a.id}">
      <div class="pip-col-head">
        <span class="pip-stage-icon" aria-hidden="true">${a.icon}</span>
        <span class="pip-stage-label">${a.label}</span>
        <span class="pip-count-badge">${t.length}</span>
      </div>
      <div class="pip-col-body">
        ${t.length>0?t.map(Ta).join(""):'<div class="pip-empty">Tidak ada item</div>'}
      </div>
    </div>
  `}function Aa(a){const e=a.length,t=a.filter(n=>n.stage==="published").length,i=a.filter(n=>!["published","siap","ide"].includes(n.stage)).length,s=a.filter(n=>n.stage==="siap").length;return`
    <div class="pip-stats">
      <div class="pip-stat-item">
        <span class="pip-stat-val">${e}</span>
        <span class="pip-stat-label">Total item</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-sage-ink)">${t}</span>
        <span class="pip-stat-label">Dipublikasikan</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-lavender-ink)">${s}</span>
        <span class="pip-stat-label">Siap tayang</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-sand-ink)">${i}</span>
        <span class="pip-stat-label">Dalam proses</span>
      </div>
    </div>
  `}function Pa(){const a=G;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / ALUR PRODUKSI</div>
        <h1>Alur Produksi</h1>
        <p>Status pengerjaan konten dalam 8 tahap produksi · Gunakan tombol ← → untuk memindahkan tahap</p>
      </div>
      <button class="btn-primary" id="btn-pip-new"><span>＋</span> Tambah Item (Demo)</button>
    </div>

    <!-- Stats bar -->
    ${Aa(a)}

    <!-- Pipeline board -->
    <div class="pip-board-wrapper">
      <div class="pip-board" id="pip-board" aria-label="Board alur produksi konten">
        ${I.map(e=>Da(e,a)).join("")}
      </div>
    </div>

    <div class="demo-banner" style="margin-top:24px;">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Alur Produksi — Fase 2</strong>
        <p>Perpindahan tahap bekerja pada sesi UI (data dummy lokal). Tidak ada persistensi backend.</p>
      </div>
      <span class="demo-badge">FASE 2</span>
    </div>
  `}function wa(a,e){var t;document.querySelectorAll(".pip-move-btn").forEach(i=>{i.addEventListener("click",s=>{var b,h;s.stopPropagation();const n=i.dataset.pipId,l=i.dataset.pipDir,r=G.find(D=>D.id===n);if(!r)return;const p=l==="next"?J(r.stage):_(r.stage);if(!p)return;const v=(b=w(r.stage))==null?void 0:b.label,f=(h=w(p))==null?void 0:h.label;r.stage=p,e(`"${r.title}" dipindahkan: ${v} → ${f}`),a()})}),(t=document.querySelector("#btn-pip-new"))==null||t.addEventListener("click",()=>{e("Tambah item pipeline: simulasi UI saja. Backend diperlukan untuk persistensi.")})}let c={filterStatus:"Semua",filterPriority:"Semua",filterAssignee:"Semua",searchQuery:""};const F=["Semua","Belum mulai","Dalam proses","Revisi","Menunggu","Terlambat","Selesai"],Ea=["Semua","Tinggi","Normal"],Ra=["Semua",...Y.map(a=>a.name)],X={"Belum mulai":"st-idea","Dalam proses":"st-progress",Revisi:"st-revision",Menunggu:"st-wait",Terlambat:"st-late",Selesai:"st-done"};function Oa(a){return a.filter(e=>{const t=c.filterStatus==="Semua"||e.status===c.filterStatus,i=c.filterPriority==="Semua"||e.priority===c.filterPriority,s=c.filterAssignee==="Semua"||e.assignee===c.filterAssignee,n=!c.searchQuery||e.title.toLowerCase().includes(c.searchQuery)||e.project.toLowerCase().includes(c.searchQuery);return t&&i&&s&&n})}function Ca(a){return`<span class="priority-badge ${a==="Tinggi"?"prio-high":"prio-normal"}">${a}</span>`}function La(a){return new Date(a).toLocaleDateString("id-ID",{day:"numeric",month:"short"})}function Na(a){return a.length===0?'<div class="cal-empty-state">Tidak ada tugas yang cocok dengan filter aktif.</div>':`
    <div class="task-table full-task-table">
      <div class="table-head full-task-head">
        <span>TUGAS</span>
        <span>PROYEK / PLATFORM</span>
        <span>PENANGGUNG JAWAB</span>
        <span>DEADLINE</span>
        <span>PRIORITAS</span>
        <span>STATUS</span>
        <span>AKSI</span>
      </div>
      ${a.map(e=>`
        <div class="task-row full-task-row ${e.isOverdue?"row-overdue":""}">
          <div class="task-name">
            <span class="task-check ${e.isOverdue?"overdue":""}">${e.isOverdue?"!":"✓"}</span>
            <div>
              <strong>${e.title}</strong>
              ${e.notes?`<div class="task-note">${e.notes}</div>`:""}
            </div>
          </div>
          <div>
            <div class="cl-muted" style="font-size:11px;">${e.project}</div>
            <span class="platform-chip plat-${e.platform.toLowerCase()}" style="font-size:10px;margin-top:4px;">${e.platform}</span>
          </div>
          <div class="assignee">
            <span class="mini-avatar">${e.initials}</span>
            <span class="cl-muted">${e.assignee}</span>
          </div>
          <div class="deadline ${e.isOverdue?"late":""}">${La(e.deadline)}</div>
          <div>${Ca(e.priority)}</div>
          <div>
            <select class="status-select" data-task-id="${e.id}" aria-label="Ubah status tugas ${e.title}">
              ${F.filter(t=>t!=="Semua").map(t=>`<option value="${t}" ${t===e.status?"selected":""}>${t}</option>`).join("")}
            </select>
          </div>
          <div>
            <button class="btn-secondary task-detail-btn" style="padding:6px 10px;font-size:11px;" data-task-id="${e.id}" aria-label="Detail tugas ${e.title}">Detail</button>
          </div>
        </div>
      `).join("")}
    </div>
  `}function C(a,e,t,i){return`
    <div class="filter-select-group">
      <label class="filter-label" for="${a}">${i}</label>
      <select class="task-filter-select" id="${a}" data-filter-id="${a}">
        ${e.map(s=>`<option value="${s}" ${s===t?"selected":""}>${s}</option>`).join("")}
      </select>
    </div>
  `}function Ia(){const a=y.length,e=y.filter(s=>s.isOverdue).length,t=y.filter(s=>s.status==="Selesai").length,i=y.filter(s=>s.priority==="Tinggi"&&s.status!=="Selesai").length;return`
    <div class="pip-stats" style="margin-bottom:20px;">
      <div class="pip-stat-item">
        <span class="pip-stat-val">${a}</span>
        <span class="pip-stat-label">Total tugas</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-blush-ink)">${e}</span>
        <span class="pip-stat-label">Terlambat</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-sand-ink)">${i}</span>
        <span class="pip-stat-label">Prioritas tinggi</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-sage-ink)">${t}</span>
        <span class="pip-stat-label">Selesai</span>
      </div>
    </div>
  `}function ja(){const a=Oa(y),e=[c.filterStatus!=="Semua",c.filterPriority!=="Semua",c.filterAssignee!=="Semua",!!c.searchQuery].filter(Boolean).length;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / MANAJEMEN TUGAS</div>
        <h1>Manajemen Tugas</h1>
        <p>Kelola tugas tim, penanggung jawab, deadline, dan status pengerjaan</p>
      </div>
      <button class="btn-primary" id="btn-task-new"><span>＋</span> Tugas Baru (Demo)</button>
    </div>

    ${Ia()}

    <!-- Filter & Search -->
    <div class="panel" style="margin-bottom:20px; padding: 16px 20px;">
      <div class="task-filter-bar">
        <div class="task-search-wrap">
          <span class="search-icon">🔍</span>
          <input
            type="text"
            id="task-search"
            class="task-search-input"
            placeholder="Cari judul atau proyek..."
            value="${c.searchQuery}"
            aria-label="Cari tugas"
          />
        </div>
        ${C("tf-status",F,c.filterStatus,"Status")}
        ${C("tf-priority",Ea,c.filterPriority,"Prioritas")}
        ${C("tf-assignee",Ra,c.filterAssignee,"Penanggungjawab")}
        ${e>0?'<button class="btn-secondary" id="task-clear-filters" style="align-self:flex-end;">Hapus filter</button>':""}
      </div>
      <div style="font-size:11px;color:var(--color-ink-muted);margin-top:10px;">
        Menampilkan ${a.length} dari ${y.length} tugas
      </div>
    </div>

    <!-- Task Table -->
    <div class="panel" style="margin-bottom:20px; padding: 0 0 8px;">
      ${Na(a)}
    </div>

    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Manajemen Tugas — Fase 2</strong>
        <p>Perubahan status dan filter bekerja pada sesi UI lokal. Tambah dan edit tugas memerlukan backend di masa mendatang.</p>
      </div>
      <span class="demo-badge">FASE 2</span>
    </div>
  `}function Fa(a,e){var s,n,l;const t=document.querySelector("#modal-container");if(!t)return;t.innerHTML=`
    <div style="position:fixed;inset:0;background:rgba(37,39,35,0.5);backdrop-filter:blur(4px);z-index:50;display:grid;place-items:center;padding:16px;">
      <div class="panel" style="width:min(520px,100%);position:relative;">
        <button id="close-modal" style="position:absolute;right:16px;top:16px;font-size:20px;color:var(--color-ink-muted);" aria-label="Tutup modal">✕</button>
        <span class="eyebrow">DEMO SIMULASI FORM</span>
        <h2 style="font-size:20px;margin:6px 0 4px;">Buat Tugas Baru</h2>
        <p style="font-size:12px;color:var(--color-ink-secondary);margin-bottom:20px;">
          Simulasi UI. Penyimpanan nyata memerlukan backend.
        </p>
        <form id="new-task-form" style="display:flex;flex-direction:column;gap:14px;">
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--color-ink-secondary);display:block;margin-bottom:6px;" for="nt-title">Judul Tugas</label>
            <input id="nt-title" required placeholder="Contoh: Review naskah promo" style="width:100%;height:38px;border:1px solid var(--color-border);border-radius:var(--radius-control);padding:0 12px;font-size:12px;"/>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--color-ink-secondary);display:block;margin-bottom:6px;" for="nt-assignee">Penanggungjawab</label>
              <select id="nt-assignee" style="width:100%;height:38px;border:1px solid var(--color-border);border-radius:var(--radius-control);padding:0 10px;font-size:12px;">
                ${Y.map(r=>`<option>${r.name}</option>`).join("")}
              </select>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--color-ink-secondary);display:block;margin-bottom:6px;" for="nt-priority">Prioritas</label>
              <select id="nt-priority" style="width:100%;height:38px;border:1px solid var(--color-border);border-radius:var(--radius-control);padding:0 10px;font-size:12px;">
                <option>Normal</option>
                <option>Tinggi</option>
              </select>
            </div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--color-ink-secondary);display:block;margin-bottom:6px;" for="nt-deadline">Deadline</label>
              <input id="nt-deadline" type="date" value="2026-10-20" style="width:100%;height:38px;border:1px solid var(--color-border);border-radius:var(--radius-control);padding:0 12px;font-size:12px;"/>
            </div>
            <div>
              <label style="font-size:11px;font-weight:700;color:var(--color-ink-secondary);display:block;margin-bottom:6px;" for="nt-status">Status Awal</label>
              <select id="nt-status" style="width:100%;height:38px;border:1px solid var(--color-border);border-radius:var(--radius-control);padding:0 10px;font-size:12px;">
                ${F.filter(r=>r!=="Semua").map(r=>`<option>${r}</option>`).join("")}
              </select>
            </div>
          </div>
          <div>
            <label style="font-size:11px;font-weight:700;color:var(--color-ink-secondary);display:block;margin-bottom:6px;" for="nt-notes">Instruksi / Catatan</label>
            <textarea id="nt-notes" placeholder="Catatan tambahan..." rows="2" style="width:100%;border:1px solid var(--color-border);border-radius:var(--radius-control);padding:8px 12px;font-size:12px;resize:vertical;"></textarea>
          </div>
          <div style="display:flex;justify-content:flex-end;gap:10px;margin-top:10px;padding-top:14px;border-top:1px solid var(--color-border);">
            <button type="button" id="cancel-modal" class="btn-secondary">Batal</button>
            <button type="submit" class="btn-primary">Simpan (Simulasi)</button>
          </div>
        </form>
      </div>
    </div>
  `;const i=()=>{t.innerHTML=""};(s=document.querySelector("#close-modal"))==null||s.addEventListener("click",i),(n=document.querySelector("#cancel-modal"))==null||n.addEventListener("click",i),(l=document.querySelector("#new-task-form"))==null||l.addEventListener("submit",r=>{r.preventDefault();const p=document.querySelector("#nt-title").value.trim()||"Tugas baru",v=document.querySelector("#nt-assignee").value,f=document.querySelector("#nt-priority").value,b=document.querySelector("#nt-deadline").value,h=document.querySelector("#nt-status").value,D=document.querySelector("#nt-notes").value.trim(),E={"Farah Aulia":"FA","Nadia Putri":"NP","Raka Pratama":"RP","Dimas Akbar":"DA"},sa={id:`task-${Date.now()}`,title:p,project:"Tugas Baru (Demo)",platform:"Instagram",assignee:v,initials:E[v]||"UN",deadline:b,priority:f,status:h,statusClass:X[h]||"st-idea",notes:D};y.unshift(sa),i(),e(`Tugas "${p}" ditambahkan untuk sesi ini.`),a()})}function Ma(a,e){var t,i,s;(t=document.querySelector("#btn-task-new"))==null||t.addEventListener("click",()=>{Fa(a,e)}),document.querySelectorAll(".task-filter-select").forEach(n=>{n.addEventListener("change",()=>{const l=n.dataset.filterId,r=n.value;l==="tf-status"&&(c.filterStatus=r),l==="tf-priority"&&(c.filterPriority=r),l==="tf-assignee"&&(c.filterAssignee=r),a()})}),(i=document.querySelector("#task-search"))==null||i.addEventListener("input",n=>{c.searchQuery=n.target.value.toLowerCase().trim(),a()}),(s=document.querySelector("#task-clear-filters"))==null||s.addEventListener("click",()=>{c.filterStatus="Semua",c.filterPriority="Semua",c.filterAssignee="Semua",c.searchQuery="",a()}),document.querySelectorAll(".status-select").forEach(n=>{n.addEventListener("change",()=>{const l=n.dataset.taskId,r=y.find(v=>v.id===l);if(!r)return;const p=r.status;r.status=n.value,r.statusClass=X[n.value]||"st-idea",r.isOverdue=n.value==="Terlambat",e(`"${r.title}": ${p} → ${r.status}`),a()})}),document.querySelectorAll(".task-detail-btn").forEach(n=>{n.addEventListener("click",()=>{const l=n.dataset.taskId,r=y.find(p=>p.id===l);r&&e(`Detail: ${r.title} · ${r.assignee} · ${r.status}`)})})}const B={dashboard:"Dashboard",kalender:"Kalender",pipeline:"Pipeline",tugas:"Tugas",aset:"Aset",notifikasi:"Notifikasi",laporan:"Laporan",pengguna:"Pengguna"},Z={Admin:"role-admin",Koordinator:"role-coord","Tim Kreatif":"role-creative",Reviewer:"role-reviewer",Publikasi:"role-pub"};function Ka(){return`
    <div class="users-table">
      <div class="users-table-head">
        <span>PENGGUNA</span>
        <span>EMAIL (DEMO)</span>
        <span>PERAN</span>
        <span>BERGABUNG</span>
        <span>STATUS</span>
        <span>AKSI</span>
      </div>
      ${A.map(a=>`
        <div class="users-table-row">
          <div class="user-cell">
            <div class="activity-avatar ${a.avatarClass}">${a.initials}</div>
            <strong>${a.name}</strong>
          </div>
          <div class="cl-muted">${a.email}</div>
          <div>
            <span class="role-pill ${Z[a.role]||""}">${a.role}</span>
          </div>
          <div class="cl-muted">${a.joined}</div>
          <div>
            <span class="status-pill ${a.status==="Aktif"?"st-ready":"st-idea"}">${a.status}</span>
          </div>
          <div style="display:flex;gap:6px;">
            <button class="btn-secondary user-edit-btn" style="padding:5px 10px;font-size:11px;" data-uid="${a.id}" aria-label="Edit peran ${a.name}">Edit peran</button>
          </div>
        </div>
      `).join("")}
    </div>
  `}function Ua(){const a=Object.keys(B);return`
    <div class="roles-matrix">
      <div class="matrix-head">
        <div class="matrix-role-col">PERAN</div>
        ${a.map(e=>`<div class="matrix-area-col">${B[e]}</div>`).join("")}
      </div>
      ${H.map(e=>`
        <div class="matrix-row">
          <div class="matrix-role-cell">
            <span class="role-pill ${Z[e.role]||""}">${e.role}</span>
          </div>
          ${a.map(t=>`
            <div class="matrix-cell ${e[t]?"allowed":"denied"}">
              <span class="matrix-icon" title="${e[t]?"Diizinkan":"Tidak diizinkan"}">
                ${e[t]?"✓":"—"}
              </span>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `}function za(){const a=A.filter(t=>t.status==="Aktif").length,e=A.filter(t=>t.status!=="Aktif").length;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / PENGGUNA & AKSES</div>
        <h1>Pengguna & Akses</h1>
        <p>Daftar anggota tim dan matriks kemampuan per peran (simulasi — bukan kontrol keamanan nyata)</p>
      </div>
      <button class="btn-primary" id="btn-user-invite"><span>＋</span> Undang Pengguna (Demo)</button>
    </div>

    <!-- Stats -->
    <div class="pip-stats" style="margin-bottom:20px;">
      <div class="pip-stat-item">
        <span class="pip-stat-val">${A.length}</span>
        <span class="pip-stat-label">Total pengguna</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-sage-ink)">${a}</span>
        <span class="pip-stat-label">Aktif</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-ink-muted)">${e}</span>
        <span class="pip-stat-label">Tidak aktif</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val">${H.length}</span>
        <span class="pip-stat-label">Peran tersedia</span>
      </div>
    </div>

    <!-- Users Table -->
    <div class="panel" style="margin-bottom:20px;padding:0 0 8px;">
      <div class="panel-head" style="padding:18px 20px 0;">
        <div>
          <h2>Daftar Pengguna</h2>
          <p>Data simulasi · Email diakhiri @sgq.demo · Tidak ada akun nyata</p>
        </div>
        <span class="demo-badge">DATA DUMMY</span>
      </div>
      ${Ka()}
    </div>

    <!-- Roles Matrix -->
    <div class="panel" style="margin-bottom:20px;">
      <div class="panel-head">
        <div>
          <h2>Matriks Kemampuan Peran</h2>
          <p>Gambaran konseptual hak akses per area fitur · Implementasi keamanan nyata menunggu backend</p>
        </div>
        <span class="demo-badge">KONSEPTUAL</span>
      </div>
      ${Ua()}
    </div>

    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Pengguna & Akses — Fase 3</strong>
        <p>Semua pengguna, email, dan hak akses adalah data simulasi. Autentikasi dan kontrol akses nyata memerlukan backend yang belum disetujui.</p>
      </div>
      <span class="demo-badge">FASE 3</span>
    </div>
  `}function Ba(a,e){var t;(t=document.querySelector("#btn-user-invite"))==null||t.addEventListener("click",()=>{e("Undang pengguna: simulasi UI saja. Fungsi email memerlukan backend.")}),document.querySelectorAll(".user-edit-btn").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.uid,n=A.find(l=>l.id===s);n&&e(`Edit peran "${n.name}": simulasi — perubahan peran nyata memerlukan backend.`)})})}const qa=["Semua","Desain","Video","Gambar","Dokumen","Audio"];let m={filterType:"Semua",viewMode:"list",searchQuery:""};const M={Desain:"🎨",Video:"🎬",Gambar:"🖼",Dokumen:"📄",Audio:"🎵"},aa={Desain:"tag-desain",Video:"tag-video",Gambar:"tag-gambar",Dokumen:"tag-dokumen",Audio:"tag-audio"};function Ga(a){return a.filter(e=>{const t=m.filterType==="Semua"||e.type===m.filterType,i=!m.searchQuery||e.name.toLowerCase().includes(m.searchQuery)||e.project.toLowerCase().includes(m.searchQuery);return t&&i})}function Ya(a){return`
    <div class="asset-list-row">
      <div class="asset-name-cell">
        <span class="asset-type-icon">${M[a.type]||"📁"}</span>
        <div>
          <strong>${a.name}</strong>
          <div class="asset-project-label">${a.project}</div>
        </div>
      </div>
      <div><span class="asset-tag ${aa[a.tag]||""}">${a.tag}</span></div>
      <div class="cl-muted">${a.size}</div>
      <div class="assignee">
        <span class="mini-avatar">${a.initials}</span>
        <span class="cl-muted">${a.uploader}</span>
      </div>
      <div class="cl-muted">${a.date}</div>
      <div style="display:flex;gap:6px;">
        <button class="btn-secondary asset-link-btn" style="padding:5px 10px;font-size:11px;" data-ast-id="${a.id}" aria-label="Buka ${a.name}">
          Buka ↗
        </button>
      </div>
    </div>
  `}function Ha(a){return`
    <div class="asset-grid-card">
      <div class="asset-grid-icon">${M[a.type]||"📁"}</div>
      <div class="asset-grid-name">${a.name}</div>
      <div class="asset-grid-meta">
        <span class="asset-tag ${aa[a.tag]||""}">${a.tag}</span>
        <span class="cl-muted" style="font-size:10px;">${a.size}</span>
      </div>
      <div class="asset-grid-footer">
        <span class="assignee">
          <span class="mini-avatar" style="width:20px;height:20px;font-size:9px;">${a.initials}</span>
          <span class="cl-muted" style="font-size:10px;">${a.uploader.split(" ")[0]}</span>
        </span>
        <button class="btn-secondary asset-link-btn" style="padding:4px 8px;font-size:10px;" data-ast-id="${a.id}" aria-label="Buka ${a.name}">↗</button>
      </div>
    </div>
  `}function Wa(){const a=Ga(N),e=N.length;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / ASET & FILE</div>
        <h1>Aset & File</h1>
        <p>Daftar berkas dummy terkait konten · ${a.length} dari ${e} aset · Unggahan nyata di luar lingkup Fase 3</p>
      </div>
      <button class="btn-primary" id="btn-asset-upload"><span>＋</span> Unggah (Demo)</button>
    </div>

    <!-- Filter & Controls -->
    <div class="panel" style="margin-bottom:20px;padding:16px 20px;">
      <div class="asset-filter-bar">
        <div class="task-search-wrap" style="max-width:280px;">
          <span class="search-icon">🔍</span>
          <input
            type="text"
            id="asset-search"
            class="task-search-input"
            placeholder="Cari nama file atau proyek..."
            value="${m.searchQuery}"
            aria-label="Cari aset"
          />
        </div>
        <div class="filter-pills" id="asset-type-filter">
          ${qa.map(t=>`
            <button class="filter-pill ${t===m.filterType?"active":""}"
              data-asset-filter="${t}" aria-label="Filter ${t}">
              ${t!=="Semua"?M[t]+" ":""}${t}
            </button>
          `).join("")}
        </div>
        <div class="view-toggle-group" style="margin-left:auto;" role="group" aria-label="Mode tampilan">
          <button class="view-toggle-btn ${m.viewMode==="list"?"active":""}" id="asset-view-list" data-asset-view="list" aria-label="Tampilan daftar">≡ Daftar</button>
          <button class="view-toggle-btn ${m.viewMode==="grid"?"active":""}" id="asset-view-grid" data-asset-view="grid" aria-label="Tampilan grid">⊞ Grid</button>
        </div>
      </div>
    </div>

    <!-- Asset Display -->
    <div class="panel" style="margin-bottom:20px; ${m.viewMode==="list"?"padding:0 0 8px;":"padding:20px;"}">
      ${m.viewMode==="list"?`
          <div class="asset-list-head">
            <span>NAMA FILE</span>
            <span>TIPE</span>
            <span>UKURAN</span>
            <span>DIUNGGAH OLEH</span>
            <span>TANGGAL</span>
            <span>AKSI</span>
          </div>
          ${a.length>0?a.map(Ya).join(""):'<div class="cal-empty-state">Tidak ada aset yang cocok.</div>'}
        `:`
          <div class="asset-grid">
            ${a.length>0?a.map(Ha).join(""):'<div class="cal-empty-state">Tidak ada aset yang cocok.</div>'}
          </div>
        `}
    </div>

    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Aset & File — Fase 3</strong>
        <p>Semua berkas adalah data dummy. Tautan "Buka ↗" adalah placeholder. Unggahan nyata memerlukan storage backend.</p>
      </div>
      <span class="demo-badge">FASE 3</span>
    </div>
  `}function Qa(a,e){var t,i;document.querySelectorAll("[data-asset-filter]").forEach(s=>{s.addEventListener("click",()=>{m.filterType=s.dataset.assetFilter,a()})}),document.querySelectorAll("[data-asset-view]").forEach(s=>{s.addEventListener("click",()=>{m.viewMode=s.dataset.assetView,a()})}),(t=document.querySelector("#asset-search"))==null||t.addEventListener("input",s=>{m.searchQuery=s.target.value.toLowerCase().trim(),a()}),document.querySelectorAll(".asset-link-btn").forEach(s=>{s.addEventListener("click",()=>{const n=s.dataset.astId,l=N.find(r=>r.id===n);l&&e(`"${l.name}" — tautan placeholder. Akses file nyata memerlukan storage backend.`)})}),(i=document.querySelector("#btn-asset-upload"))==null||i.addEventListener("click",()=>{e("Unggah file: simulasi UI saja. Penyimpanan nyata memerlukan backend storage.")})}const q={deadline:{bg:"ntf-deadline",label:"Deadline"},revision:{bg:"ntf-revision",label:"Revisi"},task:{bg:"ntf-task",label:"Tugas"},publish:{bg:"ntf-publish",label:"Publikasi"},approval:{bg:"ntf-approval",label:"Persetujuan"}};function Va(){return k.filter(a=>!a.read).length}function _a(a){const e=q[a.type]||q.task;return`
    <div class="notif-item ${a.read?"notif-read":"notif-unread"}" data-notif-id="${a.id}">
      <div class="notif-icon-wrap ${e.bg}">
        <span class="notif-icon" aria-hidden="true">${a.icon}</span>
      </div>
      <div class="notif-body">
        <div class="notif-header">
          <strong class="notif-title">${a.title}</strong>
          <span class="notif-type-badge ${e.bg}">${e.label}</span>
          <span class="notif-time">${a.time}</span>
        </div>
        <p class="notif-text">${a.body}</p>
        <div class="notif-actions">
          <button class="btn-secondary notif-goto-btn" data-notif-id="${a.id}" data-route="${a.route}"
            style="padding:5px 10px;font-size:11px;" aria-label="Buka halaman terkait ${a.title}">
            Lihat → ${a.route}
          </button>
          ${a.read?"":`<button class="notif-read-btn" data-notif-id="${a.id}" style="font-size:11px;color:var(--color-ink-muted);padding:5px 0;" aria-label="Tandai dibaca">Tandai dibaca</button>`}
        </div>
      </div>
      ${a.read?"":'<span class="notif-unread-dot" aria-label="Belum dibaca"></span>'}
    </div>
  `}function Ja(){const a=Va(),e=k.length;return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / NOTIFIKASI</div>
        <h1>Notifikasi</h1>
        <p>${a>0?`${a} belum dibaca`:"Semua sudah dibaca"} · ${e} total · Simulasi pengingat lokal</p>
      </div>
      <div style="display:flex;gap:10px;">
        ${a>0?'<button class="btn-secondary" id="btn-read-all">Tandai semua dibaca</button>':""}
      </div>
    </div>

    <!-- Stats -->
    <div class="pip-stats" style="margin-bottom:20px;">
      <div class="pip-stat-item">
        <span class="pip-stat-val">${e}</span>
        <span class="pip-stat-label">Total notifikasi</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val" style="color:var(--color-blush-ink)">${a}</span>
        <span class="pip-stat-label">Belum dibaca</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val">${k.filter(t=>t.type==="deadline").length}</span>
        <span class="pip-stat-label">Deadline</span>
      </div>
      <div class="pip-stat-divider"></div>
      <div class="pip-stat-item">
        <span class="pip-stat-val">${k.filter(t=>t.type==="revision").length}</span>
        <span class="pip-stat-label">Revisi</span>
      </div>
    </div>

    <!-- Notification List -->
    <div class="panel" style="margin-bottom:20px;padding:0;">
      ${k.length>0?`<div class="notif-list" id="notif-list">${k.map(_a).join("")}</div>`:'<div class="cal-empty-state" style="padding:48px;">Tidak ada notifikasi saat ini.</div>'}
    </div>

    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Notifikasi — Fase 3</strong>
        <p>Notifikasi adalah simulasi lokal. Email dan push notification nyata memerlukan backend yang belum disetujui.</p>
      </div>
      <span class="demo-badge">FASE 3</span>
    </div>
  `}function Xa(a,e){var t;document.querySelectorAll(".notif-read-btn").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.notifId,n=k.find(l=>l.id===s);n&&(n.read=!0,a())})}),(t=document.querySelector("#btn-read-all"))==null||t.addEventListener("click",()=>{k.forEach(i=>{i.read=!0}),e("Semua notifikasi ditandai sudah dibaca."),a()}),document.querySelectorAll(".notif-goto-btn").forEach(i=>{i.addEventListener("click",()=>{const s=i.dataset.notifId,n=k.find(p=>p.id===s);n&&(n.read=!0);const l=i.dataset.route,r=new CustomEvent("studioflow:navigate",{detail:{route:l}});document.dispatchEvent(r)})})}function T(a,e,t){const i=Math.round(a/e*100);return`
    <div class="report-bar-wrap">
      <div class="report-bar-track">
        <div class="report-bar-fill ${t}" style="width:${i}%" aria-valuenow="${a}" aria-valuemax="${e}" role="progressbar" aria-label="${a} dari ${e}"></div>
      </div>
      <span class="report-bar-val">${a}</span>
    </div>
  `}function ea(a){return`
    <div class="rate-ring" style="--ring-deg:${Math.round(a/100*360)}deg;" title="Ketepatan waktu: ${a}%">
      <span class="rate-ring-val">${a}%</span>
    </div>
  `}function Za(){const a=S.reduce((n,l)=>n+l.planned,0),e=S.reduce((n,l)=>n+l.done,0),t=S.reduce((n,l)=>n+l.late,0),i=Math.round(S.reduce((n,l)=>n+l.rate,0)/S.length);return`
    <div class="stats-grid" style="margin-bottom:24px;">
      ${[{label:"Total konten direncanakan",value:a,kind:"lavender",icon:"▤",delta:"+12.8%"},{label:"Konten selesai & tayang",value:e,kind:"sage",icon:"✓",delta:"+8.6%"},{label:"Konten terlambat",value:t,kind:"rose",icon:"⚑",delta:"-2.1%"},{label:"Ketepatan waktu rata-rata",value:`${i}%`,kind:"sand",icon:"◷",delta:""}].map(n=>`
        <article class="stat-card">
          <div class="stat-top">
            <span>${n.label}</span>
            <span class="stat-icon ${n.kind}">${n.icon}</span>
          </div>
          <div class="stat-value">${n.value}</div>
          <div class="stat-foot">
            ${n.delta?`<span class="stat-delta ${n.delta.startsWith("+")?"positive":"negative"}">${n.delta}</span><span class="stat-muted">vs bulan lalu</span>`:'<span class="stat-muted">Oktober 2026</span>'}
          </div>
        </article>
      `).join("")}
    </div>
  `}function ae(){const a=Math.max(...S.map(e=>e.planned));return`
    <div class="panel" style="margin-bottom:20px;">
      <div class="panel-head">
        <div>
          <h2>Performa per Platform</h2>
          <p>Jumlah konten direncanakan, selesai, dan terlambat per platform</p>
        </div>
        <button class="btn-secondary" id="btn-export-platform" aria-label="Ekspor laporan platform">Ekspor (Demo)</button>
      </div>
      <div class="report-platform-table">
        <div class="report-table-head">
          <span>PLATFORM</span>
          <span>DIRENCANAKAN</span>
          <span>SELESAI</span>
          <span>TERLAMBAT</span>
          <span>KETEPATAN WAKTU</span>
        </div>
        ${S.map(e=>`
          <div class="report-table-row">
            <div>
              <span class="platform-chip plat-${e.platform.toLowerCase()}">${e.platform}</span>
            </div>
            <div>${T(e.planned,a,"bar-lavender")}</div>
            <div>${T(e.done,e.planned,"bar-sage")}</div>
            <div>${T(e.late,e.planned,"bar-blush")}</div>
            <div>${ea(e.rate)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ee(){const a=Math.max(...U.map(e=>e.done));return`
    <div class="panel" style="margin-bottom:20px;">
      <div class="panel-head">
        <div>
          <h2>Produktivitas Anggota Tim</h2>
          <p>Jumlah konten selesai, ketepatan waktu, dan rate per anggota</p>
        </div>
        <button class="btn-secondary" id="btn-export-member" aria-label="Ekspor laporan anggota">Ekspor (Demo)</button>
      </div>
      <div class="report-platform-table">
        <div class="report-table-head">
          <span>ANGGOTA</span>
          <span>SELESAI</span>
          <span>TEPAT WAKTU</span>
          <span>TERLAMBAT</span>
          <span>KETEPATAN WAKTU</span>
        </div>
        ${U.map(e=>`
          <div class="report-table-row">
            <div class="user-cell">
              <div class="activity-avatar ${e.avatarClass}" style="width:28px;height:28px;font-size:10px;">${e.initials}</div>
              <strong style="font-size:12px;">${e.name}</strong>
            </div>
            <div>${T(e.done,a,"bar-lavender")}</div>
            <div>${T(e.ontime,e.done,"bar-sage")}</div>
            <div>${T(e.late,e.done,"bar-blush")}</div>
            <div>${ea(e.rate)}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function te(){const a=Math.max(...z.map(e=>e.total));return`
    <div class="panel" style="margin-bottom:20px;">
      <div class="panel-head">
        <div>
          <h2>Tren per Periode</h2>
          <p>Perbandingan target vs realisasi konten per bulan</p>
        </div>
        <button class="btn-secondary" id="btn-export-period" aria-label="Ekspor laporan periode">Ekspor (Demo)</button>
      </div>
      <div class="period-chart-wrap">
        ${z.map(e=>{const t=Math.round(e.done/a*100),i=Math.round(e.total/a*100),s=Math.round(e.done/e.total*100);return`
            <div class="period-col">
              <div class="period-bar-group">
                <div class="period-bar-bg" style="height:${i}%;">
                  <div class="period-bar-done" style="height:${t}%;" title="${e.done} selesai dari ${e.total}"></div>
                </div>
              </div>
              <div class="period-label">${e.period}</div>
              <div class="period-sub">${s}%</div>
            </div>
          `}).join("")}
        <div class="period-legend">
          <span><i class="lg-doing"></i> Target</span>
          <span><i class="lg-done"></i> Selesai</span>
        </div>
      </div>
    </div>
  `}function se(){return`
    <div class="page-heading">
      <div>
        <div class="eyebrow">WORKSPACE / LAPORAN</div>
        <h1>Laporan</h1>
        <p>Ringkasan performa konten per platform, anggota tim, dan periode · Oktober 2026</p>
      </div>
      <button class="btn-primary" id="btn-export-all" aria-label="Ekspor semua laporan">Ekspor Semua (Demo)</button>
    </div>

    ${Za()}
    ${ae()}
    ${ee()}
    ${te()}

    <div class="demo-banner">
      <span class="demo-banner-icon">✳</span>
      <div class="demo-banner-content">
        <strong>Laporan — Fase 3</strong>
        <p>Semua angka adalah data dummy. Tombol ekspor memberikan feedback simulasi dan tidak menghasilkan file server-side.</p>
      </div>
      <span class="demo-badge">FASE 3</span>
    </div>
  `}function ie(a,e){const t="Ekspor laporan: simulasi UI. Generasi file (PDF/CSV) memerlukan backend server-side.";["#btn-export-all","#btn-export-platform","#btn-export-member","#btn-export-period"].forEach(i=>{var s;(s=document.querySelector(i))==null||s.addEventListener("click",()=>e(t))})}let d={currentRoute:"Overview",activeDocKey:"PRD",sidebarOpen:!1};const ne=document.querySelector("#app");function g(){let a="";d.currentRoute==="Overview"?a=pa():d.currentRoute==="Dokumen SOT"?a=ua(d.activeDocKey):d.currentRoute==="Kalender konten"?a=$a():d.currentRoute==="Alur produksi"?a=Pa():d.currentRoute==="Manajemen tugas"?a=ja():d.currentRoute==="Pengguna & akses"?a=za():d.currentRoute==="Aset & file"?a=Wa():d.currentRoute==="Notifikasi"?a=Ja():d.currentRoute==="Laporan"?a=se():a=ca(d.currentRoute),ne.innerHTML=`
    <div class="app-shell">
      ${ra(d.currentRoute)}
      <main class="main-area">
        ${oa(d.currentRoute)}
        <div class="page-content" id="page-content">
          ${a}
        </div>
      </main>
    </div>
    <div id="toast" class="toast-notification"></div>
    <div id="modal-container"></div>
  `;const e=document.querySelector("#sidebar");e&&d.sidebarOpen&&e.classList.add("open"),le(),d.currentRoute==="Kalender konten"?Sa(g,$):d.currentRoute==="Alur produksi"?wa(g,$):d.currentRoute==="Manajemen tugas"?Ma(g,$):d.currentRoute==="Pengguna & akses"?Ba(g,$):d.currentRoute==="Aset & file"?Qa(g,$):d.currentRoute==="Notifikasi"?Xa(g,$):d.currentRoute==="Laporan"&&ie(g,$)}function $(a){const e=document.querySelector("#toast");e&&(e.textContent=a,e.classList.add("show"),setTimeout(()=>{e.classList.remove("show")},2600))}function le(){const a=document.querySelector("#mobile-toggle"),e=document.querySelector("#sidebar");a&&e&&a.addEventListener("click",()=>{d.sidebarOpen=!d.sidebarOpen,e.classList.toggle("open",d.sidebarOpen)}),document.querySelectorAll("[data-route]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();const l=s.dataset.route;d.currentRoute=l,d.sidebarOpen=!1,g(),window.scrollTo({top:0,behavior:"smooth"})})}),document.querySelectorAll("[data-doc-key]").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation(),d.activeDocKey=s.dataset.docKey,g()})});const t=document.querySelector("#global-search");t&&t.addEventListener("input",s=>{const n=s.target.value.toLowerCase().trim();document.querySelectorAll(".task-row").forEach(r=>{const p=r.textContent.toLowerCase();r.style.display=p.includes(n)?"grid":"none"})});const i=document.querySelector("#btn-demo-new");i&&i.addEventListener("click",re)}function re(){var t,i,s;const a=document.querySelector("#modal-container");if(!a)return;a.innerHTML=`
    <div style="position: fixed; inset: 0; background: rgba(37,39,35,0.5); backdrop-filter: blur(4px); z-index: 50; display: grid; place-items: center; padding: 16px;">
      <div class="panel" style="width: min(480px, 100%); position: relative; background: var(--color-surface); box-shadow: var(--shadow-modal);">
        <button id="close-modal" style="position: absolute; right: 16px; top: 16px; font-size: 20px; color: var(--color-ink-muted);">✕</button>
        <span class="eyebrow">DEMO SIMULASI FORM</span>
        <h2 style="font-size: 20px; margin: 6px 0 10px;">Buat Konten Baru</h2>
        <p style="font-size: 12px; color: var(--color-ink-secondary); margin-bottom: 20px;">
          Form simulasi UI untuk Fase 1. Operasi simpan nyata memerlukan backend di masa mendatang.
        </p>
        
        <form id="demo-form" style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <label style="font-size: 11px; font-weight: 700; color: var(--color-ink-secondary); display: block; margin-bottom: 6px;">Judul Konten</label>
            <input required placeholder="Contoh: 5 Tips Belajar Produktif" style="width: 100%; height: 38px; border: 1px solid var(--color-border); border-radius: var(--radius-control); padding: 0 12px; font-size: 12px;" />
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <label style="font-size: 11px; font-weight: 700; color: var(--color-ink-secondary); display: block; margin-bottom: 6px;">Platform</label>
              <select style="width: 100%; height: 38px; border: 1px solid var(--color-border); border-radius: var(--radius-control); padding: 0 10px; font-size: 12px;">
                <option>Instagram</option>
                <option>TikTok</option>
                <option>YouTube</option>
              </select>
            </div>
            <div>
              <label style="font-size: 11px; font-weight: 700; color: var(--color-ink-secondary); display: block; margin-bottom: 6px;">Kategori</label>
              <select style="width: 100%; height: 38px; border: 1px solid var(--color-border); border-radius: var(--radius-control); padding: 0 10px; font-size: 12px;">
                <option>Edukasi</option>
                <option>Promosi</option>
                <option>Informasi</option>
                <option>Hiburan</option>
              </select>
            </div>
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; padding-top: 14px; border-top: 1px solid var(--color-border);">
            <button type="button" id="cancel-modal" class="btn-secondary">Batal</button>
            <button type="submit" class="btn-primary">Simpan (Simulasi)</button>
          </div>
        </form>
      </div>
    </div>
  `;const e=()=>{a.innerHTML=""};(t=document.querySelector("#close-modal"))==null||t.addEventListener("click",e),(i=document.querySelector("#cancel-modal"))==null||i.addEventListener("click",e),(s=document.querySelector("#demo-form"))==null||s.addEventListener("submit",n=>{n.preventDefault(),e(),$("Konten simulasi berhasil dibuat untuk sesi ini.")})}const ta=document.createElement("style");ta.textContent=`
  .toast-notification {
    position: fixed;
    bottom: 24px;
    right: 24px;
    z-index: 100;
    background-color: var(--color-ink);
    color: var(--color-surface);
    padding: 12px 18px;
    border-radius: var(--radius-control);
    font-size: 12px;
    font-weight: 600;
    box-shadow: var(--shadow-md);
    opacity: 0;
    transform: translateY(12px);
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .toast-notification.show {
    opacity: 1;
    transform: translateY(0);
  }
`;document.head.appendChild(ta);document.addEventListener("studioflow:navigate",a=>{var t;const e=(t=a.detail)==null?void 0:t.route;e&&(d.currentRoute=e,d.sidebarOpen=!1,g(),window.scrollTo({top:0,behavior:"smooth"}))});g();
