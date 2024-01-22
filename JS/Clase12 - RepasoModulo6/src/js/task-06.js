let input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  console.log(e.target.value);
  console.log(e.target.dataset);
  if (e.target.value.length === parseInt(e.target.dataset.length)) {
    e.target.classList.add("valid");
    e.target.classList.remove("invalid");
  } else {
    e.target.classList.remove("valid");
    e.target.classList.add("invalid");
  }
});
