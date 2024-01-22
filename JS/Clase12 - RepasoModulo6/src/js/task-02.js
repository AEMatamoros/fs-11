const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.getElementById("ingredients");
let torender = ingredients.map((obj) => `<li>${obj}</li>`).join(" ");
list.innerHTML = torender;
