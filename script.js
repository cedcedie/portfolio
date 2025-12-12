document.querySelector('.hero-content').style.visibility = 'visible';

gsap.registerPlugin(ScrollTrigger);

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const rootHtml = document.documentElement;
const applyTheme = (mode) => {
    const isDark = mode === 'dark';
    if (isDark) {
        rootHtml.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        themeToggle?.classList.add('checked');
        themeToggle?.setAttribute('aria-pressed', 'true');
    } else {
        rootHtml.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        themeToggle?.classList.remove('checked');
        themeToggle?.setAttribute('aria-pressed', 'false');
    }
};
const storedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(storedTheme);
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const next = rootHtml.classList.contains('dark') ? 'light' : 'dark';
        applyTheme(next);
    });
}

// Skeleton cleanup
const removeSkeletons = () => {
    document.querySelectorAll('.skeleton').forEach(el => el.classList.remove('skeleton'));
};

// Lottie placeholder
const lottieHero = document.getElementById('lottie-hero');
if (window.lottie && lottieHero) {
    lottie.loadAnimation({
        container: lottieHero,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets4.lottiefiles.com/packages/lf20_tfb3estd.json'
    });
}

function initScrollAnimations() {
    // Clean scroll animations for all elements
    
    // Section titles - fade in from bottom
    gsap.utils.toArray('.section-title').forEach((title) => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    // Section descriptions - fade in with slight delay
    gsap.utils.toArray('.section-description').forEach((desc) => {
        gsap.from(desc, {
            scrollTrigger: {
                trigger: desc,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 15,
            duration: 0.5,
            delay: 0.1,
            ease: "power2.out"
        });
    });

    // About Me paragraphs - stagger fade in
    const aboutParagraphs = document.querySelectorAll('.about-left p');
    if (aboutParagraphs.length) {
        gsap.from(aboutParagraphs, {
            scrollTrigger: {
                trigger: '.about-left',
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

    // About badges - fade in with stagger
    const aboutBadges = document.querySelectorAll('.about-left .badge');
    if (aboutBadges.length) {
        // Set initial visibility to ensure badges are visible
        aboutBadges.forEach(badge => {
            gsap.set(badge, { opacity: 1, visibility: 'visible' });
        });
        gsap.from(aboutBadges, {
            scrollTrigger: {
                trigger: '.about-left .badge-group',
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            stagger: 0.05,
            ease: "back.out(1.2)"
        });
    }

    // VS Code container - slide in from right
    const vsContainer = document.querySelector('.vs-container');
    if (vsContainer) {
        gsap.from(vsContainer, {
            scrollTrigger: {
                trigger: vsContainer,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: 30,
            duration: 0.6,
            ease: "power2.out"
        });
    }

    // Tech items - fade in with stagger
    gsap.utils.toArray('.tech-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 15,
            scale: 0.95,
            duration: 0.4,
            delay: i * 0.03,
            ease: "power2.out"
        });
    });

    // Projects section - sync both columns
    const projectsLayout = document.querySelector('.projects-layout');
    if (projectsLayout) {
        const carousel = projectsLayout.querySelector('.carousel');
        const projectDetail = projectsLayout.querySelector('.project-detail');
        
        if (carousel && projectDetail) {
            // Create a timeline for synchronized animation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: projectsLayout,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            });
            
            // Animate both at the same time
            tl.from(carousel, {
                opacity: 0,
                x: 20,
                duration: 0.6,
                ease: "power2.out"
            })
            .from(projectDetail, {
                opacity: 0,
                x: -20,
                duration: 0.6,
                ease: "power2.out"
            }, 0); // Start at same time (0 offset)
        }
    }

    // Contact links - fade in with stagger
    const contactLinks = document.querySelectorAll('#contact .social-link');
    if (contactLinks.length) {
        // Set initial visibility to ensure links are visible
        contactLinks.forEach(link => {
            gsap.set(link, { opacity: 1, visibility: 'visible' });
        });
        gsap.from(contactLinks, {
            scrollTrigger: {
                trigger: '#contact',
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 15,
            scale: 0.95,
            duration: 0.4,
            stagger: 0.1,
            ease: "power2.out"
        });
    }

    // Footer social links - fade in with stagger
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length) {
        // Set initial visibility to ensure links are visible
        socialLinks.forEach(link => {
            gsap.set(link, { opacity: 1, visibility: 'visible' });
        });
        gsap.from(socialLinks, {
            scrollTrigger: {
                trigger: '.footer',
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(1.2)"
        });
    }
}

const navbar = document.querySelector('nav');
let lastScrollPosition = window.pageYOffset;
let scrollTimeout;

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const handleScroll = debounce(() => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (currentScroll > lastScrollPosition && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }

    lastScrollPosition = currentScroll;
}, 10);

window.addEventListener('scroll', handleScroll);

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuAnimating = false;

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        if (isMenuAnimating) return;
        isMenuAnimating = true;

        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            gsap.to(mobileMenu, {
                height: 0,
                opacity: 0,
                duration: 0.3,
                ease: "power2.inOut",
                onComplete: () => {
                    isMenuAnimating = false;
                }
            });
        } else {
            mobileMenu.classList.add('active');
            gsap.fromTo(mobileMenu,
                { height: 0, opacity: 0 },
                { 
                    height: "auto",
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => isMenuAnimating = false
                }
            );
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                if (mobileMenuBtn) mobileMenuBtn.click();
            }

            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

const scrollProgress = document.getElementById('scroll-progress');
const updateScrollProgress = debounce(() => {
    if (scrollProgress) {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.setProperty('--scroll-progress', `${scrolled}%`);
    }
}, 10);

window.addEventListener('scroll', updateScrollProgress);

// Carousel
const slides = Array.from(document.querySelectorAll('.project-slide'));
const detailTitle = document.querySelector('.project-detail-title');
const detailDesc = document.querySelector('.project-detail-desc');
const detailLink = document.querySelector('.project-detail-link');
const dotsContainer = document.querySelector('.carousel-dots');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;

const renderDots = () => {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'dot';
        btn.setAttribute('aria-label', `Go to project ${i + 1}`);
        btn.addEventListener('click', () => setSlide(i));
        dotsContainer.appendChild(btn);
    });
};

const detailTags = document.querySelector('.project-detail-tags');

const setSlide = (idx, skipAnimation = false) => {
    if (!slides.length) return;
    const prevSlide = currentSlide;
    currentSlide = (idx + slides.length) % slides.length;

    const prevSlideEl = slides[prevSlide];
    const activeSlideEl = slides[currentSlide];

    if (skipAnimation || (prevSlideEl && activeSlideEl && prevSlideEl === activeSlideEl)) {
        // First load or same slide - no animation
        slides.forEach((s, i) => {
            const isActive = i === currentSlide;
            s.classList.toggle('active', isActive);
            if (isActive) {
                gsap.set(s, { opacity: 1, zIndex: 2 });
            } else {
                gsap.set(s, { opacity: 0, zIndex: 1 });
            }
        });
    } else if (prevSlideEl && activeSlideEl && prevSlideEl !== activeSlideEl) {
        // Build a timeline to ensure fade-out completes before fade-in
        const imgTl = gsap.timeline();
        imgTl
            .to(prevSlideEl, {
                opacity: 0,
                duration: 0.25,
                ease: "power2.in",
                onComplete: () => prevSlideEl.classList.remove('active')
            })
            .set(activeSlideEl, { opacity: 0, display: 'block', pointerEvents: 'auto' })
            .fromTo(activeSlideEl,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    onStart: () => activeSlideEl.classList.add('active')
                }
            );
    }

    const active = slides[currentSlide];

    if (detailTitle && detailDesc && detailLink && active) {
        const detailElements = [detailTitle, detailDesc, detailTags, detailLink].filter(Boolean);
        
        const updateContent = () => {
            // Update content
            detailTitle.textContent = active.dataset.title || '';
            const rawDesc = active.dataset.desc || '';
            detailDesc.innerHTML = rawDesc.replace(/\\n/g, '<br>').replace(/\n/g, '<br>');
            if (detailTags) {
                detailTags.innerHTML = '';
                const techList = (active.dataset.tech || '').split(',').map(t => t.trim()).filter(Boolean);
                techList.forEach(t => {
                    const tag = document.createElement('span');
                    tag.className = 'badge';
                    tag.textContent = t;
                    detailTags.appendChild(tag);
                });
            }
            if (active.dataset.link) {
                detailLink.href = active.dataset.link;
                detailLink.classList.remove('disabled');
                const label = active.dataset.linklabel || 'View on GitHub';
                const iconClass = active.dataset.linkicon || (active.dataset.linklabel ? 'fab fa-link' : 'fab fa-github');
                detailLink.innerHTML = `<i class="${iconClass}"></i>&nbsp;${label}`;
            } else {
                detailLink.href = '#';
                detailLink.classList.add('disabled');
                detailLink.textContent = 'Unavailable';
            }
        };
        
        if (skipAnimation) {
            // First load - no animation, just set content
            updateContent();
            gsap.set(detailElements, { opacity: 1 });
        } else {
            const textTl = gsap.timeline({
                defaults: { ease: "power2.inOut" }
            });

            // Fade out current text
            textTl.to(detailElements, {
                opacity: 0,
                duration: 0.2,
                stagger: 0.02
            })
            .add(() => {
                updateContent();
            })
            // Fade in updated text
            .fromTo(detailElements,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.25,
                    stagger: 0.03
                }
            );
        }
    }

    const dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
};

