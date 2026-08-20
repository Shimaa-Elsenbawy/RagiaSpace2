

// Join us- Moon Scroll

const joinSection = document.querySelector(".join-section");
const moon = document.querySelector(".join-moon");

if (joinSection && moon) {
    window.addEventListener("scroll", () => {
        const rect = joinSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = (windowHeight - rect.top) / (windowHeight + rect.height * 0.6);
        progress = Math.max(0, Math.min(1, progress));

        const translateY = 75 - (progress * 70);

        moon.style.transform = `translateY(${translateY}%)`;
    }, { passive: true });
}



//Back to top

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



//footer 

const footer = document.querySelector(".footer");

if (footer) {

    const footerObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                footer.classList.add("in-view");

                footerObserver.unobserve(footer);

            }

        });

    }, {
        threshold: 0.1
    });

    footerObserver.observe(footer);

}




