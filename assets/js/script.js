document.addEventListener("DOMContentLoaded", () => {
    // NAV - Burger menu a navigace
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu a");

    // Přepnutí stavu menu při kliknutí na burger ikonu
    burgerMenu.addEventListener("click", (event) => {
        event.stopPropagation(); // Zabrání zavření menu okamžitě po kliknutí na burger ikonu
        navMenu.classList.toggle("open"); // Otevře nebo zavře navigační menu
        burgerMenu.classList.toggle("active"); // Přepne animaci burger menu
    });

    // Zavření menu při kliknutí mimo něj
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            navMenu.classList.remove("open"); // Skryje navigační menu
            burgerMenu.classList.remove("active"); // Deaktivuje animaci burger menu
        }
    });

    // Zavření menu při kliknutí na jakýkoliv odkaz v navigaci
    for (const link of navLinks) {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open"); // Skryje navigační menu
            burgerMenu.classList.remove("active"); // Deaktivuje animaci burger menu
        });
    }


    
    // GALLERY - Lightbox pro galerii
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Otevření lightboxu při kliknutí na položku galerie
    for (const item of galleryItems) {
        item.addEventListener("click", function () {
            lightbox.style.display = "flex"; // Zobrazí lightbox
            lightboxImg.src = this.src; // Nastaví obrázek v lightboxu
        });
    }

    // Zavření lightboxu při kliknutí na zavírací tlačítko
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none"; // Skryje lightbox
    });

    // Zavření lightboxu při kliknutí mimo obrázek
    lightbox.addEventListener("click", (event) => {
        if (event.target !== lightboxImg) {
            lightbox.style.display = "none"; // Skryje lightbox
        }
    });
});



// PRICE LIST
document.addEventListener("DOMContentLoaded", () => {
    const serviceSections = document.querySelectorAll(".service-list");
    const expandButtons = document.querySelectorAll(".expand-services");
    const navServicesLink = document.querySelector("nav ul li a[href='#services']");

    // Funkce pro rozbalení ceníku
    function expandPricing() {
        serviceSections.forEach(section => section.classList.add("expanded"));
        expandButtons.forEach(button => button.style.display = "none");
    }

    // Přidání event listeneru pro tlačítka rozbalení
    expandButtons.forEach(button => {
        button.addEventListener("click", expandPricing);
    });

    // Pokud uživatel klikne v navigaci na "Služby", automaticky rozbalíme ceník
    navServicesLink.addEventListener("click", (event) => {
        expandPricing();
    });
});



// REVIEWS
const track = document.querySelector('.reviews-track');
const nextButton = document.querySelector('#next-review');
const reviews = document.querySelectorAll('.review');
const reviewWidth = reviews[0].clientWidth;
let index = 0;

// Klonování prvků pro nekonečný efekt
for (const review of reviews) {
    const clone = review.cloneNode(true);
    track.appendChild(clone);
}

nextButton.addEventListener('click', () => {
    index++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${-index * reviewWidth}px)`;
            
    if (index >= reviews.length) {
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(0px)';
            index = 0;
        }, 500);
    }
});




// FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

for (const item of faqQuestions) {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        faqItem.classList.toggle('active');
        const answer = faqItem.querySelector('.faq-answer');

        if (faqItem.classList.contains('active')) {
            answer.style.display = 'block';
            setTimeout(() => {
                answer.style.opacity = '1';
                answer.style.transform = 'translateY(0)';
            }, 10); // Zpoždění pro animaci
        } else {
            answer.style.opacity = '0';
            answer.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                answer.style.display = 'none';
            }, 300); // Čas potřebný pro animaci
        }
    });
}