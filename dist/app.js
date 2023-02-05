// <li>
// <label for="task-1">Wyrzucić śmieci</label>
// <input type="checkbox" id="task-1" name="Wyrzucić śmieci" />
// </li>
// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const tasks = [
    "Wyrzucić śmieci",
    "Pójść na siłownię",
    "Nakarmić koty",
];
const render = () => {
    tasksContainerEl.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        tasksContainerEl.appendChild(taskElement);
        console.log(task);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    tasks.push(taskNameInputEl.value);
    render();
});
render();
