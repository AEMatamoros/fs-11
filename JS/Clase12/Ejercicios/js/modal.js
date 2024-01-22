const modalOpenBtnEl = document.querySelector(".js-modal-open");
const modalCloseBtnEl = document.querySelector(".js-modal-close");
const backdropEl = document.querySelector(".js-backdrop");

const toggleModal = () => {
  backdropEl.classList.toggle("is-open");
};
modalOpenBtnEl.addEventListener("click", toggleModal);
// Cerrar el modal al presionar modalCloseBtnEl
modalCloseBtnEl.addEventListener("click", (e) => {
  backdropEl.classList.remove("is-open");
});
// Cerrar el modal al presionar backdrop
backdropEl.addEventListener("click", (e) => {
  backdropEl.classList.remove("is-open");
});
// Cerrar el modal al presionar la tecla esc
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    if (backdropEl.classList.contains("is-open")) {
      backdropEl.classList.remove("is-open");
      return;
    }
    console.log("No lo tiene");
  }
});
