const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButton = document.querySelectorAll(".plan button");
console.dir(selectPlanButton);
// backdrop.style.display = "block";

selectPlanButton.forEach(planButton => {
    planButton.addEventListener("click", (event) => {
        modal.style.display = "block";
        backdrop.style.display = "block";
    });
});

backdrop.addEventListener("click", () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
});

modalNoButton.addEventListener("click", () => {
    modal.style.display = "none";
    backdrop.style.display = "none";
});