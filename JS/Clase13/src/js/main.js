document.addEventListener("click", (e) => {
  console.log("Document", e);
});

document.getElementById("box").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Padre", e);
});

document.getElementById("child").addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  console.log("Hijo", e);
});

document.getElementById("child").addEventListener("click", (e) => {
  console.log("Evento 2");
});
