/*--------------------------------------------------------------
# Document Ready Function
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function() {
    // Initialize preloader
    initializePreloader();

    // Initialize theme toggle
    initializeThemeToggle();

    // Initialize custom cursor
    initializeCustomCursor();

    // Initialize sticky header
    initializeStickyHeader();

    // Initialize mobile menu
    initializeMobileMenu();

    // Initialize smooth scrolling
    initializeSmoothScrolling();

    // Initialize back to top button
    initializeBackToTop();

    // Initialize particles background
    initializeParticles();

    // Initialize typewriter effect
    initializeTypewriter();

    // Initialize counter animations
    initializeCounters();

    // Initialize portfolio filter
    initializePortfolioFilter();

    // Initialize portfolio modal
    initializePortfolioModal();

    // Initialize testimonial slider
    initializeTestimonialSlider();

    // Initialize contact form
    initializeContactForm();

    // Initialize scroll animations
    initializeScrollAnimations();
});

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
function initializePreloader() {
    const preloader = document.querySelector('.preloader');

    if (!preloader) return;

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 1000);
    });
}

/*--------------------------------------------------------------
# Theme Toggle
--------------------------------------------------------------*/
function initializeThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) return;

    // Check for saved theme preference or use OS preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check if theme is already saved in localStorage
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && prefersDarkScheme.matches)) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
}

/*--------------------------------------------------------------
# Custom Cursor
--------------------------------------------------------------*/
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor-outer');
    const cursorInner = document.querySelector('.custom-cursor-inner');

    if (!cursor || !cursorInner) return;

    // Only show custom cursor on desktop
    if (window.innerWidth < 1024) return;

    document.addEventListener('mousemove', function(e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    // Add hover effect to links and buttons
    const interactiveElements = document.querySelectorAll('a, button, .btn, .portfolio-item, .nav-link');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursorInner.style.width = '4px';
            cursorInner.style.height = '4px';
        });

        el.addEventListener('mouseleave', function() {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursorInner.style.width = '8px';
            cursorInner.style.height = '8px';
        });
    });
}

/*--------------------------------------------------------------
# Sticky Header
--------------------------------------------------------------*/
function initializeStickyHeader() {
    const header = document.getElementById('header');

    if (!header) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

/*--------------------------------------------------------------
# Mobile Menu
--------------------------------------------------------------*/
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menuToggle) return;

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');

        // Create mobile nav if it doesn't exist
        let mobileNav = document.querySelector('.mobile-nav');

        if (!mobileNav) {
            mobileNav = document.createElement('div');
            mobileNav.className = 'mobile-nav';

            const navList = document.querySelector('.nav-list').cloneNode(true);
            navList.className = 'mobile-nav-list';

            // Update link classes
            const links = navList.querySelectorAll('.nav-link');
            links.forEach(link => {
                link.className = 'mobile-nav-link';

                // Close mobile menu when link is clicked
                link.addEventListener('click', function() {
                    mobileNav.classList.remove('active');
                    menuToggle.classList.remove('active');
                });
            });

            mobileNav.appendChild(navList);
            document.body.appendChild(mobileNav);
        }

        mobileNav.classList.toggle('active');
    });
}

/*--------------------------------------------------------------
# Smooth Scrolling
--------------------------------------------------------------*/
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
}

/*--------------------------------------------------------------
# Back to Top Button
--------------------------------------------------------------*/
function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');

    if (!backToTopButton) return;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*--------------------------------------------------------------
# Particles Background
--------------------------------------------------------------*/
function initializeParticles() {
    if (typeof particlesJS !== 'undefined' && document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4d61ff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4d61ff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }
}

