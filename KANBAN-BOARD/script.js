// const todoInput = document.getElementById("todo-input");
// const addBtn = document.getElementById("add-btn");
// const todoList = document.getElementById("todo-list");
// const filterBtns = document.querySelectorAll("[data-filter]");

// let todos = JSON.parse(localStorage.getItem("todos")) || [];
// let filter = "all";

// function saveTodos() {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function renderTodos() {
//   todoList.innerHTML = "";

//   const filtered = todos.filter((todo) => {
//     if (filter === "completed") return todo.completed;
//     if (filter === "pending") return !todo.completed;
//     return true;
//   });

//   filtered.forEach((todo, index) => {
//     const li = document.createElement("li");
//     li.className = todo.completed ? "completed" : "";
//     li.innerHTML = `
//       <span onclick="toggleComplete(${index})">${todo.text}</span>
//       <div class="actions">
//         <button onclick="editTodo(${index})">Edit</button>
//         <button onclick="deleteTodo(${index})">Delete</button>
//       </div>
//     `;
//     todoList.appendChild(li);
//   });
// }

// function addTodo() {
//   const text = todoInput.value.trim();
//   if (text) {
//     todos.push({ text, completed: false });
//     todoInput.value = "";
//     saveTodos();
//     renderTodos();
//   }
// }

// function editTodo(index) {
//   const newText = prompt("Edit todo:", todos[index].text);
//   if (newText !== null) {
//     todos[index].text = newText.trim();
//     saveTodos();
//     renderTodos();
//   }
// }

// function deleteTodo(index) {
//   todos.splice(index, 1);
//   saveTodos();
//   renderTodos();
// }

// function toggleComplete(index) {
//   todos[index].completed = !todos[index].completed;
//   saveTodos();
//   renderTodos();
// }

// filterBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     filter = btn.dataset.filter;
//     renderTodos();
//   });
// });

// addBtn.addEventListener("click", addTodo);
// todoInput.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") addTodo();
// });

// renderTodos();


