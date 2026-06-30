// Portfolio Data Management
const portfolioData = {
    items: [
        {
            id: 1,
            title: "Money Tracker App",
            description: "Sebuah aplikasi pengelolaan keuangan pribadi yang dirancang dengan antarmuka bersih dan fungsional. Proyek ini berfokus pada kemudahan pencatatan transaksi harian secara akurat dan visual. Pencatatan Multimodal: Fitur input jumlah nominal dan deskripsi detail, disertai kemampuan mengunggah foto nota atau bukti transaksi untuk arsip digital yang lebih kuat. Log Transaksi Kronologis: Sistem pengorganisasian otomatis berdasarkan tanggal dan waktu transaksi, memudahkan pengguna untuk melacak riwayat pengeluaran secara historis.",
            image: "https://static.vecteezy.com/system/resources/previews/019/053/701/original/money-symbol-icon-png.png",
            category: "development",
            programs: ["Web App", "UI Design", "JavaScript"],
            client: "Personal Project",
            duration: "1 month",
            role: "Frontend Developer",
            technologies: ["HTML", "CSS", "JavaScript"],
            link: "#"
        },
        {
            id: 2,
            title: "Smart Fish Tank",
            description: "Proyek ini dirancang untuk mengotomatisasi aspek krusial dalam pemeliharaan ikan predator, khususnya dalam menjaga kualitas air dan rutinitas pemberian pakan secara presisi. Sistem Autofeeder: Menggunakan modul motor yang dikalibrasi untuk memberikan pakan sesuai jadwal yang ditentukan, memastikan nutrisi konsisten bahkan saat pemilik tidak berada di tempat. Auto Water Changer: Integrasi sensor level air dan pompa otomatis yang mengatur proses pengurasan serta pengisian air secara berkala. Hal ini menjaga parameter air tetap stabil dan meminimalkan stres pada ekosistem akuarium. Kendali Jarak Jauh: Seluruh sistem terhubung ke aplikasi seluler, memungkinkan pemantauan kondisi akuarium secara real-time dari mana saja.",
            image: "https://i.pinimg.com/originals/81/e7/ff/81e7ff6410bd92f81487c98a299898c4.jpg",
            category: "development",
            programs: ["Dart", "IoT", "Flutter"],
            client: "Independent Project",
            duration: "2 months",
            role: "IoT Engineer & Mobile Developer",
            technologies: ["Dart", "Flutter", "Arduino", "ESP8266"],
            link: "#"
        },
        {
            id: 3,
            title: "Prediksi Deposito Bank",
            description: "Proyek ini mengatasi masalah ketidakefektifan kampanye promosi perbankan yang sering kali membuang waktu dan biaya karena salah sasaran akibat ketimpangan data nasabah yang ekstrem, di mana mayoritas besar menolak tawaran serta adanya kendala teknis dari penggunaan model matematika yang tidak sesuai untuk tebakan Ya atau Tidak. Solusi yang dihadirkan adalah sebuah sistem analisis prediktif yang mengintegrasikan alur pembersihan data otomatis, penyetaraan skala angka, dan pengodean teks untuk memetakan karakteristik nasabah secara objektif, lalu menerapkan logika pembulatan angka khusus untuk mengonversi hasil tebakan menjadi keputusan biner yang tegas. Dalam proyek kelompok ini, peran saya adalah sebagai insinyur data sekaligus analis sistem yang bertanggung jawab penuh dalam merancang pipa pengolahan data mentah, membangun logika ambang batas keputusan akhir, serta melakukan analisis kritis terhadap hasil pengujian untuk mendeteksi anomali performa demi menghasilkan rekomendasi arsitektur terbaik bagi efisiensi bisnis perusahaan.",
            image: "https://via.placeholder.com/400x300/6366f1/FFFFFF?text=Prediksi+Deposito+Bank",
            category: "development",
            programs: ["Python", "Machine Learning", "Data Science"],
            client: "Tugas UTS Kelompok",
            duration: "2 weeks",
            role: "Data Engineer & System Analyst",
            technologies: ["Python", "Pandas", "Scikit-Learn", "Matplotlib"],
            link: "#"
        },
        {
            id: 4,
            title: "Optimasi Desain Layout & Database",
            description: "Proyek ini mengatasi masalah buruknya visualisasi data pada sistem internal manajemen portofolio akibat struktur database lokal yang tidak rapi serta desain tata letak antarmuka yang membingungkan bagi pengguna. Solusi yang dihadirkan adalah perombakan total pada arsitektur kode dengan mengintegrasikan sistem penyimpanan terstruktur berbasis key-value storage untuk mempercepat sinkronisasi data, serta merancang ulang hierarki visual menggunakan tata letak grid yang konsisten, animasi transisi yang halus, dan komponen kartu dinamis yang responsif. Proyek ini juga mengimplementasikan sistem manajemen konten (Content Management System) internal langsung pada antarmuka, memungkinkan pembaruan teks, tautan, serta aset gambar secara real-time dan mandiri tanpa merusak estetika desain. Dalam proyek ini, peran saya adalah sebagai Full-Stack Developer sekaligus UI Designer yang bertanggung jawab penuh dalam membangun fungsi manipulasi data (tambah, edit, hapus), menata ulang arsitektur logika komponen, serta mengoptimalkan kode skrip agar penarikan informasi dan visualisasi aset pada layar pengguna berjalan dengan sangat cepat, interaktif, dan performan.",
            image: "https://via.placeholder.com/400x300/06b6d4/FFFFFF?text=Optimasi+Database",
            category: "design",
            programs: ["JavaScript", "UI Design", "CMS"],
            client: "Portfolio System",
            duration: "1 month",
            role: "Full-Stack Developer & UI Designer",
            technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage"],
            link: "#"
        }
    ]
};

