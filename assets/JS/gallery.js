const planets = {
    sun: {
        image: "assets/images/gallery-images/sun.png",
        name: "SUN",
        description: "The Sun is the star at the center of our Solar System and the main source of light and energy for the planets.",
        diameter: "1.39 M km",
        distance: "0 km",
        day: "25 days",
        year: "N/A"
    },
    mercury: {
        image: "assets/images/gallery-images/mercury.png",
        name: "MERCURY",
        description: "Mercury is the smallest planet in the Solar System and the closest planet to the Sun.",
        diameter: "4,879 km",
        distance: "57.9 M km",
        day: "59 days",
        year: "88 days"
    },
    venus: {
        image: "assets/images/gallery-images/venus.png",
        name: "VENUS",
        description: "Venus is the second planet from the Sun and the hottest planet in the Solar System.",
        diameter: "12,104 km",
        distance: "108.2 M km",
        day: "243 days",
        year: "225 days"
    },
    earth: {
        image: "assets/images/gallery-images/earth.png",
        name: "EARTH",
        description: "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
        diameter: "12,742 km",
        distance: "149.6 M km",
        day: "24 hours",
        year: "365.25 days"
    },
    mars: {
        image: "assets/images/gallery-images/mars.png",
        name: "MARS",
        description: "Mars is the fourth planet from the Sun and is often called the Red Planet.",
        diameter: "6,779 km",
        distance: "227.9 M km",
        day: "24.6 hours",
        year: "687 days"
    },
    jupiter: {
        image: "assets/images/gallery-images/jupiter.png",
        name: "JUPITER",
        description: "Jupiter is the largest planet in the Solar System and is known for its Great Red Spot.",
        diameter: "139,820 km",
        distance: "778.5 M km",
        day: "9.9 hours",
        year: "11.86 years"
    },
    saturn: {
        image: "assets/images/gallery-images/saturn.png",
        name: "SATURN",
        description: "Saturn is famous for its spectacular system of icy rings surrounding the planet.",
        diameter: "116,460 km",
        distance: "1.43 B km",
        day: "10.7 hours",
        year: "29.45 years"
    },
    uranus: {
        image: "assets/images/gallery-images/uranus.png",
        name: "URANUS",
        description: "Uranus is an ice giant with a unique sideways rotation and a blue-green appearance.",
        diameter: "50,724 km",
        distance: "2.87 B km",
        day: "17.2 hours",
        year: "84 years"
    },
    neptune: {
        image: "assets/images/gallery-images/neptune.png",
        name: "NEPTUNE",
        description: "Neptune is the eighth and farthest known planet from the Sun.",
        diameter: "49,244 km",
        distance: "4.50 B km",
        day: "16.1 hours",
        year: "164.8 years"
    }
};

const planetImage = document.getElementById("planetImage");
const planetName = document.getElementById("planetName");
const planetDescription = document.getElementById("planetDescription");
const planetDiameter = document.getElementById("planetDiameter");
const planetDistance = document.getElementById("planetDistance");
const planetDay = document.getElementById("planetDay");
const planetYear = document.getElementById("planetYear");
const planetBtn = document.getElementById("planetBtn");

let isExploring = false;
let exploreIndex = 0;
let exploreTimer = null;
let exploreEndTimer = null;

const explorePlanets = [
    "sun",
    "mercury",
    "venus",
    "earth",
    "mars",
    "saturn",
    "jupiter",
    "uranus",
    "neptune"
];

function showPlanet(name) {
    const planet = planets[name];

    planetImage.src = planet.image;
    planetImage.alt = planet.name;
    planetName.textContent = planet.name;
    planetDescription.textContent = planet.description;
    planetDiameter.textContent = planet.diameter;
    planetDistance.textContent = planet.distance;
    planetDay.textContent = planet.day;
    planetYear.textContent = planet.year;
}

