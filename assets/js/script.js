document.addEventListener("DOMContentLoaded", () => {
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
});
