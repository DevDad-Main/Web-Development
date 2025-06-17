//NOTE: Wrapping all of our code in this on event listener as
//NOTE: if we have an issue where the server fails to load or any other isntance
//NOTE: Then our below code wont work as DOM can't load, so we wait for the dom to load
//NOTE: Before proceeding onto loading all the rest of our logic
document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  //NOTE: An array to store our tasks
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

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
    //NOTE: as soon as we add it to our array, then we can save it to our local storage
    saveTasks();

    renderTasks(newTask);

    //NOTE: Then we clear the input so its empty ready for the next task
    todoInput.value = "";

    console.log(tasks);
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>`;

    //NOTE: We can add multiple on event listeners, the first one we are avoiding the button to handle other logic
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;

      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    //NOTE: Then on this evetn we will target the button
    li.querySelector("button").addEventListener("click", (e) => {
      //NOTE: Event propogation known as bubbling effect, where it will trickle up the parent tree
      //NOTE: When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
      //NOTE: Potentially might trickle up to our other event above and we don't want that
      e.stopPropagation();

      //NOTE: Filters our array and only returns tasks back that dont equal to the one we clicked.
      //NOTE: Essentially removing it from our array
      tasks = tasks.filter((t) => {
        t.id !== task.id;
        //NOTE: Removes the node -> Essentially removing it from our todo list
        li.remove();
        saveTasks();
      });
    });

    todoList.appendChild(li);
  }

  //NOTE: adding tasks to local storage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
