// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const tasks = [
    { title: "Wyrzucić śmieci", done: false },
    { title: "Pójść na siłownię", done: true },
    { title: "Nakarmić koty", done: false },
];
const render = () => {
    tasksContainerEl.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerText = task.title;
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
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
const addTask = (task) => {
    tasks.push(task);
};
addBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({ title: taskNameInputEl.value, done: false });
    render();
});
render();