function stopExplore() {
    isExploring = false;

    clearInterval(exploreTimer);
    clearTimeout(exploreEndTimer);

    exploreTimer = null;
    exploreEndTimer = null;

    document.querySelectorAll(".explore-selected").forEach(planet => {
        planet.classList.remove("explore-selected");
    });

    document.querySelector(".Left").classList.remove("exploring");
}

Object.keys(planets).forEach(planetName => {
    const p = document.querySelector(`.${planetName}`);

    if (!p) return;

    p.addEventListener("click", () => {

        stopExplore();

        document.querySelectorAll(".selected").forEach(planet => {
            planet.classList.remove("selected");
        });

        showPlanet(planetName);

        p.classList.add("selected");

        planetBtn.innerHTML =
            '<i class="fa-solid fa-play"></i> START MOVE';
    });
});

function highlightPlanet() {

    document.querySelectorAll(".explore-selected").forEach(planet => {
        planet.classList.remove("explore-selected");
    });

    document.querySelectorAll(".selected").forEach(planet => {
        planet.classList.remove("selected");
    });

    const currentPlanet = explorePlanets[exploreIndex];
    const planet = document.querySelector(`.${currentPlanet}`);

    if (!planet) return;

    planet.classList.add("explore-selected");

    showPlanet(currentPlanet);

    const card = document.querySelector(".planet-info");

    card.classList.remove("card-change");
    void card.offsetWidth;
    card.classList.add("card-change");

    exploreIndex++;

    if (exploreIndex >= explorePlanets.length) {

        clearInterval(exploreTimer);
        exploreTimer = null;

        exploreEndTimer = setTimeout(() => {

            document.querySelectorAll(".explore-selected").forEach(planet => {
                planet.classList.remove("explore-selected");
            });

            document.querySelector(".Left").classList.remove("exploring");

            isExploring = false;
            exploreIndex = 0;

            planetBtn.innerHTML =
                '<i class="fa-solid fa-play"></i> START MOVE';

        }, 3000);
    }
}

planetBtn.innerHTML =
    '<i class="fa-solid fa-play"></i> START MOVE';

planetBtn.addEventListener("click", () => {

    if (!isExploring) {

        document.querySelectorAll(".selected").forEach(planet => {
            planet.classList.remove("selected");
        });

        clearTimeout(exploreEndTimer);
        exploreEndTimer = null;

        isExploring = true;

        document.querySelector(".Left").classList.add("exploring");

        planetBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i> PAUSE';

        highlightPlanet();

        exploreTimer = setInterval(highlightPlanet, 4000);

    } else {

        isExploring = false;

        clearInterval(exploreTimer);
        exploreTimer = null;

        planetBtn.innerHTML =
            '<i class="fa-solid fa-play"></i> RESUME';
    }
});

const galleryEvent = document.querySelector(".gallery-grid");
const Right = document.querySelector(".Right");
const Left = document.querySelector(".Left");
const galleryContent = document.querySelector(".gallery-content");




function checkEvents() {
        if (galleryContent.getBoundingClientRect().top < window.innerHeight * 0.85) {

        setTimeout(() => {
            galleryContent.classList.add("in-view");
        }, 500);

    }

    if (galleryEvent.getBoundingClientRect().top < window.innerHeight) {

        setTimeout(() => {
            galleryEvent.classList.add("in-view");
        }, 600);

    }

    if (Left.getBoundingClientRect().top < window.innerHeight && Right.getBoundingClientRect().top < window.innerHeight) {

        setTimeout(() => {
            Right.classList.add("in-view");
            Left.classList.add("in-view");

        }, 600);

    }
}

const eventCards = document.querySelectorAll(".event-card");

function showEvents() {

    eventCards.forEach((card, index) => {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight * 0.85) {
            setTimeout(() => {
                card.classList.add("in-view");
            }, index * 100);
        }

    });

}

window.addEventListener("scroll", showEvents);

showEvents();

window.addEventListener("scroll", checkEvents);
checkEvents();