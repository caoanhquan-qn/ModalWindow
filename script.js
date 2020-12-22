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
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", openModal);
}
document.addEventListener("keydown", keyPress);
closeModal.addEventListener("click", hidden);
overlay.addEventListener("click", hidden);