const nextSlide = () => setSlide(currentSlide + 1);
const prevSlide = () => setSlide(currentSlide - 1);

// Alerts
const confirmDialog = document.getElementById('confirm-dialog');
const confirmMessage = document.getElementById('confirm-message');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
const successDialog = document.getElementById('success-dialog');
const successClose = document.getElementById('success-close');
const errorDialog = document.getElementById('error-dialog');
const errorClose = document.getElementById('error-close');
let pendingUrl = null;

const openConfirm = (message, url) => {
    pendingUrl = url;
    if (confirmMessage) confirmMessage.textContent = message;
    confirmDialog?.classList.add('open');
};

const closeConfirm = () => {
    confirmDialog?.classList.remove('open');
    pendingUrl = null;
};

const openSuccess = (message) => {
    const msgEl = document.getElementById('success-message');
    if (msgEl) msgEl.textContent = message;
    successDialog?.classList.add('open');
};

const closeSuccess = () => successDialog?.classList.remove('open');

const openError = (message) => {
    const msgEl = document.getElementById('error-message');
    if (msgEl) msgEl.textContent = message;
    errorDialog?.classList.add('open');
};

const closeError = () => errorDialog?.classList.remove('open');

if (confirmYes) confirmYes.addEventListener('click', () => {
    if (pendingUrl) {
        window.open(pendingUrl, '_blank');
    }
    closeConfirm();
});
if (confirmNo) confirmNo.addEventListener('click', closeConfirm);
if (successClose) successClose.addEventListener('click', closeSuccess);
if (errorClose) errorClose.addEventListener('click', closeError);

