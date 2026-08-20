const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const item = question.parentElement;
        const icon = question.querySelector("i");

        // If the clicked question is already open
        if (item.classList.contains("active")) {

            item.classList.remove("active");

            icon.classList.remove("fa-chevron-up");
            icon.classList.add("fa-chevron-down");

        }

        // Open the clicked question
        else {

            // Close all questions first
            document.querySelectorAll(".faq-item").forEach(el => {

                el.classList.remove("active");

                const i = el.querySelector("i");

                i.classList.remove("fa-chevron-up");
                i.classList.add("fa-chevron-down");

            });

            // Open the clicked question
            item.classList.add("active");

            icon.classList.remove("fa-chevron-down");
            icon.classList.add("fa-chevron-up");

        }

    });

});


/* =========================
   SCROLL ANIMATIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

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


    const faqSection = document.querySelector(".faq-section");

    if (faqSection) {
        observer.observe(faqSection);
    }


    const faqAsk = document.querySelector(".faq-ask-section");

    if (faqAsk) {
        observer.observe(faqAsk);
    }


    const faqContact = document.querySelector(".faq-contact");

    if (faqContact) {
        observer.observe(faqContact);
    }


    const footer = document.querySelector(".footer");

    if (footer) {
        observer.observe(footer);
    }

});


// =========================
// BACK TO TOP
// =========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});