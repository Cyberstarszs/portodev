/**
 * AI.DevSign Portfolio - Main Javascript Controller
 * Author: Antigravity AI
 * Year: 2026
 */

document.addEventListener("DOMContentLoaded", () => {
    initSplashScreen();
    initNavigation();
    initThemeSwitcher();
    initProjects();
    initContactForm();
    initScrollAnimations();
    initMagneticButtons();
    initHeroReveal();
});

/* ==========================================================================
   0. PREMIUM SPLASH SCREEN
   ========================================================================== */
function initSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;

    // Prevent body scroll while splash is active
    document.body.style.overflow = 'hidden';

    // Dismiss after progress bar completes (2.6s = 0.2s delay + 2.4s animation)
    const dismissDelay = 2700;

    setTimeout(() => {
        splash.classList.add('splash-hidden');

        // Re-enable scroll + fully remove from DOM after transition ends
        splash.addEventListener('transitionend', () => {
            document.body.style.overflow = '';
            splash.remove();
        }, { once: true });
    }, dismissDelay);
}

/* ==========================================================================
   1. NAVIGATION & MOBILE OVERLAY MENU
   ========================================================================== */
function initNavigation() {
    const header = document.getElementById("site-header");
    const navToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll(".nav-link");
    const logoLink = document.getElementById("logo-nav");
    const navClose = document.getElementById("mobile-nav-close");
    const backdrop = document.getElementById("nav-backdrop");

    function openNav() {
        navToggle.setAttribute("aria-expanded", "true");
        navMenu.classList.add("active");
        navMenu.removeAttribute("aria-hidden");
        if (backdrop) {
            backdrop.style.display = "block";
            requestAnimationFrame(() => backdrop.classList.add("active"));
        }
        document.body.style.overflow = "hidden";
    }

    function closeNav() {
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("active");
        navMenu.setAttribute("aria-hidden", "true");
        if (backdrop) {
            backdrop.classList.remove("active");
            // Wait for opacity transition, then hide
            backdrop.addEventListener("transitionend", () => {
                backdrop.style.display = "";
            }, { once: true });
        }
        document.body.style.overflow = "";
    }

    // Toggle Mobile Menu
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navToggle.getAttribute("aria-expanded") === "true";
            isOpen ? closeNav() : openNav();
        });
    }

    // Close button inside drawer
    if (navClose) navClose.addEventListener("click", closeNav);

    // Backdrop click closes
    if (backdrop) backdrop.addEventListener("click", closeNav);

    // Escape key closes
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navMenu.classList.contains("active")) closeNav();
    });


    // Close Mobile Menu on link click
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Close mobile nav if active
            if (navMenu.classList.contains("active")) {
                closeNav();
            }


            // Smooth Scroll to Section
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Logo smooth scroll to top
    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            if (navMenu.classList.contains("active")) {
                navToggle.setAttribute("aria-expanded", "false");
                navMenu.classList.remove("active");
                document.body.style.overflow = "";
            }
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Active Section Indicator via Intersection Observer
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // Detect active section when it occupies center of screen
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute("id");
                
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
}

/* ==========================================================================
   1B. THEME SWITCHER (LIGHT / DARK MODE)
   ========================================================================== */
function initThemeSwitcher() {
    const themeToggle = document.getElementById("theme-toggle");
    if (!themeToggle) return;

    themeToggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        if (isDark) {
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        }
        themeToggle.setAttribute("aria-label", isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap");
    });
    
    // Set initial aria-label
    const isDark = document.body.classList.contains("dark-mode");
    themeToggle.setAttribute("aria-label", isDark ? "Ganti ke mode terang" : "Ganti ke mode gelap");
}

/* ==========================================================================
   2. DYNAMIC PROJECTS DATABASE & RENDERING
   ========================================================================== */
