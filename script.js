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

//list and it functionality

function createTaskElement(task, completed, index) {

  let li = document.createElement("li");

  li.className = "w-[700px]  flex rounded-[85px] bg-[#D9D9D980] border border-[#FFFFFFB2] py-4 mb-4";

  let span = document.createElement("span");

  span.className = "ml-10 font-[Baloo] w-full flex items-center text-[40px] leading-[100%] font-normal text-white";

  span.innerText = task;

  //checkbox and use fuctionality

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

  //edit button and use function

  let edit = document.createElement("img");

edit.src = "images/edit.png";

edit.className = "w-[45px] h-[45px] ml-[5px] cursor-pointer";

edit.onclick = function () {

  // HIDE BUTTONS
  checkbox.style.display = "none";
  edit.style.display = "none";
  del.style.display = "none";

  // INPUT FIELD
  let editInput = document.createElement("input");

  editInput.type = "text";

  editInput.value = span.innerText;

  editInput.className = "ml-5 w-full bg-transparent outline-none text-white text-[40px] font-[Baloo]";

  // SAVE BUTTON
  let saveBtn = document.createElement("button");

  saveBtn.innerText = "Edit Save";

  saveBtn.className =
  "text-white border-[1px] p-2 text-[20px] whitespace-nowrap mx-2 font-[Baloo]";

  let cancelBtn = document.createElement("button");

let cancelImg = document.createElement("img");
cancelImg.src = "images/cancel.png";
cancelImg.alt = "Cancel";
cancelImg.className = " w-[90px]  cursor-pointer";

cancelBtn.appendChild(cancelImg);
cancelBtn.className = "mr-5";

  // REPLACE TEXT WITH INPUT
  li.replaceChild(editInput, span);

  // ADD BUTTONS
  li.appendChild(saveBtn);

  li.appendChild(cancelBtn);

  editInput.focus();

  // SAVE FUNCTION
  saveBtn.onclick = function () {

    let updatedText = editInput.value.trim();

    if (updatedText === "") {

      alert("Task cannot be empty!");

      return;

    }

    // UPDATE ARRAY
    todos[index].text = updatedText;

    saveTodos();

    // UPDATE TEXT
    span.innerText = updatedText;

    // REMOVE EDIT MODE
    li.replaceChild(span, editInput);

    saveBtn.remove();

    cancelBtn.remove();

    // SHOW BUTTONS AGAIN
    checkbox.style.display = "block";
    checkbox.style.display = "flex";
    checkbox.style.justifyContent = "center";
    checkbox.style.alignItems = "center";
    edit.style.display = "block";
    del.style.display = "block";

  };

  // CANCEL FUNCTION
  cancelBtn.onclick = function () {

    li.replaceChild(span, editInput);

    saveBtn.remove();

    cancelBtn.remove();

    // SHOW AGAIN
    checkbox.style.display = "block";
    checkbox.style.display = "flex";
    checkbox.style.justifyContent = "center";
    checkbox.style.alignItems = "center";
    edit.style.display = "block";
    del.style.display = "block";

  };

};

// edit.onclick = function () {

//   let editInput = document.createElement("input");

//   editInput.type = "text";

//   editInput.value = span.innerText;

//   editInput.className = "ml-10 font-[Baloo] w-full text-[40px] bg-transparent outline-none text-white";

//   li.replaceChild(editInput, span);

//   editInput.focus();

//   function saveEdit() {

//     let updatedText = editInput.value.trim();

//     if (updatedText === "") {

//       alert("Task cannot be empty!");

//       return;

//     }

//     todos[index].text = updatedText;

//     saveTodos();

//     span.innerText = updatedText;

//     li.replaceChild(span, editInput);

//   }

//   editInput.addEventListener("keypress", function (e) {

//     if (e.key === "Enter") {

//       saveEdit();

//     }

//   });

//   editInput.addEventListener("blur", saveEdit);

// };


//Delete button and use function

  let del = document.createElement("img");

  del.src = "images/delete box.png";

  del.className = "w-[55px] h-[42px] flex items-center  ml-[5px] mr-[35px] cursor-pointer";

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


    displayTasks();
};

//excute proprties

  li.appendChild(span);

  li.appendChild(checkbox);

   li.appendChild(edit);

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

//all box function and properties

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

//add enter functionality

document.getElementById("taskInput")
.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    addTask();

  }

});