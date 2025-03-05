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
