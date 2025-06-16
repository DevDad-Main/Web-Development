const todoInput = document.getElementById("todo-input");
const addTaskButton = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

//NOTE: An array to store our tasks
let tasks = [];

addTaskButton.addEventListener("click", () => {
  const taskText = todoInput.value.trim();
  //NOTE: Null check for empty string
  if (taskText === "") return;

  const newTask = {
    //NOTE: This actually returns a unique string
    //NOTE: Then as time passes no two will be the same
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  //NOTE: Adding the new Todo object to our array
  tasks.push(newTask);
  //NOTE: Then we clear the input so its empty ready for the next task
  todoInput.value = "";

  console.log(tasks);
});
