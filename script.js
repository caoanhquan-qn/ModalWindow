"use strict";
const modal = document.querySelector(".modal");
const showModal0 = document.querySelectorAll(".show-modal")[0];
const showModal1 = document.querySelectorAll(".show-modal")[1];
const showModal2 = document.querySelectorAll(".show-modal")[2];
const closeModal = document.querySelector(".close-modal");
const body = document.querySelector("body");
function keyPress(e) {
  if (e.key === "Escape") {
    modal.classList.add("hidden");
    body.classList.remove("overlay");
  }
}
function toggleModal() {
  modal.classList.toggle("hidden");
  body.classList.toggle("overlay");
}
showModal0.addEventListener("click", toggleModal);
showModal1.addEventListener("click", toggleModal);
showModal2.addEventListener("click", toggleModal);
document.addEventListener("keydown", keyPress);
closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  body.classList.remove("overlay");
});
