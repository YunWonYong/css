const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
const selectPlanButton = document.querySelectorAll(".plan button");

const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

if (selectPlanButton) {
    selectPlanButton.forEach(planButton => {
        planButton.addEventListener("click", () => {
            modal.classList.add("open");
            backdrop.classList.add("open");
        });
    });
}

backdrop.addEventListener("click", () => {
    if (modal) {
        modal.classList.remove("open");
    }

    if (backdrop) {
        backdrop.classList.remove("open");
    }

    if (mobileNav) {
        mobileNav.classList.remove("open");
    }
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", () => {
        if (modal) {
            modal.classList.remove("open");
        }
        
        if (backdrop) {
            backdrop.classList.remove("open");
        }
    });
}

toggleButton.addEventListener("click", () => {
    if (backdrop) {
        backdrop.classList.add("open");
    }

    if (mobileNav) {
        mobileNav.classList.add("open");
    }
});