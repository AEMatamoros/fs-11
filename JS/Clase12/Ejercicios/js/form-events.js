/*
 * Eventos de los elementos del formulario. focus, blur, change, input, submit
 */

const inputEl = document.querySelector(".js-username-input");
const userEl = document.querySelector(".js-username-output");
const checkEl = document.querySelector(".js-policy-checkbox");
const sendBtnEl = document.querySelector(".js-contact-form-submit");

const contactFormEl = document.querySelector(".js-contact-form");

// Modificar el estilo del outline al hacer focus sobre el input
// event.target.style.outline = "2px solid teal";
inputEl.addEventListener("focus", (e) => {
  console.log("Focus");
  e.target.style.outline = "2px solid teal";
});

// Modificar el estilo del outline al hacer blur sobre el input
inputEl.addEventListener("blur", (e) => {
  console.log("Focus");
  e.target.style.outline = "2px solid tomato";
});
//Mostrar en consola el valor actual al ejecutar el evento change
inputEl.addEventListener("change", (e) => {
  console.log(e.target.value);
  // Modificar el texto del checbox cuando se escribe dentro del input usuario
  // Ejempo:Yo Alexis estoy de acuerdo con politica de privacidad
  userEl.textContent = e.target.value;
});

// Habilitar el boton si el input tiene texto y el chekbox esta seleccionado
function handleButtonDisable() {
  //   console.log(inputEl.value, checkEl.checked);
  if (inputEl.value.trim() != "" && checkEl.checked) {
    console.log("in");
    sendBtnEl.disabled = false;
  }
}
inputEl.addEventListener("change", handleButtonDisable);
checkEl.addEventListener("change", handleButtonDisable);
// Evitar el comportamiento por defecto de los formulario
contactFormEl.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  e.target.reset();
});
// preventDefault();
// e.target.reset();
