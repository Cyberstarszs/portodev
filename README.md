# AI.DevSign Portfolio

Portofolio profesional modern berbasis static HTML/CSS/JS yang menampilkan identitas dan karya Developer + Designer dengan pendekatan workflow presisi berbasis AI (*AI-Powered Workflow*).

## Fitur Utama

- **Desain Editorial Neo-Minimalism**: Whitespace yang luas, tipografi yang kontras antara serif mewah (`Playfair Display`) dan monospace teknis (`JetBrains Mono`), serta garis pembatas tipis yang elegan.
- **Dynamic Projects Grid**: Proyek dimuat secara dinamis dari objek data terstruktur JavaScript dengan fitur penyaringan kategori langsung (*Web App*, *Landing Page*, *UI/UX Design*) tanpa memuat ulang halaman.
- **Scroll Animations & Responsive Design**: Animasi fade-in staggered menggunakan Intersection Observer. Tata letak sepenuhnya responsif untuk perangkat Mobile, Tablet, dan Desktop.
- **Contact Form Validation & Submission**: Validasi input data secara realtime di sisi client dan integrasi formulir kontak asinkron (AJAX) menggunakan layanan **Formspree**.
- **Aksesibilitas & Performa Optimal**: Mengikuti pedoman WCAG 2.1 AA (kontras warna rasio minimal 4.5:1), fokus ring visual untuk navigasi keyboard, dan penanganan preferensi sistem `prefers-reduced-motion`.

## Struktur Folder

```
portofolio/
├── index.html                  # Struktur halaman HTML5 semantik
├── assets/
│   ├── css/
│   │   └── style.css           # Variabel warna, tata letak Grid/Flex, gaya komponen
│   ├── js/
│   │   └── main.js             # Data proyek, filter logika, validasi form, animasi
│   └── images/
│       ├── profile.jpg         # Foto profil profesional
│       ├── project-1.webp      # Thumbnail proyek 1 (WebP)
│       ├── project-2.webp      # Thumbnail proyek 2 (WebP)
│       ├── project-3.webp      # Thumbnail proyek 3 (WebP)
│       └── project-4.webp      # Thumbnail proyek 4 (WebP)
└── README.md                   # Dokumentasi ini
```

## Cara Pembaruan Konten

### 1. Menambahkan/Mengubah Proyek
Untuk memperbarui daftar karya yang tampil di website, Anda hanya perlu mengedit array objek `PROJECTS_DATA` di dalam file [assets/js/main.js](assets/js/main.js):

```javascript
{
    id: 5,                                       // ID unik proyek
    name: "Nama Proyek Anda",                     // Nama proyek
    category: "webapp",                          // Kategori: 'webapp', 'landing', atau 'uiux'
    desc: "Deskripsi singkat mengenai proyek.",   // Maksimal 2 kalimat
    tech: ["HTML5", "CSS", "React"],             // Badge teknologi
    image: "assets/images/project-5.webp",        // Path ke thumbnail gambar
    featured: false,                             // Set true untuk menjadikannya featured (ukuran ganda)
    aiAssisted: true,                            // Set true untuk badge "AI-Assisted"
    liveUrl: "https://example.com/demo",         // Link demo langsung
    githubUrl: "https://github.com/repo"         // Link repositori (opsional)
}
```

### 2. Mengintegrasikan Formspree Riil
Buka file [index.html](index.html) dan temukan tag `<form id="contact-form" ...>` di section kontak. Ganti atribut `action` dari:
`action="https://formspree.io/f/placeholder_id"`
Menjadi URL Formspree asli Anda:
`action="https://formspree.io/f/nama_id_formspree_anda"`

### 3. Mengubah Palet Warna Tema
Warna dan tipografi diatur menggunakan CSS Custom Properties di bagian atas file [assets/css/style.css](assets/css/style.css). Anda dapat dengan mudah menyesuaikan warna utama tema di sana:
- `--color-bg-primary`: Mengatur latar belakang halaman utama.
- `--color-bg-secondary`: Mengatur latar belakang kartu & formulir.
- `--color-text-primary`: Mengatur warna font teks utama.

## Lisensi & Atribusi

Dirancang & Dikembangkan dengan AI Assistance. Bebas digunakan untuk kebutuhan personal atau komersial dengan mempertahankan kredit atribusi.
# portodev
