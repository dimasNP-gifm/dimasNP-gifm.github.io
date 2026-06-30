// Portfolio Data Management
const portfolioData = {
    items: [
        {
            id: 1,
            title: "Project Alpha",
            description: "A modern web application with cutting-edge design and functionality.",
            image: "https://via.placeholder.com/400x300/6366f1/FFFFFF?text=Project+Alpha",
            category: "design",
            programs: ["Figma", "Adobe XD", "React", "Tailwind CSS"],
            client: "Tech Startup",
            duration: "3 months",
            role: "Lead Designer & Frontend Developer",
            technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
            link: "https://example.com/project-alpha"
        },
        {
            id: 2,
            title: "Brand Identity",
            description: "Complete brand identity design including logo, colors, and guidelines.",
            image: "https://via.placeholder.com/400x300/8b5cf6/FFFFFF?text=Brand+Identity",
            category: "design",
            programs: ["Adobe Illustrator", "Photoshop", "InDesign"],
            client: "Fashion Boutique",
            duration: "6 weeks",
            role: "Brand Designer",
            technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
            link: "https://example.com/brand-identity"
        },
        {
            id: 3,
            title: "E-commerce Platform",
            description: "Full-stack e-commerce solution with payment integration.",
            image: "https://via.placeholder.com/400x300/10b981/FFFFFF?text=E-commerce",
            category: "development",
            programs: ["React", "Node.js", "MongoDB", "Stripe API"],
            client: "Retail Company",
            duration: "4 months",
            role: "Full Stack Developer",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Docker"],
            link: "https://example.com/ecommerce"
        },
        {
            id: 4,
            title: "Mobile App UI",
            description: "User interface design for a mobile application.",
            image: "https://via.placeholder.com/400x300/f59e0b/FFFFFF?text=Mobile+UI",
            category: "design",
            programs: ["Figma", "Sketch", "Principle", "Zeplin"],
            client: "Health Tech Startup",
            duration: "2 months",
            role: "UI/UX Designer",
            technologies: ["Figma", "Sketch", "Principle", "Zeplin"],
            link: "https://example.com/mobile-app"
        },
        {
            id: 5,
            title: "Web Dashboard",
            description: "Analytics dashboard with real-time data visualization.",
            image: "https://via.placeholder.com/400x300/06b6d4/FFFFFF?text=Dashboard",
            category: "development",
            programs: ["Vue.js", "D3.js", "Firebase", "Chart.js"],
            client: "Marketing Agency",
            duration: "3 months",
            role: "Frontend Developer",
            technologies: ["Vue.js", "D3.js", "Firebase", "Chart.js", "WebSocket"],
            link: "https://example.com/dashboard"
        }
    ]
};

