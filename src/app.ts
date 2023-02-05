// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów

const taskNameInputEl: HTMLInputElement = document.querySelector("#name");
const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const addBtnEl: HTMLButtonElement = document.querySelector("button");

interface Task {
  name: string;
  done: boolean;
  category?: string;
}

const categories: string[] = ["General", "Work", "Gym", "Hobby"];

const tasks: Task[] = [
  { name: "Wyrzucić śmieci", done: false },
  { name: "Pójść na siłownię", done: true, category: "Gym" },
  { name: "Nakarmić koty", done: false },
];

const render = () => {
  tasksContainerEl.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id: string = `task-${index}`;

    const labelElement: HTMLElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.name;
    checkboxElement.id = id;
    checkboxElement.checked = task.done;
    checkboxElement.addEventListener("change", () => {
      task.done = !task.done;
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);

    tasksContainerEl.appendChild(taskElement);
  });
};

const addTask = (task: Task) => {
  tasks.push(task);
};

addBtnEl.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ name: taskNameInputEl.value, done: false });
  render();
});

render();