/*--------------------------------------------------------------
# Typewriter Effect
--------------------------------------------------------------*/
function initializeTypewriter() {
    const typewriter = document.querySelector('.typewriter-text');

    if (!typewriter) return;

    const words = JSON.parse(typewriter.dataset.text || '["Web Developer"]');

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typewriter.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriter.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Pause at the end of typing
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;

            // Move to the next word
            wordIndex = (wordIndex + 1) % words.length;

            // Pause before typing new word
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

/*--------------------------------------------------------------
# Counter Animations
--------------------------------------------------------------*/
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');

    if (!counters.length) return;

    let started = false;

    function startCounting() {
        if (started) return;

        counters.forEach(counter => {
            const target = parseInt(counter.dataset.count || '0');
            let count = 0;
            const duration = 2000; // 2 seconds
            const interval = Math.max(10, duration / target);

            const timer = setInterval(() => {
                count++;
                counter.textContent = count;

                if (count === target) {
                    clearInterval(timer);
                }
            }, interval);
        });

        started = true;
    }

    // Start counting when about section is in view
    window.addEventListener('scroll', function() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        const position = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight * 0.8;

        if (position < screenPosition) {
            startCounting();
        }
    });
}

/*--------------------------------------------------------------
# Portfolio Filter
--------------------------------------------------------------*/
function initializePortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (!filterButtons.length || !portfolioItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.dataset.filter;

            // Show/hide items based on filter
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.dataset.category === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

/*--------------------------------------------------------------
# Portfolio Modal - New Implementation
--------------------------------------------------------------*/
function initializePortfolioModal() {
    // Get all necessary elements
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioLinks = document.querySelectorAll('.portfolio-link[data-project]');
    const modal = document.getElementById('portfolio-modal');
    const modalContent = modal?.querySelector('.portfolio-modal-content');
    const modalClose = modal?.querySelector('.portfolio-modal-close');
    const projectData = document.getElementById('project-data');
    
    // Validate that we have all the elements we need
    if (!modal || !modalContent || !projectData) {
        console.error('Required modal elements not found');
        return;
    }
    
    // Function to open the modal with a specific project
    function openModal(projectId) {
        // Find the project data
        const projectElement = projectData.querySelector(`#${projectId}`);
        
        if (!projectElement) {
            console.error(`Project with ID ${projectId} not found in project data`);
            return;
        }
        
        // Clone the project content so we don't modify the original
        const contentClone = projectElement.cloneNode(true);
        
        // Make sure the cloned content is visible
        contentClone.style.display = 'block';
        
        // Clear the modal content and add the new content
        modalContent.innerHTML = '';
        modalContent.appendChild(contentClone);
        
        // Show the modal
        modal.classList.add('active');
        
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close the modal
    function closeModal() {
        // Hide the modal
        modal.classList.remove('active');
        
        // Allow scrolling on the body again
        document.body.style.overflow = '';
        
        // Optional: Clear content after animation completes
        setTimeout(() => {
            modalContent.innerHTML = '';
        }, 300);
    }
    
    // Add click event listeners to portfolio links
    portfolioLinks.forEach(link => {
        if (link.dataset.project) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(link.dataset.project);
            });
        }
    });
    
    // Add click event to portfolio items (for mobile/touch)
    portfolioItems.forEach(item => {
        const itemLink = item.querySelector('.portfolio-link[data-project]');
        
        if (itemLink && itemLink.dataset.project) {
            item.addEventListener('click', (e) => {
                // Don't open if clicking on external link
                const isExternalLink = e.target.closest('a:not([data-project])');
                if (!isExternalLink) {
                    e.preventDefault();
                    openModal(itemLink.dataset.project);
                }
            });
        }
    });
    
    // Close modal when clicking the close button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/*--------------------------------------------------------------
# Testimonial Slider
--------------------------------------------------------------*/
function initializeTestimonialSlider() {
    const slider = document.querySelector('.testimonial-slider');
    const track = document.querySelector('.testimonial-track');
    const items = document.querySelectorAll('.testimonial-item');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    const dots = document.querySelectorAll('.dot');

    if (!slider || !track || !items.length) return;

    let currentIndex = 0;
    const itemWidth = 100; // 100%

    function goToSlide(index) {
        if (index < 0) {
            index = items.length - 1;
        } else if (index >= items.length) {
            index = 0;
        }

        track.style.transform = `translateX(-${index * itemWidth}%)`;
        currentIndex = index;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners
    prevButton?.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextButton?.addEventListener('click', () => goToSlide(currentIndex + 1));

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goToSlide(i));
    });

    // Auto slide
    let interval = setInterval(() => goToSlide(currentIndex + 1), 5000);

    // Pause auto slide on hover
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', () => {
        clearInterval(interval);
        interval = setInterval(() => goToSlide(currentIndex + 1), 5000);
    });

    // Initialize first slide
    goToSlide(0);
}

