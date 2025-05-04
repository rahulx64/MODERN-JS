document.querySelectorAll(".task-container").forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    container.appendChild(dragging);
  });
});

function addTask(columnId) {
  const taskText = prompt("Enter task");
  if (!taskText) return;

  const task = document.createElement("div");
  task.className = "task";
  task.textContent = taskText;
  task.setAttribute("draggable", true);

  task.addEventListener("dragstart", () => {
    task.classList.add("dragging");
  });

  task.addEventListener("dragend", () => {
    task.classList.remove("dragging");
  });

  document.getElementById(columnId).appendChild(task);
}
