/*
 * Eventos del teclado.
 */
// Mostrar el consola el evento ejecutado al reallizar los eventos keypress, keydown, keyup
// document
// keydown

document.addEventListener("keypress", (e) => {
  console.log("keypress", e);
});

document.addEventListener("keydown", (e) => {
  console.log("keydown", e);
});

document.addEventListener("keyup", (e) => {
  console.log("keyup", e);
});
