const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButton = document.querySelectorAll(".plan button");

const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

selectPlanButton.forEach(planButton => {
    planButton.addEventListener("click", () => {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
});

backdrop.addEventListener("click", () => {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
});

modalNoButton.addEventListener("click", () => {
    modal.classList.remove("open");
    backdrop.classList.remove("open");
});

toggleButton.addEventListener("click", () => {
    backdrop.classList.add("open");
    mobileNav.classList.add("open");
});