/**
 * portokudev — Lightweight i18n Engine
 * Supports: EN (English) | ID (Bahasa Indonesia)
 * Usage: data-i18n="key" | data-i18n-html="key" | data-i18n-placeholder="key"
 */

const translations = {
    en: {
        /* ── Splash ─────────────────────────────────── */
        splash_title:       "Engineering",
        splash_subtitle:    "with Intent.",

        /* ── Nav ──────────────────────────────────────*/
        nav_home:           "Home",
        nav_about:          "About",
        nav_projects:       "Projects",
        nav_contact:        "Contact",

        /* ── Hero ─────────────────────────────────────*/
        hero_badge:         "Open to New Projects",
        hero_h1_1:          "Precision Code.",
        hero_h1_2:          "Deliberate Design.",
        hero_tagline:       "I build digital products that are fast, purposeful, and built to last — combining clean engineering with design systems that scale.",
        hero_cta_primary:   "View Selected Work",
        hero_cta_secondary: "Start a Project",
        frame_bottom:       "CYBERSTARSZS",

        /* ── About ────────────────────────────────────*/
        section_about_tag:   "01 / ABOUT",
        section_about_title: "The Mind Behind the Work",
        metric_years:        "Years of Practice",
        metric_projects:     "Projects Shipped",
        metric_tech:         "Technologies Mastered",
        bio_1: "I'm a <strong>Software Engineer &amp; UI/UX Designer</strong> who builds digital products with a clear purpose — fast, scalable, and thoughtfully crafted. My work sits at the intersection of clean engineering and visual clarity, with a bias toward systems that hold up under real-world pressure.",
        bio_2: "I work with an AI-augmented workflow that accelerates without cutting corners — pairing performance-first development (Core Web Vitals) with interface design that removes friction and earns trust from the first interaction.",
        skills_frontend:  "Frontend Engineering",
        skills_infra:     "Infrastructure & Tooling",
        skills_design:    "Design & Visual Strategy",
        skills_method:    "Methodology & Practice",

        /* ── Projects ─────────────────────────────────*/
        section_projects_tag:   "02 / SELECTED WORK",
        section_projects_title: "Selected Work",
        filter_all:     "All Projects",
        filter_webapp:  "Web App",
        filter_landing: "Landing Page",
        filter_uiux:    "UI/UX Design",

        /* ── Contact ──────────────────────────────────*/
        section_contact_tag:   "03 / CONTACT",
        section_contact_title: "Let's Build Something.",
        contact_intro:         "Have a project in mind, or just want to talk through an idea? Reach out directly — I respond to every message personally.",
        contact_label_email:   "Email",
        contact_label_wa:      "WhatsApp",
        social_title:          "ELSEWHERE",
        form_label_name:       "Full Name",
        form_ph_name:          "Your name",
        form_label_message:    "Message",
        form_ph_message:       "Tell me about your project, timeline, or idea...",
        form_submit:           "Send via WhatsApp",

        /* ── Footer ───────────────────────────────────*/
        footer_tagline:   "Purposeful engineering. Measurable outcomes.",
        footer_copyright: "All rights reserved.",
        footer_nav_title: "Navigation",
    },

    id: {
        /* ── Splash ─────────────────────────────────── */
        splash_title:       "Rekayasa",
        splash_subtitle:    "dengan Tujuan.",

        /* ── Nav ──────────────────────────────────────*/
        nav_home:           "Beranda",
        nav_about:          "Tentang",
        nav_projects:       "Proyek",
        nav_contact:        "Kontak",

        /* ── Hero ─────────────────────────────────────*/
        hero_badge:         "Terbuka untuk Proyek Baru",
        hero_h1_1:          "Kode Presisi.",
        hero_h1_2:          "Desain Terarah.",
        hero_tagline:       "Saya membangun produk digital yang cepat, bertujuan, dan tahan lama — memadukan rekayasa bersih dengan sistem desain yang skalabel.",
        hero_cta_primary:   "Lihat Karya Pilihan",
        hero_cta_secondary: "Mulai Proyek",
        frame_bottom:       "CYBERSTARSZS",

        /* ── About ────────────────────────────────────*/
        section_about_tag:   "01 / TENTANG",
        section_about_title: "Sosok di Balik Karya",
        metric_years:        "Tahun Berkarya",
        metric_projects:     "Proyek Terkirim",
        metric_tech:         "Teknologi Dikuasai",
        bio_1: "Saya seorang <strong>Software Engineer &amp; UI/UX Designer</strong> yang membangun produk digital dengan tujuan yang jelas — cepat, skalabel, dan dirancang dengan penuh pertimbangan. Pekerjaan saya berada di persimpangan rekayasa bersih dan kejelasan visual, dengan fokus pada sistem yang tahan uji di dunia nyata.",
        bio_2: "Saya bekerja dengan workflow bertenaga AI yang mempercepat tanpa memotong kualitas — memadukan pengembangan berbasis performa (Core Web Vitals) dengan desain antarmuka yang menghilangkan hambatan dan membangun kepercayaan sejak interaksi pertama.",
        skills_frontend:  "Rekayasa Frontend",
        skills_infra:     "Infrastruktur & Alat",
        skills_design:    "Desain & Strategi Visual",
        skills_method:    "Metodologi & Praktik",

        /* ── Projects ─────────────────────────────────*/
        section_projects_tag:   "02 / KARYA PILIHAN",
        section_projects_title: "Karya Pilihan",
        filter_all:     "Semua Proyek",
        filter_webapp:  "Web App",
        filter_landing: "Landing Page",
        filter_uiux:    "Desain UI/UX",

        /* ── Contact ──────────────────────────────────*/
        section_contact_tag:   "03 / KONTAK",
        section_contact_title: "Mari Wujudkan Sesuatu.",
        contact_intro:         "Punya proyek atau ide yang ingin didiskusikan? Hubungi langsung — setiap pesan saya balas secara personal.",
        contact_label_email:   "Email",
        contact_label_wa:      "WhatsApp",
        social_title:          "TEMUKAN SAYA",
        form_label_name:       "Nama Lengkap",
        form_ph_name:          "Nama Anda",
        form_label_message:    "Pesan",
        form_ph_message:       "Ceritakan proyek, tenggat waktu, atau ide Anda...",
        form_submit:           "Kirim via WhatsApp",

        /* ── Footer ───────────────────────────────────*/
        footer_tagline:   "Rekayasa bertujuan. Hasil terukur.",
        footer_copyright: "Hak cipta dilindungi.",
        footer_nav_title: "Navigasi",
    }
};

