document.addEventListener("DOMContentLoaded", () => {

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {

        document.querySelectorAll('.reveal-up').forEach(el => el.classList.add('is-visible'));
        return;
    }

    const revealOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');

                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal-up').forEach(el => {
        revealObserver.observe(el);
    });


    const cosmicSections = document.querySelectorAll('.cosmic-bg');

    cosmicSections.forEach(section => {

        const canvas = document.createElement('canvas');
        canvas.classList.add('starfield-canvas');
        section.insertBefore(canvas, section.firstChild);

        const ctx = canvas.getContext('2d');
        let width, height;
        let stars = [];


        const resize = () => {
            width = section.offsetWidth;
            height = section.offsetHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };


        const initStars = () => {
            stars = [];

            const numStars = Math.floor((width * height) / 8000);

            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    vx: Math.floor(Math.random() * 50) - 25,
                    vy: Math.floor(Math.random() * 50) - 25,
                    opacity: Math.random(),
                    pulseSpeed: Math.random() * 0.02 + 0.005,
                    pulseDir: Math.random() > 0.5 ? 1 : -1
                });
            }
        };


        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {

                star.y -= star.vy * 0.005;
                star.x -= star.vx * 0.005;

                if (star.y < 0) star.y = height;
                if (star.y > height) star.y = 0;
                if (star.x < 0) star.x = width;
                if (star.x > width) star.x = 0;

                star.opacity += star.pulseSpeed * star.pulseDir;

                if (star.opacity <= 0.1) {
                    star.opacity = 0.1;
                    star.pulseDir = 1;
                } else if (star.opacity >= 0.8) {
                    star.opacity = 0.8;
                    star.pulseDir = -1;
                }

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };


        window.addEventListener('resize', resize);
        resize();
        animate();
    });

});