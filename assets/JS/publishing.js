document.addEventListener("DOMContentLoaded", () => {

    const animatedElements = document.querySelectorAll(
        ".publishing-intro-content, .publication-card, .story-card, .process-step"
    );


    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("in-view");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


    animatedElements.forEach(element => {

        observer.observe(element);

    });

});