// MAINT-04: Projects object structure for easy updates
const PROJECTS_DATA = [
    {
        id: 1,
        name: "Jashub Store",
        category: "webapp",
        desc: "Aplikasi web dinamis e-commerce langganan aplikasi premium. Dilengkapi dengan manajemen database produk terintegrasi, arsitektur keamanan data pengguna yang teruji terhadap kerawanan web (SQL Injection & XSS), serta otomatisasi transaksi WhatsApp.",
        tech: ["HTML5", "CSS Custom Properties", "JavaScript", "Secure Transaction Protocol", "Database Integration"],
        image: "assets/images/project-2.png",
        featured: true,
        aiAssisted: false,
        liveUrl: "https://jashub.web.id",
        githubUrl: "https://github.com/Cyberstarszs"
    },
    {
        id: 2,
        name: "Whygo Store",
        category: "landing",
        desc: "Landing page profil bisnis dan katalog e-commerce statis untuk penyedia layanan lisensi dan akun aplikasi premium bergaransi. Menggunakan arsitektur antarmuka neominimalis yang sangat cepat dan responsif dengan integrasi langsung ke WhatsApp.",
        tech: ["HTML5", "CSS Custom Properties", "JavaScript", "WhatsApp API Integration", "Responsive Design"],
        image: "assets/images/project-1.png",
        featured: false,
        aiAssisted: false,
        liveUrl: "https://whygo.web.id",
        githubUrl: "https://github.com/Cyberstarszs"
    },
    {
        id: 3,
        name: "Arofa Travel",
        category: "webapp",
        desc: "Aplikasi web dinamis untuk pencarian dan pemesanan paket Umrah & Haji AROFA Travel. Memiliki fitur manajemen paket real-time, sistem penjadwalan dinamis, modul galeri terintegrasi, serta jaminan keamanan transaksi digital.",
        tech: ["HTML5", "Vanilla CSS", "JavaScript", "Secure Database Integration", "API Authentication"],
        image: "assets/images/project-3.png",
        featured: false,
        aiAssisted: false,
        liveUrl: "https://arofatravel.id",
        githubUrl: "https://github.com/Cyberstarszs"
    },
    {
        id: 4,
        name: "BengkelPro",
        category: "webapp",
        desc: "Sistem Informasi & Manajemen Bengkel Motor & Mobil terintegrasi (Web ERP). Mengelola inventaris suku cadang, pencatatan transaksi pembelian/penjualan, pendaftaran servis dari antrean hingga penyerahan unit, serta pelaporan keuangan operasional real-time dengan proteksi keamanan database MySQL dan autentikasi berlapis.",
        tech: ["PHP", "XAMPP", "Bootstrap", "MySQL Database", "Role-Based Security", "Financial Reporting"],
        image: "assets/images/project-4.png",
        featured: false,
        aiAssisted: false,
        liveUrl: "",
        githubUrl: "https://github.com/Cyberstarszs"
    },
    {
        id: 5,
        name: "Pallet Plastik Hub",
        category: "landing",
        desc: "Landing page profil bisnis statis untuk pabrik & supplier distributor pallet plastik premium UD Doa Ibu Abadi. Dilengkapi dengan kalkulator perhitungan estimasi beban, spesifikasi produk, dan jalur pemesanan cepat lewat WhatsApp.",
        tech: ["HTML5", "Vanilla CSS", "JavaScript", "WhatsApp API Integration", "Responsive Design"],
        image: "assets/images/project-5.png",
        featured: false,
        aiAssisted: false,
        liveUrl: "https://palletplastikhub.web.id",
        githubUrl: "https://github.com/Cyberstarszs"
    }
];

