let input = document.getElementById("todo-input");
let todoList = document.getElementById("todo-list");

document.getElementById("add-button").addEventListener("click", () => {
  if (input.value == "") {
    return;
  }
  saveTask(input.value);
  input.value = "";
});

function saveTask(task) {
  if (localStorage.getItem("items") == null) {
    localStorage.setItem("items", JSON.stringify([task]));
  } else {
    let tasks = JSON.parse(localStorage.getItem("items"));
    tasks.push(task);
    localStorage.setItem("items", JSON.stringify(tasks));
  }
  renderTasks();
}

function renderTasks() {
  todoList.textContent = "";
  let tasks = getTasks();
  let toRenderTasks = tasks.map((task, index) => {
    let li = document.createElement("li");
    li.textContent = task;
    li.classList.add("todo-item");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });
    li.append(deleteButton);
    return li;
  });
  todoList.append(...toRenderTasks);
}

function getTasks() {
  if (localStorage.getItem("items") == null) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem("items"));
  }
}

function deleteTask(index) {
  let tasks = getTasks();
  tasks.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(tasks));
  renderTasks();
}

renderTasks();
