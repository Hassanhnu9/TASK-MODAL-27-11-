document.addEventListener("DOMContentLoaded", function () {
  // Load tasks from local storage on page load
  loadTasks();
});

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
      // Create a new task item
      const taskItem = document.createElement("li");
      taskItem.innerText = taskInput.value;

      // Add delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.onclick = function () {
          taskItem.remove();
          saveTasks();
      };

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      // Clear input field
      taskInput.value = "";

      // Save tasks to local storage
      saveTasks();
  }
}

function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = [];

  // Iterate through each task and save it to the array
  taskList.childNodes.forEach(function (taskItem) {
      tasks.push(taskItem.innerText);
  });

  // Save tasks array to local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
      const tasks = JSON.parse(savedTasks);

      // Create task items from saved tasks
      tasks.forEach(function (taskText) {
          const taskItem = document.createElement("li");
          taskItem.innerText = taskText;

          // Add delete button
          const deleteButton = document.createElement("button");
          deleteButton.innerText = "Delete";
          deleteButton.onclick = function () {
              taskItem.remove();
              saveTasks();
          };

          taskItem.appendChild(deleteButton);
          taskList.appendChild(taskItem);
      });
  }
}