function initProjects() {
    const projectsGrid = document.getElementById("projects-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (!projectsGrid) return;

    // Render projects list
    function renderProjects(projectsList) {
        projectsGrid.innerHTML = "";
        
        // Premium editorial reveal transitions (mimicking professional video editing offsets)
        const animations = [
            "reveal-slide-up",
            "reveal-slide-left-rotate",
            "reveal-slide-right-rotate",
            "reveal-blur-scale",
            "reveal-skew-up"
        ];
        
        projectsList.forEach((project, index) => {
            const card = document.createElement("article");
            const animClass = animations[index % animations.length];
            card.className = `project-card ${project.featured ? "featured" : ""} ${animClass} fade-in-element`;
            card.dataset.category = project.category;
            
            // Stagger load offset to build editorial rhythm on viewport entrance
            card.style.transitionDelay = `${index * 80}ms`;
            
            // Build technology badges markup
            const techBadges = project.tech.map(t => `<span class="project-tech-badge">${t}</span>`).join("");
            
            // AI Assisted stamp overlay
            const aiStamp = "";

            // Featured tag label
            const featuredLabel = project.featured 
                ? `<span class="project-featured-label">Featured Work</span>` 
                : "";

            // Live Demo link if present
            const liveLink = project.liveUrl 
                ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
                     Live Demo
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="project-link-icon"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </a>`
                : "";

            card.innerHTML = `
                <div class="project-img-wrapper">
                    <img src="${project.image}" alt="Mockup ${project.name}" class="project-img" loading="lazy">
                    ${aiStamp}
                </div>
                <div class="project-info-wrapper">
                    ${featuredLabel}
                    <h3 class="project-name">${project.name}</h3>
                    <p class="project-desc">${project.desc}</p>
                    <div class="project-tech-list">
                        ${techBadges}
                    </div>
                    <div class="project-links">
                        ${liveLink}
                    </div>
                </div>
            `;
            
            // Modal trigger on card click (excluding direct links)
            card.style.cursor = "pointer";
            card.addEventListener("click", (e) => {
                if (e.target.closest(".project-link")) return;
                openProjectModal(project);
            });
            
            projectsGrid.appendChild(card);
            
            // Connect card to active scroll observer
            if (window.scrollObserver) {
                window.scrollObserver.observe(card);
            }
        });
    }

    // Initial render of all projects
    renderProjects(PROJECTS_DATA);

    // Filtering logic
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Toggle active status
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.dataset.filter;
            const cards = projectsGrid.querySelectorAll(".project-card");

            // Pause scroll observer updates to prioritize active filter animations
            window.isFiltering = true;

            let visibleIndex = 0;
            cards.forEach(card => {
                const category = card.dataset.category;
                
                if (filterValue === "all" || category === filterValue) {
                    card.classList.remove("fade-out");
                    // Reset visibility to re-trigger editor-style reveal sequence
                    card.classList.remove("visible");
                    
                    const currentIdx = visibleIndex++;
                    setTimeout(() => {
                        card.classList.add("visible");
                    }, currentIdx * 70);
                } else {
                    card.classList.add("fade-out");
                    card.classList.remove("visible");
                }
            });

            // Unlock scroll observer updates after the reveal transitions finish
            setTimeout(() => {
                window.isFiltering = false;
            }, (visibleIndex * 70) + 800);
        });
    });
}

/* ==========================================================================
   3. CONTACT FORM VALIDATION & SUBMISSION (AJAX)
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const submitBtn = document.getElementById("btn-submit-form");
    const btnText = submitBtn ? submitBtn.querySelector(".btn-text") : null;
    const btnLoader = submitBtn ? submitBtn.querySelector(".btn-loader") : null;
    const statusBanner = document.getElementById("form-status");

    // Dynamic Copyright Year update
    const copyrightYear = document.getElementById("copyright-year");
    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    if (!form || !nameInput || !messageInput || !submitBtn) return;

    // Helper: Show custom message under fields
    function setError(input, message) {
        const errorId = `error-${input.id}`;
        const errorSpan = document.getElementById(errorId);
        if (errorSpan) {
            errorSpan.textContent = message;
        }
        input.classList.add("invalid");
        input.setAttribute("aria-invalid", "true");
    }

    // Helper: Clear validation styles
    function clearError(input) {
        const errorId = `error-${input.id}`;
        const errorSpan = document.getElementById(errorId);
        if (errorSpan) {
            errorSpan.textContent = "";
        }
        input.classList.remove("invalid");
        input.setAttribute("aria-invalid", "false");
    }

    // Individual Input Validations
    function validateName() {
        if (nameInput.value.trim() === "") {
            setError(nameInput, "Nama Lengkap wajib diisi.");
            return false;
        }
        clearError(nameInput);
        return true;
    }

    function validateMessage() {
        const messageVal = messageInput.value.trim();
        if (messageVal === "") {
            setError(messageInput, "Pesan wajib diisi.");
            return false;
        } else if (messageVal.length < 5) {
            setError(messageInput, "Pesan minimal harus memuat 5 karakter.");
            return false;
        }
        clearError(messageInput);
        return true;
    }

    // Trigger blur checks
    nameInput.addEventListener("blur", validateName);
    messageInput.addEventListener("blur", validateMessage);

    // Form Submit Event Handler
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Run validations
        const isNameValid = validateName();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isMessageValid) {
            const firstInvalid = form.querySelector(".invalid");
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        // Setup Submit Status (Loading Micro-interaction)
        submitBtn.disabled = true;
        btnLoader.classList.remove("hidden");
        btnText.style.opacity = "0.2";
        statusBanner.className = "form-status hidden";
        statusBanner.textContent = "";

        try {
            // Premium network delay simulation for user feedback feel
            await new Promise(resolve => setTimeout(resolve, 600));

            // Format message and redirect to WhatsApp
            const waNumber = "6287759808899";
            const clientName = nameInput.value.trim();
            const clientMessage = messageInput.value.trim();
            
            const messageText = `Halo, saya *${clientName}* tertarik untuk berkolaborasi dengan Anda:\n\n${clientMessage}`;
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(messageText)}`;

            // Open WhatsApp direct link
            window.open(waUrl, "_blank");

            // Show success feedback
            statusBanner.textContent = "Menghubungkan ke WhatsApp...";
            statusBanner.className = "form-status success";
            form.reset();
        } catch (error) {
            statusBanner.textContent = "Gagal memproses pengiriman pesan.";
            statusBanner.className = "form-status error";
        } finally {
            // Restore button state
            submitBtn.disabled = false;
            btnLoader.classList.add("hidden");
            btnText.style.opacity = "1";
        }
    });
}

/* ==========================================================================
   4. SCROLL ANIMATIONS (STAGGERED FADE-IN)
   ========================================================================== */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll(".fade-in-element");
    
    // Add dynamically classes for scroll reveal (re-triggerable on scroll up and down)
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Avoid observer overrides during active filtering stagger sequence
            if (window.isFiltering && entry.target.classList.contains("project-card")) {
                return;
            }
            
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                // Remove visible class when leaving viewport to allow re-triggering from both scroll directions
                entry.target.classList.remove("visible");
            }
        });
    }, {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    });

    // Make the observer globally accessible to bind dynamically loaded elements (like projects)
    window.scrollObserver = animationObserver;

    fadeElements.forEach(el => animationObserver.observe(el));

    // Observe section titles and tags too
    const titles = document.querySelectorAll(".section-title, .section-tag, .about-aside, .about-main, .projects-filter-wrapper, .contact-grid");
    titles.forEach(title => {
        title.classList.add("fade-in-element");
        animationObserver.observe(title);
    });
}

