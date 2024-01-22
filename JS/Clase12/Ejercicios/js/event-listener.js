/*
 * Eventos.Métodos addEventListener() y Método removeEventListener(). Objeto del Evento
 */

/*
 ?  - mejores nombres de callback para listener
 ?  - handle*: handleSubjectEvent
 ?  - *Handler: subjectEventHandler
 ?  - on*: onSubjectEvent
 */

//  handleSwapBtnClick
// swapBtnClickHandler
//  onSwapBtnClick

const swapBtnEl = document.querySelector(".js-swap-btn");
const removeListenerBtnEl = document.querySelector(".js-remove-listener");
const imgEl = document.querySelector(".js-img");

// Agregar funciones para cambiar la imagen , y para eliminar wel evento de cambiar imagen
const onSwapBtnClick = () => {
  imgEl.src = "https://picsum.photos/200/300";
};
swapBtnEl.addEventListener("click", onSwapBtnClick);
swapBtnEl.addEventListener("click", () => {
  console.log("Hola presionando el bottom");
});
swapBtnEl.addEventListener("click", () => {
  console.log("Otro evento");
});

// swapBtnEl.addEventListener("click", (e) => {
//   console.log(e);
// });

//Quietemos el evento de escucha
removeListenerBtnEl.addEventListener("click", () => {
  swapBtnEl.removeEventListener("click", onSwapBtnClick);
});