// External link confirmation
document.querySelectorAll('[data-confirm]').forEach(link => {
    link.addEventListener('click', (e) => {
        const url = link.getAttribute('href');
        const msg = link.getAttribute('data-confirm') || 'Are you sure you want to leave this site?';
        if (url && url.startsWith('http')) {
            e.preventDefault();
            openConfirm(msg, url);
        }
    });
});

// Observe all reveal elements
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    
    // Carousel init - start with Case No Zero (index 0) without animation
    // First, ensure all slides are hidden except the first one
    slides.forEach((slide, i) => {
        if (i === 0) {
            slide.classList.add('active');
            gsap.set(slide, { opacity: 1, zIndex: 2 });
        } else {
            slide.classList.remove('active');
            gsap.set(slide, { opacity: 0, zIndex: 1 });
        }
    });
    renderDots();
    setSlide(0, true); // true = skip animation on initial load
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Skeleton cleanup
    setTimeout(removeSkeletons, 400);
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const updateActiveSection = debounce(() => {
    let currentActive = '';
    const scrollY = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (
            (scrollY >= sectionTop && scrollY < sectionBottom) ||
            (index === sections.length - 1 && (scrollY + windowHeight) >= documentHeight - 5)
        ) {
            currentActive = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentActive)) {
            link.classList.add('active');
        }
    });
}, 100);

window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', updateActiveSection);

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '1';
    });
});


// Scroll handler already handles navbar styling

// Back to Top Button logic
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Refresh GSAP scroll-triggered animations
    if (window.gsap && window.ScrollTrigger) {
        window.ScrollTrigger.refresh(true);
    }
});
// Also refresh GSAP animations when scrolled to top manually
window.addEventListener('scroll', () => {
    if (window.scrollY === 0 && window.gsap && window.ScrollTrigger) {
        window.ScrollTrigger.refresh(true);
    }
});