/* ==========================================================================
   5. PREMIUM INTERACTIVE EFFECTS (MAGNETIC & HERO REVEAL)
   ========================================================================= */
function initMagneticButtons() {
    const magneticEls = document.querySelectorAll(".magnetic");
    
    magneticEls.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            // Calculate cursor offset from center of element
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Apply slight transition offset (magnetic attraction)
            el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
            el.style.transition = "transform 0.1s ease-out";
            
            // Add subtle tilt/glow overlay if it's a primary button
            if (el.classList.contains("btn-primary")) {
                const shadowX = -x * 0.15;
                const shadowY = -y * 0.15;
                el.style.boxShadow = `${shadowX}px ${shadowY}px 25px rgba(0, 0, 0, 0.15)`;
            }
        });
        
        el.addEventListener("mouseleave", () => {
            // Restore original position smoothly
            el.style.transform = "translate(0px, 0px)";
            el.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
            
            if (el.classList.contains("btn-primary")) {
                el.style.boxShadow = "";
            }
        });
    });
}

function initHeroReveal() {
    const revealLines = document.querySelectorAll(".reveal-line");
    revealLines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("visible");
        }, index * 200 + 100); // 200ms stagger between lines
    });
}

/* ==========================================================================
   6. PROJECT DETAILS MODAL SYSTEM (POP-UP)
   ========================================================================== */
function openProjectModal(project) {
    const modal = document.getElementById("project-modal");
    const modalBody = document.getElementById("modal-body-content");
    
    if (!modal || !modalBody) return;

    // Build tech tags
    const techTags = project.tech.map(t => `<span class="project-tech-badge">${t}</span>`).join("");
    
    const aiStamp = "";

    // Live Demo link if available
    const liveBtn = project.liveUrl
        ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary magnetic" id="modal-demo-btn">
               Launch Live Demo
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left: 8px;"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
           </a>`
        : "";

    // Ingest details content
    modalBody.innerHTML = `
        <div class="modal-hero-img-wrapper">
            <img src="${project.image}" alt="${project.name}" class="modal-hero-img">
        </div>
        <div class="modal-info-section">
            <div class="modal-category-row">
                <span class="modal-category-tag">${project.category.toUpperCase()}</span>
                ${aiStamp}
            </div>
            <h2 class="modal-project-title" id="modal-title">${project.name}</h2>
            <div class="modal-divider"></div>
            
            <h3 class="modal-section-heading">Deskripsi Proyek</h3>
            <p class="modal-project-desc">${project.desc}</p>
            
            <h3 class="modal-section-heading">Teknologi & Tools</h3>
            <div class="modal-tech-list">
                ${techTags}
            </div>
            
            <div class="modal-actions-row">
                ${liveBtn}
            </div>
        </div>
    `;

    // Show modal overlay
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Disable scroll

    // Close button & overlay handler
    const closeBtn = document.getElementById("modal-close-btn");
    
    function closeModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = ""; // Re-enable scroll
        document.removeEventListener("keydown", handleEscKey);
    }

    function handleEscKey(e) {
        if (e.key === "Escape") closeModal();
    }

    closeBtn.addEventListener("click", closeModal, { once: true });
    
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", handleEscKey);
    
    // Bind magnetic hover effects on dynamically loaded modal buttons
    if (typeof initMagneticButtons === "function") {
        setTimeout(initMagneticButtons, 50);
    }
}
