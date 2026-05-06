// let currentFilter = "ALL";

// function toggleDropdown() {
//   let menu = document.getElementById("dropdownMenu");
//   let arrow = document.getElementById("arrow");

//   menu.classList.toggle("hidden");
//   arrow.innerText = menu.classList.contains("hidden") ? "▼" : "▲";
// }

// function setFilter(filter) {
//   currentFilter = filter;

//   document.getElementById("selectedFilter").innerText = filter;
//   document.getElementById("dropdownMenu").classList.add("hidden");
//   document.getElementById("arrow").innerText = "arrow";

//   filterTasks();
// }

// function filterTasks() {
//   let tasks = document.querySelectorAll("#taskList li");

//   tasks.forEach(task => {
//     let text = task.querySelector("span");
//     let isCompleted = text.classList.contains("line-through");

//     if (currentFilter === "ALL") {
//       task.style.display = "flex";
//     } else if (currentFilter === "Completed" && isCompleted) {
//       task.style.display = "flex";
//     } else if (currentFilter === "Incomplete" && !isCompleted) {
//       task.style.display = "flex";
//     } else {
//       task.style.display = "none";
//     }
//   });
// }


function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Enter task first!");
    return;
  }
  

  let li = document.createElement("li");
  li.className = "w-[735px]  flex rounded-[85px] bg-[#D9D9D980] border-[1px] border-[#FFFFFFB2] py-4 mb-4 ";



  let span = document.createElement("span");
  span.className = "ml-10 font-[Baloo Tammudu 2] w-full  text-[40px] leading-[100%] font-normal text-[#FFFFFF]";
  span.innerText = task;


//  let editbtn = document.createElement("img");
//   editbtn.src = "images/circle.png";
//   editbtn.className = "w-[55px] h-[55px] justify-center cursor-pointer"

//   editbtn.addEventListener("click" , function() {
//     let editText = prompt();

//     if (editText === "") {
//     alert("Enter task first!");
//     return;
//   }

//     li.innerText = editText;

//     li.appendChild(editbtn)
//   li.appendChild(del);
//   })

const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = "appearance-none h-[45px] w-[55px] border-4 border-white rounded-full checked:bg-white checked:before:content-['\u2713'] flex items-center justify-center transition duration-200 cursor-pointer";

        checkbox.onclick = () => li.classList.toggle('completed');[]

 let del = document.createElement("img");
  del.src = "images/delete box.png";
  del.className = "w-[55px]  ml-[19px] mr-[35px] cursor-pointer";
  

  
  del.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(checkbox)
  li.appendChild(del);
  
  document.getElementById("taskList").appendChild(li);

  input.value = "";

  //  filterTasks();
}




// const text = document.getElementById("text");
// const addTaskButton = document.getElementById("add-task-btn");
// const saveTaskButton = document.getElementById("save-todo-btn");
// const listBox = document.getElementById("listBox");
// const saveInd = document.getElementById("saveIndex");

// let todoArray = [];

// addTaskButton.addEventListener("click", (e) => {
//  e.preventDefault();
//  let todo = localStorage.getItem("todo");
//  if (todo === null) {
//    todoArray = [];
//  } else {
//    todoArray = JSON.parse(todo);
//  }
//  todoArray.push(text.value);
//  text.value = "";
//  localStorage.setItem("todo", JSON.stringify(todoArray));
//  displayTodo();
// });

// function displayTodo() {
//  let todo = localStorage.getItem("todo");
//  if (todo === null) {
//    todoArray = [];
//  } else {
//    todoArray = JSON.parse(todo);
//  }
//  let htmlCode = "";
//  todoArray.forEach((list, ind) => {
//    htmlCode += `<div class='flex w-[735px] h-[78px] text-center flex rounded-[85px] bg-[#D9D9D980] border-[1px] border-[#FFFFFFB2] py-4 mb-4'>
//    <p class='w-full font-[Baloo Tammudu 2]   text-[40px] leading-[100%] font-normal text-[#FFFFFF] '>${list}</p>
//    <button onclick='edit(${ind})' class='items-center'> <img src = "images/circle.png"></button>
//    <button onclick='deleteTodo(${ind})' class='items-center'> <img src = "images/delete box.png"> </button>
// </div>`;
//  });
//  listBox.innerHTML = htmlCode;
// }

// function deleteTodo(ind) {
//  let todo = localStorage.getItem("todo");
//  todoArray = JSON.parse(todo);
//  todoArray.splice(ind, 1);
//  localStorage.setItem("todo", JSON.stringify(todoArray));
//  displayTodo();
// }

// function edit(ind) {
//  saveInd.value = ind;
//  let todo = localStorage.getItem("todo");
//  todoArray = JSON.parse(todo);
//  text.value = todoArray[ind];
//  addTaskButton.style.display = "none";
//  saveTaskButton.style.display = "block";
// }

// saveTaskButton.addEventListener("click", () => {
//  let todo = localStorage.getItem("todo");
//  todoArray = JSON.parse(todo);
//  let id = saveInd.value;
//  todoArray[id] = text.value;
//  addTaskButton.style.display = "block";
//  saveTaskButton.style.display = "none";
//  text.value = "";
//  localStorage.setItem("todo", JSON.stringify(todoArray));
//  displayTodo();
// });







