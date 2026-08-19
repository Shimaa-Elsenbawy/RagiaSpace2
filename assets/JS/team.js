window.addEventListener('scroll', animateOnScroll);

function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
    
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
            el.classList.add('animated');

            
            el.addEventListener('animationend', () => {
                el.style.opacity = '1';
                el.style.transform = 'none';
            }, { once: true });
        }
    });
}

animateOnScroll();