"use strict";
const modal = document.querySelector(".modal");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
function hidden() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
function keyPress(e) {
  if (e.key === "Escape") {
    hidden();
  }
}
function removeModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", removeModal);
}
document.addEventListener("keydown", keyPress);
closeModal.addEventListener("click", function () {
  hidden();
});
overlay.addEventListener("click", hidden);
