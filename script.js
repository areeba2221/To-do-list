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

  li.className = "w-[700px]  flex rounded-[85px] bg-[#D9D9D980] border border-[#FFFFFFB2] py-4 mb-4";

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

     displayTasks();
  

  };

  let del = document.createElement("img");

  del.src = "images/delete box.png";

  del.className = "w-[55px] ml-[19px] mr-[35px] cursor-pointer";

  let deleteIndex = null;

function showConfirmBox() {

  let overlay = document.createElement("div");
  overlay.className = "fixed inset-0 bg-black/50 flex items-center justify-center";

  let box = document.createElement("div");
  box.className = "bg-white p-6 rounded-lg shadow-lg text-center w-[300px]";

  let text = document.createElement("p");
  text.innerText = "Are you sure you want to delete?";
  text.className = "mb-4 text-lg font-semibold font-[Baloo]";

  let btnBox = document.createElement("div");
  btnBox.className = "flex justify-center gap-4";

  let yesBtn = document.createElement("button");
  yesBtn.innerText = "Yes";
  yesBtn.className = "bg-green-500 text-white px-4 py-2 rounded font-[Baloo]";

  let noBtn = document.createElement("button");
  noBtn.innerText = "No";
  noBtn.className = "bg-gray-400 text-white px-4 py-2 rounded font-[Baloo]";

  btnBox.appendChild(yesBtn);
  btnBox.appendChild(noBtn);

  box.appendChild(text);
  box.appendChild(btnBox);
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  noBtn.onclick = function () {
    overlay.remove();
    deleteIndex = null;
  };

  yesBtn.onclick = function () {
    todos.splice(deleteIndex, 1);
    saveTodos();
    displayTasks();
    overlay.remove();
    deleteIndex = null;
  };
}

    del.onclick = function () {
  deleteIndex = index;

  showConfirmBox();

    saveTodos();

    // filterTasks();

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

  

  todos.unshift({

    text: task,
    completed: false

  });

  saveTodos();

  displayTasks();


  input.value = "";

}
filterSelect.addEventListener("change", displayTasks);


function displayTasks() {

  document.getElementById("taskList").innerHTML = "";

  let filterValue = filterSelect.value;

  todos.forEach((todo, index) => {

    // ALL
    if (filterValue === "all") {

      createTaskElement(todo.text, todo.completed, index);

    }

    // COMPLETED
    else if (filterValue === "complete" && todo.completed) {

      createTaskElement(todo.text, todo.completed, index);

    }

    // INCOMPLETE
    else if (filterValue === "incomplete" && !todo.completed) {

      createTaskElement(todo.text, todo.completed, index);

    }

  });

}

displayTasks();

document.getElementById("taskInput")
.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    addTask();

  }

});