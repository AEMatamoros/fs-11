function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let controls = document.getElementById("controls");
controls.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  console.log(e.target.dataset);
});
