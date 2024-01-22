// let button = document.querySelector("#controls .btn");
// console.log(button);

let button = document.querySelector("#btn-agregar");
let tasks = document.querySelector("#tasks");
button.addEventListener("click", () => {
  if (document.getElementById("taskInput").value !== "") {
    //   Opcion1
    //   let li = document.createElement("li");
    //   li.textContent = document.getElementById("taskInput").value;
    //   tasks.append(li);
    // Opcion2
    tasks.innerHTML += `<li>${
      document.getElementById("taskInput").value
    } <button class="btn btn-danger">
        <i class="fa-solid fa-trash text-white"></i>
      </button>
      </li>`;
    document.getElementById("taskInput").value = "";
    document.getElementById("taskInput").focus();
  }
});

tasks.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.parentNode.remove();
  }
});
