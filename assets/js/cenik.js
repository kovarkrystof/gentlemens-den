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