// Content Management System
const contentManager = {
    updateText: function(elementId, newText) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = newText;
            this.saveToStorage(elementId, newText);
        }
    },

    updateImage: function(elementId, newSrc) {
        const element = document.getElementById(elementId);
        if (element) {
            element.src = newSrc;
            this.saveToStorage(elementId, newSrc);
        }
    },

    saveToStorage: function(key, value) {
        localStorage.setItem(key, value);
    },

    loadFromStorage: function() {
        const textElements = ['hero-title', 'hero-subtitle', 'hero-description', 'about-text', 
                             'contact-text', 'contact-email', 'contact-phone', 'contact-location'];
        
        textElements.forEach(id => {
            const saved = localStorage.getItem(id);
            if (saved) {
                const element = document.getElementById(id);
                if (element) element.textContent = saved;
            }
        });

        const imageElements = ['profile-image', 'about-image'];
        imageElements.forEach(id => {
            const saved = localStorage.getItem(id);
            if (saved) {
                const element = document.getElementById(id);
                if (element) element.src = saved;
            }
        });

        const savedPortfolio = localStorage.getItem('portfolioItems');
        if (savedPortfolio) {
            portfolioData.items = JSON.parse(savedPortfolio);
        }
    },

    addPortfolioItem: function(item) {
        item.id = Date.now();
        portfolioData.items.push(item);
        this.savePortfolio();
        renderPortfolio();
    },

    updatePortfolioItem: function(id, updates) {
        const item = portfolioData.items.find(item => item.id === id);
        if (item) {
            Object.assign(item, updates);
            this.savePortfolio();
            renderPortfolio();
        }
    },

    deletePortfolioItem: function(id) {
        portfolioData.items = portfolioData.items.filter(item => item.id !== id);
        this.savePortfolio();
        renderPortfolio();
    },

    savePortfolio: function() {
        localStorage.setItem('portfolioItems', JSON.stringify(portfolioData.items));
    }
};

// DOM Elements
const navToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const portfolioGrid = document.getElementById('portfolio-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('portfolio-modal');
const modalClose = document.querySelector('.close');
const contactForm = document.getElementById('contact-form');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    contentManager.loadFromStorage();
    renderPortfolio();
    setupEventListeners();
    setupSmoothScrolling();
});

