// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów

const taskNameInputEl: HTMLInputElement = document.querySelector("#name");
const tasksContainerEl: HTMLElement = document.querySelector(".tasks");
const addBtnEl: HTMLButtonElement = document.querySelector("button");

interface Task {
  title: string;
  done: boolean;
}

const tasks: {
  title: string;
  done: boolean;
}[] = [
  { title: "Wyrzucić śmieci", done: false },
  { title: "Pójść na siłownię", done: true },
  { title: "Nakarmić koty", done: false },
];

const render = () => {
  tasksContainerEl.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement: HTMLElement = document.createElement("li");
    const id: string = `task-${index}`;

    const labelElement: HTMLElement = document.createElement("label");
    labelElement.innerText = task.title;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.title;
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

const addTask = (task: { title: string; done: boolean }) => {
  tasks.push(task);
};

addBtnEl.addEventListener("click", (event: Event) => {
  event.preventDefault();
  addTask({ title: taskNameInputEl.value, done: false });
  render();
});

render();
