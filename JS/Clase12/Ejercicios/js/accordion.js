const accordionBtnsEl = document.querySelectorAll(".js-accordion-btn");

const onAccordionBtnClick = (e) => {
  debugger;
  let showPanel = e.target.nextElementSibling;
  if (showPanel.classList.contains("active")) {
    showPanel.classList.remove("active");
  } else {
    showPanel.classList.add("active");
  }
  // Toogle Data Content
  //Agregar classe active
};

// Utilizar for each para agregar event Listener al accordion Button
accordionBtnsEl.forEach((btn) => {
  btn.addEventListener("click", onAccordionBtnClick);
});
