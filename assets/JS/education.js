document.addEventListener("DOMContentLoaded", () => {

    const sections =
        document.querySelectorAll(
            ".education-intro-content, .learning-card, .area-card"
        );


    const observer =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });


    sections.forEach(section => {

        observer.observe(section);

    });

});