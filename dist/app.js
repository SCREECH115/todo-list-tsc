// Wyrzucić śmieci
// Pójscie na siłownie
// Nakarmienie kotów
const taskNameInputEl = document.querySelector("#name");
const tasksContainerEl = document.querySelector(".tasks");
const addBtnEl = document.querySelector("button");
const categoriesContainerEl = document.querySelector(".categories");
const categories = ["general", "work", "gym", "hobby"];
const tasks = [
    { name: "Wyrzucić śmieci", done: false },
    { name: "Pójść na siłownię", done: true, category: "gym" },
    { name: "Nakarmić koty", done: false },
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
        taskElement.appendChild(checkboxElement);
        taskElement.appendChild(labelElement);
        tasksContainerEl.appendChild(taskElement);
    });
};
const renderCategories = () => {
    // <li>
    // <input
    //   type="radio"
    //   name="category"
    //   value="general"
    //   id="category-general"
    // />
    // <label for="category-general">General</label>
    // </li>
    categories.forEach((category) => {
        const categoryEl = document.createElement("li");
        const radioInputEl = document.createElement("input");
        categoriesContainerEl.appendChild(categoryEl);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addBtnEl.addEventListener("click", (event) => {
    const selectedRadioEl = document.querySelector("input[type='radio']:checked");
    const selectedCategory = selectedRadioEl.value;
    event.preventDefault();
    addTask({
        name: taskNameInputEl.value,
        done: false,
        category: selectedCategory,
    });
    render();
});
addTask({
    name: "Zrobic kawę",
    category: "general",
    done: false,
});
render();
