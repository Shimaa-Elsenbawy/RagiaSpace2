

const aboutSection = document.querySelector(".about-section");
const aboutStats = document.querySelector(".stats-section");
const discoverSection = document.querySelector(".discover-section");


window.addEventListener("scroll", () => {

    if (aboutSection.getBoundingClientRect().top < window.innerHeight) {

        aboutSection.classList.add("in-view");

    }

});

window.addEventListener("scroll", () => {

    if (aboutStats.getBoundingClientRect().top < window.innerHeight) {

        aboutStats.classList.add("in-view");

    }

});

window.addEventListener("scroll", () => {
    if (discoverSection.getBoundingClientRect().top < window.innerHeight) {
        discoverSection.querySelector(".discover-title").classList.add("in-view");
        discoverSection.querySelector(".discover-title span").classList.add("in-view");
        discoverSection.querySelector(".section-label").classList.add("in-view");
        discoverSection.querySelectorAll(".discover-info").forEach((discover)=>{
            discover.classList.add("in-view");
        });
        discoverSection.querySelector(".image-1").classList.add("in-view");
        discoverSection.querySelector(".image-2").classList.add("in-view");
        discoverSection.querySelector(".image-3").classList.add("in-view");
        discoverSection.querySelector(".image-4").classList.add("in-view");
   


       
    }
});

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        let target = Number(counter.dataset.target);
        let number = 0;

        function count() {

            if (number < target) {

                number++;
                counter.textContent = number;

                setTimeout(count, 5);

            }

        }

        count();

    });

}
let started = false;

window.addEventListener("scroll", function () {

    const section = document.querySelector(".stats-section");

    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight && !started) {

        started = true;

        startCounter();

    }

});


//human respective

const humanSection = document.querySelector(".human-section");

if(humanSection){

    const humanObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                humanSection.classList.add("in-view");

                humanObserver.unobserve(humanSection);

            }

        });

    },{
        threshold:.15
    });

    humanObserver.observe(humanSection);
}





const teamSection = document.querySelector(".team-section");

if(teamSection){

    const teamObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                teamSection.classList.add("in-view");

                teamObserver.unobserve(teamSection);

            }

        });

    },{
        threshold:.15
    });

    teamObserver.observe(teamSection);

}



const track = document.querySelector(".partner-track");

let index = 0;

setInterval(() => {

    index++;

    track.style.transform = `translateX(-${index * 25}%)`;

    if (index === 5) {

        setTimeout(() => {

            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0)";

            setTimeout(() => {
                track.style.transition = "transform 1s ease";
            }, 50);

        }, 1000);
    }

}, 3000);





// TESTIMONIAL

const testimonialSection =
    document.querySelector(".testimonial-section");

if (testimonialSection) {

    const testimonialObserver =
        new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    testimonialSection.classList.add("in-view");

                    testimonialObserver.unobserve(
                        testimonialSection
                    );

                }

            });

        }, {
            threshold: 0.15
        });

    testimonialObserver.observe(testimonialSection);
}




//TESTIMONIAL SLIDER


const testimonialTrack =
    document.querySelector(".testimonial-track");

const testimonialCards =
    document.querySelectorAll(".testimonial-card");

if (testimonialTrack && testimonialCards.length) {

    let testimonialIndex = 0;

    setInterval(() => {

        testimonialIndex++;

        const gap = parseFloat(
            getComputedStyle(testimonialTrack).gap
        );

        const cardWidth =
            testimonialCards[0].offsetWidth + gap;

        testimonialTrack.style.transition =
            "transform 1s ease";

        testimonialTrack.style.transform =
            `translateX(-${testimonialIndex * cardWidth}px)`;



        if (testimonialIndex === 4) {

            setTimeout(() => {

                testimonialTrack.style.transition =
                    "none";

                testimonialIndex = 0;

                testimonialTrack.style.transform =
                    "translateX(0)";

            }, 1000);

        }

    }, 3000);

}






// news section

const newsSection = document.querySelector(".news-section");

if(newsSection){

    const newsObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                newsSection.classList.add("in-view");

                newsObserver.unobserve(newsSection);

            }

        });

    },{
        threshold:.15
    });

    newsObserver.observe(newsSection);

}




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




