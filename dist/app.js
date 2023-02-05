// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
  { name: "Wyrzucić śmieci", done: false, category: "hobby" },
  { name: "Pójść na siłownię", done: true, category: "gym" },
  { name: "Nakarmić koty", done: false, category: "work" },
];
const render = () => {
  tasksContainerEl.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskElement = document.createElement("li");
    if (task.category) {
      taskElement.classList.add(task.category);
    }
    const id = `task-${index}`;
    const labelElement = document.createElement("label");
    labelElement.innerText = task.name;
    labelElement.setAttribute("for", id);
    const checkboxElement = document.createElement("input");
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
const addTask = (task) => {
  tasks.push(task);
};
addBtnEl.addEventListener("click", (event) => {
  event.preventDefault();
  addTask({ name: taskNameInputEl.value, done: false });
  render();
});
render();