/*--------------------------------------------------------------
# Contact Form
--------------------------------------------------------------*/
function initializeContactForm() {
    const form = document.getElementById('contactForm');

    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Basic validation
        if (!name || !email || !subject || !message) {
            showFormAlert('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFormAlert('Please enter a valid email address', 'error');
            return;
        }

        // Simulate form submission success
        // In a real project, you would send this data to a server
        showFormAlert('Your message has been sent successfully!', 'success');
        form.reset();
    });

    function showFormAlert(message, type) {
        // Create alert element if it doesn't exist
        let alert = document.querySelector('.form-alert');

        if (!alert) {
            alert = document.createElement('div');
            alert.className = 'form-alert';
            form.parentNode.insertBefore(alert, form);
        }

        // Set alert message and type
        alert.textContent = message;
        alert.className = `form-alert ${type}`;

        // Show alert
        alert.style.opacity = '1';
        alert.style.transform = 'translateY(0)';

        // Hide alert after 5 seconds
        setTimeout(() => {
            alert.style.opacity = '0';
            alert.style.transform = 'translateY(-20px)';
        }, 5000);
    }

    // Add styles for alerts
    if (!document.getElementById('form-alert-style')) {
        const style = document.createElement('style');
        style.id = 'form-alert-style';
        style.textContent = `
            .form-alert {
                padding: 1rem;
                border-radius: var(--radius-md);
                margin-bottom: 1.5rem;
                font-weight: 500;
                opacity: 0;
                transform: translateY(-20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
            }

            .form-alert.success {
                background-color: rgba(51, 217, 178, 0.2);
                color: #33d9b2;
                border: 1px solid #33d9b2;
            }

            .form-alert.error {
                background-color: rgba(255, 107, 107, 0.2);
                color: #ff6b6b;
                border: 1px solid #ff6b6b;
            }
        `;
        document.head.appendChild(style);
    }
}

/*--------------------------------------------------------------
# Scroll Animations
--------------------------------------------------------------*/
function initializeScrollAnimations() {
    // Animate sections on scroll
    const sections = document.querySelectorAll('.section-transition');

    function checkSections() {
        sections.forEach(section => {
            if (isElementInViewport(section, 0.75)) {
                section.classList.add('active');
            }
        });
    }

    // Special handling for about section elements
    const aboutSection = document.getElementById('about');
    const aboutElements = aboutSection ? aboutSection.querySelectorAll('.animate-item') : [];

    function checkAboutElements() {
        if (!aboutSection || !isElementInViewport(aboutSection, 0.5)) return;

        aboutElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Animate elements within each section
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    function checkElements() {
        animatedElements.forEach(element => {
            if (isElementInViewport(element, 0.8)) {
                element.classList.add('active');
            }
        });
    }

    // Helper function to check if element is in viewport
    function isElementInViewport(element, threshold = 1) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight * threshold
        );
    }

    // Initial check
    checkSections();
    checkElements();
    checkAboutElements();

    // Update on scroll
    window.addEventListener('scroll', function() {
        checkSections();
        checkElements();
        checkAboutElements();
    });

    // Update on resize
    window.addEventListener('resize', function() {
        checkSections();
        checkElements();
        checkAboutElements();
    });

    // Add animation to hero section elements
    const heroTextContent = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');

    if (heroTextContent) {
        setTimeout(() => {
            heroTextContent.classList.add('visible');
        }, 500);
    }

    if (heroImage) {
        setTimeout(() => {
            heroImage.classList.add('visible');
        }, 800);
    }

    // Update active nav link based on scroll position
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionIds = Array.from(navLinks).map(link => {
        const href = link.getAttribute('href');
        return href && href.startsWith('#') ? href.substring(1) : null;
    }).filter(Boolean);

    function updateActiveNavLink() {
        let currentSection = '';

        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (!section) return;

            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // Initial update
    updateActiveNavLink();
}