const button = document.querySelector("#myButton");

const handleClick = (e) => {
  //   console.log("Button was clicked");
  console.log(e.type);
  console.log(e.currentTarget); //Siempre devuielve el qu eejecvuta el eventop
  console.log(e.target); //Siempre devuelve el elemnto clickeado
  //   console.log(e.target.innerText);
  //   alert("Boton presionado");
};

button.addEventListener("click", handleClick);

// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

// document.addEventListener("keypress", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

let myInput = document.getElementById("myInput");
myInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});

myInput.addEventListener("focus", (e) => {
  console.log("Estoy focus");
});

myInput.addEventListener("blur", (e) => {
  console.log("Estoy blured");
});

let myTextArea = document.getElementById("myTextArea");
myTextArea.addEventListener("change", (e) => {
  console.log(e.target.value);
});
