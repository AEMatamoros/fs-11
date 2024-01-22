let input = document.getElementById("name-input");
let span = document.getElementById("name-output");

function handleUserName(e) {
  console.log(e.currentTarget.value);
  console.log(e.target.value);
  if (e.currentTarget.value.trim() !== "") {
    span.textContent = e.currentTarget.value;
    return;
  }
  span.textContent = "Anonymous";
}

input.addEventListener("input", handleUserName);

//Pruabn  target vs currentTarget
let box = document.getElementById("box");

box.addEventListener("click", (e) => {
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
});
