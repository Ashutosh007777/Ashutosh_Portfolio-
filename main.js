/* Main JavaScript for Portfolio Logic */

document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    /* --- Mobile Menu Toggle --- */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.replace('bx-menu', 'bx-x');
            } else {
                icon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }

    /* --- Close Menu on Link Click --- */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
            const icon = navToggle.querySelector('i');
            icon.classList.replace('bx-x', 'bx-menu');
        });
    });

    /* --- Active Link on Scroll --- */
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    window.addEventListener('scroll', scrollActive);

    /* --- Header Background Change on Scroll --- */
    function scrollHeader() {
        if (this.scrollY >= 50) {
            header.style.background = 'rgba(10, 10, 26, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 26, 0.8)';
            header.style.boxShadow = 'none';
        }
    }
    window.addEventListener('scroll', scrollHeader);

    /* --- Skill Bar Animation on Scroll --- */
    const skillBars = document.querySelectorAll('.skill-progress');

    const showSkills = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                    bar.style.transition = 'width 1.5s ease-in-out';
                }, 100);
            }
        });
        // Remove listener after animation is triggered once or keep it for re-triggering
        // window.removeEventListener('scroll', showSkills); 
    };

    // Initial check
    showSkills();
    window.addEventListener('scroll', showSkills);

    /* --- Circular Chart Animation --- */
    const circles = document.querySelectorAll('.circle');

    const animateCircles = () => {
        circles.forEach(circle => {
            const rect = circle.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                const parent = circle.closest('.circular-chart');
                if (parent.classList.contains('purple')) circle.style.strokeDasharray = '85, 100';
                if (parent.classList.contains('teal')) circle.style.strokeDasharray = '75, 100';
            }
        });
    };

    // Set initial dasharray to 0
    circles.forEach(circle => circle.style.strokeDasharray = '0, 100');

    window.addEventListener('scroll', animateCircles);
    setTimeout(animateCircles, 500); // Trigger after slight delay

    /* --- Smooth Reveal Animations (Simple implementation) --- */
    const revealElements = document.querySelectorAll('.about-card, .skills-category');

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                el.style.transition = 'all 0.8s ease-out';
            }
        });
    };

    // Set initial state for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
