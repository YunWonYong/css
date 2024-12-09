const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButton = document.querySelectorAll(".plan button");

const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanButton.forEach(planButton => {
    planButton.addEventListener("click", (event) => {
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
});

backdrop.addEventListener("click", () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
    mobileNav.style.display = "none";
});

modalNoButton.addEventListener("click", () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
});

toggleButton.addEventListener("click", () => {
    backdrop.style.display = "block";
    mobileNav.style.display = "block";
});