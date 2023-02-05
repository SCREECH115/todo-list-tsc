// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>

// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów

const taskNameInputEl: HTMLInputElement = document.querySelector("#name");
const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const addBtnEl: HTMLButtonElement = document.querySelector("button");

const tasks: string[] = [
  "Wyrzucić śmieci",
  "Pójść na siłownię",
  "Nakarmić koty",
];

const render = () => {
  tasksContainerEl.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement: HTMLElement = document.createElement("li");
    taskElement.innerText = task;
    tasksContainerEl.appendChild(taskElement);
    console.log(task);
  });
};

const addTask = (task: string) => {
  tasks.push(task);
};

addBtnEl.addEventListener("click", (event: Event) => {
  event.preventDefault();
  tasks.push(taskNameInputEl.value);
  render();
});

render();
