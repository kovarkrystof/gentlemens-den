document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll("#nav-menu a");

    // Otevření / zavření menu při kliknutí na burger
    burgerMenu.addEventListener("click", (event) => {
        event.stopPropagation(); // Zabrání zavření při kliknutí na ikonu
        navMenu.classList.toggle("open");
        burgerMenu.classList.toggle("active"); // Přidání animace burger menu
    });

    // Zavření menu při kliknutí mimo něj
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !burgerMenu.contains(event.target)) {
            navMenu.classList.remove("open");
            burgerMenu.classList.remove("active"); // Zruší animaci burger menu
        }
    });

    for (const link of navLinks) {
        link.addEventListener("click", () => {
            navMenu.classList.remove("open");
            burgerMenu.classList.remove("active"); // Zruší animaci burger menu
        });
    }
    
});