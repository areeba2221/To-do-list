let todos = JSON.parse(localStorage.getItem("todos")) || [];

const filterSelect = document.getElementById("filterSelect");

function saveTodos() {

  localStorage.setItem("todos", JSON.stringify(todos));

}

function displayTasks() {

  document.getElementById("taskList").innerHTML = "";

  todos.forEach((todo, index) => {

    createTaskElement(todo.text, todo.completed, index);

  });

}

function createTaskElement(task, completed, index) {

  let li = document.createElement("li");

  li.className = "w-[735px] flex rounded-[85px] bg-[#D9D9D980] border border-[#FFFFFFB2] py-4 mb-4";

  let span = document.createElement("span");

  span.className = "ml-10 font-[Baloo] w-full flex items-center text-[40px] leading-[100%] font-normal text-white";

  span.innerText = task;

  const checkbox = document.createElement("input");

  checkbox.type = "checkbox";

  checkbox.className = "appearance-none h-[45px] w-[55px] border-4 border-white rounded-full checked:bg-white checked:before:content-['\u2713'] flex items-center justify-center cursor-pointer";

  if (completed) {

    checkbox.checked = true;

    span.classList.add("line-through");
    span.classList.add("opacity-50");

  }
  checkbox.onclick = function () {

    span.classList.toggle("line-through");

    span.classList.toggle("opacity-50");

    todos[index].completed = checkbox.checked;

    saveTodos();

    filterTasks();

  };

  let del = document.createElement("img");

  del.src = "images/delete box.png";

  del.className = "w-[55px] ml-[19px] mr-[35px] cursor-pointer";

  del.onclick = function () {

    todos.splice(index, 1);

    saveTodos();

    displayTasks();

  };

  li.appendChild(span);

  li.appendChild(checkbox);

  li.appendChild(del);

  document.getElementById("taskList").appendChild(li);

}

function addTask() {

  let input = document.getElementById("taskInput");

  let task = input.value;

  if (task === "") {

    alert("Enter task first!");

    return;

  }

  todos.push({

    text: task,
    completed: false

  });

  saveTodos();

  displayTasks();

  filterTasks();

  input.value = "";

}

filterSelect.addEventListener("change", filterTasks);

function filterTasks() {

  let filterValue = filterSelect.value;

  let tasks = document.querySelectorAll("#taskList li");

  tasks.forEach(task => {

    let span = task.querySelector("span");

    let isCompleted =
    span.classList.contains("line-through");

    if (filterValue === "all") {

      task.style.display = "flex";

    }
    else if (filterValue === "complete") {

      if (isCompleted) {

        task.style.display = "flex";

      } else {

        task.style.display = "none";

      }}
    else if (filterValue === "incomplete") {

      if (!isCompleted) {

        task.style.display = "flex";

      } else {

        task.style.display = "none";

      }}

  });

}

displayTasks();

document.getElementById("taskInput")
.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    addTask();

  }

});