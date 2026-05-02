const buttons = document.querySelectorAll("button");
const dropDowns = document.querySelectorAll(".drop-down");

for (let i = 0; i < 4; i++) {
    buttons[i].addEventListener('click', () => buttonHandler(i));
}

function buttonHandler(i) {
    dropDowns[i].classList.toggle("open-section");
    dropDowns[i].classList.toggle("closed-section");
    dropDowns[i].toggleAttribute("aria-hidden");
    dropDowns[i].toggleAttribute("aria-expanded");
}