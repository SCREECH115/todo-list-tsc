import { Task } from "../types/types";

const render = (tasks: Task[], tasksContainerEl: HTMLElement) => {
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

    taskElement.appendChild(checkboxElement);
    taskElement.appendChild(labelElement);

    tasksContainerEl.appendChild(taskElement);
  });
};

export default render;
