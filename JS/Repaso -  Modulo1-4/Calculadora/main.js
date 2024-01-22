let controls = Array.from(
  document.querySelector("#controls").getElementsByTagName("button")
);

let screen = "";
let aux = "";

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    console.log(e.target.dataset.char);
    if (e.target.dataset.char !== "C" && e.target.dataset.char !== "=") {
      screen += e.target.dataset.char;
      updateScreen();
      return;
    }

    if (e.target.dataset.char === "C") {
      screen = "";
      updateScreen();
    }

    if (e.target.dataset.char === "+") {
      aux = screen;
    }

    if (e.target.dataset.char === "=") {
      screen = calculate(screen);
      updateScreen();
    }
  });
});

function updateScreen() {
  document.getElementById("display").value = screen;
}

function calculate(expre) {
  return eval(expre);
}