/* ═══════════════════════════════════════════════════════
   i18n Engine
   ═══════════════════════════════════════════════════════ */

let currentLang = 'en';

function detectDefaultLang() {
    const saved = localStorage.getItem('lang');
    if (saved && translations[saved]) return saved;
    // Follow browser language
    const browser = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return browser.startsWith('id') ? 'id' : 'en';
}

function applyTranslations(lang) {
    const t = translations[lang];
    if (!t) return;
    currentLang = lang;

    // ── Text content ──────────────────────────────────
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    // ── HTML content (bio paragraphs, etc.) ───────────
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // ── Placeholder attributes ─────────────────────────
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    // ── html lang attribute ───────────────────────────
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';

    // ── Update toggle button state ────────────────────
    const btns = document.querySelectorAll('.lang-btn');
    btns.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // ── Persist ───────────────────────────────────────
    localStorage.setItem('lang', lang);
}

function initI18n() {
    const lang = detectDefaultLang();

    // Build the language toggle button and inject into header controls
    const toggle = document.getElementById('lang-toggle');
    if (toggle) {
        toggle.innerHTML = `
            <button class="lang-btn" data-lang="en" id="lang-en" aria-label="Switch to English">EN</button>
            <span class="lang-divider" aria-hidden="true">|</span>
            <button class="lang-btn" data-lang="id" id="lang-id" aria-label="Ganti ke Bahasa Indonesia">ID</button>
        `;
        toggle.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                applyTranslations(btn.getAttribute('data-lang'));
            });
        });
    }

    applyTranslations(lang);
}

// Run before DOMContentLoaded to minimise layout shift
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