// Content Management System
const contentManager = {
    // Update text content
    updateText: function(elementId, newText) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = newText;
            this.saveToStorage(elementId, newText);
        }
    },

    // Update image source
    updateImage: function(elementId, newSrc) {
        const element = document.getElementById(elementId);
        if (element) {
            element.src = newSrc;
            this.saveToStorage(elementId, newSrc);
        }
    },

    // Save to localStorage
    saveToStorage: function(key, value) {
        localStorage.setItem(key, value);
    },

    // Load from localStorage
    loadFromStorage: function() {
        // Load text content
        const textElements = ['hero-title', 'hero-subtitle', 'hero-description', 'about-text', 
                             'contact-text', 'contact-email', 'contact-phone', 'contact-location'];
        
        textElements.forEach(id => {
            const saved = localStorage.getItem(id);
            if (saved) {
                const element = document.getElementById(id);
                if (element) element.textContent = saved;
            }
        });

        // Load images
        const imageElements = ['profile-image', 'about-image'];
        imageElements.forEach(id => {
            const saved = localStorage.getItem(id);
            if (saved) {
                const element = document.getElementById(id);
                if (element) element.src = saved;
            }
        });

        // Load portfolio items
        const savedPortfolio = localStorage.getItem('portfolioItems');
        if (savedPortfolio) {
            portfolioData.items = JSON.parse(savedPortfolio);
        }
    },

    // Add new portfolio item
    addPortfolioItem: function(item) {
        item.id = Date.now();
        portfolioData.items.push(item);
        this.savePortfolio();
        renderPortfolio();
    },

    // Update portfolio item
    updatePortfolioItem: function(id, updates) {
        const item = portfolioData.items.find(item => item.id === id);
        if (item) {
            Object.assign(item, updates);
            this.savePortfolio();
            renderPortfolio();
        }
    },

    // Delete portfolio item
    deletePortfolioItem: function(id) {
        portfolioData.items = portfolioData.items.filter(item => item.id !== id);
        this.savePortfolio();
        renderPortfolio();
    },

    // Save portfolio to localStorage
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
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Filter buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            filterPortfolio(this.dataset.filter);
        });
    });

    // Modal close
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Close mobile menu when clicking on a link
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
                    <button class="btn-edit" onclick="editPortfolioItem(${item.id})" title="Edit Project">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn-delete" onclick="deletePortfolioItem(${item.id})" title="Delete Project">
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
    
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    
    const programsHtml = item.programs.map(program => 
        `<span class="program-tag">${program}</span>`
    ).join('');
    
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
            
            ${item.link ? `
                <div class="project-link" style="margin-top: 1rem;">
                    <a href="${item.link}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> View Project
                    </a>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Contact Form Handler
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would normally send the data to a server
    // For now, we'll just show a success message
    showNotification('Message sent successfully! I\'ll get back to you soon.');
    contactForm.reset();
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
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .portfolio-item {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);

// Content Management Functions (exposed for easy use)
window.updateContent = {
    text: contentManager.updateText.bind(contentManager),
    image: contentManager.updateImage.bind(contentManager),
    addPortfolio: contentManager.addPortfolioItem.bind(contentManager),
    updatePortfolio: contentManager.updatePortfolioItem.bind(contentManager),
    deletePortfolio: contentManager.deletePortfolioItem.bind(contentManager)
};

// Helper function to add content management UI
function addContentManagementUI() {
    const cmUI = document.createElement('div');
    cmUI.id = 'content-manager';
    cmUI.innerHTML = `
        <button onclick="toggleContentManager()" style="
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #4F46E5;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        ">
            <i class="fas fa-edit"></i>
        </button>
        
        <div id="cm-panel" style="
            position: fixed;
            top: 80px;
            right: 20px;
            background: white;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            display: none;
            max-width: 300px;
            max-height: 80vh;
            overflow-y: auto;
        ">
            <h3>Content Manager</h3>
            <div id="cm-content"></div>
        </div>
    `;
    
    document.body.appendChild(cmUI);
}

function toggleContentManager() {
    const panel = document.getElementById('cm-panel');
    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        renderContentManager();
    } else {
        panel.style.display = 'none';
    }
}

function renderContentManager() {
    const content = document.getElementById('cm-content');
    content.innerHTML = `
        <div style="margin-bottom: 15px;">
            <h4>Update Text</h4>
            <select id="text-select" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <option value="hero-title">Hero Title</option>
                <option value="hero-subtitle">Hero Subtitle</option>
                <option value="hero-description">Hero Description</option>
                <option value="about-text">About Text</option>
                <option value="contact-text">Contact Text</option>
                <option value="contact-email">Contact Email</option>
                <option value="contact-phone">Contact Phone</option>
                <option value="contact-location">Contact Location</option>
            </select>
            <input type="text" id="text-input" placeholder="New text" style="width: 100%; padding: 5px; margin-bottom: 10px;">
            <button onclick="updateTextContent()" style="background: #4F46E5; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Update</button>
        </div>
        
        <div style="margin-bottom: 15px;">
            <h4>Update Images</h4>
            <select id="image-select" style="width: 100%; padding: 5px; margin-bottom: 10px;">
                <option value="profile-image">Profile Image</option>
                <option value="about-image">About Image</option>
            </select>
            <input type="text" id="image-input" placeholder="Image URL" style="width: 100%; padding: 5px; margin-bottom: 10px;">
            <button onclick="updateImageContent()" style="background: #4F46E5; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Update</button>
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

// Global functions for content manager
window.updateTextContent = function() {
    const select = document.getElementById('text-select');
    const input = document.getElementById('text-input');
    if (select.value && input.value) {
        window.updateContent.text(select.value, input.value);
        input.value = '';
        showNotification('Text updated successfully!');
    }
};

window.updateImageContent = function() {
    const select = document.getElementById('image-select');
    const input = document.getElementById('image-input');
    if (select.value && input.value) {
        window.updateContent.image(select.value, input.value);
        input.value = '';
        showNotification('Image updated successfully!');
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
        
        // Clear form
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
    
    // Populate form with existing data
    document.getElementById('portfolio-title').value = item.title;
    document.getElementById('portfolio-desc').value = item.description;
    document.getElementById('portfolio-image').value = item.image;
    document.getElementById('portfolio-programs').value = item.programs.join(', ');
    document.getElementById('portfolio-category').value = item.category;
    
    // Change button to update mode
    const addButton = document.querySelector('button[onclick="addPortfolioItem()"]');
    addButton.textContent = 'Update Project';
    addButton.onclick = function() {
        updatePortfolioItem(id);
    };
    
    // Scroll to content manager
    document.getElementById('cm-panel').scrollIntoView({ behavior: 'smooth' });
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
        
        // Clear form and reset button
        document.getElementById('portfolio-title').value = '';
        document.getElementById('portfolio-desc').value = '';
        document.getElementById('portfolio-image').value = '';
        document.getElementById('portfolio-programs').value = '';
        
        const addButton = document.querySelector('button[onclick*="updatePortfolioItem"]');
        addButton.textContent = 'Add Item';
        addButton.onclick = window.addPortfolioItem;
        
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