// Setup Event Listeners
function setupEventListeners() {
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterPortfolio(this.dataset.filter);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Render Portfolio
function renderPortfolio() {
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';
    
    portfolioData.items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.dataset.category = item.category;
        
        const programsHtml = item.programs.map(program => 
            `<span class="program-tag">${program}</span>`
        ).join('');
        
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-item-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="programs-container">
                    ${programsHtml}
                </div>
                <span class="category">${item.category}</span>
                <div class="portfolio-actions">
                    <button class="btn-edit" onclick="event.stopPropagation(); editPortfolioItem(${item.id})" title="Edit Project">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="event.stopPropagation(); deletePortfolioItem(${item.id})" title="Delete Project">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
        
        portfolioItem.addEventListener('click', () => openModal(item));
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Filter Portfolio
function filterPortfolio(category) {
    const items = document.querySelectorAll('.portfolio-item');
    
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Modal Functions
function openModal(item) {
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (modalImage) modalImage.src = item.image;
    if (modalTitle) modalTitle.textContent = item.title;
    
    const programsHtml = item.programs.map(program => 
        `<span class="program-tag">${program}</span>`
    ).join('');
    
    if (modalDescription) {
        modalDescription.innerHTML = `
            <div class="project-details">
                <p>${item.description}</p>
                
                <div class="detail-grid">
                    <div class="detail-item">
                        <strong>Client:</strong> ${item.client || 'N/A'}
                    </div>
                    <div class="detail-item">
                        <strong>Duration:</strong> ${item.duration || 'N/A'}
                    </div>
                    <div class="detail-item">
                        <strong>Role:</strong> ${item.role || 'N/A'}
                    </div>
                </div>
                
                <div class="programs-container" style="margin-top: 1rem;">
                    <strong>Programs used:</strong><br>
                    ${programsHtml}
                </div>
                
                ${item.link && item.link !== '#' ? `
                    <div class="project-link" style="margin-top: 1rem;">
                        <a href="${item.link}" target="_blank" class="btn btn-primary">
                            <i class="fas fa-external-link-alt"></i> View Project
                        </a>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    contactForm.reset();
    showNotification('Message sent successfully! I\'ll get back to you soon.');
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10B981;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .portfolio-item { transition: all 0.3s ease; cursor: pointer; }
`;
document.head.appendChild(style);

// Content Management Functions
window.updateContent = {
    text: contentManager.updateText.bind(contentManager),
    image: contentManager.updateImage.bind(contentManager),
    addPortfolio: contentManager.addPortfolioItem.bind(contentManager),
    updatePortfolio: contentManager.updatePortfolioItem.bind(contentManager),
    deletePortfolio: contentManager.deletePortfolioItem.bind(contentManager)
};

function addContentManagementUI() {
    const cmUI = document.createElement('div');
    cmUI.id = 'content-manager';
    cmUI.innerHTML = `
        <button onclick="toggleContentManager()" style="
            position: fixed; bottom: 20px; right: 20px; background: #4F46E5; color: white;
            border: none; padding: 15px; border-radius: 50%; cursor: pointer; z-index: 1000;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        ">
            <i class="fas fa-edit"></i>
        </button>
        <div id="cm-panel" style="
            position: fixed; top: 80px; right: 20px; background: white; padding: 20px;
            border-radius: 15px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15); z-index: 1000;
            display: none; max-width: 300px; max-height: 80vh; overflow-y: auto;
        ">
            <h3>Content Manager</h3>
            <div id="cm-content"></div>
        </div>
    `;
    document.body.appendChild(cmUI);
}

window.toggleContentManager = function() {
    const panel = document.getElementById('cm-panel');
    if (panel) {
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
            renderContentManager();
        } else {
            panel.style.display = 'none';
        }
    }
};

function renderContentManager() {
    const content = document.getElementById('cm-content');
    if (!content) return;
    content.innerHTML = `
        <div style="margin-bottom: 15px;">
            <h4>Update Text</h4>
            <select id="text-select" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <option value="hero-title">Hero Title</option>
                <option value="hero-subtitle">Hero Subtitle</option>
                <option value="hero-description">Hero Description</option>
                <option value="about-text">About Text</option>
            </select>
            <input type="text" id="text-input" placeholder="New text" style="width: 100%; padding: 5px; margin-bottom: 10px;">
            <button onclick="updateTextContent()" style="background: #4F46E5; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Update</button>
        </div>
        <div>
            <h4>Add Portfolio Item</h4>
            <input type="text" id="portfolio-title" placeholder="Title" style="width: 100%; padding: 5px; margin-bottom: 10px;">
            <textarea id="portfolio-desc" placeholder="Description" style="width: 100%; padding: 5px; margin-bottom: 10px; height: 60px;"></textarea>
            <input type="text" id="portfolio-image" placeholder="Image URL" style="width: 100%; padding: 5px; margin-bottom: 10px;">
            <input type="text" id="portfolio-programs" placeholder="Programs (comma-separated)" style="width: 100%; padding: 5px; margin-bottom: 10px;">
            <select id="portfolio-category" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <option value="design">Design</option>
                <option value="development">Development</option>
            </select>
            <button onclick="addPortfolioItem()" style="background: #10B981; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Add Item</button>
        </div>
    `;
}

window.updateTextContent = function() {
    const select = document.getElementById('text-select');
    const input = document.getElementById('text-input');
    if (select && input && select.value && input.value) {
        window.updateContent.text(select.value, input.value);
        input.value = '';
        showNotification('Text updated successfully!');
    }
};

window.addPortfolioItem = function() {
    const title = document.getElementById('portfolio-title').value;
    const desc = document.getElementById('portfolio-desc').value;
    const image = document.getElementById('portfolio-image').value;
    const programs = document.getElementById('portfolio-programs').value;
    const category = document.getElementById('portfolio-category').value;
    
    if (title && desc && image) {
        const programsArray = programs ? programs.split(',').map(p => p.trim()).filter(p => p) : [];
        window.updateContent.addPortfolio({
            title,
            description: desc,
            image,
            category,
            programs: programsArray
        });
        
        document.getElementById('portfolio-title').value = '';
        document.getElementById('portfolio-desc').value = '';
        document.getElementById('portfolio-image').value = '';
        document.getElementById('portfolio-programs').value = '';
        showNotification('Portfolio item added successfully!');
    }
};

window.editPortfolioItem = function(id) {
    const item = portfolioData.items.find(item => item.id === id);
    if (!item) return;
    
    document.getElementById('portfolio-title').value = item.title;
    document.getElementById('portfolio-desc').value = item.description;
    document.getElementById('portfolio-image').value = item.image;
    document.getElementById('portfolio-programs').value = item.programs.join(', ');
    document.getElementById('portfolio-category').value = item.category;
    
    const addButton = document.querySelector('button[onclick="addPortfolioItem()"]');
    if (addButton) {
        addButton.textContent = 'Update Project';
        addButton.onclick = function() { updatePortfolioItem(id); };
    }
    
    const panel = document.getElementById('cm-panel');
    if (panel) panel.scrollIntoView({ behavior: 'smooth' });
};

window.updatePortfolioItem = function(id) {
    const title = document.getElementById('portfolio-title').value;
    const desc = document.getElementById('portfolio-desc').value;
    const image = document.getElementById('portfolio-image').value;
    const programs = document.getElementById('portfolio-programs').value;
    const category = document.getElementById('portfolio-category').value;
    
    if (title && desc && image) {
        const programsArray = programs ? programs.split(',').map(p => p.trim()).filter(p => p) : [];
        window.updateContent.updatePortfolio(id, {
            title,
            description: desc,
            image,
            category,
            programs: programsArray
        });
        
        document.getElementById('portfolio-title').value = '';
        document.getElementById('portfolio-desc').value = '';
        document.getElementById('portfolio-image').value = '';
        document.getElementById('portfolio-programs').value = '';
        
        const addButton = document.querySelector('button[onclick*="updatePortfolioItem"]');
        if (addButton) {
            addButton.textContent = 'Add Item';
            addButton.onclick = window.addPortfolioItem;
        }
        showNotification('Portfolio item updated successfully!');
    }
};

window.deletePortfolioItem = function(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        window.updateContent.deletePortfolio(id);
        showNotification('Portfolio item deleted successfully!');
    }
};

// Initialize content management UI
addContentManagementUI();